import { useRef } from "react";
import { Link, Redirect } from "react-router-dom";
import styles from "./header.module.css";
import {
  IoSettingsOutline,
  IoLogOutOutline,
  IoChevronDownOutline,
} from "react-icons/io5";
import { useDetectOutsideClick } from "../useDetectOutsideClick";
import { useHistory } from "react-router-dom";

export default function FormLogout() {
  const dropdownRef = useRef(null);
  const history = useHistory();
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  return (
    <div>
      <button onClick={onClick}>
        <div className={styles.profileIcon}>
          <div className={styles.dropdown}>
            <IoChevronDownOutline />
          </div>
        </div>
        <span />
      </button>
      <div
        ref={dropdownRef}
        className={`${styles.popupContent} ${isActive ? `${styles.active}` : "inactive"
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
              <Link to="/setting">
                <div className={styles.logoutIcon}>
                  <IoSettingsOutline />
                </div>
                <div className={styles.logoutTitle}>
                  <span>Settings</span>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.logout}>
            <div className={styles.logoutContent}>
              <Link
                to="/"
                className={styles.logoutTitle}
                onClick={() => {
                  localStorage.removeItem("userLogin");
                  localStorage.removeItem("jwtToken");
                  localStorage.removeItem("accessToken");
                  history.push("/");
                }}
              >
                <div className={styles.logoutIcon}>
                  <IoLogOutOutline />
                </div>
                <div className={styles.logoutTitle}>
                  <span>Log out</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
