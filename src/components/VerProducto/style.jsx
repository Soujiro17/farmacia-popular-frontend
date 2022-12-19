import styled from "styled-components";
import colors from "../../constants/colors";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  max-height: 100%;
  min-height: 100%;
  border-right: 1px solid ${colors.black100};
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    min-height: 100%;
    min-width: 100%;
    max-height: 100%;
  }
`;

export const RightSide = styled.div`
  height: 100%;
  width: 50%;
  padding: 1rem;
`;

export const Title = styled.h1`
  font-size: calc(1.2rem + 0.4vw);
  margin: 0%;
`;

export const Text = styled.p`
  margin: 0%;

  &.precio {
    margin: 1rem 0 1rem 0;
    font-size: 1.2rem;
    font-weight: bolder;
  }

  &.cantidad {
    font-size: 1.2rem;
    width: 20px;
    text-align: center;
  }
`;

export const Line = styled.hr`
  height: 2px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: ${colors.black100};
`;

export const CarritoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Circulo = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background-color: ${colors.black20};
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    background-color: ${colors.black30};
  }
`;
