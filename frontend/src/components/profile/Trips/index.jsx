import React from 'react'
import SectionContainer from '../SectionContainer';
import SectionHeader from '../SectionHeader';
import TripItem from './TripItem';
import styles from './Trips.module.css';


const Trips = () => {
  return (
    <div>
      <SectionContainer>
        <div className={styles["trips-title"]}>Past trips</div>
        <div className={styles["trip-container"]}>
          <div className={styles["trip-items"]}>
            <TripItem/>
            <TripItem/>
            <TripItem/>
            <TripItem/>
            <TripItem/>
            <TripItem/>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}

export default Trips