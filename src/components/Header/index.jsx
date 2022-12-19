import React from "react";
import { css } from "styled-components";
import Logo from "../Logo";
import UserIcon from "../Icons/UserIcon";
import { HeaderCont, Navbar, NavItem, NavLink, NavList } from "./style";
import colors from "../../constants/colors";

const userIconCss = css`
  &:hover {
    * {
      transition: 0.1s all;
      cursor: pointer;
      fill: ${colors.white70};
    }
  }
`;

const Header = () => {
  return (
    <HeaderCont>
      <Logo height="70%" width="100px" corpo white />
      <Navbar>
        <NavList>
          <NavItem>
            <NavLink to="/inicio" end>
              Inicio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/productos" end>
              Productos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/clientes" end>
              Clientes
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/ventas" end>
              Ventas
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/ordencompra" end>
              Orden de Compras
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/formpaciente" end>
              Ingreso de Clientes
            </NavLink>
          </NavItem>
        </NavList>
      </Navbar>
      <UserIcon css={userIconCss} />
    </HeaderCont>
  );
};

export default Header;
