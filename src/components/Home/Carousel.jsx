import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { CarouselCard } from './CarouselCard';
import { dataStore } from '../../store/dataStore';

export const Carousel = () => {
  const { data, tab } = dataStore((state) => ({ data: state.data, tab: state.tab }));
  const refs = useRef([]);
  const [progress, setProgress] = useState(26),
    [startX, setStartX] = useState(0),
    [active, setActive] = useState(0),
    [isDown, setIsDown] = useState(false);
  const speedWheel = 0.01,
    speedDrag = -0.1,
    gap = 10;
  const navigate = useNavigate();

  const displayItems = (item, index, active) => {
    const zIndex = refs.current?.map((_, i) => (index === i ? refs.current.length : refs.current.length - Math.abs(index - i)));
    item?.style.setProperty('--zIndex', zIndex);
    item?.style.setProperty('--active', ((index - active) / refs.current.length) * gap);
  };

  const handleWheel = (e) => {
    const wheelProgress = e.deltaY * speedWheel;
    setProgress((prev) => prev + wheelProgress);
  };

  const handleMouseMove = (e) => {
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

  const handleDoubleClick = (path) => {
    navigate(path);
  }

  const handleKeyDown = ({ code }) => {
    const direction = (code === 'ArrowRight' || code === 'ArrowDown') ? 1 : (code === 'ArrowLeft' || code === 'ArrowUp') ? -1 : 0;
    setProgress((prev) => prev + direction);
  }

  // Event listener for mouse wheel
  useEffect(() => {
    document.addEventListener('mousewheel', handleWheel);
    return () => { document.removeEventListener('mousewheel', handleWheel); };
  }, []);

  // Event listener for arrow key press
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => { document.removeEventListener('keydown', handleKeyDown); };
  }, []);

  useEffect(() => { setProgress((prev) => Math.max(0, Math.min(prev, 100))); }, [active, progress, startX, isDown]);

  useEffect(() => { setActive(Math.floor((progress / 100) * (refs.current.length - 1))); }, [progress]);

  useEffect(() => { refs?.current.length && refs.current.forEach((item, index) => displayItems(item, index, active)); }, [active, tab]);

  return (
    <Container className='carousel'>
      {data[tab]?.map(({ path, ...ex }, index) => (
        <CarouselCard
          key={`carousel-card-${index}`}
          index={index}
          refs={refs}
          {...ex}
          onClick={() => { handleClick(index + 1); }}
          onDoubleClick={() => { handleDoubleClick(path); }}
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
