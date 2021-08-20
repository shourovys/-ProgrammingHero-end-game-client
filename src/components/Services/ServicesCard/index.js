import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CardContainer, MainButton } from "../../../style/common";
import { ServicesCardBody } from "./ServicesCard.styles";

const ServicesCards = () => {
  const services = useSelector(state => state.services)
  return (
    <CardContainer>
      {services.map((service) => (
        <ServicesCardBody key={service._id}>
          <div>
            <img src={service.image} alt="" />
          </div>
          <h3>{service.title}</h3>
          <p>Price: {service.price}</p>
          <span>
            <Link to={`/service/${service._id}`}>
              <MainButton>view More</MainButton>
            </Link>
            <Link to={`/checkout`}>
              <MainButton>Buy Now</MainButton>
            </Link>
          </span>
        </ServicesCardBody>
      ))}
    </CardContainer>
  );
};

export default ServicesCards;
