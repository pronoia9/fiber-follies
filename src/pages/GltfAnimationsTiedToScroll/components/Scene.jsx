import { Canvas } from '@react-three/fiber';
import { ScrollControls, SoftShadows } from '@react-three/drei';

import { Effects, Lights, Model } from '..';

export const Scene = () => {
  return (
    <Canvas shadows gl={{ antialias: false }} camera={{ position: [1, 0.5, 2.5], fov: 50 }}>
      <color attach='background' args={['#f0f0f0']} />
      <fog attach='fog' args={['#f0f0f0', 0, 20]} />
      <Lights />

      <group>
        <ScrollControls damping={0.2} maxSpeed={0.5} pages={2}>
          <Model position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        </ScrollControls>
        <mesh receiveShadow rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1.01, 0]}>
          <planeGeometry args={[10, 10, 1, 1]} />
          <shadowMaterial transparent opacity={0.75} />
        </mesh>
      </group>

      <SoftShadows size={40} samples={16} />
      <Effects />
    </Canvas>
  );
};
