import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useCursor } from '@react-three/drei';

export const SpinningBox = ({ scale, ...props }) => {
  const ref = useRef();
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
  useCursor(hover);

  useFrame((state, delta) => {
    ref.current.rotation.x = ref.current.rotation.y += delta;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={click ? scale * 1.4 : scale * 1.2}
      onClick={(event) => setClick(!click)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry />
      <meshStandardMaterial color={hover ? 'hotpink' : 'indianred'} />
    </mesh>
  );
};
