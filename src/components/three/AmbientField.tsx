"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useMousePosition } from "@/hooks/useMousePosition";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

function FloatingOrb({
  position,
  color,
  scale,
}: {
  position: [number, number, number];
  color: string;
  scale: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const mouse = useMousePosition();

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * 0.08 + mouse.y * 0.0002;
    ref.current.rotation.y = t * 0.12 + mouse.x * 0.0002;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.15}
          distort={0.25}
          speed={1.5}
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} />
      <FloatingOrb position={[-2.5, 1, -3]} color="#6366f1" scale={0.8} />
      <FloatingOrb position={[3, -0.5, -4]} color="#a78bfa" scale={0.5} />
      <FloatingOrb position={[0.5, 2, -5]} color="#34d399" scale={0.35} />
      <FloatingOrb position={[-1, -1.5, -3.5]} color="#f472b6" scale={0.25} />
    </>
  );
}

export function AmbientField() {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return (
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(99,102,241,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(167,139,250,0.06) 0%, transparent 50%)",
        }}
      />
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
