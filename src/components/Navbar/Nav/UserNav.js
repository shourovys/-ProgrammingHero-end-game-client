import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../../redux/user/actions";
import { NavItemContainer } from "../Navbar.styles";

const UserNav = () => {
  const dispatch = useDispatch()
  return (
    <NavItemContainer>
      <Link to="/">Home</Link>
      <Link to="/orders">My Orders</Link>
      <a href="#services">Services</a>
      <Link onClick={()=>dispatch(logOut())}>Log out</Link>
    </NavItemContainer>
  );
};

export default UserNav;
