import React from "react";
import { Link } from "react-router-dom";
import { NavItemContainer } from "../Navbar.styles";

const AdminNav = () => {
  return (
    <NavItemContainer>
      <Link to="/">Home</Link>
      <Link to="/admin/orders">All Orders</Link>
      <Link to="/create/service">Add Service</Link>
      <Link to="">Log out</Link>
    </NavItemContainer>
  );
};

export default AdminNav;
