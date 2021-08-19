import React from "react";
import event from "../../../images/specialization/event.jpg";
import portrait from "../../../images/specialization/portrait.jpg";
import product from "../../../images/specialization/product.jpg";
import { CardContainer } from "../../../style/common";
import { SpecializationCard } from "./SpecializationCards.styles";
const SpecializationCards = () => {

  const cardsInfo = [
    {
      img: event,
      title: "Event Photography",
    },
    {
      img: portrait,
      title: "Portrait Photography",
    },
    {
      img: product,
      title: "Product Photography",
    },
  ];
  return (
    <CardContainer>
      {cardsInfo.map((cardInfo) => (
        <SpecializationCard key={cardInfo.title}>
          <div>
            <img src={cardInfo.img} alt="" />
          </div>
          <h3>{cardInfo.title}</h3>
          <p>
            Mauris ut felis malesuada eros varius tristique a at orci. Nulla
            vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum,
            et porttitor.
          </p>
          <span>
            <i className="fas fa-chevron-right"></i>
          </span>
        </SpecializationCard>
      ))}
    </CardContainer>
  );
};

export default SpecializationCards;
