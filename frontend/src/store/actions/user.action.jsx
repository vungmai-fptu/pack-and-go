import axios from "axios";
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTRATION_FAILED,
  REGISTRATION_SUCCESS,
} from "../constants/user.const";
import { startLoading, stopLoading } from "../actions/common.action";
export const postLogin = (usernameOrEmail, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "POST",
      url: "https://trip-diary-backend.herokuapp.com/api/auth/signin",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        usernameOrEmail,
        password,
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        localStorage.setItem("userLogin", JSON.stringify(res.data));
        dispatch(postLoginSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(postLoginFailed(err));
      });
  };
};

export const postLoginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

const postLoginFailed = (err) => {
  return {
    type: LOGIN_FAILED,
    payload: err,
  };
};
export const postRegistration = (values) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "POST",
      url: "https://trip-diary-backend.herokuapp.com/api/auth/signup",
      data: {
        email: values.email,
        username: values.username,
        password: values.password,
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch(postRegistrationSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(postRegistrationFailed(err));
      });
  };
};

const postRegistrationSuccess = (user) => {
  return {
    type: REGISTRATION_SUCCESS,
    payload: user,
  };
};

const postRegistrationFailed = (err) => {
  return {
    type: REGISTRATION_FAILED,
    payload: err,
  };
};
