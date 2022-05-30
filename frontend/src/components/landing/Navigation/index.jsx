import React from "react";
import logo from "../../../assets/images/logos/logo-3.png";
import styles from "./Navigator.module.css";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className={styles["nav-list"]}>
        <Link to="/sign/in" className={styles.login}>
          Login
        </Link>
        <Link to="/sign/up" className={styles.register}>
          Join Pack&Go
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
