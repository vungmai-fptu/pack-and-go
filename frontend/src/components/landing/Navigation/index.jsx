import React from 'react'
import logo from '../../../asset/images/logos/logo-3.png';
import styles from './Navigator.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div>
        <a href="/" className={styles.logo}>
          <img src={logo} alt="" />
        </a>
      </div>
      <div className={styles["nav-list"]}>
        <a href="/login" className={styles.login}>
          Login
        </a>
        <a href="/sign-up" className={styles.register}>
          Join Pack&Go
        </a>
      </div>
    </nav>
  )
}

export default Navigation