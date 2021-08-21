import React from "react";
import { Link } from "react-router-dom";

const PublicNav = () => {
  return (
    <>
      <Link to="/#">Home</Link>
      <a href="#services">Services</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#specializations">Specializations</a>
      <Link to="/auth/login">Log In</Link>
    </>
  );
};

export default PublicNav;
