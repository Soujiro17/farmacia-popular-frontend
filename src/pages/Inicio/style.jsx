import styled from "styled-components";
import colors from "../../constants/colors";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 22% 74%;
  grid-template-rows: 200px 1fr 150px;
  grid-template-areas:
    "hora dashboard"
    "estados dashboard"
    "logo dashboard";
  column-gap: 4%;
  row-gap: 2rem;
  color: ${colors.white100};
`;

export const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
