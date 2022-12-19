import styled from "styled-components";
import colors from "../../constants/colors";

export const PedidosEstados = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const EstadoContainer = styled.div`
  width: 250px;
  height: 3rem;
  border-radius: 0.5rem;
  color: ${colors.white100};
  background-color: ${colors.white30};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(1.2rem + 0.1vw);
  gap: 1rem;
  text-transform: uppercase;

  span {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 100%;
    background-color: ${colors.white60};
    display: flex;
    align-items: center;
    justify-content: center;

    &.preparacion {
      background-color: ${colors.red};
    }

    &.despacho {
      background-color: #ddff34;
    }
    &.transito {
      background-color: ${colors.blue};
    }
    &.entregado {
      background-color: ${colors.green};
    }
  }
`;
