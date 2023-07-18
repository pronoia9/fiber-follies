import { styled } from 'styled-components';

import { Buttons, Button } from '..';
import { useNavigate } from 'react-router-dom';

export const CarouselCard = ({ index, refs, title, image, path, link, ...props }) => {
  const navigate = useNavigate();

  const handleDoubleClick = () => {
    navigate(path);
  };

  return (
    <Container ref={(ref) => (refs.current[index] = ref)} className='carousel-item' onDoubleClick={handleDoubleClick} {...props}>
      <div className='carousel-box'>
        <div className='title'>{title}</div>
        <Links>
          <Link to={path}>
            <svg width='640' height='514' viewBox='0 0 640 514' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M392.8 2.20005C375.8 -2.69995 358.1 7.20005 353.2 24.2001L225.2 472.2C220.3 489.2 230.2 506.9 247.2 511.8C264.2 516.7 281.9 506.8 286.8 489.8L414.8 41.8C419.7 24.8 409.8 7.10005 392.8 2.20005ZM473.4 122.3C460.9 134.8 460.9 155.1 473.4 167.6L562.7 257L473.3 346.4C460.8 358.9 460.8 379.2 473.3 391.7C485.8 404.2 506.1 404.2 518.6 391.7L630.6 279.7C643.1 267.2 643.1 246.9 630.6 234.4L518.6 122.4C506.1 109.9 485.8 109.9 473.3 122.4L473.4 122.3ZM166.7 122.3C154.2 109.8 133.9 109.8 121.4 122.3L9.39999 234.3C-3.10001 246.8 -3.10001 267.1 9.39999 279.6L121.4 391.6C133.9 404.1 154.2 404.1 166.7 391.6C179.2 379.1 179.2 358.8 166.7 346.3L77.3 257L166.7 167.6C179.2 155.1 179.2 134.8 166.7 122.3Z' />
            </svg>
          </Link>
          <Link to={link} target='_blank'>
            <svg width='512' height='512' viewBox='0 0 512 512' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M502.285 159.704L268.285 3.704C260.298 -1.211 251.774 -1.256 243.714 3.704L9.714 159.704C3.714 163.703 0 170.847 0 177.989V333.988C0 341.131 3.714 348.274 9.715 352.274L243.715 508.296C251.702 513.211 260.226 513.256 268.286 508.296L502.286 352.274C508.286 348.275 512.001 341.131 512.001 333.988V177.989C512 170.847 508.286 163.703 502.285 159.704ZM278 63.131L450.286 177.989L373.429 229.418L278 165.703V63.131ZM234 63.131V165.703L138.571 229.418L61.714 177.989L234 63.131ZM44 219.132L99.143 255.989L44 292.846V219.132ZM234 448.847L61.714 333.989L138.571 282.56L234 346.275V448.847ZM256 307.989L178.285 255.989L256 203.989L333.715 255.989L256 307.989ZM278 448.847V346.275L373.429 282.56L450.286 333.989L278 448.847ZM468 292.846L412.857 255.989L468 219.132V292.846Z' />
            </svg>
          </Link>
        </Links>
        <div className='num'>{`${index + 1}`.padStart(2, '0')}</div>
        <img src={image} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  --items: 98;
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
  box-shadow: 0 10px 50px 10px ${({ theme }) => theme.carouselCardShadow};
  background: black;
  pointer-events: all;
  cursor: pointer;
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
    font-family: var(--f-secondary);

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
    max-width: 90%;
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

  @media (max-width: 500px) {
    --x: calc(var(--active) * 800% * 0.25);
    --y: calc(var(--active) * 200% * 4);
    --rot: calc(var(--active) * 120deg * 1);
  }
`;

const Links = styled(Buttons)`
  top: 20px;
  opacity: 0.75;
`;

const Link = styled(Button)`
  width: 25px !important;
  height: 25px !important;

  svg {
    width: 12px;
    height: 12px;
  }
`;
