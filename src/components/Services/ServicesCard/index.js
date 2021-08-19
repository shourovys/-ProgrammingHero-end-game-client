import React from "react";
import { Link } from "react-router-dom";
import product from "../../../images/specialization/product.jpg";
import { CardContainer, MainButton } from "../../../style/common";
import { ServicesCardBody } from "./ServicesCard.styles";
const cardsInfo = [
  {
    img: product,
    title: "Event Photography",
  },
  {
    img: product,
    title: "Portrait Photography",
  },
  {
    img: product,
    title: "Product Photography",
  },
];
const ServicesCards = () => {
  return (
    <CardContainer>
      {cardsInfo.map((cardInfo) => (
        <ServicesCardBody key={cardInfo.title}>
          <div>
            <img src={cardInfo.img} alt="" />
          </div>
          <h3>{cardInfo.title}</h3>
          <span>
            <Link to="/service/id">
              <MainButton>view More</MainButton>
            </Link>
            <MainButton>Buy Now</MainButton>
          </span>
        </ServicesCardBody>
      ))}
    </CardContainer>
  );
};

export default ServicesCards;
