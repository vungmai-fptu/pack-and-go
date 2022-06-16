import React from "react";
import styles from "./nav.module.css";
import SectionContainer from "../SectionContainer";
import { BiFilter } from "react-icons/bi";
import CountrySelector from "./CountrySelector";
import TabGroup from "./TabGroup";

const MapNav = () => {
  return (
    <div>
      <SectionContainer>
        <div className={styles["nav-wrapper"]}>
          <div className={styles["map-nav"]}>
            <button className={styles["btn-selected"]} id="firstTab">
              <span className={styles["nav-title"]}>All trips</span>
            </button>
            <button className={styles.btn} id="secondTab">
              <span className={styles["nav-title"]}>Global trips</span>
            </button>
            <button className={styles.btn} id="thirdTab">
              <div className={styles["btn-icon"]}>
                <img
                  src="https://www.worldometers.info/img/flags/vm-flag.gif"
                  alt="country flag"
                  className={styles["btn-circle-img"]}
                />
              </div>
              <span className={styles["nav-title"]}>Local Trips</span>
            </button>
            <button className={styles.btn} id="lastTab">
              <div className={styles["btn-icon"]}>
                <BiFilter />
              </div>
              <div className={styles["country-selector"]}>
                <CountrySelector />
              </div>
            </button>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default MapNav;
