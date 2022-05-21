import React from 'react';
import HeroSection from '../HeroSection';
import Navigation from '../Navigation';
import SectionContainer from '../SectionContainer';
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <SectionContainer>
        <Navigation />
        <HeroSection />
      </SectionContainer>
    </div>
  )
}

export default Header