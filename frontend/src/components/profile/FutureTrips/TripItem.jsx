import React from "react";
import { Link } from "react-router-dom";
import styles from "./TripItem.module.css";
const TripItem = (props) => {
  return props.trips.trips.map((trips, index) => {
    const place = trips.visitDays.map((place) => place.visitPlaces).flat();
    const image = place.map((place) => place.images).flat();
    return (
      <div className={styles.outer} key={index}>
        <div className={styles["item-image"]}>
          <img
            alt="ha noi"
            src={
              trips.thumbnailUrl === null
                ? "https://wrld-se-prod.b-cdn.net/images/bezfotky.png"
                : trips.thumbnailUrl
            }
          />
        </div>
        <Link to={`/trip/${trips.id}`} className={styles.inner}>
          <div className={styles.top}>
            <div className={styles["list-flag"]}>
              <div className={styles.flag}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1280px-Flag_of_Vietnam.svg.png"
                  alt="countryFlags/VN"
                  className="w_fu w_fB"
                />
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles["destination-name"]}>
              <div>
                <span>{trips.name}</span>
              </div>
            </div>
            <div className={styles["destination-info"]}>
              <span>{trips.visitDays.length} days</span>
              <span>{place.length} Place</span>
              <span>{image.length} Photos</span>
            </div>
          </div>
        </Link>
      </div>
    );
  });
};

export default TripItem;
