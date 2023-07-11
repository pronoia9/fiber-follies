import { styled } from 'styled-components';

export const Layout = () => {
  return (
    <Container className='layout'>
      <Box className='box'>
        High-end, full-service
        <br />
        visual content creation
        <br />
        for lifestyle branding.
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
`;

const Box = styled.div`
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
`;
