import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Text } from '@react-three/drei';

import { Screen } from '.';

// Renders a monitor with some text
export const ScreenText = ({ invert, x = 0, y = 1.2, ...props }) => {
  const textRef = useRef();
  const rand = Math.random() * 10000;

  useFrame((state) => {
    textRef.current.position.x = x + Math.sin(rand + state.clock.elapsedTime / 4) * 8;
  });

  return (
    <Screen {...props}>
      <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 15]} />
      <color attach='background' args={[invert ? 'black' : '#35c19f']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Text font='/src/assets/fonts/Inter/Inter-VariableFont_slnt,wght.ttf' position={[x, y, 0]} ref={textRef} fontSize={4} letterSpacing={-0.1} color={!invert ? 'black' : '#35c19f'}>
        Poimandres.
      </Text>
    </Screen>
  );
};
