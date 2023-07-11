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

  .carousel {
    position: relative;
    z-index: 1;
    height: 100vh;
    overflow: hidden;
    pointer-events: none;
  }

  .carousel-item {
    --items: 10;
    --width: clamp(150px, 30vw, 300px);
    --height: clamp(200px, 40vw, 400px);
    --x: calc(var(--active) * 800%);
    --y: calc(var(--active) * 200%);
    --rot: calc(var(--active) * 120deg);
    --opacity: calc(var(--zIndex) / var(--items) * 3 - 2);
    overflow: hidden;
    position: absolute;
    z-index: var(--zIndex);
    width: var(--width);
    height: var(--height);
    margin: calc(var(--height) * -0.5) 0 0 calc(var(--width) * -0.5);
    border-radius: 10px;
    top: 50%;
    left: 50%;
    user-select: none;
    transform-origin: 0% 100%;
    box-shadow: 0 10px 50px 10px rgba(0, 0, 0, 0.5);
    background: black;
    pointer-events: all;
    transform: translate(var(--x), var(--y)) rotate(var(--rot));
    transition: transform 0.8s cubic-bezier(0, 0.02, 0, 1);

    .carousel-box {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: opacity 0.8s cubic-bezier(0, 0.02, 0, 1);
      opacity: var(--opacity);
      font-family: 'Orelo-sw-db', serif;

      &:before {
        content: '';
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5));
      }
    }

    .title {
      position: absolute;
      z-index: 1;
      color: #fff;
      bottom: 20px;
      left: 20px;
      transition: opacity 0.8s cubic-bezier(0, 0.02, 0, 1);
      font-size: clamp(20px, 3vw, 30px);
      text-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    }

    .num {
      position: absolute;
      z-index: 1;
      color: #fff;
      top: 10px;
      left: 20px;
      transition: opacity 0.8s cubic-bezier(0, 0.02, 0, 1);
      font-size: clamp(20px, 10vw, 80px);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      pointer-events: none;
    }
  }

  .layout {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;

    &:before {
      content: '';
      position: absolute;
      z-index: 1;
      top: 0;
      left: 90px;
      width: 10px;
      height: 100%;
      border: 1px solid #fff;
      border-top: none;
      border-bottom: none;
      opacity: 0.15;
    }

    .box {
      position: absolute;
      bottom: 0;
      left: 30px;
      color: #fff;
      transform-origin: 0% 10%;
      transform: rotate(-90deg);
      font-size: 9px;
      line-height: 1.4;
      text-transform: uppercase;
      opacity: 0.4;
    }
  }

  .logo {
    position: absolute;
    z-index: 2;
    top: 28px;
    right: 28px;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Orelo-sw-db', serif;
    pointer-events: all;
    color: black;
    text-decoration: none;
    font-size: 20px;
    overflow: hidden;
    padding-bottom: 0.1em;
  }

  .social {
    position: absolute;
    z-index: 10;
    bottom: 20px;
    right: 25px;
    color: #fff;
    opacity: 0.4;

    a {
      display: inline-block;
      margin-left: 3px;
    }

    svg {
      --fill: #fff;
      width: 35px;
      height: 35px;
    }
  }

  .cursor {
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
  }

  .cursor2 {
    --size: 2px;
    transition-duration: 0.7s;
  }
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
