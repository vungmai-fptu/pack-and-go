import React from "react";
import Footer from "../../components/Footer";
import CallToAction from "../../components/landing/CallToAction";
import Features from "../../components/landing/Features";
import Header from "../../components/landing/Header";
import Popular from "../../components/landing/Popular";
import Travelers from "../../components/landing/Travelers";
const LandingPage = () => {
  return (
    <>
      <Header />
      <Popular />
      <Travelers />
      <Features />
      <CallToAction />
      <Footer />
    </>
  );
};

export default LandingPage;
