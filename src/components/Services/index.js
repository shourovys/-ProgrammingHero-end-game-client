import React from "react";
import { PaddingContainer, Title } from "../../style/common";
import CssBar from "../Common/CssBar";
import ServicesCards from "./ServicesCard";
const Services = () => {
  return (
    <div id="services">
      <PaddingContainer>
        <Title>Our Services</Title>
        <CssBar />
        <ServicesCards />
      </PaddingContainer>
    </div>
  );
};

export default Services;
