import { useEffect } from 'react';
import { MathUtils } from 'three';
import { useSpring, a } from '@react-spring/three';

export const Sudo = ({ model }) => {
  const { nodes } = model;
  const [spring, api] = useSpring(() => ({ rotation: [Math.PI / 2, 0, 0.29], config: { friction: 40 } }), []);

  useEffect(() => {
    let timeout;
    const wander = () => {
      api.start({ rotation: [Math.PI / 2 + MathUtils.randFloatSpread(2) * 0.3, 0, 0.29 + MathUtils.randFloatSpread(2) * 0.2] });
      timeout = setTimeout(wander, (1 + Math.random() * 3) * 1000);
    };
    wander();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <group position={[0.68, 0.33, -0.67]}>
      <mesh geometry={nodes.Sudo.geometry} material={nodes.Sudo.material} rotation={[Math.PI / 2, 0, 0.29]} />
      <a.mesh geometry={nodes.SudoHead.geometry} material={nodes.SudoHead.material} {...spring} />
    </group>
  );
};
