import styled from "styled-components";
import colors from "../../../style/variables/colors";
import { device } from "../../../style/variables/deviceBreakpoints";
export const SpecializationCard = styled.div`
  padding: 30px;
  margin: 0 15px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.5s;

  :hover {
    box-shadow: 0px 0px 6px 1px lightgray;
  }
  /* :hover div {
    color: ${colors.light};
    background-color: #302069;
  } */
  :hover h3 {
    color: #302069;
  }

  :hover span {
    color: ${colors.light};
    background-color: #302069;
    border: 0.3px solid #ff8cbb38;
  }
  & div {
    height: 265px;
    width: 265px;
    margin-bottom: 20px;
    & img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 15px;
  }

  & p {
    margin-bottom: 20px;
  }

  & span {
    color: ${colors.primary};
    width: 40px;
    height: 40px;
    padding: 0;
    border: 0.4px solid ${colors.primary};
    line-height: 38px;
    text-align: center;
    border-radius: 40px;
    transition: all 0.5s;
  }
  @media ${device.mobile} {
  }
`;
