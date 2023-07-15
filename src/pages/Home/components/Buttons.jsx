import { styled } from 'styled-components';

export const Buttons = ({ children, ...props }) => {
  return <Container className='social' {...props}>{children}</Container>;
};

const Container = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 20px;
  right: 25px;
  color: var(--c-font-primary);
  display: flex;
  flex-direction: row;
  gap: 5px;

  svg {
    --fill: var(--c-font-primary);
    width: 35px;
    height: 35px;
  }
`;
