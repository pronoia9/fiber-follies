import { styled } from 'styled-components';
import { Scene } from '.';

export const GltfAnimationsTiedToScroll = () => {
  return (
    <Container>
      <Wrapper>
        <Scene />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  user-select: none;
  overflow: auto;
`;

const Wrapper = styled(Container)`
  position: fixed;
  overflow: hidden;
  overscroll-behavior-y: none;
  background: ${({ theme }) => theme.bgPrimary};
`;
