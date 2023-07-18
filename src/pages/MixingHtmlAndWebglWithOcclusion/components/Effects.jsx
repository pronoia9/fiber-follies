import { ContactShadows, Environment } from "@react-three/drei";

export const Effects = () => {
  return (
    <>
      <Environment preset='city' />
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
    </>
  );
};
