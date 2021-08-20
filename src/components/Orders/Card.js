import { Select } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateOrderStatus } from "../../redux/orders/action";
import { ServicesCardBody } from "../Services/ServicesCard/ServicesCard.styles";

const Card = ({ order, isAdmin }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const { Option } = Select;

  function handleChange(value) {
    setLoading(true);
    dispatch(
      updateOrderStatus({ status: value, orderId: order._id }, setLoading)
    );
  }
  return (
    <ServicesCardBody key={order._id}>
      <div>
        <img src={order.orderService.image} alt="" />
      </div>
      {isAdmin && <h3>User Same: {order.name}</h3>}
      <h3>{order.orderService.title}</h3>
      <p>Price: {order.orderService.price}</p>
      <span>
        Status: &nbsp;{" "}
        <Select
          defaultValue={order.status}
          style={{ width: 120, height: 40 }}
          onChange={handleChange}
          disabled={isAdmin ? false : true}
          loading={loading}
        >
          <Option value="onGoing">On Going</Option>
          <Option value="done">Done</Option>
        </Select>
      </span>
    </ServicesCardBody>
  );
};

export default Card;
