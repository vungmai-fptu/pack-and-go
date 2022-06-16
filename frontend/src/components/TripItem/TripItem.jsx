import React from "react";
import { Link } from "react-router-dom";
import styles from "./TripItem.module.css";
const TripItem = (props) => {
  console.log(
    "🚀 ~ file: Trip.jsx ~ line 5 ~ Trip ~ props",
    props.listTrip.thumbnailUrl
  );
  return (
    <div className={styles.outer}>
      <div className={styles["item-image"]}>
        <img
          alt="thumbnailUrl"
          src={
            props.listTrip.thumbnailUrl == null
              ? "https://wrld-se-prod.b-cdn.net/images/bezfotky.png"
              : props.listTrip.thumbnailUrl
          }
        />
      </div>
      <div href="/trip/draft?id=348410" className={styles.inner}>
        <div className={styles.top}>
          <div className={styles["list-flag"]} width="144" height="32">
            <div className={styles.flag}>
              <img
                src={
                  props.listTrip.flag == null
                    ? "https://wrld-se-prod.b-cdn.net/images/user-empty.svg?width=640&height=640"
                    : props.listTrip.flag
                }
                alt="countryFlags/VN"
                className="w_fu w_fB"
              />
            </div>
          </div>
          <div title="Sơn Lê" className={styles["profile-image"]}>
            <Link to={props.listTrip.username || "/"} className="w_AP w_kq">
              <img
                alt="profile"
                // src={
                //   props.listUser.profileImageUrl == null
                //     ? "https://wrld-se-prod.b-cdn.net/images/user-empty.svg?width=640&height=640"
                //     : props.listUser.profileImageUrl
                // }
              />
            </Link>
          </div>
        </div>
        <div className={styles.bottom}>
          <Link to="/trips/trips-to-america" className={styles["trip-name"]}>
            <div className="">
              {/* <span>{props.listUser.tripName}</span> */}
            </div>
          </Link>
          <div className={styles["destination-info"]}>
            <span>{props.listTrip.numOfDates} days</span>
            <span>{props.listTrip.numOfPhotos} photos</span>
            <span>{props.listTrip.numOfPlaces} places</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripItem;
