import { styled } from 'styled-components';

import { dataStore } from '../../../store/dataStore';

export const Layout = () => {
  const { tabs, tab, setTab } = dataStore((state) => ({ tabs: Object.keys(state.data), tab: state.tab, setTab: state.setTab }));

  const handleClick = (e) => {
    setTab(`${e.target.innerText}`.toLowerCase());
  };

  return (
    <Container className='layout'>
      <Box className='box'>
        {tabs.map((t, index) => (
          <Line key={`data-tabs-${index}-${t}`} $active={t === tab} onClick={handleClick}>
            {t}
          </Line>
        ))}
      </Box>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 90px;
    width: 10px;
    height: 100%;
    border: 1px solid var(--c-font-primary);
    border-top: none;
    border-bottom: none;
    opacity: 0.15;
  }
`;

const Box = styled.div`
  position: absolute;
  bottom: 0;
  left: 30px;
  transform-origin: 0% 10%;
  transform: rotate(-90deg);
`;

const Line = styled.p`
  color: var(--c-font-primary);
  font-size: ${({ $active }) => `${$active ? 0.75 : 0.6}rem`};
  line-height: 1.4;
  text-transform: uppercase;
  opacity: ${({ $active }) => ($active ? 0.65 : 0.4)};
  cursor: ${({ $active }) => !$active && 'pointer'};
  transition: all 0.25s ease-in-out;

  &:hover {
    opacity: 0.65;
  }
`;
