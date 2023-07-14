import { PresentationControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { styled } from 'styled-components';
import { Leva, useControls } from 'leva';

import { Cactus, Camera, Icon, levaProps, Level, Pyramid, Sudo } from '.';
import { dataStore } from '../../store/dataStore.js';
import { useEffect } from 'react';
// import { themes } from '../../styles/Themes';

export const ThreejsJourneyLv1 = () => {
  const { theme, setLogoPosition } = dataStore((state) => ({ theme: state.theme, setLogoPosition: state.setLogoPosition }));
  const model = useGLTF('/src/components/ThreejsJourneyLv1/model.glb');
  const canvasOptions = useControls('Canvas', { ...levaProps.canvas, /* color: { value: themes[theme].accentPrimary } */ });
  const cameraOptions = useControls('Camera', levaProps.camera);
  const presentationControlsOptions = useControls('Presentation Controls', levaProps.presentationControls);

  useEffect(() => { setLogoPosition('top left'); }, []);

  return (
    <Container>
      <Leva collapsed={true} />
      <Canvas {...canvasOptions} camera={cameraOptions}>
        {/* <color attach='background' args={[canvasOptions.color]} /> */}
        <ambientLight />
        <PresentationControls {...presentationControlsOptions}>
          <group position-y={-0.75} dispose={null}>
            <Level model={model} />
            <Sudo model={model} />
            <Camera model={model} />
            <Cactus model={model} />
            <Icon model={model} />
            <Pyramid model={model} />
          </group>
        </PresentationControls>
      </Canvas>
    </Container>
  );
};

useGLTF.preload('/src/components/ThreejsJourneyLv1/model.glb');

const Container = styled.div`
  filter: saturate(1.15) hue-rotate(345deg);

  &,
  * {
    touch-action: none;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  canvas:active {
    cursor: grabbing;
  }
`;
