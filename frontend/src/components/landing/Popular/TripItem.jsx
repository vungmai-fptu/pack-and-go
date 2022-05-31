import React from 'react'
import styles from "./TripItem.module.css";
const TripItem = () => {
  //pass info to props

  return (
    <div className={styles.outer}>
      <div className={styles["item-image"]}>
        <img alt="ha noi" src="https://wrld-wa-ec1-prod.b-cdn.net/accounts/26b82d3a4f4fca22b1ef4a3e1aaac37a/trips/2022-05-18/348410/ino5yeehlhpf-0aamiat.jpg?width=640&amp;height=640" />
      </div>
      <a href="/trip/draft?id=348410" className={styles.inner}>
        <div className={styles.top}>
          <div className={styles["list-flag"]} width="144" height="32">
            <div className={styles.flag}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1280px-Flag_of_Vietnam.svg.png" alt="countryFlags/VN" className="w_fu w_fB" />
            </div>
            <div className={styles.flag}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1280px-Flag_of_Vietnam.svg.png" alt="countryFlags/VN" className="w_fu w_fB" />
            </div>
            <div className={styles.flag}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1280px-Flag_of_Vietnam.svg.png" alt="countryFlags/VN" className="w_fu w_fB" />
            </div>
          </div>
          <div title="Sơn Lê" className={styles["profile-image"]}>
            <a href="/son" className="w_AP w_kj w_kq">
              <img alt="profile" src="https://wrld-wa-ec1-prod.b-cdn.net/accounts/26b82d3a4f4fca22b1ef4a3e1aaac37a/profile/56284ea742762a1.77627864.jpg?width=640&amp;height=640" />
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles["destination-name"]}>
            <div className="">
              <span>America</span>
            </div>
          </div>
          <div className={styles["destination-info"]}>
            <span>2 days</span>
            <span>1 Place</span>
            <span>2 Photos</span>
          </div>
        </div>
      </a >
    </div >
  )
}

export default TripItem