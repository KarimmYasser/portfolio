import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useSceneSettings } from "@/scene/SceneSettingsContext";

function CarModel({ lowPower }: { lowPower: boolean }) {
  const { scene } = useGLTF("/asphalt_8_airborne__car_ferrari_458_italia.glb");
  const group = useRef<THREE.Group>(null!);

  const { scale, offset } = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);
    const maxSize = Math.max(size.x, size.y, size.z) || 1;
    const target = 4.2; // base target size for presence
    const SIZE_MULTIPLIER = 0.85; // tweak this to make the car smaller or larger
    const scale = (target / maxSize) * SIZE_MULTIPLIER;
    return { scale, offset: center.clone().multiplyScalar(-1) };
  }, [scene]);

  // Recolor car materials and enable mesh shadows (skip obvious non-body parts)
  useEffect(() => {
    const desired = new THREE.Color("#9D66FF");
    const skip = /glass|tire|tyre|wheel|rim|light|window|headlight|tail/i;
    scene.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if ((mesh as any).isMesh && mesh.material) {
        // allow the model to interact with lights/shadows
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        const mats = Array.isArray(mesh.material)
          ? mesh.material
          : [mesh.material];
        mats.forEach((mat: any) => {
          if (!mat) return;
          const name: string = (mat.name || "").toString();
          if (skip.test(name)) return;
          if (mat.color && typeof mat.color.set === "function") {
            mat.color.set(desired);
            mat.needsUpdate = true;
          }
        });
      }
    });
  }, [scene]);

  useFrame(() => {
    if (!group.current) return;
    // Gentle manual rotation without user interaction
    if (!lowPower) group.current.rotation.y += 0.002;
  });

  return (
    <group
      ref={group}
      position={[offset.x * scale, offset.y * scale + 0.75, offset.z * scale]}
      scale={scale}
    >
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/asphalt_8_airborne__car_ferrari_458_italia.glb");

export default function CarShowcase() {
  const { lowPower } = useSceneSettings();
  // Read theme HSL variables and build THREE colors once
  const [shadowA, shadowB] = useMemo(() => {
    const getVar = (name: string, fallback: string) => {
      if (typeof window === "undefined") return fallback;
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue(name)
        .trim();
      return v || fallback;
    };
    const hslA = getVar("--cyber-blue", "203 100% 65%");
    const hslB = getVar("--cyber-purple", "269 89% 65%");
    const toThreeHSL = (hslStr: string) => {
      // expects e.g. "203 100% 65%"
      const [h, s, l] = hslStr
        .split(/\s+/)
        .map((p, i) => (i === 0 ? parseFloat(p) : parseFloat(p)));
      const c = new THREE.Color();
      c.setHSL((h || 0) / 360, (s || 0) / 100, (l || 0) / 100);
      return c;
    };
    return [toThreeHSL(hslA), toThreeHSL(hslB)];
  }, []);

  // Wrapper rendered inside Canvas to animate the contact shadow color safely
  function AnimatedContactShadows({
    colorA,
    colorB,
    pause,
  }: {
    colorA: THREE.Color;
    colorB: THREE.Color;
    pause?: boolean;
  }) {
    const ref = useRef<any>(null);
    useFrame((state) => {
      if (pause) return;
      if (!ref.current) return;
      const t = (Math.sin(state.clock.elapsedTime * 0.5) + 1) / 2; // slow ping-pong
      const mixed = colorA.clone().lerp(colorB, t);
      const targetMat =
        ref.current.material || ref.current.children?.[0]?.material || null;
      if (
        targetMat &&
        targetMat.color &&
        typeof targetMat.color.set === "function"
      ) {
        targetMat.color.set(mixed);
      } else if (
        ref.current.color &&
        typeof ref.current.color.set === "function"
      ) {
        ref.current.color.set(mixed);
      }
    });
    return (
      <ContactShadows
        ref={ref}
        position={[0, 0, 0]}
        scale={14}
        blur={3}
        opacity={0.7}
        far={10}
        color="#000000"
      />
    );
  }
  return (
    <div
      className="relative min-h-screen h-[440px] md:h-[520px] w-full overflow-visible touch-pan-y"
      style={{ top: "15rem", position: "relative" }}
    >
      {/* Subtle circular smoke background behind the car */}
      <div
        aria-hidden
        className="smoke-ring smoke-ring--xl smoke-ring--center smoke-animate-strong overflow-visible pointer-events-none absolute -z-10"
        style={{
          ["--smoke-center-x" as any]: "0%",
          // Align with canvas center, then nudge slightly down
          ["--smoke-center-y" as any]: "0%",
          // Keep diameter tighter to reduce bottom overflow needs
          ["--smoke-size" as any]: "100%",
        }}
      />
      {/* Caption overlay */}
      <div className="absolute inset-x-0 top-10 md:top-10 flex justify-center overflow-visible pointer-events-none z-10">
        {/* HUD-style angled badge */}
        <div className="relative pointer-events-none overflow-visible">
          {/* angled background */}
          <div
            className="relative px-4 py-1.5 md:px-5 md:py-2"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--glass-background) / 0.85), hsl(var(--glass-background) / 0.65))",
              border: "1px solid hsl(var(--glass-border) / 0.7)",
              backdropFilter: "blur(8px)",
              clipPath:
                "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
            }}
          >
            {/* subtle scanlines */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-20"
              style={{
                background:
                  "repeating-linear-gradient(0deg, transparent 0 2px, hsl(0 0% 100% / 0.03) 2px 4px)",
                pointerEvents: "none",
              }}
            />
            {/* sheen */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient( to right, transparent, hsl(0 0% 100% / 0.08) 20%, transparent 40% )",
                transform: "skewX(-12deg)",
                pointerEvents: "none",
                animation: "sheen 3.6s ease-in-out infinite",
              }}
            />
            {/* text */}
            <div className="relative flex items-center gap-2">
              <span className="font-mono text-xs sm:text-sm md:text-base tracking-wide">
                <span className="font-semibold text-foreground">
                  that's my favorite car
                </span>
                <span className="font-semibold text-destructive ml-2">
                  Ferrari 458 Italia
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Canvas
        className="pointer-events-none touch-pan-y"
        camera={{ position: [0, 1.2, 6.5], fov: 50 }}
        shadows
        dpr={lowPower ? [0.5, 0.75] : [1, 2]}
      >
        <ambientLight intensity={0.25} />
        <hemisphereLight args={[0xffffff, 0x222233, 0.8]} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.8}
          color="#ffffff"
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-camera-near={1}
          shadow-camera-far={30}
          shadow-camera-left={-12}
          shadow-camera-right={12}
          shadow-camera-top={12}
          shadow-camera-bottom={-12}
        />
        <pointLight position={[6, 6, 6]} intensity={0.6} color="#ffffff" />
        <Suspense fallback={null}>
          <CarModel lowPower={lowPower} />
        </Suspense>
        <AnimatedContactShadows
          colorA={shadowA}
          colorB={shadowB}
          pause={lowPower}
        />
      </Canvas>
    </div>
  );
}
