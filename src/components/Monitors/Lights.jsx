import { useControls } from "leva";

import { levaProps } from ".";

export const Lights = () => {
  const hemisphereLightProps = useControls('Hemisphere Light', levaProps.hemisphereLight),
    spotLightProps = useControls('Spot Light', levaProps.spotLight);
  
  return (
    <>
      <hemisphereLight {...hemisphereLightProps} />
      <spotLight {...spotLightProps} />
    </>
  );
};
