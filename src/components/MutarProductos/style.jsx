import styled, { css } from "styled-components";
import colors from "../../constants/colors";
import Button from "../../shared/Button";

const borderRadius = css`
  border-radius: 0.3rem;
`;

export const ValuesContainer = styled.div`
  background-color: ${colors.black20};
  height: 87%;
  ${borderRadius}
  padding: 1rem;
`;

export const Title = styled.h1`
  margin-bottom: 0;
`;
export const SubTitle = styled.p`
  margin-top: 0%;
`;

export const Form = styled.form`
  width: 70%;
  height: 100%;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div``;

export const FormWrapper = styled.div`
  display: flex;
`;

export const RightContainer = styled.div`
  width: 30%;
  height: 100%;
  min-width: 30%;
  min-height: 100%;
  ${borderRadius}
`;

export const ImgProducto = styled.img`
  height: 70%;
  min-height: 70%;
  min-width: 100%;
  width: 100%;
  object-fit: cover;
  background-color: ${colors.white100};
  padding: 1rem;
  ${borderRadius}
`;

export const ButtonWrapper = styled.div`
  text-align: center;
`;

export const MutarButton = styled(Button)`
  width: 40%;
  color: ${colors.white100};
  cursor: pointer;
  transition: 0.2s all;

  &.update {
    background-color: ${colors.blue};
  }

  &.agregar {
    background-color: ${colors.green};
  }

  &:hover {
    background-color: ${colors.white30};
    color: ${colors.black100};
  }
`;
