import React from "react";
import { useSelector } from "react-redux";
import { CardContainer } from "../../style/common";
import Card from "./Card";

const OrdersCard = ({ orders }) => {
  const isAdmin = useSelector((state) => state.user.userInfo.isAdmin);

  return (
    <>
      {orders && (
        <CardContainer>
          {orders.map((order) => (
            <Card order={order} isAdmin={isAdmin} key={order._id} />
          ))}
        </CardContainer>
      )}
    </>
  );
};

export default OrdersCard;
