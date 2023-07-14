import { useControls } from "leva";

import { levaProps } from ".";

export const Lights = () => {
  const hemisphereLightProps = useControls('Hemisphere Light', levaProps.hemisphereLight, { collapsed: true }),
    spotLightProps = useControls('Spot Light', levaProps.spotLight, { collapsed: true });
  
  return (
    <>
      <hemisphereLight {...hemisphereLightProps} />
      <spotLight {...spotLightProps} />
    </>
  );
};
