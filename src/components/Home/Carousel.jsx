import { useEffect, useLayoutEffect, useState } from 'react';
import { styled } from 'styled-components';

import { CarouselCard } from './CarouselCard';
import { dataStore } from '../../store/dataStore';

export const Carousel = () => {
  const data = dataStore((state) => state.data);
  const [progress, setProgress] = useState(2),
    [startX, setStartX] = useState(0),
    [active, setActive] = useState(0),
    [isDown, setIsDown] = useState(false);
  const speedWheel = 0.01,
    speedDrag = -0.1,
    gap = 10;

  const getZindex = (array, index) => array.map((_, i) => (index === i ? array.length : array.length - Math.abs(index - i)));

  const $items = document.querySelectorAll('.carousel-item');

  const displayItems = (item, index, active) => {
    const zIndex = getZindex([...$items], active)[index];
    item.style.setProperty('--zIndex', zIndex);
    item.style.setProperty('--active', (index - active) / $items.length * gap);
  };

  const animate = () => {
    setProgress((prev) => Math.max(0, Math.min(prev, 100)));
    setActive(Math.floor((progress / 100) * ($items.length - 1)));
    $items.forEach((item, index) => displayItems(item, index, active));
  };

  const handleWheel = (e) => {
    const wheelProgress = e.deltaY * speedWheel;
    setProgress((prev) => prev + wheelProgress);
  };

  const handleMouseMove = (e) => {
    // TODO: move to app maybe? its the animated cursor
    // if (e.type === 'mousemove') {
    //   console.log('cursors', $cursors);
    //   $cursors.forEach(($cursor) => {
    //     $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    //   });
    // }
    if (!isDown) return;
    const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const mouseProgress = (x - startX) * speedDrag;
    setProgress((prev) => prev + mouseProgress);
    setStartX(x);
  };

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.clientX || (e.touches && e.touches[0].clientX) || 0);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleClick = (index) => {
    setProgress(index);
  };

  useEffect(() => {
    document.addEventListener('mousewheel', handleWheel);
    return () => { document.removeEventListener('mousewheel', handleWheel); };
  }, []);

  useEffect(() => {
    animate();
  }, [active, progress, startX, isDown]);

  return (
    <Container className='carousel'>
      {data.map((ex, index) => (
        <CarouselCard
          key={`carousel-card-${index}`}
          index={index}
          {...ex}
          onClick={() => { handleClick(index + 1); }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  z-index: 1;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
`;
