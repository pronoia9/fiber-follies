import { PresentationControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { styled } from 'styled-components';
import { useControls } from 'leva';

import { Cactus, Camera, Icon, levaProps, Level, Pyramid, Sudo } from '.';

export const ThreejsJourneyLv1 = () => {
  const canvasOptions = useControls('Canvas', levaProps.canvas);
  const cameraOptions = useControls('Camera', levaProps.camera);
  const presentationControlsOptions = useControls('Presentation Controls', levaProps.presentationControls);

  return (
    <Container>
      <Canvas {...canvasOptions} camera={cameraOptions}>
        <color attach='background' args={[canvasOptions.color]} />
        <ambientLight />
        <PresentationControls {...presentationControlsOptions}>
          <group>
            <Level />
            <Sudo />
            <Camera />
            <Cactus />
            <Icon />
            <Pyramid />
          </group>
        </PresentationControls>
      </Canvas>
    </Container>
  );
};

const Container = styled.div`
  filter: saturate(1.15) hue-rotate(345deg);

  &,
  * {
    width: 100%;
    min-height: 100vw;
    height: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  canvas {
    opacity: 0;
    touch-action: none;
    animation: fade-in 1s ease 0.3s forwards;
  }

  canvas:active {
    cursor: grabbing;
  }
`;
