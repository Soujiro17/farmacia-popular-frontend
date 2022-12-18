import React from "react";
import Dashboard from "../../components/Dashboard";
import EstadosProductos from "../../components/EstadosProductos";
import GrayCard from "../../components/GrayCard";
import HoraCard from "../../components/HoraCard";
import Logo from "../../components/Logo";
import HeaderLayout from "../../layouts/HeaderLayout/HeaderLayout";
import { Grid, LogoWrapper } from "./style";

const Inicio = () => {
  return (
    <HeaderLayout>
      <Grid>
        <HoraCard />
        <EstadosProductos />
        <GrayCard gridArea="logo">
          <LogoWrapper>
            <Logo width="80%" />
          </LogoWrapper>
        </GrayCard>
        <Dashboard />
      </Grid>
    </HeaderLayout>
  );
};

export default Inicio;
