import React from "react";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div className="page-content">
      <div id="react-page" className="page-content react-content">
        <div className="w_lc">
          <img
            src="fonts/src_app_components_components_svgIcon_icons_customsprite-70fd46.svg#travelers-1j_-usage"
            alt="custom/travelers-1"
            className="w_fu w_fB w_lv w_lw"
          />
          <img
            src="fonts/src_app_components_components_svgIcon_icons_customsprite-70fd46.svg#travelers-2kb-usage"
            alt="custom/travelers-2"
            className="w_fu w_fB w_lv w_lx"
          />
          <div className="w_le">
            <Link to="/" className="w_AP w_hV w_hZ">
              <img
                alt="Worldee logo"
                src="https://wrld-se-prod.b-cdn.net/client/images/src/app/components/components/logo/imgs/a83c533ff7417b8d1092.svg"
              />
            </Link>
          </div>
          <div></div>
          <div className="w_oz w_lf" style={{ alignItems: "center" }}>
            <div className="w_oz w_li" style={{ alignItems: "center" }}>
              <div className="w_i- w_lj" style={{ justifyContent: "center" }}>
                <h1 className="w_jf w_jk w_jC w_jq w_lh">Registration</h1>
              </div>
              <div className="w_oz w_lm">
                <Link
                  to="/sign/fb-login"
                  className="w_ih w_im w_AT w_AU ga_sign-facebook w_lp"
                >
                  <div className="w_ib">
                    <img
                      src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#socials-fbbR-usage"
                      alt="common/socials-fb"
                      className="w_fu w_fz w_fQ"
                    />
                  </div>
                  <div className="w_A9 w_A-">
                    <span className="w_ia">With Facebook</span>
                  </div>
                </Link>
                <Link
                  to="/sign/google-login"
                  className="w_ih w_im w_AT w_AW ga_sign-google w_lp"
                >
                  <div className="w_ib">
                    <img
                      src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#socials-googlebS-usage"
                      alt="common/socials-google"
                      className="w_fu w_fz w_fQ"
                    />
                  </div>
                  <div className="w_A9 w_A-">
                    <span className="w_ia">With Google</span>
                  </div>
                </Link>
                <Link
                  to="/sign/apple-login"
                  className="w_ih w_in w_AT w_AV ga_sign-apple w_lp"
                >
                  <div className="w_ib">
                    <img
                      src="fonts/src_app_components_components_svgIcon_icons_customsprite-70fd46.svg#socials-applejZ-usage"
                      alt="custom/socials-apple"
                      className="w_fu w_fz"
                    />
                  </div>
                  <div className="w_A9 w_A-">
                    <span className="w_ia">Apple</span>
                  </div>
                </Link>
                <button className="w_ih w_ik w_AT w_AX w_lp">
                  <div className="w_ib">
                    <img
                      src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#email_fullW-usage"
                      alt="common/email_full"
                      className="w_fu w_fz w_fQ"
                    />
                  </div>
                  <div className="w_A9 w_A-">
                    <span className="w_ia">With Email</span>
                  </div>
                </button>
                <span className="w_ly">
                  By registering I agree to the
                  <Link to="/doc/privacy-policy" className="w_ij w_ip w_lz">
                    <div className="w_A9 w_A-">
                      <span className="w_ia">processing of personal data</span>
                    </div>
                  </Link>
                  and
                  <Link to="/doc/terms" className="w_ij w_ip w_lz">
                    <div className="w_A9 w_A-">
                      <span className="w_ia">Terms of Use</span>
                    </div>
                  </Link>
                  of the app.
                </span>
              </div>
            </div>
            <div className="w_lu">
              <span>Do you already have an account?</span>
              <Link to="/sign/in" className="w_ih w_ip w_lt">
                <div className="w_A9 w_A-">
                  <span className="w_ia">Log in</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
