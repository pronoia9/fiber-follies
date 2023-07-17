import { MathUtils } from 'three';
import { useEffect, useLayoutEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, useGLTF, useAnimations } from '@react-three/drei';

const path = '/src/pages/ScrollControlsGltf/assets/LittlestTokyo-transformed.glb';

export const Model = (props) => {
  const scroll = useScroll();
  const { scene, nodes, animations } = useGLTF(path);
  const { actions } = useAnimations(animations, scene);

  useLayoutEffect(() => {
    Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true));
  }, []);

  useEffect(() => {
    actions['Take 001'].play().paused = true;
  }, [actions]);
  
  useFrame((state, delta) => {
    const action = actions['Take 001'];
    const offset = 1 - scroll.offset;
    action.time = MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta);
    state.camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * -10);
    state.camera.lookAt(0, 0, 0);
  });

  return <primitive object={scene} {...props} />;
};

useGLTF.preload(path);
/* author: glenatron (https://sketchfab.com/glenatron)
   license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
   source: https://sketchfab.com/models/94b24a60dc1b48248de50bf087c0f042
   title: Littlest Tokyo */
