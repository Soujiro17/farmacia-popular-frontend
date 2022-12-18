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
`;
