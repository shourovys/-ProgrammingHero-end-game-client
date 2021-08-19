import styled from "styled-components";

export const OptionWrapper = styled.header`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Option = styled.nav`
  font-size: 14px;
  font-weight: 600;
  padding: 8px 24px;
  color: ${({ selected }) => (selected ? "white" : "#111942")};
  background: ${({ selected }) =>
    selected
      ? "linear-gradient(90deg, #ef146e 0, #fea958 50%, #ef146e)"
      : "rgba(240, 31, 117, 0.1)"};
  background-size: 300px;
  /* background-color: rgba(240, 31, 117, 0.1); */
  padding: 10px 30px;
  border-radius: 30px;
  cursor: pointer;
`;
