import React from "react";
import { CssBarContainer, CssBarOne, CssBarTow } from "./CssBar.styles";

const CssBar = ({ aline, bg }) => {
  return (
    <CssBarContainer bg={bg} aline={aline}>
      <CssBarOne bg={bg} />
      <CssBarTow bg={bg} />
    </CssBarContainer>
  );
};

export default CssBar;
