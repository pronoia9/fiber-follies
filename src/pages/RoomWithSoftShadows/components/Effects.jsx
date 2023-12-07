import { Sky } from '@react-three/drei';

export const Effects = () => {
  return (
    <>
      <color attach='background' args={['#d0d0d0']} />
      <fog attach='fog' args={['#d0d0d0']} />
      <Sky inclination={0.52} scale={20} />
    </>
  );
};
