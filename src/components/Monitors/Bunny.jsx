import { useGLTF } from "@react-three/drei";

export const Bunny = (props) => {
  const { nodes } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bunny/model.gltf');

  return (
    <mesh receiveShadow castShadow geometry={nodes.bunny.geometry} {...props}>
      <meshStandardMaterial color='#222' roughness={0.5} />
    </mesh>
  );
};
