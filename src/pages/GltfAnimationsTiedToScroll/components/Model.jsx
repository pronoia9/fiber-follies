import { useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, useScroll } from '@react-three/drei';

export const Model = (props) => {
  const scroll = useScroll();
  const { nodes, materials, animations } = useGLTF('/src/pages/GltfAnimationsTiedToScroll/assets/jump-transformed.glb');
  const { ref, actions } = useAnimations(animations);

  // When the component is first displayed, reset and pause the "jump" animation
  useEffect(() => {
    actions.jump.reset().play().paused = true;
  }, []);

  // Update the animation frame based on the scroll offset
  useFrame(() => {
    // Calculate the time of the "jump" animation based on scroll offset
    // As you scroll, the character's jump animation progresses accordingly
    actions.jump.time = actions.jump.getClip().duration * scroll.offset;
  });

  return (
    <group ref={ref} {...props}>
      <primitive object={nodes.mixamorigHips} />
      <skinnedMesh castShadow receiveShadow geometry={nodes.Ch03.geometry} material={materials.Ch03_Body} skeleton={nodes.Ch03.skeleton} />
    </group>
  );
};
