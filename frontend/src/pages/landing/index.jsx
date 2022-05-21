import React from 'react'
import CallToAction from '../../components/landing/CallToAction';
import Features from '../../components/landing/Features';
import Header from '../../components/landing/Header';
import Popular from '../../components/landing/Popular';
const LandingPage = () => {
  return (
    <>
      <Header />
      <Features />
      <Popular />
      <CallToAction />
    </>
  )
}

export default LandingPage;
