import { useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, useScroll, ScrollControls, SoftShadows } from '@react-three/drei';
import { EffectComposer, TiltShift2 } from '@react-three/postprocessing';

import { Effects, Lights, Model } from '..';

export const Scene = () => {
  return (
    <Canvas shadows gl={{ antialias: false }} camera={{ position: [1, 0.5, 2.5], fov: 50 }}>
      <color attach='background' args={['#f0f0f0']} />
      <fog attach='fog' args={['#f0f0f0', 0, 20]} />
    </Canvas>
  );
};
