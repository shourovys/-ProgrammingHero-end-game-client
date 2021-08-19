import React from "react";
import { BackGround, FooterBackGround } from "../App.styles";
import Agency from "../components/Agency";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Specialization from "../components/Specialization";
import { Container } from "../style/common";
const Home = () => {
  return (
    <>
      <BackGround>
        <Container>
          <HeroSection />
          <Specialization />
          <Agency />
        </Container>
        <Container backgroundColor="#F8F5FF">
          <Portfolio />
          <Services />
        </Container>
      </BackGround>
      <FooterBackGround>
        <Container>
          <Footer />
        </Container>
      </FooterBackGround>
    </>
  );
};

export default Home;
