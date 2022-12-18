import React from "react";
import GrayCard from "../GrayCard";
import InputWithIcon from "../InputWithIcon";
import Warning from "../Icons/Warning";
import {
  AlertaText,
  Container,
  ContainerItem,
  ItemsWrapper,
  LinkToAlertas,
} from "./style";
import colors from "../../constants/colors";

const Dashboard = () => {
  return (
    <GrayCard gridArea="dashboard">
      <ItemsWrapper>
        <InputWithIcon icon="/icons/search.svg" height="8%" />
        <Container>
          <ContainerItem className="warning">
            <Warning fill={colors.white100} height="50%" width="100%" />
            <AlertaText>Hay 30 unidades sin stock</AlertaText>
            <AlertaText>Hay 30 unidades con poco stock</AlertaText>
            <LinkToAlertas to="/">
              <AlertaText className="revisar">
                <strong>Revisar</strong>
              </AlertaText>
            </LinkToAlertas>
          </ContainerItem>
          <ContainerItem className="uno" />
          <ContainerItem className="dos" />
          <ContainerItem className="tres" />
          <ContainerItem className="cuatro" />
          <ContainerItem className="cinco" />
        </Container>
      </ItemsWrapper>
    </GrayCard>
  );
};

export default Dashboard;
