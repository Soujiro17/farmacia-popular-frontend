import styled from "styled-components";
import { background } from "../../constants/styles";

export const Container = styled.div`
  ${background}
  min-height: 100vh;
  position: relative;
  padding-bottom: 80px;
`;

export const MainContent = styled.main`
  padding: 3rem;
`;
