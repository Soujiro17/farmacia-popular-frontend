import styled from "styled-components";
import colors from "../../constants/colors";
import Button from "../../shared/Button";

export const ButtonContainer = styled.div`
  text-align: center;
`;

export const AgregarProducto = styled(Button)`
  background-color: ${colors.green};
  color: ${colors.white100};
  padding-left: 2rem;
  padding-right: 2rem;
  cursor: pointer;
  transition: 0.2s all;
  font-size: 1.2rem;
  height: 3rem;

  &:hover {
    background-color: ${colors.white70};
  }
`;
