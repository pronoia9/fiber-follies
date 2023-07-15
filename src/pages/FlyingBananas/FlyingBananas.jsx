import { Suspense, useEffect, useState } from 'react';
import { styled, keyframes } from 'styled-components';

import { Bananas, Overlay } from '.';
import { dataStore } from '../../store/dataStore';

export const FlyingBananas = () => {
  const [speed, set] = useState(1);
  const { setLogoPosition } = dataStore((state) => ({ setLogoPosition: state.setLogoPosition }));
  useEffect(() => setLogoPosition(null), []);

  return (
    <Container>
      <Suspense fallback={null}>
        <Bananas speed={speed} />
        <FadeIn />
      </Suspense>
      <Overlay />
      <LeftMiddle>
        <input type='range' min='0' max='10' value={speed} step='1' onChange={(e) => set(e.target.value)} />
      </LeftMiddle>
    </Container>
  );
};

export const fade = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const Container = styled.div`
  width: 100%;
  min-width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: #ffd863;

  *,
  a {
    color: black;
  }

  input[type='range'] {
    display: block;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: black;
    border-radius: 5px;
    width: 100%;
    height: 2px;
    outline: 0;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: #000;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  input[type='range']::-webkit-slider-thumb:active {
    transform: scale(1);
  }
`;

export const FadeIn = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: #ffd863;
  animation: ${fade} 4s normal forwards ease-in-out;
`;

export const LeftMiddle = styled.div`
  position: absolute;
  bottom: 50%;
  right: 5vw;
  font-family: 'Inter';
  font-weight: 400;
  line-height: 1em;
  letter-spacing: -0.01em;
  font-size: 12px;
  transform: rotate(90deg) translate3d(50%, 0, 0);
  transform-origin: 100% 50%;
`;
