import styled from "styled-components";
import { NavLink as NL } from "react-router-dom";
import colors from "../../constants/colors";

export const HeaderCont = styled.header`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 2rem;
  padding-right: 2rem;
  border-bottom: 1px solid ${colors.white100};
`;

export const Navbar = styled.nav`
  height: 100%;
`;

export const NavList = styled.ul`
  margin: 0%;
  padding: 0%;
  height: 100%;
  display: flex;
  gap: 2rem;
`;

export const NavItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  .active {
    text-decoration: underline;
    text-underline-offset: 0.5rem;
  }
`;

export const NavLink = styled(NL)`
  font-size: calc(1.2rem + 0.4vw);
  color: ${colors.white100};
  text-decoration: none;
  transition: 0.2s all;

  &:hover {
    color: ${colors.white70};
  }
`;
