import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { SoftShadows, Float, CameraControls, PerformanceMonitor } from '@react-three/drei';
import { useControls } from 'leva';
import { Perf } from 'r3f-perf';
import { easing } from 'maath';

import { Lights, Effects, Model, Sphere, levaProps } from '..';

export const Scene = () => {
  const [bad, setBad] = useState(false);
  const { impl, debug, enabled, samples, ...config } = useControls(levaProps);

  const lowerPerformance = () => {
    setBad(true);
  }

  return (
    <Canvas shadows camera={{ position: [5, 2, 10], fov: 50 }}>
      <CameraControls makeDefault />
      <Lights />
      <Effects />

      {debug && <Perf position='top-left' />}
      <PerformanceMonitor onDecline={lowerPerformance} />
      {enabled && <SoftShadows {...config} samples={bad ? Math.min(6, samples) : samples} />}

      <group>
        <Model scale={0.5} position={[0, -1, 0]} />
        <Sphere />
        <Sphere position={[2, 4, -8]} scale={0.9} />
        <Sphere position={[-2, 2, -8]} scale={0.8} />
      </group>
    </Canvas>
  );
};
