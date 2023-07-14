import { Suspense, useState } from 'react';
import { styled } from 'styled-components';

import { Bananas, Overlay } from '.';
import { FadeIn, LeftMiddle } from './styles';

export const FlyingBananas = () => {
  const [speed, set] = useState(1);

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

const Container = styled.div`
  width: 100%;
  min-width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: #ffd863;

  *, a {
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