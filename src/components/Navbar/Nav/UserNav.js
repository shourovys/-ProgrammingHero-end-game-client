import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../../redux/user/actions";

const UserNav = () => {
  const dispatch = useDispatch()
  return (
    <>
      <Link to="/#">Home</Link>
      <Link to="/orders">My Orders</Link>
      <a href="#services">Services</a>
      <Link onClick={()=>dispatch(logOut())}>Log out</Link>
    </>
  );
};

export default UserNav;
