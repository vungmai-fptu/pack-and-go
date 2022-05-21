import React from 'react'
import SectionContainer from '../SectionContainer';
import SectionHeader from '../SectionHeader';
import styles from "./Popular.module.css";
import TripItem from './TripItem';

const Popular = () => {
  return (
    <div>
      <SectionContainer>
        <SectionHeader>Peek into some saved stories</SectionHeader>
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

export default Popular