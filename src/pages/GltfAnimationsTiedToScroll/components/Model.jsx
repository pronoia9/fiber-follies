import { useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, useScroll } from '@react-three/drei';

export const Model = (props) => {
  const scroll = useScroll();
  const { nodes, materials, animations } = useGLTF('/src/pages/GltfAnimationsTiedToScroll/assets/jump-transformed.glb');
  const { ref, actions } = useAnimations(animations);

  useEffect(() => {
    actions.jump.reset().play().paused = true;
  }, []);

  useFrame(() => {
    actions.jump.time = actions.jump.getClip().duration * scroll.offset;
  });

  return (
    <group ref={ref} {...props}>
      <primitive object={nodes.mixamorigHips} />
      <skinnedMesh castShadow receiveShadow geometry={nodes.Ch03.geometry} material={materials.Ch03_Body} skeleton={nodes.Ch03.skeleton} />
    </group>
  );
};
