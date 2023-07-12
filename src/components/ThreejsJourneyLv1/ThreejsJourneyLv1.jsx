import { styled } from 'styled-components';

export const ThreejsJourneyLv1 = () => {
  return <Container>ThreejsJourneyLv1</Container>;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  filter: saturate(1.15) hue-rotate(345deg);

  * {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  canvas {
    opacity: 0;
    touch-action: none;
    animation: fade-in 1s ease 0.3s forwards;
  }

  canvas:active {
    cursor: grabbing;
  }
`;
