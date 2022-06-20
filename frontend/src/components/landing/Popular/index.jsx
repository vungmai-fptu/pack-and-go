import React, { useEffect } from "react";
import SectionContainer from "../SectionContainer";
import SectionHeader from "../SectionHeader";
import styles from "./Popular.module.css";
import TripItem from "../../TripItem/TripItem";
import Aos from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import RenderTripItem from "./../../RenderTripItem/index";

const Popular = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  }, []);
  return (
    <div className="w_cs" data-aos={"fade-down"}>
      <SectionContainer>
        <SectionHeader>Peek into some saved stories</SectionHeader>
        <div className={styles["trip-container"]}>
          <div className={styles["trip-items"]}>
            <RenderTripItem />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Popular;
