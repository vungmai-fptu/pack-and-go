import React from 'react'
import TripCardSlider from './slider';
import styles from './Trips.module.css';


const Trips = () => {
  return (
    <div>
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
    </div>
  )
}

export default Trips