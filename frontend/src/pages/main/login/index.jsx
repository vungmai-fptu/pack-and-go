import React from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.css";
function Login() {
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
              <div className={styles.title}>
                <h1 className="w_jf w_jk w_jC w_jq w_lh">Login</h1>
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
            <div className={styles.register}>
              <span>Are you new to Worldee?</span>
              <Link to="/sign/up">
                <div>
                  <span>Register</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
