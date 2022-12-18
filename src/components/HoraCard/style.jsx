import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, 50%);
  grid-template-areas:
    "dia dia"
    "diaNum mesYAnio";
`;

export const Span = styled.span`
  grid-area: ${(props) => props.gridArea};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  &.dia {
    font-size: calc(0.7rem + 3vw);
  }

  &.mes {
    font-size: calc(0.7rem + 1vw);
  }

  &.diaNum {
    font-size: calc(0.7rem + 5vw);
    transform: translateY(-10px);
  }
  &.anio {
    font-size: calc(0.7rem + 2vw);
  }
`;

export const MesYAnioContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: ${(props) => props.gridArea};
  padding-right: 3rem;
`;
