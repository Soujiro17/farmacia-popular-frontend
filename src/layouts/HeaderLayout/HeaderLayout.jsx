import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container, ImgMantenimiento, MainContent, Title } from "./style";

const HeaderLayout = ({ children, mantenimiento = false }) => {
  return (
    <Container>
      <Header />
      <MainContent mantenimiento={mantenimiento}>
        {mantenimiento ? (
          <>
            <ImgMantenimiento src="/mantenimiento.png" alt="mantenimiento" />
            <Title>Página en mantenimiento. Disculpa las molestias</Title>
          </>
        ) : (
          children
        )}
      </MainContent>
      <Footer />
    </Container>
  );
};

export default HeaderLayout;
