import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Button = ({ children, ...props }) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
};

const Container = styled(Link)`
  width: 35px;
  height: 35px;
  display: flex;
  flex-grow: 0;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1.5px solid var(--c-font-primary);
  overflow: hidden;
  transition: 0.5s ease-in;

  &:hover {
    transform: scale(1.05);
  }
`;