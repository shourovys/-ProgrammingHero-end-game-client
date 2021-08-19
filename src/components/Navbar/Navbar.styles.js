import styled from "styled-components";
import colors from "../../style/variables/colors";

export const Header = styled.header`
  /* background: ${({ scrollY }) => (scrollY > 20 ? colors.white : "transparent")}; */
  /* color: ${({ scrollY }) => (scrollY > 20 ? colors.dark : colors.white)}; */
  background-color: #fff;
  color: black;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  position: static;
  top: 0;
  z-index: 10;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;

export const MenuContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  z-index: 1;
`;

export const NavContainer = styled.nav`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  gap: 15px;
`;

export const NavItemContainer = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled.a`
  font-size: 15px;
  padding: 0px 15px;
  cursor: pointer;
  font-weight: 600;
  display: inline-block;
  position: relative;
  border-width: 0 0 0 1px;
  text-transform: capitalize;
  line-height: 1;
  line-height: 30px;
`;
