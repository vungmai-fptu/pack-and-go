import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { IoArrowBack } from "react-icons/io5";
import { useIsHidden } from "../../../hooks/useIsHidden";
import styles from "./register.module.css";
import { postRegistration } from "../../../store/actions/user.action";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import validateInput from "../../../components/validateInput/validateInput";
function Register() {
  const { hidden, handleClick } = useIsHidden();
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
    validateInput(event, user, error, setError);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postRegistration(user, history));
  };
  return (
    <div>
      <div>
        <div className={styles.container}>
          <img
            src="fonts/src_app_components_components_svgIcon_icons_customsprite-70fd46.svg#travelers-1j_-usage"
            alt="custom/travelers-1"
            className={styles.travelers}
            style={{ right: "calc(50% + 350px)" }}
          />
          <img
            src="fonts/src_app_components_components_svgIcon_icons_customsprite-70fd46.svg#travelers-2kb-usage"
            alt="custom/travelers-2"
            className={styles.travelers}
            style={{ left: "calc(50% + 350px)" }}
          />
          <div className={styles.logo}>
            <Link to="/">
              <img alt="Trip diary logo" src="images/3bl.png" />
            </Link>
          </div>
          <div></div>
          <div className={styles.register}>
            <div
              className={classNames(
                `${styles.formRegister}`,
                hidden && `${styles.formRegisterHidden}`
              )}
            >
              <div className={styles.title}>
                <h1>Registration</h1>
              </div>
              <div>
                <Link to="/sign/fb-login" style={{ background: "#4359ac" }}>
                  <div className={styles.icons}>
                    <img
                      src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#socials-fbbR-usage"
                      alt="common/socials-fb"
                    />
                  </div>
                  <div>
                    <span>With Facebook (update soon)</span>
                  </div>
                </Link>
                <Link to="/sign/google-login" style={{ background: "#c73534" }}>
                  <div className={styles.icons}>
                    <img
                      src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#socials-googlebS-usage"
                      alt="common/socials-google"
                    />
                  </div>
                  <div>
                    <span>With Google</span>
                  </div>
                </Link>
                <button
                  style={{
                    background: "linear-gradient(114deg,#00e1d6,#66ede7)",
                  }}
                  onClick={handleClick}
                >
                  <div className={styles.icons}>
                    <img
                      src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#email_fullW-usage"
                      alt="common/email_full"
                    />
                  </div>
                  <div>
                    <span>With Email</span>
                  </div>
                </button>
                <span className={styles.span}>
                  By registering I agree to the
                  <Link to="/doc/privacy-policy">
                    <div>
                      <span>processing of personal data</span>
                    </div>
                  </Link>
                  and
                  <Link to="/doc/terms">
                    <div>
                      <span>Terms of Use</span>
                    </div>
                  </Link>
                  of the app.
                </span>
              </div>
            </div>
            <div
              className={classNames(
                `${styles.formRegisterHidden}`,
                hidden && `${styles.formRegisterEmail}`
              )}
            >
              <div className={styles.title}>
                <button className={styles.back} onClick={handleClick}>
                  <div className={styles.icons}>
                    <IoArrowBack />
                    <div>
                      <span>Back</span>
                    </div>
                  </div>
                </button>
                <h1>Registration</h1>
              </div>
              <form className={styles.loginEmail} onSubmit={handleSubmit}>
                <div className={styles.input}>
                  <div className={styles.inputEmail}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Fill your email adress"
                      onChange={handleChange}
                      onBlur={validateInput}
                      required
                    />
                    {error.email && (
                      <span style={{ color: "#e64646" }}>{error.email}</span>
                    )}
                  </div>
                </div>
                <div className={styles.input}>
                  <div className={styles.inputEmail}>
                    <input
                      type="text"
                      name="username"
                      placeholder="Fill your username adress"
                      onChange={handleChange}
                      onBlur={validateInput}
                      required
                    />
                    {error.username && (
                      <span style={{ color: "#e64646" }}>{error.username}</span>
                    )}
                  </div>
                </div>
                <div className={styles.input}>
                  <div className={styles.inputEmail}>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={validateInput}
                      required
                    />
                    {error.password && (
                      <span style={{ color: "#e64646" }}>{error.password}</span>
                    )}
                  </div>
                </div>
                <div className={styles.input}>
                  <div className={styles.inputEmail}>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="confirmPassword"
                      onChange={handleChange}
                      onBlur={validateInput}
                      required
                    />
                    {error.confirmPassword && (
                      <span style={{ color: "#e64646" }}>
                        {error.confirmPassword}
                      </span>
                    )}
                  </div>
                </div>
                <div className={styles.recap}>
                  <span>
                    By registering I agree to the
                    <Link to="/doc/privacy-policy">
                      <span>processing of personal data</span>
                    </Link>
                    and
                    <Link to="/doc/terms">
                      <span>Terms of Use</span>
                    </Link>
                    of the app. This site is protected by reCAPTCHA and the
                    Google
                    <Link to="https://policies.google.com/privacy">
                      <span>Privacy Policy</span>
                    </Link>
                    and
                    <Link to="https://policies.google.com/terms">
                      <span>Terms of Service</span>
                    </Link>
                    apply.
                  </span>
                </div>
                <button>
                  <span>Register</span>
                </button>
              </form>
            </div>
            <div className={styles.login}>
              <span>Do you already have an account?</span>
              <Link to="/login">
                <div>
                  <span>Log in</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
}

export default Register;
