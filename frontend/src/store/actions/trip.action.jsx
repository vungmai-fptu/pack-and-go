import axios from "axios";
import { NotificationManager } from "react-notifications";
import {
  CHANGE_MODE,
  SET_TRIP,
  SET_TRIP_ID,
  TRIP_MODE,
} from "../constants/trip.const";
import { startLoading, stopLoading } from "./common.action";
import moment from "moment";
import { useLocation } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

export const saveTrip = (trip) => {
  const userLogin = localStorage.getItem("userLogin");
  const token = userLogin ? JSON.parse(userLogin).token : "";
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "POST",
      url: `${API_URL}/api/trips`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: JSON.stringify(trip),
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch({
          type: SET_TRIP_ID,
          payload: res.data.id,
        });
        dispatch({
          type: CHANGE_MODE,
          payload: TRIP_MODE.UPDATE,
        });
        NotificationManager.success("Trip was planned successfully");
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading());
        NotificationManager.error(err.response.data.message);
      });
  };
};

export const setTrip = (id) => {
  return async (dispatch) => {
    const userLogin = localStorage.getItem("userLogin");
    dispatch(startLoading());
    await axios({
      method: "GET",
      url: `${API_URL}/api/trips/${id}`,
    })
      .then((res) => {
        dispatch(stopLoading());
        const { data } = res;
        console.log(data, userLogin);
        const canUpdate = userLogin && JSON.parse(userLogin).username === data.owner || data.tripMates.includes(JSON.parse(userLogin).username);



        dispatch({
          type: SET_TRIP,
          payload: {
            mode:
              canUpdate
                ? TRIP_MODE.UPDATE
                : TRIP_MODE.VIEW,
            trip: {
              ...data,
              beginDate: data.beginDate
                ? moment(data.beginDate, "YYYY-MM-DD").toDate()
                : new Date(),
              endDate: data.endDate
                ? moment(data.endDate, "YYYY-MM-DD").toDate()
                : null,
              status: data.status?.toLowerCase(),
              transportation: data.transportation.toLowerCase(),
            },
          },
        });
      })
      .catch((err) => {
        dispatch(stopLoading());
        NotificationManager.error(err.response.data.message);
      });
  };
};

export const updateTrip = (trip) => {
  const userLogin = localStorage.getItem("userLogin");
  const token = userLogin ? JSON.parse(userLogin).token : "";
  return async (dispatch) => {
    dispatch(startLoading());
    await axios({
      method: "PUT",
      url: `${API_URL}/api/trips/${trip.id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: JSON.stringify(trip),
    })
      .then((res) => {
        console.log(res);
        dispatch(stopLoading());
        NotificationManager.success("Trip was updated successfully");
      })
      .catch((err) => {
        dispatch(stopLoading());
        NotificationManager.error(err.response.data.message);
      });
  };
};
