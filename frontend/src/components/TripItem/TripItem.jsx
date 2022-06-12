import React from 'react'
import styles from "./TripItem.module.css";
import { Link } from 'react-router-dom';


const TripItem = ({ flag, tripName, username, profilePhoto, thumbnail, numOfDates, numOfPhotos, numOfPlaces }) => {
  //pass info to props

  return (
    <div className={styles.outer}>
      <div className={styles["item-image"]}>
        {/* <img alt="ha noi" src="https://wrld-wa-ec1-prod.b-cdn.net/accounts/26b82d3a4f4fca22b1ef4a3e1aaac37a/trips/2022-05-18/348410/ino5yeehlhpf-0aamiat.jpg?width=640&amp;height=640" /> */}
        <img alt="ha noi" src={thumbnail} />
      </div>
      <div href="/trip/draft?id=348410" className={styles.inner}>
        <div className={styles.top}>
          <div className={styles["list-flag"]} width="144" height="32">
            <div className={styles.flag}>
              <img src={flag} alt="countryFlags/VN" className="w_fu w_fB" />
            </div>
          </div>
          <div title="Sơn Lê" className={styles["profile-image"]}>
            <Link to={username || "/"} className="w_AP w_kj w_kq">
              <img alt="profile" src={profilePhoto} />
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <Link to="/trips/trips-to-america" className={styles["trip-name"]}>
            <div className="">
              <span>{tripName}</span>
            </div>
          </Link>
          <div className={styles["destination-info"]}>
            <span>{numOfDates} days</span>
            <span>{numOfPhotos} photos</span>
            <span>{numOfPlaces} places</span>
          </div>
        </div>
      </div >
    </div >
  )
}

export default TripItem