import { Canvas } from '@react-three/fiber';
import { PresentationControls } from '@react-three/drei';

import { Lights, Model, Effects } from '.';

export const BouncyWatch = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 25 }}>
      <Lights />

      <PresentationControls
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <Model rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.25, 0]} scale={0.003} />
      </PresentationControls>

      <Effects />
    </Canvas>
  );
};
