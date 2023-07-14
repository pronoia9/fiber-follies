import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, MeshReflectorMaterial, BakeShadows } from '@react-three/drei';
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing';
import { easing } from 'maath';

import { levaProps, Lights, ComputersInstances, Computers, Floor } from './';
import { useControls } from 'leva';

export const Scene = () => {
  const canvasProps = useControls('Canvas', levaProps.canvas),
    cameraProps = useControls('Camera', levaProps.camera);

  return (
    <Canvas {...canvasProps} {...cameraProps} eventSource={document.getElementById('root')} eventPrefix='client'>
      <color attach='background' args={[canvasProps.color]} />
      <Lights />
      
      <group position={[-0, -1, 0]}>
        <ComputersInstances>
          <Computers scale={0.5} />
        </ComputersInstances>
        <Floor />
      </group>
    </Canvas>
  );
};
