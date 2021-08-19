import styled from "styled-components";
import { device } from "../../style/variables/deviceBreakpoints";

export const AgencyContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  justify-content: center;
  @media ${device.tabletL} {
    grid-template-columns: repeat(2, 1fr);
  }
  & div {
    flex-basis: 50%;
  }
`;

export const AgencyImgWrapper = styled.div`
  flex-basis: 50%;
  & img {
    width: 100%;
    height: 100%;
    -webkit-transform-origin: 50% 0;
    transform-origin: 50% 0;
    -webkit-animation: swinging 2s linear forwards infinite;
    animation: swinging 8s linear forwards infinite;
    @keyframes swinging {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(2deg);
      }
      75% {
        transform: rotate(-2deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
`;

export const AgencyCountContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const AgencyCountBox = styled.div`
  text-align: center;
  margin: 0 15px;
  margin-bottom: 30px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px 4px rgb(31 66 135 / 10%);
  & h2 {
    font-size: 34px;
    font-weight: 600;
  }

  & p {
    font-size: 14px;
  }
`;
