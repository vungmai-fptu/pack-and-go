import React from "react";
import SectionContainer from "../../landing/SectionContainer";
import TripCardSlider from "./slider";
import styles from "./Trips.module.css";
import { Link } from "react-router-dom";
import RenderTripNoTitle from "../../RenderTripNoTitle";

const Trips = () => {
  return (
    <SectionContainer>
      <div className={styles["trips-title"]}>
        <div className={styles["title-wrapper"]}>
          <label className={styles.title}>Trips</label>
          <Link to="/alltrips" className={styles["add-btn"]}>
            <div className={styles["add-btn-title"]}>
              <span className={["add-btn-text"]}>Show all</span>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles["trip-container"]}>
        <div className={styles["trip-items"]}>
          <RenderTripNoTitle />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Trips;
