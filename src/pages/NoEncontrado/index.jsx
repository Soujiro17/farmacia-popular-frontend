import React from "react";
import HeaderLayout from "../../layouts/HeaderLayout/HeaderLayout";
import { Container, ImgNoEncontrado, Title } from "./style";

const NoEncontrado = () => {
  return (
    <HeaderLayout>
      <Container>
        <ImgNoEncontrado src="/no-encontrado.png" alt="no-encontrado" />
        <Title>Página no encontrada</Title>
      </Container>
    </HeaderLayout>
  );
};

export default NoEncontrado;
