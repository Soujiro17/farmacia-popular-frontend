import React from "react";
import Header from "../../components/Header";
import { Container, MainContent } from "./style";

const HeaderLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      <MainContent>{children}</MainContent>
    </Container>
  );
};

export default HeaderLayout;
