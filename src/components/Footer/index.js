import React from "react";
import logo from "../../images/logo-blue.png";
import { Logo, PaddingContainer } from "../../style/common";
import CssBar from "../Common/CssBar";
import {
  SocialIconContainer,
  SocialIconWrapper
} from "../Navbar/Hamburger/Drawer/Drawer.styles";
import { FirstSection, FooterGrid } from "./Footer.styles";
const Footer = () => {
  return (
    <PaddingContainer>
      <FooterGrid>
        <FirstSection>
          <Logo src={logo} alt="" />
          <p style={{ padding: "10px 0" }}>
            Maecenas pellentesque placerat quam, in finibus nisl tincidunt sed.
            Aliquam magna augue, malesuada ut feugiat eget, cursus eget felis.
          </p>
          <SocialIconContainer aline="start">
            <SocialIconWrapper>
              <i className="fab fa-facebook-f"></i>
            </SocialIconWrapper>
            <SocialIconWrapper>
              <i className="fab fa-twitter"></i>
            </SocialIconWrapper>
            <SocialIconWrapper>
              <i className="fab fa-linkedin-in"></i>
            </SocialIconWrapper>
            <SocialIconWrapper>
              <i className="fab fa-instagram"></i>
            </SocialIconWrapper>
          </SocialIconContainer>
        </FirstSection>

        <section>
          <h4>Our links</h4>
          <CssBar aline="start" bg="white" />
          <p>
            <i className="fas fa-chevron-right"></i> &nbsp;Our Service a
          </p>
          <p>
            <i className="fas fa-chevron-right"></i> &nbsp;Our Service b
          </p>
          <p>
            <i className="fas fa-chevron-right"></i> &nbsp;Our Service c
          </p>
          <p>
            <i className="fas fa-chevron-right"></i> &nbsp;Our Service d
          </p>
        </section>

        <section>
          <h4>Our Services</h4>
          <CssBar aline="start" bg="white" />
          <p>
            <i className="fas fa-chevron-right"></i> &nbsp;Our Service a
          </p>
          <p>
            <i className="fas fa-chevron-right"></i> &nbsp;Our Service b
          </p>
          <p>
            <i className="fas fa-chevron-right"></i> &nbsp;Our Service c
          </p>
          <p>
            <i className="fas fa-chevron-right"></i> &nbsp;Our Service d
          </p>
        </section>

        <section>
          <h4>Other links</h4>
          <CssBar aline="start" bg="white" />
          <p>
            <i className="fas fa-chevron-right"></i> &nbsp;Our Service a
          </p>
          <p>
            <i className="fas fa-chevron-right"></i> &nbsp;Our Service b
          </p>
          <p>
            <i className="fas fa-chevron-right"></i> &nbsp;Our Service c
          </p>
          <p>
            <i className="fas fa-chevron-right"></i> &nbsp;Our Service d
          </p>
        </section>
      </FooterGrid>
    </PaddingContainer>
  );
};

export default Footer;
