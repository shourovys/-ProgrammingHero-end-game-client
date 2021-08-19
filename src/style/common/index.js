import styled from "styled-components";
import { device } from "../variables/deviceBreakpoints";

export const Container = styled.section`
  max-width: 100vw;
  padding: 0 15px;
  margin: 0 auto;
  background-color: ${({ backgroundColor }) => backgroundColor};

  @media ${device.mobile} {
    max-width: 540px;
    width: 100%;
  }
  @media ${device.tablet} {
    max-width: 720px;
  }
  @media ${device.tabletL} {
    max-width: 960px;
  }
  @media ${device.laptop} {
    max-width: 1199px;
    width: 100%;
  }
`;

export const PaddingContainer = styled.section`
  padding-top: 50px;
  padding-bottom: 20px;

  @media ${device.tablet} {
    padding-top: 70px;
    padding-bottom: 40px;
  }

  @media ${device.tabletL} {
    padding-top: 100px;
    padding-bottom: 70px;
  }
`;

export const Logo = styled.img`
  height: 47px;
  width: 150px;
  filter: ${({ color }) => (color ? null : "brightness(0) invert(1)")};
`;

export const MainButton = styled.button`
  color: #fff;
  padding: 12px 35px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 0px 24px;
  outline: none;
  line-height: 1.5;
  background-image: linear-gradient(90deg, #ef146e 0, #fea958 51%, #ef146e);
  background-size: 200%;
  border-color: transparent !important;
  transition: all 0.5s;
  cursor: pointer;
  :hover {
    border-radius: 24px 0px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  text-align: ${({ aline }) => (aline === "start" ? "start" : "center")};
  font-weight: 600;
  margin-bottom: 8px;
  color: #1f2471;

  @media ${device.mobile} {
    font-size: 36px;
  }
  @media ${device.tabletL} {
    font-size: 45px;
  }
`;

export const CardContainer = styled.section`
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
  }
  @media ${device.tabletL} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
