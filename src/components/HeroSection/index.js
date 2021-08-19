import React from "react";
import heroImg from "../../images/protfiloimgs/pic (6).jpg";
import { MainButton } from "../../style/common";
import {
  HeroContainer,
  HeroImg,
  HeroImgWrapper,
  HeroInfo,
  HeroP,
  HeroTitle,
  SubTitle
} from "./HeroSection.styles";
const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <HeroInfo>
          <SubTitle>We Are Photography Service Provider From BD</SubTitle>
          <HeroTitle>We Done Photography That Users Love</HeroTitle>
          <HeroP>
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque vitae ante at elit fringilla ac at purus.
          </HeroP>
          <a href="#services">
          <MainButton>Our Service</MainButton>
          </a>
        </HeroInfo>
        <HeroImgWrapper>
          <HeroImg src={heroImg} alt="hero image" />
        </HeroImgWrapper>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
