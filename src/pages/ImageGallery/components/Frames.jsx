import { useEffect, useRef } from 'react';
import { Quaternion, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

import { Frame, GOLDENRATIO, images } from '..';

export const Frames = ({ currentImage, setCurrentImage, q = new Quaternion(), p = new Vector3() }) => {
  const ref = useRef(),
    clicked = useRef();

  useEffect(() => {
    clicked.current = ref.current.getObjectByName(currentImage);
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true);
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25));
      clicked.current.parent.getWorldQuaternion(q);
    } else {
      p.set(0, 0, 5.5);
      q.identity();
    }
  }, [currentImage]);

  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt);
    easing.dampQ(state.camera.quaternion, q, 0.4, dt);
  });

  return (
    <group
      ref={ref}
      onClick={(e) => (
        e.stopPropagation(), console.log('e.object.name', e.object.name), setCurrentImage(clicked.current === e.object ? null : e.object.name)
      )}
      onPointerMissed={() => setCurrentImage(null)}
      onPointerOver={(e) => console.log('onPointerOver', e.object)}
    >
      {images.map((props) => <Frame key={props.url} {...props} /> /* prettier-ignore */)}
    </group>
  );
};
