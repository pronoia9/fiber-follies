import { styled } from 'styled-components';

export const CarouselCard = ({ title, index, image }) => {
  return (
    <Container className='carousel-item'>
      <div className='carousel-box'>
        <div className='title'>{title}</div>
        <div className='num'>{index}</div>
        <img src={image} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  --items: 10;
  --width: clamp(200px, 40vw, 400px);
  --height: clamp(150px, 30vw, 300px);
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
`;
