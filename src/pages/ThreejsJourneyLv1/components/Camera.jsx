import { useEffect } from 'react';
import { useSpring, a } from '@react-spring/three';

export const Camera = ({ model }) => {
  const { nodes, materials } = model;
  const [spring, api] = useSpring(() => ({ 'rotation-z': 0, config: { friction: 40 } }), []);

  useEffect(() => {
    let timeout;
    const animation = () => {
      api.start({ 'rotation-z': Math.random() });
      timeout = setTimeout(animation, (1 + Math.random() * 5) * 1000);
    };
    animation();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <a.group position={[-0.58, 0.83, -0.03]} rotation={[Math.PI / 2, 0, 0.47]} {...spring}>
      <mesh geometry={nodes.Camera.geometry} material={nodes.Camera.material} />
      <mesh geometry={nodes.Camera_1.geometry} material={materials.Lens} />
    </a.group>
  );
};
