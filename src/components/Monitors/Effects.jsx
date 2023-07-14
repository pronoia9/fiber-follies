import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing';
import { useControls, folder } from 'leva';

import { levaProps } from './Leva';

export const Effects = () => {
  const effects = useControls('Effects', ...levaProps.effects);

  return (
    <EffectComposer disableNormalPass>
      <Bloom {...effects.Bloom} />
      <DepthOfField {...effects['Depth Of Field']} />
    </EffectComposer>
  );
};
