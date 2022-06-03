import React from 'react'
import SectionContainer from '../SectionContainer';
import SectionHeader from '../SectionHeader';
import TripItem from './TripItem';
import styles from './future.module.css';


const FutureTrips = () => {
    return (
        <div>
            <SectionContainer>
                <div className={styles["trips-title"]}>
                    <div className={styles["title-wrapper"]}><label className={styles.title}>My Next Trips</label>
                    <button className={styles["add-btn"]}><div className={styles["add-btn-title"]}><span className={["add-btn-text"]}>Plan Another Trip</span></div></button>
                    </div>
                </div>
                <div className={styles["trip-container"]}>
                    <div className={styles["trip-items"]}>
                        <TripItem />
                        <TripItem />
                        <TripItem />
                        <TripItem />
                        <TripItem />
                        <TripItem />
                    </div>
                </div>
            </SectionContainer>
        </div>
    )
}

export default FutureTrips