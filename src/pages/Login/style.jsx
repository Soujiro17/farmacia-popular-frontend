import styled from "styled-components";
import colors from "../../constants/colors";
import { background } from "../../constants/styles";
import Button from "../../shared/Button";

export const Container = styled.div`
  ${background}
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  height: 60%;
  width: 50%;
  min-width: 350px;
  background-color: ${colors.white100};
  border-radius: 0.5rem;
  display: flex;
`;

export const CardLeft = styled.section`
  width: 50%;
  padding: 1rem;
`;

export const CardRight = styled.section`
  width: 50%;
  padding: 1rem;
  border-left: 1px solid ${colors.black100};
  background-image: url("/valparaiso.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 1;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    height: 100%;
    z-index: -1;
    width: 100%;
    background-color: ${colors.black20};
    border-radius: 0.5rem;
  }
`;

export const FormLogin = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const LoginButton = styled(Button)`
  width: 100%;
  background-color: ${colors.blue};
  height: 3rem;
`;

export const UserImg = styled.img`
  height: 40%;
`;
