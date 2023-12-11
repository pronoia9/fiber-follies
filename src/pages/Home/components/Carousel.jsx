import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

import { CarouselCard } from '..';
import { dataStore } from '../../../store/dataStore';
import { data } from '../../../store/constants';

export const Carousel = () => {
  const { tab, selected, setSelected } = dataStore((state) => ({
    tab: state.tab,
    selected: state.selected,
    setSelected: state.setSelected
  }));
  const refs = useRef([]);
  const [progress, setProgress] = useState(selected),
    [active, setActive] = useState(0),
    [startX, setStartX] = useState(0),
    [isDown, setIsDown] = useState(false);
  const speedWheel = 0.01,
    speedDrag = -0.1,
    gap = 10;

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
    setSelected(calc + 1);
    setProgress(calc + 1);
  };

  const handleKeyDown = ({ code }) => {
    const direction = code === 'ArrowRight' || code === 'ArrowDown' ? 1 : code === 'ArrowLeft' || code === 'ArrowUp' ? -1 : 0;
    setProgress((prev) => prev + direction);
  };

  useEffect(() => {
    setSelected(0);
    setActive(0);
    setProgress(0);
    // refs.current = refs.current.filter((d) => d !== null);
  }, [tab]);

  useEffect(() => {
    setProgress(Math.max(0, Math.min(progress, 100)));
    setActive(Math.floor((progress / 100) * (data[tab].length - 1)));
  }, [progress]);

  useEffect(() => {
    refs?.current.length && !isNaN(active) && refs.current.forEach((item, index) => displayItems(item, index, active));
  }, [active, tab]);

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

  // TODO: Enter key to initiate click functionality
  useEffect(() => {
    const enter = (e) => { console.log("is 'Enter key pressed?'", e.key === 'Enter' || e.keyCode === 13); };
    document.addEventListener('keypress', enter);
    return () => { document.removeEventListener('', enter); };
  }, []);

  // TODO: Number key to go to a specific slide
  useEffect(() => {
    const enter = (e) => { console.log('is a number pressed?', !isNaN(parseInt(e.key))); };
    document.addEventListener('keypress', enter);
    return () => { document.removeEventListener('', enter); };
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
