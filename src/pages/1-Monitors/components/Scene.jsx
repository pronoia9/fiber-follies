import { Canvas } from '@react-three/fiber';
import { BakeShadows } from '@react-three/drei';

import { Lights, Instances, Computers, Bunny, Floor, CameraRig, Effects } from '..';

export const Scene = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }}
      eventSource={document.getElementById('root')}
      eventPrefix='client'
    >
      <color attach='background' args={['black']} />

      <Lights />

      <group position={[-0, -1, 0]}>
        <Instances>
          <Computers scale={0.5} />
        </Instances>
        <Bunny />
        <Floor />
      </group>

      <Effects />
      <CameraRig />
      <BakeShadows />
    </Canvas>
  );
};
