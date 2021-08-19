import styled from "styled-components";
import { device } from "../../style/variables/deviceBreakpoints";

export const FooterGrid = styled.footer`
  display: flex;
  /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
  /* grid-auto-rows: auto; */
  gap: 25px;
  color: white;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
  @media ${device.tabletL} {
    /* margin-left: 100px; */
  }
  @media ${device.laptop} {
    /* margin-left: 80px; */
  }
  &:first-child {
    flex-grow: 1;
    width: 100%;
  }
  & section {
    display: grid;
    gap: 5px;
    max-width: 400px;

    & h4 {
      font-size: 24px;
    }
  }
`;
export const FirstSection = styled.footer`
    flex-grow: 1;
    max-width: 500px;
`;

