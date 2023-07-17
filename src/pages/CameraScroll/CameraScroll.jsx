import { useRef } from 'react';
import { styled } from 'styled-components';

import { Scene, Overlay } from '.';

export const CameraScroll = () => {
  const overlay = useRef(), caption = useRef(), scroll = useRef(0);

  return (
    <Container>
      <Scene scroll={scroll} />
      <Overlay ref={overlay} caption={caption} scroll={scroll} />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  font-family: 'Inter var', sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: #101010;
  background: radial-gradient(circle at bottom center, #212121 0%, #101010 80%);
  overflow: hidden;
  overscroll-behavior-y: none;
  user-select: none;
`;
