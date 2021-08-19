import React from "react";
import logo from "../../images/logo-blue.png";
import { Container, Logo, MainButton } from "../../style/common";
import {
  HideAfterTabletL,
  ShowAfterMobile,
  ShowAfterTabletL
} from "../../style/display";
import Hamburger from "./Hamburger";
import {
  Header,
  MenuContainer,
  NavContainer,
  NavItem,
  NavItemContainer
} from "./Navbar.styles";
const Navbar = () => {
  return (
    <>
      <Header >
        <Container>
          <MenuContainer>
            <Logo src={logo} color='blue'/>

            <NavContainer>
              <ShowAfterTabletL>
                <NavItemContainer>
                  <NavItem href="#" >
                    Home
                  </NavItem>
                  <NavItem href="#services" >
                    Services
                  </NavItem>
                  <NavItem href="#portfolio" >
                    Portfolio
                  </NavItem>
                  <NavItem href="#specializations" >
                    Specializations
                  </NavItem>
                  <NavItem href="#specializations" >
                    Admin
                  </NavItem>
                </NavItemContainer>
              </ShowAfterTabletL>

              <ShowAfterMobile>
              <a href="#services">
                <MainButton href="#services">
                    <i className="fas fa-chevron-right"></i> &nbsp; Gat A
                    Service
                </MainButton>
                </a>
              </ShowAfterMobile>

              <HideAfterTabletL>
                <Hamburger />
              </HideAfterTabletL>
            </NavContainer>
          </MenuContainer>
        </Container>
      </Header>
    </>
  );
};

export default Navbar;
