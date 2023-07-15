import { Link } from 'react-router-dom';
import { css, styled } from 'styled-components';

import { dataStore } from '../../../store/dataStore';

export const Logo = () => {
  const { logoPosition } = dataStore((state) => ({ logoPosition: state.logoPosition, }));
  return (
    <Container to='/' className='logo' $position={logoPosition}>
      <svg width='931' height='925' viewBox='0 0 931 925' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect y='325' width='277' height='275' />
        <rect x='327' y='325' width='277' height='275' />
        <rect x='654' width='277' height='600' />
        <rect x='326' width='579' height='275' />
        <rect x='327' y='650' width='277' height='275' />
      </svg>
    </Container>
  );
};

const Container = styled(Link)`
  display: ${({ $position }) => !$position && 'none'};
  
  ${({ $position }) => $position && css`
    position: absolute;
    z-index: 10;
    width: 30px;
    height: 30px;
    background: var(--c-font-primary);
    border-radius: 50%;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: all;
    overflow: hidden;
    padding: 0.1em;
    z-index: 999999;
    
    svg {
      width: 20px;
      height: 20px;
      
      rect {
        fill: var(--c-accent-primary);
      }
    }
  `}

  ${({ $position }) => $position?.includes('top') && css`top: 28px; `}
  ${({ $position }) => $position?.includes('bottom') && css`bottom: 28px; `}
  ${({ $position }) => $position?.includes('right') && css`right: 28px; `}
  ${({ $position }) => $position?.includes('left') && css`left: 28px; `}
`;
