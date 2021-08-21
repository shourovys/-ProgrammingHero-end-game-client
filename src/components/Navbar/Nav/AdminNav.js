import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../../redux/user/actions";

const AdminNav = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Link to="/#">Home</Link>
      <Link to="/admin/orders">All Orders</Link>
      <Link to="/create/service">Add Service</Link>
      <Link onClick={() => dispatch(logOut())}>Log out</Link>
    </>
  );
};

export default AdminNav;
