import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CssBar from "../components/Common/CssBar";
import OrdersCard from "../components/Orders/OrdersCard";
import { getUserOrders } from "../redux/orders/action";
import { Container, Title } from "../style/common";

const Order = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrders());
  }, []);
  const userOrders = useSelector((state) => state.orders.userOrders);

  return (
    <Container>
      <Title>My Orders</Title>
      <CssBar />
      <OrdersCard orders={userOrders} />
    </Container>
  );
};

export default Order;
