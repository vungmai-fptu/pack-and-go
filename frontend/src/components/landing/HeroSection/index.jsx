import styles from "./HeroSection.module.css";
import React from 'react'

const HeroSection = () => {
  return (
    <div className={styles["hero-section"]}>
      <div>
        <h1 className={styles.title}>The best product <br /> to save your trip</h1>
        <p className={styles.subtitle}>
          Planning trips - Save trips - Edit trips
        </p>

        <a href="/" className={styles.button}>
          <div>
            Join us now
          </div>
        </a>
      </div>
    </div>
  )
}

export default HeroSection