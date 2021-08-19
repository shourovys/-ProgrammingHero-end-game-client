import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { default as React } from "react";
import logo from "../../../../images/logo-blue.png";
import { Logo } from "../../../../style/common";
import {
  BoxIconWrapper,
  HamburgerItem,
  HamburgerItemContainer,
  HamburgerMenuContainer,
  SocialIconContainer,
  SocialIconWrapper
} from "./Drawer.styles";

const useStyles = makeStyles({
  list: {
    width: 280,
  },
  fullList: {
    width: "auto",
  },
});

const LeftDrawer = ({ toggleDrawer }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <HamburgerMenuContainer>
        <Logo color="blue" src={logo} alt="logo" />

        <HamburgerItemContainer>
          <HamburgerItem href="#">
            Home
            <BoxIconWrapper>
              <i className="fa fa-chevron-right" />
            </BoxIconWrapper>
          </HamburgerItem>
          <HamburgerItem href="#why-us">
             Why Us
            <BoxIconWrapper>
              <i className="fa fa-chevron-right" />
            </BoxIconWrapper>
          </HamburgerItem>
          <HamburgerItem href="#services">
            Services
            <BoxIconWrapper>
              <i className="fa fa-chevron-right" />
            </BoxIconWrapper>
          </HamburgerItem>
          <HamburgerItem href="#portfolio">
            Portfolio
            <BoxIconWrapper>
              <i className="fa fa-chevron-right" />
            </BoxIconWrapper>
          </HamburgerItem>
          <HamburgerItem href="#specializations">
            Specializations
            <BoxIconWrapper>
              <i className="fa fa-chevron-right" />
            </BoxIconWrapper>
          </HamburgerItem>
          <HamburgerItem href="#specializations">
            Admin
            <BoxIconWrapper>
              <i className="fa fa-chevron-right" />
            </BoxIconWrapper>
          </HamburgerItem>
        </HamburgerItemContainer>

        <SocialIconContainer>
          <SocialIconWrapper>
            <i className="fab fa-facebook-f"></i>
          </SocialIconWrapper>
          <SocialIconWrapper>
            <i className="fab fa-twitter"></i>
          </SocialIconWrapper>
          <SocialIconWrapper>
            <i className="fab fa-linkedin-in"></i>
          </SocialIconWrapper>
          <SocialIconWrapper>
            <i className="fab fa-instagram"></i>
          </SocialIconWrapper>
        </SocialIconContainer>
      </HamburgerMenuContainer>
    </div>
  );
};

export default LeftDrawer;
