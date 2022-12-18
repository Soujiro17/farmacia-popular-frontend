import styled, { css } from "styled-components";
import colors from "../../constants/colors";
import { background } from "../../constants/styles";

const contentCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled.div`
  ${background}
  min-height: 100vh;
  position: relative;
  padding-bottom: 80px;
`;

export const MainContent = styled.main`
  padding: 3rem;
  ${(props) => (props.mantenimiento ? contentCenter : "")}
`;

export const ImgMantenimiento = styled.img``;

export const Title = styled.h1`
  color: ${colors.white100};
`;
