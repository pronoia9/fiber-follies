import { MeshWobbleMaterial } from '@react-three/drei';

export const Cactus = ({ model }) => {
  const { nodes, materials } = model;

  return (
    <mesh geometry={nodes.Cactus.geometry} position={[-0.42, 0.51, -0.62]} rotation={[Math.PI / 2, 0, 0]}>
      <MeshWobbleMaterial factor={0.4} map={materials.Cactus.map} />
    </mesh>
  );
};
