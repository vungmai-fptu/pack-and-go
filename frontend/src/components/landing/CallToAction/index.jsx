import React from 'react'
import SectionContainer from '../SectionContainer';
import styles from "./CallToAction.module.css";
import actionImage from '../../../asset/images/mountain-with-man.jpg';
import { ImGoogle } from "react-icons/im";
import { SiGmail } from 'react-icons/si';

const CallToAction = () => {
  return (
    <section>
      <SectionContainer>
        <div className={styles["card"]}>
          <div className={styles["card-inner"]}>
            <div className={styles["card-image"]}>
              <img src={actionImage} alt="" />
            </div>
            <div className={styles["card-action"]}>
              <div className={styles["action-inner"]}>
                <h3>Share your story with Pack&Go</h3>
                <p>Create your FREE and secured account in seconds</p>

                <div className={styles["action-btns"]}>
                  <a href="/" >
                    <div className={`${styles["action-btn"]} ${styles.google}`} >
                      <ImGoogle />
                      <span>With Google</span>
                    </div>
                  </a>
                  <a href="/" >
                    <div className={`${styles["action-btn"]} ${styles.email}`}>
                      <SiGmail />
                      <span>With Email</span>
                    </div>
                  </a>
                </div>

                <p className={styles["action-note"]}>
                  By registering I agree to the processing of <a href="/">Personal data</a> and <a href="/">Terms of Use</a> of the app.
                </p>
              </div>

            </div>
          </div>
        </div>
      </SectionContainer >
    </section >
  )
}

export default CallToAction