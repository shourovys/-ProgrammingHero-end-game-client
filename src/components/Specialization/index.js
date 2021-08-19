import React from "react";
import { PaddingContainer, Title } from "../../style/common/index";
import CssBar from "../Common/CssBar";
import SpecializationCards from "./SpecializationCards";

const Specialization = () => {
  function MouseOver(event) {
    // event.target.style.boxShadow= '0px 0px 6px 1px lightgray';
  }
  return (
    <>
      <PaddingContainer>
        <Title>Our Speciallization</Title>
        <CssBar />
        <SpecializationCards onMouseOver={MouseOver} />
      </PaddingContainer>
    </>
  );
};

export default Specialization;
