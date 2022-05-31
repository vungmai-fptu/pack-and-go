import classNames from "classnames";
import { Link, Redirect } from "react-router-dom";
import styles from "./header.module.css";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
export default function FormLogout(props) {
  return (
    <div
      className={classNames(
        `${styles.hidden}`,
        props.hidden && `${styles.popupContent}`
      )}
    >
      <div
        style={{
          height: 8,
          width: 16,
          position: "absolute",
          background: "transparent",
          color: "rgb(255, 255, 255)",
          zIndex: 1,
          transform: "rotate(0deg) translateY(-100%) translateX(-50%)",
          top: "0%",
          left: 162,
        }}
      >
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
              <div
                width="48.96875"
                height={19}
                style={{
                  width: "100%",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                <span>Log out</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
