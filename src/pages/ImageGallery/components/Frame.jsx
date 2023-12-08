import { useRef, useState } from 'react';
import { Color } from 'three';
import { useFrame } from '@react-three/fiber';
import { Image, Text, useCursor } from '@react-three/drei';
import { easing } from 'maath';
import getUuid from 'uuid-by-string';

import { GOLDENRATIO } from '..';

export const Frame = ({ currentImage, setCurrentImage, index, url, c = new Color(), ...props }) => {
  const image = useRef(),
    frame = useRef();
  const [hovered, setHovered] = useState(false),
    [rnd] = useState(() => Math.random());
  const name = getUuid(url);
  const isActive = currentImage === name;

  useCursor(hovered);

  useFrame((state, dt) => {
    image.current.material.zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2;
    easing.damp3(image.current.scale, [0.85 * (!isActive && hovered ? 0.85 : 1), 0.9 * (!isActive && hovered ? 0.905 : 1), 1], 0.1, dt);
    easing.dampC(frame.current.material.color, hovered ? 'orange' : 'white', 0.1, dt);
  });

  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
        onPointerOut={() => setHovered(false)}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial color='#151515' metalness={0.5} roughness={0.5} envMapIntensity={2} />
        <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url} />
      </mesh>
      <Text maxWidth={0.1} anchorX='left' anchorY='top' position={[0.55, GOLDENRATIO, 0]} fontSize={0.025}>
        {name.split('-').join(' ')}
      </Text>
    </group>
  );
};
