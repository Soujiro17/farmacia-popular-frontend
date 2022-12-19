import styled from "styled-components";
import colors from "../../constants/colors";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: ${colors.black50};
`;

export const ModalCard = styled.div`
  width: 70%;
  height: 80%;
  background-color: ${colors.white100};
  border-radius: 0.5rem;
  overflow-y: auto;
  padding: ${(props) => (props.disablePadding ? "0rem" : "1rem")};
`;
