import { useRef, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import GetDate from "../../../../components/date";
import styles from "../trip.module.css";
import { useDetectOutsideClick } from "./../../../../components/useDetectOutsideClick";

export default function Date() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const [isExact, setIsExact] = useState(false);

  const onClick = () => setIsActive(!isActive);
  const onClickExact = () => setIsExact(!isExact);
  return (
    <div className={styles.tripDate}>
      <div className={styles.date}>
        <button onClick={onClick}>
          <img
            src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#calendarl-usage"
            alt="common/calendar"
          />
          <span style={{ paddingLeft: "8px" }}>Enter date</span>
        </button>
        <div
          className={`${styles.formTripDate} ${
            isActive ? `${styles.active}` : "inactive"
          }`}
        >
          <div className={styles.dropdownTop} style={{ left: "50% " }}>
            <svg
              data-testid="arrow"
              className={styles.popupArrow}
              viewBox="0 0 32 16"
              style={{ position: "absolute" }}
            >
              <path d="M16 0l16 16H0z" fill="currentcolor" />
            </svg>
          </div>
          <div className={styles.formDate}>
            <label>Date</label>
            <div className={styles.tripType}>
              <div className={styles.change}>
                <div
                  className={`${styles.transition} ${
                    isExact ? "inactive" : `${styles.activeExact}`
                  }`}
                />
                <label
                  className={`${isExact && `${styles.cur}`}`}
                  onClick={isExact && onClickExact}
                >
                  <div className={styles.changeTitle}>
                    <span>Exact</span>
                  </div>
                </label>
                <label
                  className={`${!isExact && `${styles.cur}`}`}
                  onClick={!isExact && onClickExact}
                >
                  <div className={styles.changeTitle}>
                    <span>Approximate</span>
                  </div>
                </label>
              </div>
            </div>
            <div className={styles.selectDate}>
              <label>Start Date</label>
              <div className={styles.inputContainer}>
                <div className={styles.outside}>
                  <input placeholder="Select a date" />
                  <div className={styles.setDateIcon}>
                    <img
                      src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#calendarl-usage"
                      alt="common/calendar"
                    />
                  </div>
                </div>
              </div>
              {!isExact ? (
                <div>
                  <label>End Date</label>
                  <div className={styles.inputContainer}>
                    <div className={styles.outside}>
                      <input placeholder="Select a date" />
                      <div className={styles.setDateIcon}>
                        <img
                          src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#calendarl-usage"
                          alt="common/calendar"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              <GetDate />
            </div>
            <div className={styles.buttonSetDate}>
              <div style={{ flex: "1 1 0%", textAlign: "left" }}>
                <button
                  style={{
                    background: "#eff4f9",
                    boxShadow: " 0 0 7px #f4f8fb",
                  }}
                  onClick={onClick}
                >
                  <span>Cancel</span>
                </button>
              </div>
              <div style={{ flex: "1 1 0%", textAlign: "right" }}>
                <button
                  style={{
                    background: "linear-gradient(114deg,#00e1d6,#66ede7)",
                    boxShadow: " 0 0 7px #16e3d952",
                  }}
                >
                  <span>Set dates</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
