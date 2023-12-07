import { PerspectiveCamera } from '@react-three/drei';

import { Screen, SpinningBox } from '..';

// Renders a monitor with a spinning box
export const ScreenInteractive = (props) => {
  return (
    <Screen {...props}>
      <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} />
      <color attach='background' args={['orange']} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.75} />
      <pointLight position={[-10, -10, -10]} />
      <SpinningBox position={[-3.15, 0.75, 0]} scale={0.5} />
    </Screen>
  );
};
