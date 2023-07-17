import { styled } from 'styled-components';

import { Scene, Overlay } from '.';

export const CameraScroll = () => {
  return <Container>
    <Scene />
    <Overlay />
  </Container>;
};

const Container = styled.div`
  overflow: auto;
  position: fixed;
  overflow: hidden;
  overscroll-behavior-y: none;
  background-color: #101010;
  background: radial-gradient(circle at bottom center, #212121 0%, #101010 80%);
  font-family: 'Inter var', sans-serif;
  -webkit-font-smoothing: antialiased;

  &, .scroll {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    user-select: none;
    overflow: hidden;
  }
`;
