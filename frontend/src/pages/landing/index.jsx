import React from 'react'
import Footer from '../../components/Footer';
import CallToAction from '../../components/landing/CallToAction';
import Features from '../../components/landing/Features';
import Header from '../../components/landing/Header';
import Popular from '../../components/landing/Popular';
const LandingPage = () => {
  return (
    <>
      <Header />
      <Popular />
      <Features />
      <CallToAction />
      <Footer />
    </>
  )
}

export default LandingPage;
