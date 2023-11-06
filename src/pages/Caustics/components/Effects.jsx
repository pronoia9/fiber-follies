import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useRef } from 'react';

export const Effects = ({ perfSucks }) => {
  const ref = useRef();

  // Animate the environment & camera
  useFrame((state, delta) => {
    if (!perfSucks) {
      easing.damp3(ref.current.rotation, [Math.PI / 2, 0, state.clock.elapsedTime / 5 + state.pointer.x], 0.2, delta);
      easing.damp3(state.camera.position, [Math.sin(state.pointer.x / 4) * 9, 1.25 + state.pointer.y, Math.cos(state.pointer.x / 4) * 9], 0.5, delta);
      state.camera.lookAt(0, 0, 0);
    }
  });

  return <Environment></Environment>;
};
