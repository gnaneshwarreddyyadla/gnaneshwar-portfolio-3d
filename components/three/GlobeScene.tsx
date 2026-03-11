'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function Globe() {
  const globeRef = useRef<THREE.Group>(null!);
  const dataPoints = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const blue = new THREE.Color('#3b82f6');
    const violet = new THREE.Color('#8b5cf6');
    const radius = 1.52;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      const c = Math.random() > 0.5 ? blue : violet;
      colors[i3] = c.r; colors[i3 + 1] = c.g; colors[i3 + 2] = c.b;
    }
    return { positions, colors, count };
  }, []);

  const ringGeometry = useMemo(() => {
    const curves: THREE.BufferGeometry[] = [];
    for (let i = 0; i < 6; i++) {
      const points: THREE.Vector3[] = [];
      const tilt = (Math.PI / 6) * i;
      for (let j = 0; j <= 64; j++) {
        const angle = (j / 64) * Math.PI * 2;
        points.push(new THREE.Vector3(1.5 * Math.cos(angle), 1.5 * Math.sin(angle) * Math.cos(tilt), 1.5 * Math.sin(angle) * Math.sin(tilt)));
      }
      curves.push(new THREE.BufferGeometry().setFromPoints(points));
    }
    return curves;
  }, []);

  useFrame((state) => { if (globeRef.current) globeRef.current.rotation.y = state.clock.elapsedTime * 0.08; });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={globeRef}>
        <mesh><sphereGeometry args={[1.48, 48, 48]} /><meshStandardMaterial color="#050510" transparent opacity={0.6} roughness={0.8} /></mesh>
        {ringGeometry.map((geo, i) => (<lineLoop key={i} geometry={geo}><lineBasicMaterial color="#3b82f6" transparent opacity={0.08} /></lineLoop>))}
        <points>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" count={dataPoints.count} array={dataPoints.positions} itemSize={3} />
            <bufferAttribute attach="attributes-color" count={dataPoints.count} array={dataPoints.colors} itemSize={3} />
          </bufferGeometry>
          <pointsMaterial size={0.04} vertexColors transparent opacity={0.9} sizeAttenuation blending={THREE.AdditiveBlending} />
        </points>
        <mesh rotation={[Math.PI / 2, 0, 0]}><ringGeometry args={[1.7, 1.75, 64]} /><meshBasicMaterial color="#3b82f6" transparent opacity={0.12} side={THREE.DoubleSide} /></mesh>
      </group>
    </Float>
  );
}

export default function GlobeScene() {
  return (
    <div className="w-full h-[400px] sm:h-[500px]">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#3b82f6" />
        <pointLight position={[-5, -3, 3]} intensity={0.4} color="#8b5cf6" />
        <Globe />
      </Canvas>
    </div>
  );
}
