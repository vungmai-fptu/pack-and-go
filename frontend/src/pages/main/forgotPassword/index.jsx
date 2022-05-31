import React, { useState } from "react";
import { Link } from "react-router-dom";
import validateInput from "../../../components/validateInput/validateInput";
import styles from "./forgotPassword.module.css";
function ForgotPassword() {
  const [forgotPassword, setForgotPassword] = useState({
    forgotPassword: "",
  });
  const [error, setError] = useState({
    forgotPassword: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForgotPassword({
      ...forgotPassword,
      [name]: value,
    });
    validateInput(event, forgotPassword, error, setError);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
            <div className={styles.formLogin}>
              <h1>Forgotten password</h1>
              <span style={{ padding: " 20px 0;" }}>
                Please enter your registration email and we will send you a link
                to reset your password right away.
              </span>
              <form className={styles.loginEmail} onSubmit={handleSubmit}>
                <div className={styles.input}>
                  <div className={styles.inputEmail}>
                    <input
                      type="email"
                      name="forgotPassword"
                      placeholder="Fill your email address"
                      onChange={handleChange}
                    />
                    {error.forgotPassword && (
                      <span style={{ color: "#e64646" }}>
                        {error.forgotPassword}
                      </span>
                    )}
                  </div>
                </div>
                <button>
                  <span> Renew password</span>
                </button>
              </form>
            </div>
            <div className={styles.register}>
              <Link to="/login">
                <span>Back to Login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
