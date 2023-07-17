import { Environment, ContactShadows } from '@react-three/drei';

export const Effects = () => {
  return (
    <>
      <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />
      <Environment preset='city' />
    </>
  );
};
