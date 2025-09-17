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
    const target = 5.2; // larger target for a bigger presence
    const scale = target / maxSize;
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
      position={[offset.x * scale, offset.y * scale - 0.4, offset.z * scale]}
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
        position={[0, -0.6, 0]}
        scale={14}
        blur={3}
        opacity={0.7}
        far={14}
        color="#000000"
      />
    );
  }
  return (
    <div className="relative w-full h-[440px] md:h-[520px] overflow-hidden md:overflow-visible touch-pan-y">
      {/* Subtle circular smoke background behind the car */}
      <div
        aria-hidden
        className="smoke-ring smoke-ring--xl smoke-animate-strong pointer-events-none absolute -z-10"
      />
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
      {/* Caption overlay */}
      <div className="absolute inset-x-0 bottom-2 md:bottom-4 flex justify-center pointer-events-none z-10">
        <div className="px-3 py-1 md:px-4 md:py-2">
          <span className="gradient-text text-base md:text-lg lg:text-xl font-bold tracking-tight">
            that's my favorite car ferrari 458 italia
          </span>
        </div>
      </div>
    </div>
  );
}
