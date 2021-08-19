import styled from "styled-components";
export const ServicesCardBody = styled.div`
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

  :hover h3 {
    color: #302069;
  }
  & div {
    height: 265px;
    width: 265px;
    margin-bottom: 20px;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 20px;
  }

  & span {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
`;
