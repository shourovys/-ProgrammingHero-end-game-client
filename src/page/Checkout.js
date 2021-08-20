import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CssBar from "../components/Common/CssBar";
import {
    Container,
    MainButton,
    PaddingContainer,
    Title
} from "../style/common";
import { CheckoutContainer } from "./Styles";

const Checkout = () => {
  const { checkoutId } = useParams();
  const services = useSelector((state) => state.services);
  const service = services.find((service) => service._id === checkoutId);
  return (
    <Container>
      <PaddingContainer>
        <Title>Your Order Service</Title>
        <CssBar />
        <CheckoutContainer>
         <div>
         <span>
            <p>Service Title</p>
            <p>{service.title}</p>
          </span>
          <span>
            <p>Price</p>
            <p>{service.title}</p>
          </span>
         </div>
          <MainButton>Checkout</MainButton>

        </CheckoutContainer>
      </PaddingContainer>
    </Container>
  );
};

export default Checkout;
