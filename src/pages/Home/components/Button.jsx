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
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid var(--c-font-primary);
  overflow: hidden;
`;