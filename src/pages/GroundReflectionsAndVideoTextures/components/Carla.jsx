import { useGLTF } from '@react-three/drei';

export const Carla = (props) => {
  const { scene } = useGLTF('/src/pages/GroundReflectionsAndVideoTextures/assets/carla-draco.glb');

  return <primitive object={scene} {...props} />;
};
