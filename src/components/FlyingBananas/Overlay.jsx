import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { Logo } from '@pmndrs/branding';

import { VelvetBanana } from '.';

export const Overlay = () => {
  return (
    <Container>
      <TopLeft>
        <h1>
          LANDING
          <br />
          PAGES —
        </h1>
        <p>In React & Threejs —</p>
      </TopLeft>
      <BottomLeft>
        A runtime deconstruction of <a href='https://playful.software'>playful.software</a>
      </BottomLeft>
      <BottomRight>
        Inspiration and ideas
        <br />
        Fundamentals
        <br />
        Finding models
        <br />
        Preparing them for the web
        <br />
        Displaying and changing models
        <br />
        Animation fundamentals
        <br />
        Effects and making things look good
        <br />
        Performance and time to load
        <br />
      </BottomRight>
      <Link to='/'>
        <Logo style={{ position: 'absolute', top: '5vw', right: '5vw', width: 30, fill: 'black' }} />
      </Link>
      <VelvetBanana />
    </Container>
  );
};

export const Container = styled.div`
  font-family: 'Inter';
  font-size: 16px;
  & h1 {
    padding: 0;
    margin: 0 0 0.05em 0;
    font-family: 'Ayer Poster', serif;
    font-weight: 400;
    font-size: min(18vw, 14em);
    line-height: 0.85em;
  }
`;

export const TopLeft = styled.div`
  position: absolute;
  top: 5vw;
  left: 5vw;
`;

export const BottomLeft = styled.div`
  position: absolute;
  bottom: 5vw;
  left: 5vw;
  width: 30ch;
  max-width: 40%;
`;

export const BottomRight = styled.div`
  position: absolute;
  bottom: 5vw;
  right: 5vw;
  width: 35ch;
  max-width: 40%;
  line-height: 1em;
  letter-spacing: -0.01em;
  text-align: right;
`;
