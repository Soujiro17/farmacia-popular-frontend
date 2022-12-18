import styled from "styled-components";
import colors from "../constants/colors";

const Input = styled.input`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "3rem"};
  border-radius: 0.5rem;
  padding-left: 1rem;
  border: 1px solid ${colors.black40};
`;

export default Input;
