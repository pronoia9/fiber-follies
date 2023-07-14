import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, MeshReflectorMaterial, BakeShadows } from '@react-three/drei';
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing';
import { easing } from 'maath';
import { useControls } from 'leva';

import { levaProps, Lights, Instances, Computers, Bunny, Floor } from './';

export const Scene = () => {
  const canvasProps = useControls('Canvas', levaProps.canvas, { collapsed: true }),
    cameraProps = useControls('Camera', levaProps.camera),
    bunnyProps = useControls('Bunny', levaProps.bunny);

  return (
    <Canvas {...canvasProps} {...cameraProps} eventSource={document.getElementById('root')} eventPrefix='client'>
      <color attach='background' args={[canvasProps.color]} />
      <Lights />

      <group position={[-0, -1, 0]}>
        <Instances>
          <Computers scale={0.5} />
        </Instances>
        <Bunny {...bunnyProps} />
        <Floor />
      </group>
    </Canvas>
  );
};
