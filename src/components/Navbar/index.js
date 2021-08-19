import React from "react";
import { useScroll } from "../../hooks/useScroll";
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
  const { scrollY } = useScroll();
  return (
    <>
      <Header scrollY={scrollY}>
        <Container>
          <MenuContainer>
            <Logo color={scrollY > 45 ? "blue" : ""} src={logo} />

            <NavContainer>
              <ShowAfterTabletL>
                <NavItemContainer>
                  <NavItem>Home</NavItem>
                  <NavItem>Page</NavItem>
                  <NavItem>Services</NavItem>
                  <NavItem>Blogs</NavItem>
                  <NavItem>Contact Us</NavItem>
                </NavItemContainer>
              </ShowAfterTabletL>

              <ShowAfterMobile>
                <MainButton>
                  {" "}
                  <i className="fas fa-chevron-right"></i> &nbsp; Gat A Service
                </MainButton>
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
