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
  NavContainer
} from "./Navbar.styles";
const Navbar = () => {
  const {username,isAdmin} = useSelector(state => state.user?.userInfo)

  return (
    <>
      <Header>
        <Container>
          <MenuContainer>
            <Link to='/'>
              <Logo src={logo} color="blue" />
            </Link>
            <NavContainer>
              <ShowAfterTabletL>
                {
                  !username && !isAdmin && <PublicNav/>
                }
                {
                  username && !isAdmin && <UserNav/>
                }
                {
                  username && isAdmin && <AdminNav/>
                }
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
