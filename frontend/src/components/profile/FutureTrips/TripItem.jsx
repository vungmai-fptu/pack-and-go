import React from "react";
import { Link } from "react-router-dom";
import styles from "./TripItem.module.css";
const TripItem = (props) => {
  return props.trips.trips.map((trips, index) => {
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
        <Link to="/trip/draft?id=348410" className={styles.inner}>
          <div className={styles.top}>
            <div className={styles["list-flag"]} width="144" height="32">
              <div className={styles.flag}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1280px-Flag_of_Vietnam.svg.png"
                  alt="countryFlags/VN"
                  className="w_fu w_fB"
                />
              </div>
              <div className={styles.flag}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1280px-Flag_of_Vietnam.svg.png"
                  alt="countryFlags/VN"
                  className="w_fu w_fB"
                />
              </div>
              <div className={styles.flag}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1280px-Flag_of_Vietnam.svg.png"
                  alt="countryFlags/VN"
                  className="w_fu w_fB"
                />
              </div>
            </div>
            <div title="Sơn Lê" className={styles["profile-image"]}>
              <Link to="/son" className="w_AP w_kj w_kq">
                <img
                  className=""
                  alt="profile"
                  src="https://wrld-wa-ec1-prod.b-cdn.net/accounts/26b82d3a4f4fca22b1ef4a3e1aaac37a/profile/56284ea742762a1.77627864.jpg?width=640&amp;height=640"
                />
              </Link>
            </div>
          </div>

          <div className={styles.bottom}>
            <div className={styles["destination-name"]}>
              <div className="">
                <span>{trips.name}</span>
              </div>
            </div>
            <div className={styles["destination-info"]}>
              <span>2 days</span>
              <span>1 Place</span>
              <span>2 Photos</span>
            </div>
          </div>
        </Link>
      </div>
    );
  });
};

export default TripItem;
