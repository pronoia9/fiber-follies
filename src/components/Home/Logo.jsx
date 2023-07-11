import { styled } from "styled-components";

export const Logo = () => {
  return (
    <Container href='https://www.google.com' target='_blank' className='logo'>
      T
    </Container>
  );
};

const Container = styled.a`
  position: absolute;
  z-index: 2;
  top: 28px;
  right: 28px;
  width: 30px;
  height: 30px;
  background: var(--c-font-primary);
  border-radius: 50%;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--f-secondary);
  pointer-events: all;
  color: var(--c-accent-primary);
  text-decoration: none;
  font-size: 20px;
  overflow: hidden;
  padding-bottom: 0.1em;
`;