import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { IoArrowBack } from "react-icons/io5";
import { useIsHidden } from "../../../hooks/useIsHidden";
import { postLogin } from "./../../../store/actions/user.action";
import styles from "./login.module.css";
import LoginGoogle from "./loginGoogle";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import validateInput from "../../../components/validateInput/validateInput";
import Validate from "../../../components/validateInput";
function Login() {
  const { hidden, handleClick } = useIsHidden();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    usernameOrEmail: "",
    password: "",
  });
  const [error, setError] = useState({
    usernameOrEmail: "",
    password: "",
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

    user.usernameOrEmail === "" || user.password === ""
      ? setError({
          usernameOrEmail: "Enter Email Or UserName",
          password: "Enter Password",
        })
      : dispatch(postLogin(user.usernameOrEmail, user.password));
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
              <img alt="Worldee logo" src="images/3bl.png" />
            </Link>
          </div>
          <div />
          <div className={styles.login}>
            <div
              className={classNames(
                `${styles.formLogin}`,
                hidden && `${styles.formLoginHidden}`
              )}
            >
              <div className={styles.title}>
                <h1>Login</h1>
              </div>
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
              <LoginGoogle />
              <button
                style={{
                  background: "linear-gradient(114deg,#00e1d6,#66ede7)",
                  marginBottom: "16px",
                  color: "#fff",
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
            </div>
            <div
              className={classNames(
                `${styles.formLoginHidden}`,
                hidden && `${styles.formLoginEmail}`
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
                <h1>Login</h1>
              </div>
              <form className={styles.loginEmail} onSubmit={handleSubmit}>
                <div className={styles.input}>
                  <div className={styles.inputEmail}>
                    <input
                      id="email"
                      type="text"
                      name="usernameOrEmail"
                      placeholder="Fill your email Or UserName address"
                      onChange={handleChange}
                    />
                    <Validate error={error.usernameOrEmail} />
                  </div>
                </div>
                <div className={styles.input}>
                  <div className={styles.inputEmail}>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                    />
                    <Validate error={error.password} />
                  </div>
                </div>
                <button>
                  <span>Log in</span>
                </button>
              </form>
              <div className={styles.register} style={{ background: "none" }}>
                <Link to="/sign/forgotten-password">
                  <span>Forgot your password?</span>
                </Link>
              </div>
            </div>
            <div className={styles.register}>
              <span>Are you new to Worldee?</span>
              <Link to="/sign/up">
                <span>Register</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
}

export default Login;
