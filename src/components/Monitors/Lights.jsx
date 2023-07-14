import { useControls } from "leva";

import { levaProps } from ".";

export const Lights = () => {
  const hemisphereLightProps = useControls('Hemisphere Light', levaProps.hemisphereLight, { collapsed: true }),
    spotLightProps = useControls('Spot Light', levaProps.spotLight, { collapsed: true }),
    pointLightProps = useControls('Point Light', levaProps.pointLight, { collapsed: true });
  
  return (
    <>
      <hemisphereLight {...hemisphereLightProps} />
      <spotLight {...spotLightProps} />
      <pointLight {...pointLightProps} />
    </>
  );
};
