import { Leva } from 'leva';
import { styled } from 'styled-components';

import { Scene } from '.';

export const RoomWithSoftShadows = () => {
  return (
    <Container>
      <Leva collapsed />
      <Scene />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow: hidden;

  position: fixed;
  overflow: hidden;
  overscroll-behavior-y: none;
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  color: black;
  -webkit-font-smoothing: antialiased;
  background: #f0f0f0;
`;
