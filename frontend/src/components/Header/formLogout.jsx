import { useRef } from "react";
import { Link, Redirect } from "react-router-dom";
import styles from "./header.module.css";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { useDetectOutsideClick } from "../useDetectOutsideClick";

export default function FormLogout() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  return (
    <div>
      <button onClick={onClick}>
        <div className={styles.profileIcon}>
          <div className={styles.dropdown}>
            <img
              src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#arrowa-usage"
              alt="common/arrow"
            />
          </div>
        </div>
        <span />
      </button>
      <div
        ref={dropdownRef}
        className={`${styles.popupContent} ${
          isActive ? `${styles.active}` : "inactive"
        }`}
        style={{ right: "24px" }}
      >
        <div className={styles.dropdownTop} style={{ left: "90% " }}>
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
                <IoSettingsOutline />
              </div>
              <Link to="/setting">
                <div className={styles.logoutTitle}>
                  <span>Settings</span>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.logout}>
            <div className={styles.logoutContent}>
              <div className={styles.logoutIcon}>
                <IoLogOutOutline />
              </div>
              <a
                href="/landing"
                className={styles.logoutTitle}
                onClick={async () => {
                  localStorage.removeItem("userLogin");
                  localStorage.removeItem("jwtToken");
                  localStorage.removeItem("accessToken");
                  return <Redirect to="/landing" />;
                }}
              >
                <div className={styles.logoutTitle}>
                  <span>Log out</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
