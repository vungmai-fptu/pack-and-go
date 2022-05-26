import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useIsHidden } from "../../../hooks/useIsHidden";
import { postLogin } from "./../../../store/actions/user.action";
import styles from "./login.module.css";
function Login() {
  const { hidden, handleClick } = useIsHidden();
  const result = useState(0);
  console.log("result : ", result);

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const [validated, setValidated] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postLogin(user.taiKhoan, user.matKhau));
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
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
              <img
                alt="Worldee logo"
                src="https://wrld-se-prod.b-cdn.net/client/images/src/app/components/components/logo/imgs/a83c533ff7417b8d1092.svg"
              />
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
                  <span>With Facebook</span>
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
                    <img
                      src="fonts/src_app_components_components_svgIcon_icons_commonsprite-8ddb95.svg#arrowb-usage"
                      alt="common/arrow"
                    />
                  </div>
                  <div>
                    <span>Back</span>
                  </div>
                </button>
                <h1>Login</h1>
              </div>
              <form
                className={styles.loginEmail}
                onSubmit={handleSubmit}
                validated={validated}
              >
                <div className={styles.input}>
                  <div className={styles.inputEmail}>
                    <input
                      type="text"
                      id="taiKhoan"
                      name="taiKhoan"
                      placeholder="Fill your email address"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={styles.input}>
                  <div className={styles.inputEmail}>
                    <input
                      type="password"
                      name="matKhau"
                      placeholder="Password"
                      onChange={handleChange}
                    />
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
    </div>
  );
}

export default Login;
