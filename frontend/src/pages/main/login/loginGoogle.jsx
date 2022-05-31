import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";
import styles from "./login.module.css";
import { useDispatch } from "react-redux";
import { postLoginSuccess } from "../../../store/actions/user.action";

const clientId =
  "299402568375-ih3in50qahdomql32v7c864vc3c78kh5.apps.googleusercontent.com";
export default function LoginGoogle() {
  const dispatch = useDispatch();

  const config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
  const onSuccess = async (res) => {
    let jwtToken = await axios.post(
      "https://trip-diary-backend.herokuapp.com/oauth2/jwt/google",
      JSON.stringify(res),
      config
    );
    console.log(res);
    if (jwtToken.status === 200) {
      localStorage.setItem("jwtToken", JSON.stringify(jwtToken.data));
    }
    dispatch(postLoginSuccess(jwtToken.data));
  };
  const onFailure = (res) => {
    console.log("onFailure", res);
  };
  return (
    <GoogleLogin
      render={(renderProps) => (
        <button
          style={{ background: "#c73534", marginBottom: "16px", color: "#fff" }}
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <div className={styles.icons}>
            <img
              src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#socials-googlebS-usage"
              alt="common/socials-google"
            />
          </div>
          <div>
            <span>With Google</span>
          </div>
        </button>
      )}
      buttonText="Login"
      clientId={clientId}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
}
