import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Container, MainButton, PaddingContainer } from "../style/common";
import { ServiceDetailsContainer } from "./Styles";

const ServiceDetails = () => {
  const { id } = useParams();
  const services = useSelector((state) => state.services);

  const service = services.find((service) => service._id === id);

  return (
    <Container>
      <PaddingContainer>
        <ServiceDetailsContainer>
          <div>
            <h1>Title: {service && service.title}</h1>
            <p>Description:{service && service.description}</p>
            <h2>Price: {service && service.price}</h2>
            <Link to={`/checkout/${id}`}>
              <MainButton>Buy Now</MainButton>
            </Link>
          </div>
          <div>
            <img src={service && service.image} alt="" />
          </div>
        </ServiceDetailsContainer>
      </PaddingContainer>
    </Container>
  );
};

export default ServiceDetails;
