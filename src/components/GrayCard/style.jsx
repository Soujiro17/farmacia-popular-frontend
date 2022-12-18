import styled from "styled-components";
import colors from "../../constants/colors";

const Container = styled.div`
  background-color: ${colors.white20};
  grid-area: ${(props) => props.gridArea};
  border-radius: 0.4rem;
  padding: 1rem;
`;

export default Container;
