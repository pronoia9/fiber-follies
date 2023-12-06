import { useThree } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';
import { useSnapshot } from 'valtio';

import { Item, Minimap } from '..';

export const Items = ({ w = 0.7, gap = 0.15, state }) => {
  const { urls } = useSnapshot(state);
  const { width } = useThree((state) => state.viewport);
  const xW = w + gap;

  return (
    <ScrollControls horizontal damping={0.1} pages={(width - xW + urls.length * xW) / width}>
      <Minimap />
      <Scroll>
        {urls.map((url, index) => (
          <Item key={`ht-url-#${index}`} index={index} position={[index * xW, 0, 0]} scale={[w, 4, 1]} url={url} />
        ))}
      </Scroll>
    </ScrollControls>
  );
};
