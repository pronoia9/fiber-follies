import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

import { CarouselCard } from '..';
import { dataStore } from '../../../store/dataStore';

export const Carousel = () => {
  const { data, tab } = dataStore((state) => ({
    data: state.data,
    tab: state.tab,
  }));
  const refs = useRef([]);
  // TODO: Use store for active and progress
  const [progress, setProgress] = useState(79),
    [active, setActive] = useState(0),
    [startX, setStartX] = useState(0),
    [isDown, setIsDown] = useState(false);
  const speedWheel = 0.01, speedDrag = -0.1, gap = 10;

  const getZindex = (index) => refs.current.map((_, i) => (index === i ? refs.current.length : refs.current.length - Math.abs(index - i)));

  const displayItems = (item, index, active) => {
    const zIndex = getZindex(active)[index];
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
    const calc = (index * 100) / data[tab]?.length;
    setProgress(calc + 1);
  };

  const handleKeyDown = ({ code }) => {
    const direction = (code === 'ArrowRight' || code === 'ArrowDown') ? 1 : (code === 'ArrowLeft' || code === 'ArrowUp') ? -1 : 0;
    setProgress((prev) => prev + direction);
  }

  useEffect(() => {
    setActive(0);
    setProgress(0);
    // refs.current = refs.current.filter((d) => d !== null);
  }, [tab]);
  
  useEffect(() => {
    setProgress(Math.max(0, Math.min(progress, 100)));
    setActive(Math.floor((progress / 100) * (data[tab].length - 1)));
  }, [progress]);
  
  useEffect(() => { refs?.current.length && !isNaN(active) && refs.current.forEach((item, index) => displayItems(item, index, active)); }, [active, tab]);
  
  // useEffect(() => { console.log('len:', data[tab].length, ' |  active:', active, ' |  progress:', progress); }, [active, progress, tab, refs]);

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

  return (
    <Container className='carousel'>
      {data[tab]?.map((item, index) => (
        <CarouselCard
          key={`carousel-card-${index}`}
          index={index}
          refs={refs}
          {...item}
          onClick={() => { handleClick(index); }}
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
