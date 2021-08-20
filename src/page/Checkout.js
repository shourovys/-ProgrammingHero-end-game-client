import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import CssBar from "../components/Common/CssBar";
import { createOrder } from "../redux/orders/action";
import {
    Container,
    MainButton,
    PaddingContainer,
    Title
} from "../style/common";
import { CheckoutContainer } from "./Styles";

const Checkout = () => {
  const dispatch = useDispatch();
  const history =useHistory()
  const { checkoutId } = useParams();
  const services = useSelector((state) => state.services);
  const user = useSelector((state) => state.user);

  const service = services.find((service) => service._id === checkoutId);
  return (
    <Container>
      <PaddingContainer>
        <Title>Your Order Service</Title>
        <CssBar />
        <CheckoutContainer>
         <div>
         <span>
            <p>Service Title : </p>
            <p>{service && service.title}</p>
          </span>
          <span>
            <p>Price : </p>
            <p>${service && service.price}</p>
          </span>
         </div>
          <MainButton
           onClick={() =>
            dispatch(
              createOrder({
                orderService: service,
                name: user.userInfo.name,
              },history)
            )
          }
          >Checkout</MainButton>

        </CheckoutContainer>
      </PaddingContainer>
    </Container>
  );
};

export default Checkout;
