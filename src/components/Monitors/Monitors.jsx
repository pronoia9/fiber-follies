import { useEffect } from 'react';
import { styled } from 'styled-components';

import { Overlay, Scene } from './';
import { dataStore } from '../../store/dataStore';

export const Monitors = () => {
  const { setLogoPosition } = dataStore((state) => ({ setLogoPosition: state.setLogoPosition }));
  useEffect(() => setLogoPosition('bottom left'), []);

  return (
    <Container>
      <Overlay />
      <Scene />
    </Container>
  );
};

const Container = styled.div`
  @font-face {
    font-family: 'Inter';
    src: url('/src/assets/fonts/Inter/Inter-VariableFont_slnt,wght.ttf');
  }

  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  *, svg {
    color: #ffffff75;
  }

  a {
    pointer-events: all;
    text-decoration: none;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  input {
    font-family: 'Inter';
    width: 100px;
    border: none;
    background-image: none;
    background-color: transparent;
    color: transparent;
    caret-color: #555;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    font-weight: 400;
  }

  input:focus {
    outline: none;
    box-shadow: none !important;
  }

  & > div:first-child {
    z-index: 10;
  }
`;
