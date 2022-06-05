import React from "react";
import SectionContainer from "../../landing/SectionContainer";
import TripCardSlider from "./slider";
import styles from "./Trips.module.css";

const Trips = () => {
  return (
    <SectionContainer>
      <div className={styles["trips-title"]}>
        <div className={styles["title-wrapper"]}>
          <label className={styles.title}>Trips</label>
          <button className={styles["add-btn"]}>
            <div className={styles["add-btn-title"]}>
              <span className={["add-btn-text"]}>Show all</span>
            </div>
          </button>
        </div>
      </div>
      <div className={styles["trip-container"]}>
        <TripCardSlider />
      </div>
    </SectionContainer>
  );
};

export default Trips;
