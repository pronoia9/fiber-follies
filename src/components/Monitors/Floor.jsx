import { MeshReflectorMaterial } from '@react-three/drei';
import { useControls } from 'leva';

import { levaProps } from '.';

export const Floor = (props) => {
  const floorMaterialProps = useControls('Floor', ...levaProps.floorMaterial);

  return (
    <mesh {...props}>
      <planeGeometry args={[50, 50]} />
      <MeshReflectorMaterial {...floorMaterialProps} />
    </mesh>
  );
};
