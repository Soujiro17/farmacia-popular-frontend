import styled from "styled-components";
import colors from "../constants/colors";

const Button = styled.button`
  height: ${(props) => props.height || "2.5rem"};
  position: relative;
  border-radius: 0.5rem;
  margin: 0%;
  padding: 0%;
  z-index: 1;
  &::before {
    position: absolute;
    border-radius: 0.3rem;
    height: 80%;
    width: 98%;
    inset: 0;
    margin: auto;
    content: "";
    z-index: -1;
    border: 2px solid ${colors.white100};
  }
`;

export default Button;
