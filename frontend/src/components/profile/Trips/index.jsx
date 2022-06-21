import React from "react";
import SectionContainer from "../SectionContainer";
import TripItem from "./TripItem";
import styles from "./Trips.module.css";

const Trips = ({ trips }) => {
  return (
    <div>
      <SectionContainer>
        <div className={styles["trips-title"]}>
          <div className={styles["title-wrapper"]}>
            <label className={styles.title}>Past trips</label>
          </div>
        </div>
        <div className={styles["trip-container"]}>
          <div className={styles["trip-items"]}>
            <TripItem trips={trips} />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Trips;
