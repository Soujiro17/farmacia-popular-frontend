import React from "react";
import GrayCard from "../GrayCard";
import InputWithIcon from "../InputWithIcon";
import { Container, ContainerItem, ItemsWrapper } from "./style";

const Dashboard = () => {
  return (
    <GrayCard gridArea="dashboard">
      <ItemsWrapper>
        <InputWithIcon icon="/icons/search.svg" height="8%" />
        <Container>
          <ContainerItem>Item</ContainerItem>
          <ContainerItem>Item</ContainerItem>
          <ContainerItem>Item</ContainerItem>
          <ContainerItem>Item</ContainerItem>
          <ContainerItem>Item</ContainerItem>
          <ContainerItem>Item</ContainerItem>
          <ContainerItem>Item</ContainerItem>
          <ContainerItem>Item</ContainerItem>
          <ContainerItem>Item</ContainerItem>
          <ContainerItem>Item</ContainerItem>
          <ContainerItem>Item</ContainerItem>
        </Container>
      </ItemsWrapper>
    </GrayCard>
  );
};

export default Dashboard;
