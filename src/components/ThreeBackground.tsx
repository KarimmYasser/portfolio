import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    const colors = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      const color = new THREE.Color();
      const hue = Math.random() * 0.3 + 0.5; // Blue to purple range
      color.setHSL(hue, 0.8, 0.6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y += 0.002;
      ref.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingOrbs() {
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
        <mesh key={i} position={[Math.cos(i * 1.26) * 8, 0, Math.sin(i * 1.26) * 8]}>
          <octahedronGeometry args={[0.3]} />
          <meshBasicMaterial 
            color={i % 2 === 0 ? '#3B82F6' : '#8B5CF6'} 
            transparent 
            opacity={0.4}
            wireframe
          />
        </mesh>
      ))}
    </group>
  );
}

interface ThreeBackgroundProps {
  className?: string;
}

export default function ThreeBackground({ className }: ThreeBackgroundProps) {
  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.3} color="#3B82F6" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8B5CF6" />
        <ParticleField />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
}