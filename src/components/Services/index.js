import React from "react";
import { PaddingContainer, Title } from "../../style/common";
import CssBar from "../Common/CssBar";
import ServicesCard from "./ServicesCard";
const Services = () => {
  return (
    <div id="services">
    <PaddingContainer>
      <Title>Our Services</Title>
      <CssBar />
      <ServicesCard/>
    </PaddingContainer>
    </div>
  );
};

export default Services;
