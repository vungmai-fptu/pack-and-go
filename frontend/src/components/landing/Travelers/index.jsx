import React from "react";
import SectionContainer from "../../profile/SectionContainer";
import Traveler from "../../Traveller/traveler";
import SectionHeader from "../SectionHeader";
import styles from "./Travelers.module.css";
import RenderTraveler from "./../../RenderTraveler/index";

const Travelers = (props) => {
  return (
    <SectionContainer>
      <SectionHeader>Popular travelers</SectionHeader>
      <div className={styles.travelers_container}>
        <RenderTraveler />
      </div>
    </SectionContainer>
  );
};

export default Travelers;
