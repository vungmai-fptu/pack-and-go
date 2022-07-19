import axios from "axios";
import { NotificationManager } from "react-notifications";
const API_URL = process.env.REACT_APP_API_URL;
const userLogin = localStorage.getItem("userLogin");
const token = userLogin ? JSON.parse(userLogin).token : "";
export const putGrant = (username) => {
  return () => {
    axios({
      method: "PUT",
      url: `${API_URL}/api/admin/users/grant/${username}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        NotificationManager.success(res.data.message);
      })
      .catch((err) => {
        NotificationManager.error(err.response.data.message);
      });
  };
};
export const putRevoke = (username) => {
  return (dispatch) => {
    axios({
      method: "PUT",
      url: `${API_URL}/api/admin/users/revoke/${username}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        NotificationManager.success(res.data.message);
      })
      .catch((err) => {
        NotificationManager.error(err.response.data.message);
      });
  };
};
