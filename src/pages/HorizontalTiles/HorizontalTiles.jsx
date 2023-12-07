import { Canvas } from '@react-three/fiber';
import { proxy } from 'valtio';
import styled from 'styled-components';

import { Items, Overlay } from '.';
import { state } from './utils';

export const HorizontalTiles = () => {
  return (
    <Container>
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} onPointerMissed={() => (state.clicked = null)}>
        <Items />
      </Canvas>
      <Overlay />
    </Container>
  );
};

const Container = styled.div`
  * {
    box-sizing: border-box;
  }

  overscroll-behavior: none;
  background: #151515;
  color: #a0a0a0;
  font-family: 'Inter var', sans-serif;

  h1 {
    font-size: 30vw;
    font-weight: 400;
    letter-spacing: -0.05em;
    line-height: 0.7em;
    margin: 0;
    padding: 0;
  }

  a {
    pointer-events: all;
    color: #a0a0a0;
    text-decoration: none;
  }

  svg {
    fill: #a0a0a0;
  }
`;
