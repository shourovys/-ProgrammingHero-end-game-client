import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { default as React } from "react";
import { useSelector } from "react-redux";
import logo from "../../../../images/logo-blue.png";
import { Logo } from "../../../../style/common";
import AdminNav from "../../Nav/AdminNav";
import PublicNav from "../../Nav/PublicNav";
import UserNav from "../../Nav/UserNav";
import {
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
  const email = useSelector((state) => state.user?.userInfo?.email);
  const isAdmin = useSelector((state) => state.user?.userInfo?.isAdmin);
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
          {!email && !isAdmin && <PublicNav />}
          {email && !isAdmin && <UserNav />}
          {email && isAdmin && <AdminNav />}
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
