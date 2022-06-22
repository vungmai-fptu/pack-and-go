import React from "react";
import SectionContainer from "../SectionContainer";
import TripList from "../TripList";
import styles from "./Trips.module.css";

const PastTrips = ({ trips }) => {
  return (
    <div>
      <SectionContainer>
        <div className={styles["trips-title"]}>
          <div className={styles["title-wrapper"]}>
            <label className={styles.title}>Past trips</label>
          </div>
        </div>
        <TripList trips={trips} />
      </SectionContainer >
    </div >
  );
};

export default PastTrips;
