import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CssBar from "../components/Common/CssBar";
import OrdersCard from "../components/Orders/OrdersCard";
import { getAdminOrders } from "../redux/orders/action";
import { Container, Title } from "../style/common";

const AdminOrder = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdminOrders());
  }, []);
  const adminOrders = useSelector((state) => state.orders.adminOrders);
  const Orders = useSelector((state) => state.orders);
  console.log("🚀 ~ file: AdminOrder.js ~ line 15 ~ AdminOrder ~ Orders", Orders)
  return (
    <Container>
      <Title>All Orders For Admin</Title>
      <CssBar />
      <OrdersCard orders={adminOrders} />
    </Container>
  );
};

export default AdminOrder;
