import { useRef, useMemo, useEffect, useState, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useSceneSettings } from "@/scene/SceneSettingsContext";

type ParticleFieldProps = {
  size?: number;
  opacity?: number;
  hueStart?: number;
  hueRange?: number;
  saturation?: number;
  lightness?: number;
  blending?: THREE.Blending;
};

const ParticleField = memo(function ParticleField({
  size = 0.02,
  opacity = 1,
  hueStart = 0.55,
  hueRange = 0.28,
  saturation = 0.75,
  lightness = 0.62,
  blending = THREE.AdditiveBlending,
}: ParticleFieldProps) {
  const ref = useRef<THREE.Points>(null!);
  const [positions, colors] = useMemo(() => {
    const COUNT = 2000;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      const color = new THREE.Color();
      const hue = Math.random() * hueRange + hueStart;
      color.setHSL(hue, saturation, lightness);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return [positions, colors];
  }, []);

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
        sizeAttenuation
        depthWrite={false}
        opacity={opacity}
        blending={blending}
      />
    </Points>
  );
});

const FloatingSaturns = memo(function FloatingSaturns({
  isDark,
  lowPower,
}: {
  isDark: boolean;
  lowPower: boolean;
}) {
  const group = useRef<THREE.Group>(null!);
  // Precompute planet meta (position, colors) once for stable layout between renders
  const planets = useMemo(() => {
    // Tailwind-esque theme palette (dark variants slightly deeper)
    const lightPalette = [
      "#3B82F6", // blue-500
      "#6366F1", // indigo-500
      "#8B5CF6", // violet-500
      "#06B6D4", // cyan-500
      "#14B8A6", // teal-500
      "#A855F7", // purple-500
    ];
    const darkPalette = [
      "#2563EB", // blue-600
      "#4F46E5", // indigo-600
      "#6D28D9", // violet-700
      "#0891B2", // cyan-600
      "#0D9488", // teal-600
      "#7E22CE", // purple-700
    ];
    const base = (isDark ? darkPalette : lightPalette).slice(0, 9); // 9 planets
    // Spread them across expanding radii so they appear farther / less clustered in center
    // Use golden angle to avoid uniform ring
    const golden = Math.PI * (3 - Math.sqrt(5));
    return base.map((color, i) => {
      const radius = 13 + i * 1.6 + Math.random() * 0.8; // 13 -> ~27 range
      const angle = i * golden + Math.random() * 0.4; // slight randomness
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const yBase = (Math.random() - 0.5) * 2.2; // subtle vertical variance
      // Slight ring tint (lighter for light mode, more transparent for dark)
      const ringColor = new THREE.Color(color)
        .offsetHSL(0, 0, isDark ? -0.05 : 0.08)
        .getStyle();
      return { i, color, ringColor, radius, angle, x, yBase, z };
    });
  }, [isDark]);

  useFrame((state) => {
    if (lowPower) return; // pause animation in low power mode
    const t = state.clock.elapsedTime;
    if (group.current) {
      // Slow global rotation
      group.current.rotation.y += 0.0008;
      group.current.children.forEach((child: any, idx) => {
        const meta = planets[idx];
        if (!meta) return;
        // Individual subtle orbit wobble
        const wobble = Math.sin(t * 0.18 + idx) * 0.6;
        child.position.y = meta.yBase + wobble;
        // Each planet slowly spins its ring
        child.rotation.y += 0.0006 + idx * 0.00005;
      });
    }
  });
  return (
    <group ref={group}>
      {/* 9 themed Saturn-like planets */}
      {planets.map(({ i, x, z, yBase, color, ringColor }) => (
        <group key={i} position={[x, yBase, z]}>
          <mesh>
            <sphereGeometry args={[0.24, 28, 28]} />
            <meshBasicMaterial
              color={color}
              transparent
              opacity={isDark ? 0.42 : 0.3}
            />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.4, 0.05, 16, 60]} />
            <meshBasicMaterial
              color={ringColor}
              transparent
              opacity={isDark ? 0.28 : 0.18}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
});

useGLTF.preload("/asphalt_8_airborne__car_ferrari_458_italia.glb");

interface ThreeBackgroundProps {
  className?: string;
}

export default function ThreeBackground({ className }: ThreeBackgroundProps) {
  const { lowPower, showBackground } = useSceneSettings();
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const check = () => {
      try {
        setIsDark(document.documentElement.classList.contains("dark"));
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
    <div
      className={`fixed inset-0 -z-10 pointer-events-none ${className || ""}`}
    >
      <Canvas
        key={isDark ? "dark" : "light"}
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: isDark ? "transparent" : "#ffffff" }}
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          alpha: isDark,
          toneMapping: isDark
            ? THREE.ACESFilmicToneMapping
            : THREE.NoToneMapping,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        onCreated={({ gl }) => {
          if (isDark) gl.setClearColor(0x000000, 0);
          else gl.setClearColor(0xffffff, 1);
        }}
        dpr={lowPower ? [0.5, 0.75] : [1, 2]}
        frameloop={lowPower ? "demand" : "always"}
      >
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
          blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
          lightness={isDark ? 0.62 : 0.28}
          saturation={isDark ? 0.75 : 0.7}
        />
        <FloatingSaturns isDark={isDark} lowPower={lowPower} />
      </Canvas>
    </div>
  );
}
