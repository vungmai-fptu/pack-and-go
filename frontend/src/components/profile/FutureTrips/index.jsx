import React from "react";
import styles from "./future.module.css";
import { Link } from "react-router-dom";
import TripList from "../TripList";
import SectionContainer from "../SectionContainer";


const FutureTrips = ({ trips, users }) => {
  return (
    <div>
      <SectionContainer>
        <div className={styles["trips-title"]}>
          <div className={styles["title-wrapper"]}>
            <label className={styles.title}>My Next Trips</label>

            <Link to="/trip">
              <button className={styles["add-btn"]}>
                <div className={styles["add-btn-title"]}>
                  <span className={["add-btn-text"]}>Plan Another Trip</span>
                </div>
              </button>
            </Link>
            
          </div>
        </div>
        <TripList trips={trips} />
      </SectionContainer >
    </div >
  );
};

export default FutureTrips;
