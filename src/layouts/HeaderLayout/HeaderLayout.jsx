import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container, MainContent } from "./style";

const HeaderLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </Container>
  );
};

export default HeaderLayout;
