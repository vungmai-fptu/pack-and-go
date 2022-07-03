import { Link } from "react-router-dom";
import logo from "../../assets/images/logos/logo-3.png";
import styles from "../Header/header.module.css";
import { useEffect, useState } from "react";
import { useIsLogin } from "../../hooks/useIsLogin";
import axios from "axios";

export default function HeaderMeeting() {
  const { user } = useIsLogin();
  const [state, setState] = useState({});
  useEffect(
    () => {
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/api/users/${user.username}/trips`
        )
        .then((res) => {
          const persons = res.data;
          setState(persons);
        })
        .catch((error) => console.log(error));
    },
    // eslint-disable-next-line
    []
  );

  const src =
    state.profileImageUrl == null
      ? "https://wrld-se-prod.b-cdn.net/images/user-empty.svg"
      : state.profileImageUrl;

  return (
    <header>
      <div
        className={styles.header}
        style={{ background: "rgb(24, 25, 26)", boxShadow: "none" }}
      >
        <div className={styles.headerLogo}>
          <div>
            <Link to="/feed">
              <img alt="logo" src={logo} />
            </Link>
          </div>
        </div>
        <div className={styles.menu}></div>
        <div className={styles.profile}>
          <div className={styles.profileList}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link
                to={`/profile/${user.username}`}
                style={{ color: "aliceblue" }}
              >
                <div className={styles.profileIcon}>
                  <img className="w_km" alt="profile" src={src} />
                </div>
                <div>
                  <span>{user.username}</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
