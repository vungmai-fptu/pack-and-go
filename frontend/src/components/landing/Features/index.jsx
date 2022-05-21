import React from 'react'
import SectionContainer from '../SectionContainer'
import SectionHeader from '../SectionHeader'
import FeatureItem from './FeatureItem'
import styles from "./Features.module.css";

const Features = () => {
  return (
    <div>
      <SectionContainer>
        <SectionHeader>Features</SectionHeader>
        <div className={styles.features}>
          <FeatureItem
            icon={<ion-icon name="golf-outline"></ion-icon>}
            title="Get inspired from other travelers"
            description="Browse through thousands of itineraries from other travelers or narrow them down with detailed filters"
          />
          <FeatureItem
            icon={<ion-icon name="reader-outline"></ion-icon>}
            title="Planning your next trip"
            description="Jot down places you’d like to visit. Add trip’s information (destinations, what to prepares, notes,...)"
          />
          <FeatureItem
            icon={<ion-icon name="notifications-outline"></ion-icon>}
            title="Get notifications about upcoming trips"
            description="You can received notifications about up comming trips through email, notification,.."
          />
        </div>
      </SectionContainer>
    </div>
  )
}

export default Features