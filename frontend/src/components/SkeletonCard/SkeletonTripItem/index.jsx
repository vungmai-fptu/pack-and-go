import React from "react";
import Skeleton from "react-loading-skeleton";
import styles from "../../TripItem/TripItem.module.css";
import { Link } from "react-router-dom";
const SkeletonTripItem = () => {
  return (
    <>
      {Array(3)
        .fill()
        .map((item, index) => (
          <div className={styles.outer} key={index}>
            <div className={styles["item-image"]}>
              <img
                alt="thumbnailUrl"
                src="fonts/src_app_components_components_svgIcon_icons_customsprite-70fd46.svg#background-mapiV-usage"
                style={{ width: "80%", height: "80%", top: "25px" }}
              />
            </div>
            <div href="/trip/draft?id=348410" className={styles.inner}>
              <div className={styles.top}>
                <div className={styles["list-flag"]} width="144" height="32">
                  <Skeleton circle={true} height={30} width={30} />
                </div>
                <Skeleton circle={true} height={35} width={35} />
              </div>

              <div className={styles.bottom}>
                <Skeleton height={30} width={`70%`} borderRadius={13} />
                <br />
                <Skeleton height={20} width={`30%`} borderRadius={10} />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default SkeletonTripItem;
