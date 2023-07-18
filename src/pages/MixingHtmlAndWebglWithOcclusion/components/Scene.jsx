import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';

import { Effects, Lights, Model } from '..';

export const Scene = () => {
  return (
    <Canvas camera={{ position: [-5, 0, -15], fov: 55 }}>
      <Lights />
      <Effects />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}
        // {...useControls('Orbit Controls', { enablePan: false, enableZoom: false, minPolarAngle: Math.PI / 2.2, maxPolarAngle: Math.PI / 2.2 })}
      />

      <Suspense fallback={null}>
        <Model rotation={[0, Math.PI, 0]} position={[0, 1, 0]} />
      </Suspense>
    </Canvas>
  );
};
