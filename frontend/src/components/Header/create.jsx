import { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { IoTodayOutline, IoLocationOutline } from "react-icons/io5";
import { useDetectOutsideClick } from "../useDetectOutsideClick";

export default function Create() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  return (
    <div className={styles.menuButton}>
      <button onClick={onClick}>
        <div className={styles.menuIcon}>
          <img
            src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#place-add-bold_emptybd-usage"
            alt="common/place-add-bold_empty"
          />
        </div>
        <span>Create</span>
      </button>
      <div
        ref={dropdownRef}
        className={`${styles.popupContent} ${
          isActive ? `${styles.active}` : "inactive"
        }`}
        style={{ right: "270px" }}
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
        <div className={styles.formLogout}>
          <div className={styles.logout}>
            <div className={styles.logoutContent}>
              <div className={styles.logoutIcon}>
                <IoTodayOutline />
              </div>
              <Link to="/newTrip">
                <div className={styles.logoutTitle}>
                  <span>Visible To All</span>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.logout}>
            <div className={styles.logoutContent}>
              <div className={styles.logoutIcon}>
                <IoLocationOutline />
              </div>
              <Link to="/pastTrip">
                <div className={styles.logoutTitle}>
                  <span>Visible To Me</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
