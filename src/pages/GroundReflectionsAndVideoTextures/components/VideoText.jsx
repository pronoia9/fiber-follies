import { useEffect, useState } from 'react';
import { sRGBEncoding } from 'three';
import { Text } from '@react-three/drei';

export const VideoText = (props) => {
  const [video] = useState(() =>
    Object.assign(document.createElement('video'), {
      src: '/src/pages/GroundReflectionsAndVideoTextures/assets/drei.mp4',
      crossOrigin: 'Anonymous',
      loop: true,
      muted: true,
    })
  );

  useEffect(() => void video.play(), [video]);

  return (
    <Text font='/fonts/Inter-Bold.woff' fontSize={3} letterSpacing={-0.06} {...props}>
      drei
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach='map' args={[video]} encoding={sRGBEncoding} />
      </meshBasicMaterial>
    </Text>
  );
};
