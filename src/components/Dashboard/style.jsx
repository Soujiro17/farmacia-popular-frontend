import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../constants/colors";

export const Container = styled.section`
  height: 90%;
  display: grid;
  grid-template-columns: repeat(3, minmax(30%, 1fr));
  grid-template-rows: repeat(2, 48%);
  overflow: hidden;
  gap: 2%;
`;

export const ItemsWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2%;
`;

export const ContainerItem = styled.section`
  height: 100%;
  width: 100%;
  background-color: ${colors.white30};
  border-radius: 0.4rem;
  padding: 1rem;
  position: relative;
  z-index: 5;

  &::before {
    position: absolute;
    inset: 0;
    margin: auto;
    height: 95%;
    width: 95%;
    content: "";
    z-index: -1;
    border: 2px solid ${colors.white100};
  }

  &.warning {
    background-color: ${colors.red};
  }

  &.uno {
    background-color: #ce0061;
  }

  &.dos {
    background-color: #15a7e1;
  }

  &.tres {
    background-color: #6ab444;
  }

  &.cuatro {
    background-color: #b3bd33;
  }

  &.cinco {
    background-color: #ff506d;
  }
`;

export const AlertaText = styled.p`
  text-align: center;
  font-size: calc(1.2rem + 0.4vw);
  margin: 0%;
  &:first-of-type {
    margin-top: 2rem;
  }
`;

export const LinkToAlertas = styled(Link)`
  color: ${colors.white100};
`;