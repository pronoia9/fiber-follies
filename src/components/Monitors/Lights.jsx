import { useControls } from "leva";

import { levaProps } from ".";

export const Lights = () => {
  const hemisphereLightProps = useControls('Hemisphere Light', ...levaProps.hemisphereLight),
    spotLightProps = useControls('Spot Light', ...levaProps.spotLight),
    pointLightProps = useControls('Point Light', ...levaProps.pointLight);
  
  return (
    <>
      <hemisphereLight {...hemisphereLightProps} />
      <spotLight {...spotLightProps} />
      <pointLight {...pointLightProps} />
    </>
  );
};
