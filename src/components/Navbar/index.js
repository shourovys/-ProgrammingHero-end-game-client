import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../images/logo-blue.png";
import { Container, Logo, MainButton } from "../../style/common";
import {
  HideAfterTabletL,
  ShowAfterMobile,
  ShowAfterTabletL
} from "../../style/display";
import Hamburger from "./Hamburger";
import AdminNav from "./Nav/AdminNav";
import PublicNav from "./Nav/PublicNav";
import UserNav from "./Nav/UserNav";
import {
  Header,
  MenuContainer,
  NavContainer,
  NavItemContainer
} from "./Navbar.styles";
const Navbar = () => {
  const email = useSelector((state) => state.user?.userInfo?.email);
  const isAdmin = useSelector((state) => state.user?.userInfo?.isAdmin);

  return (
    <>
      <Header>
        <Container>
          <MenuContainer>
            <Link to="/">
              <Logo src={logo} color="blue" />
            </Link>
            <NavContainer>
              <ShowAfterTabletL>
                <NavItemContainer>
                  {!email && !isAdmin && <PublicNav />}
                  {email && !isAdmin && <UserNav />}
                  {email && isAdmin && <AdminNav />}
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
