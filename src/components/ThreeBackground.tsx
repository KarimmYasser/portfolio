import { useRef, useMemo, Suspense, useEffect, useState, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useSceneSettings } from "@/scene/SceneSettingsContext";

type ParticleFieldProps = {
  size?: number;
  opacity?: number; // 0..1
  hueStart?: number;
  hueRange?: number;
  saturation?: number;
  lightness?: number;
  blending?: THREE.Blending;
};

const ParticleField = memo(function ParticleField({
  size = 0.02,
  opacity = 1,
  hueStart = 0.5,
  hueRange = 0.3,
  saturation = 0.75,
  lightness = 0.62,
  blending = THREE.AdditiveBlending,
}: ParticleFieldProps) {
  const ref = useRef<THREE.Points>(null!);

  // Keep particle buffers stable across theme changes to avoid GC spikes
  const [positions, colors] = useMemo(() => {
    const COUNT = 2000; // fixed to avoid reallocation on theme switch
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      const color = new THREE.Color();
      const hue = Math.random() * hueRange + hueStart; // themed hue band
      color.setHSL(hue, saturation, lightness);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return [positions, colors];
  }, []);

  // Recolor in-place when theme palette changes to avoid reallocating buffers
  useEffect(() => {
    if (!ref.current) return;
    const geom: any = (ref.current as any).geometry;
    const colorAttr = geom?.attributes?.color as
      | THREE.BufferAttribute
      | undefined;
    if (!colorAttr) return;
    const arr = colorAttr.array as Float32Array;
    const color = new THREE.Color();
    for (let i = 0; i < arr.length; i += 3) {
      const hue = Math.random() * hueRange + hueStart;
      color.setHSL(hue, saturation, lightness);
      arr[i] = color.r;
      arr[i + 1] = color.g;
      arr[i + 2] = color.b;
    }
    colorAttr.needsUpdate = true;
  }, [hueStart, hueRange, saturation, lightness]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y += 0.002;
      ref.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <Points
      ref={ref}
      positions={positions}
      colors={colors}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        vertexColors
        size={size}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={opacity}
        blending={blending}
      />
    </Points>
  );
});

const FloatingOrbs = memo(function FloatingOrbs({
  isDark,
}: {
  isDark: boolean;
}) {
  const orbs = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (orbs.current) {
      orbs.current.rotation.y += 0.005;
      orbs.current.children.forEach((child, i) => {
        const offset = i * 0.5;
        child.position.y = Math.sin(state.clock.elapsedTime * 0.5 + offset) * 2;
        child.rotation.x = state.clock.elapsedTime * 0.3 + offset;
        child.rotation.z = state.clock.elapsedTime * 0.2 + offset;
      });
    }
  });

  return (
    <group ref={orbs}>
      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          position={[Math.cos(i * 1.26) * 8, 0, Math.sin(i * 1.26) * 8]}
        >
          <octahedronGeometry args={[0.3]} />
          <meshBasicMaterial
            color={
              i % 2 === 0
                ? isDark
                  ? "#3B82F6" // blue-500
                  : "#60A5FA" // blue-400 (lighter on light bg)
                : isDark
                ? "#8B5CF6" // purple-500
                : "#A78BFA" // purple-400
            }
            transparent
            opacity={isDark ? 0.4 : 0.25}
            wireframe
          />
        </mesh>
      ))}
    </group>
  );
});

// Preload the model to improve first render
useGLTF.preload("/asphalt_8_airborne__car_ferrari_458_italia.glb");

interface ThreeBackgroundProps {
  className?: string;
}

export default function ThreeBackground({ className }: ThreeBackgroundProps) {
  const { lowPower, showBackground } = useSceneSettings();

  // Track theme (light vs dark) using document class and themechange event
  const [isDark, setIsDark] = useState<boolean>(false);
  useEffect(() => {
    const check = () => {
      try {
        setIsDark(
          typeof document !== "undefined" &&
            document.documentElement.classList.contains("dark")
        );
      } catch {}
    };
    check();
    const onThemeChange = (e: Event) => {
      const detail = (e as CustomEvent).detail as
        | { theme?: "dark" | "light" }
        | undefined;
      if (detail?.theme) setIsDark(detail.theme === "dark");
      else check();
    };
    window.addEventListener("themechange", onThemeChange as EventListener);
    return () =>
      window.removeEventListener("themechange", onThemeChange as EventListener);
  }, []);

  if (!showBackground) return null;
  return (
    <div className={`fixed inset-0 -z-10 pointer-events-none ${className}`}>
      <Canvas
        key={isDark ? "dark" : "light"}
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: isDark ? "transparent" : "#ffffff" }}
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          // In light mode, make the canvas opaque so the background is solid white.
          alpha: isDark,
          toneMapping: isDark
            ? THREE.ACESFilmicToneMapping
            : THREE.NoToneMapping,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        onCreated={({ gl }) => {
          // Ensure the clear color matches the style background for light mode
          if (isDark) {
            gl.setClearColor(0x000000, 0); // transparent
          } else {
            gl.setClearColor(0xffffff, 1); // solid white
          }
        }}
        dpr={lowPower ? [0.5, 0.75] : [1, 2]}
        frameloop={lowPower ? "demand" : "always"}
      >
        {/* Lights for better model visibility */}
        <ambientLight intensity={isDark ? 0.1 : 0.05} />
        <hemisphereLight args={[0xffffff, 0x444444, isDark ? 0.6 : 0.4]} />
        <pointLight
          position={[10, 10, 10]}
          intensity={isDark ? 0.3 : 0.2}
          color={isDark ? "#3B82F6" : "#3a2675"}
        />
        <pointLight
          position={[-10, -10, -10]}
          intensity={isDark ? 0.3 : 0.2}
          color={isDark ? "#8B5CF6" : "#3a2675"}
        />
        <ParticleField
          size={isDark ? 0.02 : 0.02}
          opacity={isDark ? 0.9 : 0.9}
          hueStart={0.55}
          hueRange={0.28}
          saturation={isDark ? 0.75 : 0.7}
          lightness={isDark ? 0.62 : 0.28}
          blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
        />
        <FloatingOrbs isDark={isDark} />
        {/* Model moved to Hero CarShowcase */}
      </Canvas>
    </div>
  );
}
