import { useRef, useMemo, useEffect, useState, memo, Suspense } from "react";
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

// Planet assets to replace procedural Saturns
const PLANET_ASSETS = [
  { path: "/mercury.glb", baseScale: 0.25 },
  { path: "/kepler-452b.glb", baseScale: 0.03 },
  { path: "/alien_planet.glb", baseScale: 4.6 },
  { path: "/green_star.glb", baseScale: 0.25 },
  { path: "/planet_on_the_move.glb", baseScale: 0.25 },
  { path: "/horizon_world.glb", baseScale: 0.05 },
];

PLANET_ASSETS.forEach((a) => useGLTF.preload(a.path));

interface PlanetModelProps {
  asset: { path: string; baseScale: number };
  index: number;
  isDark: boolean;
  lowPower: boolean;
  position: [number, number, number];
}

const PlanetModel = memo(function PlanetModel({
  asset,
  index,
  isDark,
  lowPower,
  position,
}: PlanetModelProps) {
  const { scene } = useGLTF(asset.path) as any;
  const ref = useRef<THREE.Group>(null!);

  // Clone to avoid mutating original scene graph
  const cloned = useMemo(() => scene.clone(true), [scene]);

  // Adjust materials (slightly emissive in dark mode)
  useEffect(() => {
    cloned.traverse((child: any) => {
      if (child.isMesh && child.material) {
        const mat = child.material;
        // Preserve texture maps
        if (mat.map) {
          // Use new colorSpace API (r152+)
          if (mat.map.colorSpace !== THREE.SRGBColorSpace) {
            mat.map.colorSpace = THREE.SRGBColorSpace;
            mat.map.needsUpdate = true;
          }
        }
        if (mat.emissive && !mat.emissiveIntensity) mat.emissiveIntensity = 1;
        mat.transparent = false;
        mat.opacity = 1;
        mat.depthWrite = true;
        mat.side = THREE.FrontSide;
        // Normalize PBR params if available
        if (mat.isMeshStandardMaterial || mat.isMeshPhysicalMaterial) {
          if (typeof mat.metalness === "number")
            mat.metalness = Math.min(0.4, mat.metalness);
          if (typeof mat.roughness === "number")
            mat.roughness = Math.max(0.4, mat.roughness);
          if (isDark) {
            if (mat.emissive) {
              mat.emissive = (mat.emissive as THREE.Color)
                .clone()
                .multiplyScalar(0.25);
              mat.emissiveIntensity = 0.9;
            }
          } else {
            if (mat.emissive) mat.emissiveIntensity = 0.3;
          }
        }
        mat.needsUpdate = true;
      }
    });
  }, [cloned, isDark]);

  useFrame((state) => {
    if (lowPower) return;
    const t = state.clock.elapsedTime;
    if (ref.current) {
      ref.current.rotation.y += 0.0006 + index * 0.00005;
      // Subtle bobbing
      ref.current.position.y = position[1] + Math.sin(t * 0.4 + index) * 0.4;
    }
  });

  return (
    <group ref={ref} position={position} scale={asset.baseScale}>
      <primitive object={cloned} />
    </group>
  );
});

const PlanetField = memo(function PlanetField({
  isDark,
  lowPower,
}: {
  isDark: boolean;
  lowPower: boolean;
}) {
  const group = useRef<THREE.Group>(null!);
  const layout = useMemo(() => {
    const golden = Math.PI * (3 - Math.sqrt(5));
    return PLANET_ASSETS.map((a, i) => {
      const radius = 40 + i * 10 + Math.random() * 16;
      const angle = i * golden + Math.random() * 0.5;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = (Math.random() - 0.5) * 12; // larger vertical variance in far field
      return {
        asset: { ...a, baseScale: a.baseScale * 0.85 },
        position: [x, y, z] as [number, number, number],
      };
    });
  }, [isDark]); // (theme could influence future layout decisions)

  useFrame(() => {
    if (lowPower) return;
    if (group.current) group.current.rotation.y += 0.001; // slow global spin
  });

  return (
    <group ref={group}>
      {layout.map((p, idx) => (
        <PlanetModel
          key={p.asset.path}
          asset={p.asset}
          index={idx}
          isDark={isDark}
          lowPower={lowPower}
          position={p.position}
        />
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
            : THREE.ACESFilmicToneMapping,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        onCreated={({ gl, scene }) => {
          if (isDark) gl.setClearColor(0x000000, 0);
          else gl.setClearColor(0xffffff, 1);
          (gl as any).toneMappingExposure = isDark ? 1.2 : 1.05;
        }}
        dpr={1} //{lowPower ? [0.5, 0.75] : [1, 2]}
        frameloop={lowPower ? "demand" : "always"}
      >
        <ambientLight intensity={isDark ? 0.35 : 0.22} />
        <hemisphereLight args={[0xffffff, 0x222233, isDark ? 0.9 : 0.6]} />
        <pointLight
          position={[14, 16, 18]}
          intensity={isDark ? 1.2 : 0.9}
          color={isDark ? "#5EA8FF" : "#6a4bff"}
          distance={180}
          decay={1.3}
        />
        <pointLight
          position={[-18, -14, -16]}
          intensity={isDark ? 0.9 : 0.7}
          color={isDark ? "#B497FF" : "#6a4bff"}
          distance={160}
          decay={1.2}
        />
        <directionalLight
          position={[-30, 25, 15]}
          intensity={isDark ? 0.8 : 0.55}
          color={isDark ? "#ffffff" : "#ffffff"}
        />
        <ParticleField
          blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
          lightness={isDark ? 0.62 : 0.28}
          saturation={isDark ? 0.75 : 0.7}
        />
        <Suspense fallback={null}>
          <PlanetField isDark={isDark} lowPower={lowPower} />
        </Suspense>
      </Canvas>
    </div>
  );
}
