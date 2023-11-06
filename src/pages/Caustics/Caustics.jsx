import { useEffect } from 'react';

import { Scene, Overlay } from '.';
import { dataStore } from '../../store/dataStore';

export const Caustics = () => {
  const { setLogoPosition } = dataStore((state) => ({ setLogoPosition: state.setLogoPosition }));
  useEffect(() => setLogoPosition('bottom left'), []);

  return (
    <>
      <Scene />
      <Overlay />
    </>
  );
};
