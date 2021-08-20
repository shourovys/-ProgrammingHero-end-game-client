import styled from "styled-components";
import { device } from "../style/variables/deviceBreakpoints";

//create service page
export const FromContainer = styled.section`
  margin: 0 auto;
  width: 100%;
  @media ${device.tablet} {
    max-width: 720px;
  }

  & h1{
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

  & div{
    flex-basis: 50%;

    & h1{
      font-size: 24px;
    }
    & h2{
      font-size: 18px;
      margin-bottom: 20px;
    }
    & img{
      width: 100%;
      height: 100%;
    }
  }
`;
