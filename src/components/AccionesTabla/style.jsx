import styled from "styled-components";
import colors from "../../constants/colors";

export const Container = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  justify-content: center;
`;

export const Circulos = styled.section`
  border-radius: 50%;
  height: 1rem;
  width: 1rem;
  cursor: pointer;
  transition: 0.2s all;

  &.delete {
    background-color: ${colors.red};
  }

  &.go {
    background-color: ${colors.green};
  }

  &.edit {
    background-color: ${colors.blue};
  }

  &:hover {
    scale: 1.1;
  }
`;
