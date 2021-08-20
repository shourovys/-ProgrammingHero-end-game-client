import styled from "styled-components";
import { device } from "../style/variables/deviceBreakpoints";

//create service page
export const FromContainer = styled.section`
  margin: 0 auto;
  width: 100%;
  @media ${device.tablet} {
    max-width: 720px;
  }

  & h1 {
    font-size: 24px;
  }
`;

//service Details page
export const ServiceDetailsContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  @media ${device.tablet} {
    justify-content: space-between;
    flex-wrap: nowrap;
  }

  & div {
    flex-basis: 50%;

    & h1 {
      font-size: 24px;
    }
    & h2 {
      font-size: 18px;
      margin-bottom: 20px;
    }
    & img {
      width: 100%;
      height: 100%;
    }
  }
`;

//Checkout page
export const CheckoutContainer = styled.section`
  text-align: center;

  & div {
    background-color: #1f2471;
    max-width: 500px;
    border-radius: 10px;
    margin: 0 auto;
    color: white;
    padding: 20px 20px 20px 10px;
    margin-bottom: 20px;

    & span {
      display: flex;
      justify-content: space-evenly;
      gap: 20px;
      align-items: center;
      font-weight: 500;
      font-size: 18px;
    }
  }
`;
