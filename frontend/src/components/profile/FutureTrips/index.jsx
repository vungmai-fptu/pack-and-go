import React from "react";
import SectionContainer from "../SectionContainer";
import TripItem from "./TripItem";
import styles from "./future.module.css";
import { Link } from "react-router-dom";

const FutureTrips = ({ trips }) => {
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
        <div className={styles["trip-container"]}>
          <div className={styles["trip-items"]}>
            <TripItem trips={trips} />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default FutureTrips;
