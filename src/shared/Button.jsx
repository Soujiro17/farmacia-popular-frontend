import styled from "styled-components";
import colors from "../constants/colors";

const Button = styled.button`
  height: ${(props) => props.height || "2.5rem"};
  position: relative;
  border-radius: 0.5rem;
  margin: 0%;
  padding: 0%;
  z-index: 1;
  border: 1px solid ${colors.black100};
  transition: 0.2s all;

  &::before {
    position: absolute;
    border-radius: 0.3rem;
    height: 90%;
    width: 98%;
    inset: 0;
    margin: auto;
    content: "";
    z-index: -1;
    border: 2px solid ${colors.white100};
    transform: translateY(-1px);
  }

  &:hover {
    background-color: ${colors.white100};
    color: ${colors.black100};
  }
`;

export default Button;
