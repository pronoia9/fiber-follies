import { Canvas } from '@react-three/fiber';
import { proxy } from 'valtio';
import styled from 'styled-components';

import { Items, Overlay } from '.';

const state = proxy({
  clicked: null,
  urls: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 5, 7, 8, 2, 4, 9, 6].map((u) => `/src/pages/HorizontalTiles/assets/${u}.jpg`),
});

export const HorizontalTiles = () => {
  return (
    <Container>
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} onPointerMissed={() => (state.clicked = null)}>
        <Items state={state} />
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
