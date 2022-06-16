import React from "react";
import styles from "./TripItem.module.css";
import { Link } from "react-router-dom";

const TripItem = (props) => {
  const render = () => {
    return props.listUser.trips.map((listUser, index) => {
      return (
        <div className={styles.outer} key={index}>
          <div className={styles["item-image"]}>
            <img
              alt="thumbnailUrl"
              src={
                listUser.thumbnailUrl === ""
                  ? "https://wrld-se-prod.b-cdn.net/images/bezfotky.png"
                  : listUser.thumbnailUrl
              }
            />
          </div>
          <div href="/trip/draft?id=348410" className={styles.inner}>
            <div className={styles.top}>
              <div className={styles["list-flag"]} width="144" height="32">
                <div className={styles.flag}>
                  <img
                    src={
                      listUser.flag == null
                        ? "https://wrld-se-prod.b-cdn.net/images/user-empty.svg?width=640&height=640"
                        : listUser.flag
                    }
                    alt="countryFlags/VN"
                    className="w_fu w_fB"
                  />
                </div>
              </div>
              <div title="Sơn Lê" className={styles["profile-image"]}>
                <Link to={listUser.username || "/"} className="w_AP w_kj w_kq">
                  <img
                    alt="profile"
                    src={
                      listUser.profilePhoto == null
                        ? "https://wrld-se-prod.b-cdn.net/images/user-empty.svg?width=640&height=640"
                        : listUser.profilePhoto
                    }
                  />
                </Link>
              </div>
            </div>

            <div className={styles.bottom}>
              <Link
                to="/trips/trips-to-america"
                className={styles["trip-name"]}
              >
                <div className="">
                  <span>{props.listUser.tripName}</span>
                </div>
              </Link>
              <div className={styles["destination-info"]}>
                <span>{listUser.numOfDates} days</span>
                <span>{listUser.numOfPhotos} photos</span>
                <span>{listUser.numOfPlaces} places</span>
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
