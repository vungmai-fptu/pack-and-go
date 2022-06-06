import { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../trip.module.css";
import { IoPeopleOutline, IoLockClosedOutline } from "react-icons/io5";
import { useDetectOutsideClick } from "./../../../../components/useDetectOutsideClick";
import Date from "./date";

export default function Header() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Link to="/">
              <img alt="logo" src="images/logo/logo-black-2.png" />
            </Link>
          </div>
          <div className={styles.content}>
            <div style={{ marginRight: "8px", minWidth: "60px" }}>
              <div className={styles.tripName}>
                <input type="text" placeholder="Enter plan name" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Date />
      <div className={styles.save}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button className={styles.boxControl} onClick={onClick}>
            <img
              src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#earth_fullY-usage"
              alt="common/earth_full"
            />
            <div className={styles.boxIndicators}>
              <div className={styles.boxDropdown} aria-hidden="true">
                <img
                  src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#arrowa-usage"
                  alt="common/arrow"
                />
              </div>
            </div>
          </button>
          <div
            ref={dropdownRef}
            className={`${styles.popupContent} ${
              isActive ? `${styles.active}` : "inactive"
            }`}
            style={{ right: "182px" }}
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
                    <IoPeopleOutline />
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
                    <IoLockClosedOutline />
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
          <div>
            <button className={styles.tripSave}>
              <span>Save and close</span>
            </button>
          </div>
          <img
            src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#option-dotsa1-usage"
            alt="common/option-dots"
            style={{ width: "40px", padding: "7px 3px", margin: "0 8px" }}
          />
        </div>
      </div>
    </div>
  );
}
