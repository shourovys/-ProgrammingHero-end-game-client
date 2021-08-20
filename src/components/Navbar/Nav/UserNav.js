import React from "react";
import { Link } from "react-router-dom";
import { NavItemContainer } from "../Navbar.styles";

const UserNav = () => {
  return (
    <NavItemContainer>
      <Link to="/">Home</Link>
      <Link to="/orders">My Orders</Link>
      <a href="#services">Services</a>
      <Link to="">Log out</Link>
    </NavItemContainer>
  );
};

export default UserNav;
