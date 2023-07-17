import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

import { Model } from '..';

export const Scene = ({ scroll }) => {
  return (
    <Canvas shadows eventSource={document.getElementById('root')} eventPrefix='client'>
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <Model scroll={scroll} />
        <Environment preset='city' />
      </Suspense>
    </Canvas>
  );
};
