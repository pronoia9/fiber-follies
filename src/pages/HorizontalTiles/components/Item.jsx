import { useRef, useState } from 'react';
import { Color } from 'three';
import { useScroll } from '@react-three/drei';
import { useSnapshot } from 'valtio';

import { state } from '../utils';

export const Item = ({ index, position, scale, c = new Color(), ...props }) => {
  const ref = useRef();
  const scroll = useScroll();
  const { clicked, urls } = useSnapshot(state);
  const [hovered, setHovered] = useState(false);

  const click = () => (state.clicked = index === clicked ? null : index);

  const hover = () => setHovered(true);

  const unhover = () => setHovered(false);

  return <></>;
};
