import React from "react";
import styles from "./TripItem.module.css";
import { Link } from "react-router-dom";

const TripItem = (props) => {
  const render = () => {
    return props.listUser.trips.map((trip, index) => {
      return (
        <div className={styles.outer} key={index}>
          <div className={styles["item-image"]}>
            <img
              alt="thumbnailUrl"
              src={
                trip.thumbnailUrl === ""
                  ? "https://wrld-se-prod.b-cdn.net/images/bezfotky.png"
                  : trip.thumbnailUrl
              }
            />
          </div>
          <div href="/trip/draft?id=348410" className={styles.inner}>
            <div className={styles.top}>
              <div className={styles["list-flag"]} width="144" height="32">
                <div className={styles.flag}>
                  <img
                    src={
                      trip.flag == null
                        ? "https://wrld-se-prod.b-cdn.net/images/user-empty.svg?width=640&height=640"
                        : trip.flag
                    }
                    alt="countryFlags/VN"
                    className="w_fu w_fB"
                  />
                </div>
              </div>
              <div className={styles["profile-image"]}>
                <Link to={trip.username || "/"} className="w_AP w_kj w_kq">
                  <img
                    alt="profile"
                    src={
                      trip.profilePhoto == null
                        ? "https://wrld-se-prod.b-cdn.net/images/user-empty.svg?width=640&height=640"
                        : trip.profilePhoto
                    }
                  />
                </Link>
              </div>
            </div>

            <div className={styles.bottom}>
              <Link
                to={`/trip/${trip.id}`}
                className={styles["trip-name"]}
              >
                <div className="">
                  <span>{trip.name}</span>
                </div>
              </Link>
              <div className={styles["destination-info"]}>
                <span>{trip.numOfDates} days</span>
                <span>{trip.numOfPhotos} photos</span>
                <span>{trip.numOfPlaces} places</span>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return <>{render()}</>;
};

export default TripItem;
