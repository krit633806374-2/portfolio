'use client';
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import * as THREE from 'three';

interface LanyardProps {
  position?: [number, number, number];
  fov?: number;
  transparent?: boolean;
}

export default function Lanyard({
  position = [0, 0, 30],
  fov = 20,
  transparent = true
}: LanyardProps) {
  const [isMobile, setIsMobile] = useState<boolean>(() => 
    typeof window !== 'undefined' && window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = (): void => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative z-10 w-full h-screen flex justify-center items-center transform scale-100 origin-center pointer-events-none">
      <Canvas
        camera={{ position, fov }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ alpha: transparent, antialias: true }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
        className="pointer-events-auto"
      >
        <ambientLight intensity={Math.PI} />
        <SimpleLanyard isMobile={isMobile} />
        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

interface SimpleLanyardProps {
  isMobile?: boolean;
}

function SimpleLanyard({ isMobile = false }: SimpleLanyardProps) {
  return (
    <>
      {/* Lanyard string - hanging from point (0, 0, 0) */}
      <mesh position={[0, -2, 0]} scale={[0.05, 4, 0.05]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#06b6d4" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Card placeholder - สีน้ำเงินที่ปลายของสาย */}
      <group position={[0, -4, 0]}>
        <mesh>
          <boxGeometry args={[1.6, 2.25, 0.02]} />
          <meshPhysicalMaterial
            color="#0ea5e9"
            metalness={0.8}
            roughness={0.2}
            clearcoat={isMobile ? 0 : 1}
            clearcoatRoughness={0.15}
          />
        </mesh>
      </group>
    </>
  );
}
