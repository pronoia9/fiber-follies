import { EffectComposer, TiltShift2 } from '@react-three/postprocessing';

export const Effects = () => {
  return (
    <EffectComposer disableNormalPass multisampling={4}>
      <TiltShift2 blur={1} />
    </EffectComposer>
  );
};
