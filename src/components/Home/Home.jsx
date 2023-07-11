import { styled } from 'styled-components';

import { Carousel, Layout, Logo, Socials } from '.';

export const Home = () => {
  return (
    <Container>
      <Carousel />
      <Layout />
      <Logo />
      <Socials />
      <Cursor class='cursor' />
      <Cursor2 class='cursor cursor2' />
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  font-family: 'Roboto', serif;
  background: linear-gradient(135deg, black, #220033);
`;

const Cursor = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  --size: 40px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin: calc(var(--size) * -0.5) 0 0 calc(var(--size) * -0.5);
  transition: transform 0.85s cubic-bezier(0, 0.02, 0, 1);
  display: none;
  pointer-events: none;

  @media (pointer: fine) {
    display: block;
  }
`;

const Cursor2 = styled(Cursor)`
  --size: 2px;
  transition-duration: 0.7s;
`;
