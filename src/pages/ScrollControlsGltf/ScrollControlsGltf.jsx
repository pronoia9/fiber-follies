import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Sky } from '@react-three/drei';

import { Lights, Model } from '.';

export const ScrollControlsGltf = () => {
  return (
    <Canvas>
      <Lights />
      <fog attach='fog' args={['#ff5020', 5, 18]} />
      <Sky scale={1000} sunPosition={[2, 0.4, 10]} />

      <Suspense fallback={null}>
        <ScrollControls pages={3}>
          <Model scale={0.02} position={[0, 2.5, 0]} />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
};
