import { useEffect } from 'react';
import styled from 'styled-components';

import { Scene, Overlay } from '.';
import { dataStore } from '../../store/dataStore';

export const Caustics = () => {
  const { setLogoPosition } = dataStore((state) => ({ setLogoPosition: state.setLogoPosition }));
  useEffect(() => setLogoPosition('bottom left'), []);

  return (
    <Container>
      <Scene />
      <Overlay />
    </Container>
  );
};

const Container = styled.div`
  @import url('https://rsms.me/inter/inter.css');

  &,
  * {
    box-sizing: border-box;
  }

  /* html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  } */

  /* body { */
  background: #f0f0f0;
  color: #3e3e3d;
  font-family: 'Inter var', sans-serif;
  user-select: none;
  cursor: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxMCIgZmlsbD0iIzNlM2UzZCIvPjwvc3ZnPg=='),
    auto;
  /* } */

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
    animation: fade-in 5s ease 1s forwards;
  }

  .char {
    position: absolute;
    font-size: 14vw;
    font-weight: 800;
    padding: 0;
    margin: 0;
    line-height: 0.8em;
  }

  a {
    color: #3e3e3d;
    text-decoration: none;
  }
`;