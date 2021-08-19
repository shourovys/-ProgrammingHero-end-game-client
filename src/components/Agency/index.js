import React from "react";
import table from "../../images/table.png";
import { PaddingContainer, Title } from "../../style/common";
import CssBar from "../Common/CssBar/index";
import {
  AgencyContainer,
  AgencyCountBox,
  AgencyCountContainer,
  AgencyImgWrapper
} from "./Agency.styles";

const Agency = () => {
  return (
    <div id="why-us">
    <PaddingContainer>
      <AgencyContainer>
        <AgencyImgWrapper>
          <img src={table} alt="" />
        </AgencyImgWrapper>

        <div>
          <Title aline="start">Why Our Service</Title>
          <CssBar aline="start" />
          <p style={{ marginBottom: "16px" }}>
            In dictum aliquam turpis lacinia iaculis. Fusce vel malesuada magna.
            Nulla vel maximus risus. Donec volutpat metus lacinia risus
            accumsan, ac bibendum libero efficitur. Pellentesque nec nisi sit
            amet magna tempus hendrerit ut a odio.
          </p>
          <p style={{ marginBottom: "30px" }}>
            Praesent rhoncus commodo tortor, id pulvinar nisl blandit at. Nulla
            facilisi. Quisque turpis ante, vehicula condimentum arcu.
          </p>
          <AgencyCountContainer>
            <AgencyCountBox>
              <h2>9875</h2>
              <p>Satisfied Clients</p>
            </AgencyCountBox>
            <AgencyCountBox>
              <h2>7894</h2>
              <p>Project Lunched</p>
            </AgencyCountBox>
            <AgencyCountBox>
              <h2>65</h2>
              <p>Years Completed</p>
            </AgencyCountBox>
          </AgencyCountContainer>
        </div>
      </AgencyContainer>
    </PaddingContainer>
    </div>
  );
};

export default Agency;
