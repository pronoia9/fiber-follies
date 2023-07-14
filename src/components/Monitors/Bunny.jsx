import { useGLTF } from "@react-three/drei";

export const Bunny = () => {
  const { nodes } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bunny/model.gltf');

  return (
    <mesh receiveShadow castShadow geometry={nodes.bunny.geometry} scale={0.325} position={[0, 0, 0.5]} rotation={[0, -Math.PI * 0.85, 0]}>
      <meshStandardMaterial color='#222' roughness={0.5} />
    </mesh>
  );
};
