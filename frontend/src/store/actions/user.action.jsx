import axios from "axios";
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTRATION_FAILED,
  REGISTRATION_SUCCESS,
} from "../constants/user.const";
import { startLoading, stopLoading } from "../actions/common.action";
export const postLogin = (taiKhoan, matKhau, history) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: {
        taiKhoan,
        matKhau,
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        console.log(res.data);
        localStorage.setItem("userLogin", JSON.stringify(res.data));
        dispatch(postLoginSuccess(res.data));
        history.goBack();
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(postLoginFailed(err));
        alert.error({
          message: "Oops!",
          description: "Account or password is not wrong!",
        });
      });
  };
};

const postLoginSuccess = (user) => {
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
export const postRegistration = (values, history) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data: {
        taiKhoan: values.taiKhoan,
        matKhau: values.matKhau,
        email: values.email,
        soDt: values.soDt,
        maNhom: "GP01",
        maLoaiNguoiDung: "KhachHang",
        hoTen: values.hoTen,
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        if (res.data) {
          return history.push("/");
        }
        dispatch(postRegistrationSuccess(res.data));
        history.goBack();
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(postRegistrationFailed(err));
        alert.error({
          message: "Oops!",
          description: "Account already exists !",
        });
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
