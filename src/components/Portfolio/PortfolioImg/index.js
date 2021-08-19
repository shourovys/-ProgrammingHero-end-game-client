import React from "react";
import pic1 from "../../../images/protfiloimgs/pic (1).jpg";
import pic2 from "../../../images/protfiloimgs/pic (10).jpg";
import pic3 from "../../../images/protfiloimgs/pic (3).jpg";
import pic4 from "../../../images/protfiloimgs/pic (4).jpg";
import pic5 from "../../../images/protfiloimgs/pic (5).jpg";
import pic6 from "../../../images/protfiloimgs/pic (6).jpg";
import pic7 from "../../../images/protfiloimgs/pic (7).jpg";
import pic8 from "../../../images/protfiloimgs/pic (8).jpg";
import pic9 from "../../../images/protfiloimgs/pic (9).jpg";
import {
  PortfolioImgContainer,
  PortfolioImgWrapper
} from "./PortfolioImg.styles";
const PortfolioImg = ({ currentOption }) => {
  const options = [
    { name: ["Event", "Event"], img: pic1 },
    {
      name: ["Portrait", "Event", "Branding"],
      img: pic2,
    },
    { name: ["Branding", "Portrait"], img: pic3 },
    { name: ["Product", "Branding"], img: pic4 },
    { name: ["Office"], img: pic5 },
    { name: ["Branding", "Event"], img: pic6 },
    { name: ["Product", "Portrait"], img: pic7 },
    { name: ["Office", "Branding"], img: pic8 },
    { name: ["Product", "Office"], img: pic9 },
  ];

  let currentState;

  if (currentOption.name === "All") {
    currentState = options;
  } else {
    currentState = options.filter(
      (option) => option.name.indexOf(currentOption.name) !== -1
    );
  }

  return (
    <PortfolioImgContainer>
      {currentState.map((state) => (
        <PortfolioImgWrapper key={state.img}>
          <img src={state.img} alt="" />
        </PortfolioImgWrapper>
      ))}
    </PortfolioImgContainer>
  );
};

export default PortfolioImg;
