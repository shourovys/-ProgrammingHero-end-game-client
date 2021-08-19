import styled from "styled-components";
import colors from "../../../../style/variables/colors";

export const HamburgerMenuContainer = styled.div`
  color: black;
  padding: 25px 20px;
`;

export const HamburgerItemContainer = styled.div`
  padding: 25px 0px;
`;
export const HamburgerItem = styled.div`
  text-align: center;
  color: black;
  padding: 8px 0px;
  display: flex;
  justify-content: space-between;
  line-height: 30px;
  font-weight: 600;
  border-bottom: 1px solid ${colors.white};
  width: 100%;
  cursor: pointer;
`;

export const BoxIconWrapper = styled.i`
  background-color: ${colors.primary};
  color: white;
  height: 30px;
  line-height: 30px;
  right: 0;
  text-align: center;
  width: 30px;
  z-index: 3;
  float: right;
  font-size: 20px;
  margin: 0;
`;

export const SocialIconContainer = styled.i`
  display: flex;
  justify-content: ${({ aline }) => (aline ? "start" : "center")};
  gap: 6px;
`;

export const SocialIconWrapper = styled.i`
  color: ${colors.primary};
  width: 40px;
  height: 40px;
  padding: 0;
  border: 0.4px solid lightgray;
  line-height: 38px;
  text-align: center;
  border-radius: 40px;
  transition: all 0.5s;
  cursor: pointer;
  :hover {
    color: ${colors.grayDark};
    border: 0.3px solid ${colors.primary};
  }
`;
