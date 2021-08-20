import React from "react";
import { Link } from "react-router-dom";
import { NavItemContainer } from "../Navbar.styles";

const PublicNav = () => {
  return (
    <NavItemContainer>
      <a href="#">Home</a>
      <a href="#services">Services</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#specializations">Specializations</a>
      <Link to="/auth/login">Log In</Link>
    </NavItemContainer>
  );
};

export default PublicNav;
