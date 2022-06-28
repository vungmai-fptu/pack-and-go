import React, { useEffect, useState } from "react";
import SectionContainer from "../SectionContainer";
import TripList from "../TripList";
import styles from "./Trips.module.css";
import { Grid } from "../../Grid/Grid";
import TripItem from "../../TripItem/TripItem";

const PastTrips = ({ trips }) => {
  const [showed, setShowed] = useState(false);

  useEffect(() => {
    setShowed(false);
  }, [trips]);

  const onShowList = () => {
    setShowed((prev) => !prev);
  };

  const showedList = !showed ? [...trips].slice(0, 4) : [...trips];
  return (
    <div>
      <SectionContainer>
        <div className={styles["trips-title"]}>
          <div className={styles["title-wrapper"]}>
            <label className={styles.title}>Past trips</label>
          </div>
        </div>
        <div className={styles["trips_container"]}>
          {trips && trips.length !== 0 ? (
            <Grid>
              {showedList.map((trip) => (
                <TripItem listTrip={trip} key={trip.id} />
              ))}
            </Grid>
          ) : (
            "NOT FOUND"
          )}
        </div>
      </SectionContainer>
    </div>
  );
};

export default PastTrips;
