import { MeshReflectorMaterial } from '@react-three/drei';
import { useControls } from 'leva';

import { levaProps } from '.';

export const Floor = () => {
  const floorProps = useControls('Floor', levaProps.floor),
    floorMaterialProps = useControls('Floor', levaProps.floorMaterial);

  return (
    <mesh {...floorProps}>
      <planeGeometry args={[50, 50]} />
      <MeshReflectorMaterial {...floorMaterialProps} />
    </mesh>
  );
};
