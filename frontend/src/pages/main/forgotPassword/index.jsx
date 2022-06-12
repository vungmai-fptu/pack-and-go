import React from "react";
import NotificationContainer from "react-notifications/lib/NotificationContainer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useForm from "../../../components/useForm/useForm";
import Validate from "../../../components/validateInput";
import { validateForgotPassword } from "../../../components/validateInput/validateInput";
import { useIsLogin } from "../../../hooks/useIsLogin";
import { postResetPasswordRequest } from "../../../store/actions/user.action";
import styles from "./forgotPassword.module.css";
function ForgotPassword() {
  const dispatch = useDispatch();
  const { loading } = useIsLogin();
  const { values, errors, handleChange, handleSubmit } = useForm(
    handleSubmits,
    validateForgotPassword
  );
  function handleSubmits() {
    dispatch(postResetPasswordRequest(values.forgotPassword));
  }
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
            <div className={styles.formLogin}>
              <h1>Forgotten password</h1>
              <span style={{ padding: " 20px 0" }}>
                Please enter your registration email and we will send you a link
                to reset your password right away.
              </span>
              <form
                className={styles.loginEmail}
                onSubmit={handleSubmit}
                noValidate
              >
                <div className={styles.input}>
                  <div className={styles.inputEmail}>
                    <input
                      type="email"
                      name="forgotPassword"
                      placeholder="Fill your email address"
                      onChange={handleChange}
                      value={values.forgotPassword || ""}
                      required
                    />
                    <Validate errors={errors.forgotPassword} />
                  </div>
                </div>
                {loading ? (
                  <button disabled style={{ opacity: ".4" }}>
                    <span>Reset password </span>
                    <div className="loadingio-spinner-ripple-ormwzc5m72e">
                      <div className="ldio-gw2gg1659v">
                        <div />
                        <div />
                      </div>
                    </div>
                  </button>
                ) : (
                  <button>
                    <span>Reset password</span>
                  </button>
                )}
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
      <NotificationContainer />
    </div>
  );
}

export default ForgotPassword;
