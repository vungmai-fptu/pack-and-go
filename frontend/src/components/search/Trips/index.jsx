import React, { useEffect } from "react";
import SectionContainer from "../../landing/SectionContainer";
import styles from "./TripList.module.css";
import { Link } from "react-router-dom";
import RenderTripNoTitle from "../../RenderTripNoTitle";
import RenderTripItem from "../../RenderTripItem";
import Trips from "./Trips";

const TripList = () => {
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
      <Trips/>
    </SectionContainer>
  );
};

export default TripList;
