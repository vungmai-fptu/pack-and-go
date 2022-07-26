import axios from "axios";
import { NotificationManager } from "react-notifications";
const API_URL = process.env.REACT_APP_API_URL;
const userLogin = localStorage.getItem("userLogin");
const token = userLogin ? JSON.parse(userLogin).token : "";

export const putGrant = (username, setHandleGrant) => {
  const token = userLogin ? JSON.parse(userLogin).token : "";
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
        setHandleGrant(username);
      })
      .catch((err) => {
        NotificationManager.error(err.response.data.message);
      });
  };
};
export const putRevoke = (username, setHandleGrant) => {
  const token = userLogin ? JSON.parse(userLogin).token : "";
  return () => {
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
        setHandleGrant(username);
      })
      .catch((err) => {
        NotificationManager.error(err.response.data.message);
      });
  };
};
export const putBlock = (username, setHandleGrant) => {
  const token = userLogin ? JSON.parse(userLogin).token : "";
  return () => {
    axios({
      method: "PUT",
      url: `${API_URL}/api/admin/users/block/${username}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        const message = res.data.username + " has been blocked";
        NotificationManager.success(message);
        setHandleGrant(username);
      })
      .catch((err) => {
        NotificationManager.error(err.response.data.message);
      });
  };
};
export const putUnBlock = (username, setHandleGrant) => {
  const token = userLogin ? JSON.parse(userLogin).token : "";
  return () => {
    axios({
      method: "PUT",
      url: `${API_URL}/api/admin/users/unblock/${username}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        const message = res.data.username + " has been Unblocked";
        NotificationManager.success(message);
        setHandleGrant(username);
      })
      .catch((err) => {
        NotificationManager.error(err.response.data.message);
      });
  };
};
