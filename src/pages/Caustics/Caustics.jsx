import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { AccumulativeShadows, PerformanceMonitor, RandomizedLight } from '@react-three/drei';

import { Scene, Overlay, Effects } from '.';
import { dataStore } from '../../store/dataStore';

export const Caustics = () => {
  const [perfSucks, degrade] = useState(false);

  const { setLogoPosition } = dataStore((state) => ({ setLogoPosition: state.setLogoPosition }));
  useEffect(() => setLogoPosition('bottom left'), []);

  return (
    <>
      <Canvas
        shadows
        dpr={[1, perfSucks ? 1.5 : 2]}
        eventSource={document.getElementById('root')}
        eventPrefix='client'
        camera={{ position: [20, 0.9, 20], fov: 26 }}
      >
        <PerformanceMonitor onDecline={() => degrade(true)} />
        <color attach='background' args={['#f0f0f0']} />

        <group position={[0, -0.5, 0]} rotation={[0, -0.75, 0]}>
          <Scene />
          <AccumulativeShadows frames={100} alphaTest={0.85} opacity={0.8} color='red' scale={20} position={[0, -0.005, 0]}>
            <RandomizedLight amount={8} radius={6} ambient={0.5} intensity={1} position={[-1.5, 2.5, -2.5]} bias={0.001} />
          </AccumulativeShadows>
        </group>

        <Effects perfSucks={perfSucks} />
      </Canvas>

      <Overlay />
    </>
  );
};
