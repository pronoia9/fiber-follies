import { Canvas } from '@react-three/fiber';
import { BakeShadows } from '@react-three/drei';
import { useControls } from 'leva';

import { levaProps, Lights, Instances, Computers, Bunny, Floor, CameraRig, Effects } from './';

export const Scene = () => {
  const canvasProps = useControls('Canvas', ...levaProps.canvas),
    cameraProps = useControls('Camera', ...levaProps.camera),
    sceneProps = useControls('Scene', ...levaProps.scene),
    computersProps = useControls('Computers', ...levaProps.computers),
    floorProps = useControls('Floor', ...levaProps.floor),
    bunnyProps = useControls('Bunny', ...levaProps.bunny);

  return (
    <Canvas {...canvasProps} {...cameraProps} eventSource={document.getElementById('root')} eventPrefix='client'>
      <color attach='background' args={[canvasProps.color]} />
      <Lights />
      <group {...sceneProps}>
        <Instances>
          <Computers {...computersProps} />
        </Instances>
        <Bunny {...bunnyProps} />
        <Floor {...floorProps} />
      </group>
      <Effects />
      <CameraRig />
      <BakeShadows />
    </Canvas>
  );
};
