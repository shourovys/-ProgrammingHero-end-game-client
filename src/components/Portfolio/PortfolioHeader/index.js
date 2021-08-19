import React from "react";
import { Option, OptionWrapper } from "./PortfolioHeader.styles";

const PortfolioHeader = ({ currentOption, setCurrentOption }) => {
  const options = [
    { name: "All" },
    { name: "Event" },
    { name: "Portrait" },
    { name: "Branding" },
    { name: "Product" },
    { name: "Office" },
  ];
  return (
    <OptionWrapper>
      {options.map((option) => (
        <Option
          key={option.name}
          onClick={() => setCurrentOption(option)}
          selected={currentOption.name === option.name}
        >
          {option.name}
        </Option>
      ))}
    </OptionWrapper>
  );
};

export default PortfolioHeader;
