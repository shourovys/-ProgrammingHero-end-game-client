import styled from "styled-components";
import { device } from "../../../style/variables/deviceBreakpoints";
export const PortfolioImgContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 50px;
`;
export const PortfolioImgWrapper = styled.div`
  height: 100%;
  width: 100%;

  @media ${device.mobile} {
    height: 250px;
    width: 250px;
  }
  @media ${device.tablet} {
    height: 300px;
    width: 300px;
  }
  @media ${device.tabletL} {
    gap: 30px;
    height: 370px;
    width: 370px;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
