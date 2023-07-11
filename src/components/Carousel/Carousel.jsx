import { useEffect } from 'react';
import { styled } from 'styled-components';

import { CarouselCard } from './CarouselCard';
import { dataStore } from '../../store/dataStore';

export const Carousel = () => {
  const data = dataStore((state) => state.data);
  const wideCardMultiplier = 5;

  useEffect(() => {
    /*--------------------
    Vars
    --------------------*/
    let progress = 50;
    let startX = 0;
    let active = 0;
    let isDown = false;

    /*--------------------
    Contants
    --------------------*/
    const speedWheel = 0.02;
    const speedDrag = -0.1;

    /*--------------------
    Get Z
    --------------------*/
    const getZindex = (array, index) => array.map((_, i) => (index === i ? array.length : array.length - Math.abs(index - i)));

    /*--------------------
    Items
    --------------------*/
    const $items = document.querySelectorAll('.carousel-item');
    const $cursors = document.querySelectorAll('.cursor');

    const displayItems = (item, index, active) => {
      const zIndex = getZindex([...$items], active)[index];
      item.style.setProperty('--zIndex', zIndex);
      item.style.setProperty('--active', ((index - active) / $items.length) * wideCardMultiplier);
    };

    /*--------------------
    Animate
    --------------------*/
    const animate = () => {
      progress = Math.max(0, Math.min(progress, 100));
      active = Math.floor((progress / 100) * ($items.length - 1));

      $items.forEach((item, index) => displayItems(item, index, active));
    };
    animate();

    /*--------------------
    Click on Items
    --------------------*/
    $items.forEach((item, i) => {
      item.addEventListener('click', () => {
        progress = (i / $items.length) * 100 + 10;
        animate();
      });
    });

    /*--------------------
    Handlers
    --------------------*/
    const handleWheel = (e) => {
      const wheelProgress = e.deltaY * speedWheel;
      progress = progress + wheelProgress;
      animate();
    };

    const handleMouseMove = (e) => {
      if (e.type === 'mousemove') {
        $cursors.forEach(($cursor) => {
          $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
      }
      if (!isDown) return;
      const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const mouseProgress = (x - startX) * speedDrag;
      progress = progress + mouseProgress;
      startX = x;
      animate();
    };

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    };

    const handleMouseUp = () => {
      isDown = false;
    };

    /*--------------------
    Listeners
    --------------------*/
    document.addEventListener('mousewheel', handleWheel);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchstart', handleMouseDown);
    document.addEventListener('touchmove', handleMouseMove);
    document.addEventListener('touchend', handleMouseUp);
  }, []);

  return (
    <Container>
      <div className='carousel'>
        {data.map((ex, index) => (
          <CarouselCard key={`carousel-card-${index}`} index={index} {...ex} />
        ))}
      </div>
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
