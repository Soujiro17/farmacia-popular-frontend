import styled from "styled-components";

const Input = styled.input`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "3rem"};
  border-radius: 0.5rem;
  padding-left: 1rem;
`;

export default Input;
