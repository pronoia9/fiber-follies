import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing';

export const Effects = () => {
  return (
    <EffectComposer disableNormalPass>
      <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={6} />
      <DepthOfField target={[0, 0, 13]} focalLength={0.3} bokehScale={15} height={700} />
    </EffectComposer>
  );
};
