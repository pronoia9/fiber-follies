import { useState } from 'react';
import { Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';

export const Intro = () => {
  const [vec] = useState(() => new Vector3());

  return useFrame((state) => {
    state.camera.position.lerp(vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14), 0.05);
    state.camera.lookAt(0, 0, 0);
  });
};
