import axios from "axios";
import { NotificationManager } from "react-notifications";
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTRATION_FAILED,
  REGISTRATION_SUCCESS,
  RESETPASSWORD_FAILED,
  RESETPASSWORD_SUCCESS,
  RESETPASSWORD_REQUEST_FAILED,
  RESETPASSWORD_REQUEST_SUCCESS,
  LIST_USER_SUCCESS,
  LIST_USER_FAILED,
  USER_SUCCESS,
  USER_FAILED,
} from "../constants/user.const";
import { startLoading, stopLoading } from "../actions/common.action";

const API_URL = process.env.REACT_APP_API_URL;

export const postLogin = (usernameOrEmail, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "POST",
      url: `${API_URL}/api/auth/signin`,
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
        dispatch(postLoginSuccess(res.data));
        localStorage.setItem("userLogin", JSON.stringify(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(postLoginFailed(err));
        NotificationManager.error(err.response.data.message);
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
export const postRegistration = (values, goBack) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "POST",
      url: `${API_URL}/api/auth/signup`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: values.email,
        username: values.username,
        password: values.password,
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch(postRegistrationSuccess(res.data));
        goBack.push("/login");
        NotificationManager.success(res.data.message);
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(postRegistrationFailed(err));
        NotificationManager.error(err.response.data.message);
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

export const postResetPasswordRequest = (forgotPassword) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "POST",
      url: `${API_URL}/api/auth/reset-password-request`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: forgotPassword,
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch(postResetPasswordRequestSuccess(res.data));
        NotificationManager.success(res.data.message);
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(postResetPasswordRequestFailed(err));
        NotificationManager.error(err.response.data.message);
      });
  };
};

const postResetPasswordRequestSuccess = (user) => {
  return {
    type: RESETPASSWORD_REQUEST_SUCCESS,
    payload: user,
  };
};

const postResetPasswordRequestFailed = (err) => {
  return {
    type: RESETPASSWORD_REQUEST_FAILED,
    payload: err,
  };
};

export const postResetPassword = (token, newPassword, goBack) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "POST",
      url: `${API_URL}/api/auth/reset-password`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        token: token,
        newPassword: newPassword,
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch(postResetPasswordSuccess(res.data));
        goBack.push("/login");
        NotificationManager.success(res.data.message);
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(postResetPasswordFailed(err));
        NotificationManager.error(err.response.data.message);
      });
  };
};

const postResetPasswordSuccess = (user) => {
  return {
    type: RESETPASSWORD_SUCCESS,
    payload: user,
  };
};

const postResetPasswordFailed = (err) => {
  return {
    type: RESETPASSWORD_FAILED,
    payload: err,
  };
};

export const getListUser = () => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "GET",
      url: `${API_URL}/api/users/trips?page=1&size=10`,
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch(getListUserSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(getListUserFailed(err));
      });
  };
};

export const getListUserSuccess = (listUser) => {
  return {
    type: LIST_USER_SUCCESS,
    payload: listUser,
  };
};

const getListUserFailed = (err) => {
  return {
    type: LIST_USER_FAILED,
    payload: err,
  };
};

export const getUser = (username) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "GET",
      url: `${API_URL}/api/users/${username}/trips`,
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch(getUserSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(getUserFailed(err));
      });
  };
};

export const getUserSuccess = (users) => {
  return {
    type: USER_SUCCESS,
    payload: users,
  };
};

const getUserFailed = (err) => {
  return {
    type: USER_FAILED,
    payload: err,
  };
};
