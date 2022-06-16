import axios from 'axios'
import { NotificationManager } from 'react-notifications';
import { startLoading, stopLoading } from './common.action';

const API_URL = "https://trip-diary-backend.azurewebsites.net";
const userLogin = localStorage.getItem("userLogin");
const { token } = JSON.parse(userLogin);

export const saveTrip = (trip) => {
    console.log("TOKEN: ", token);
    return (dispatch) => {
        dispatch(startLoading());
        axios({
            method: "POST",
            url: `${API_URL}/api/trips`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            data: JSON.stringify(trip),
        })
            .then((res) => {
                dispatch(stopLoading());
                NotificationManager.success("Trip was saved successfully");
                console.log(res);

            })
            .catch((err) => {
                dispatch(stopLoading());
                NotificationManager.error(err.response.data.message);
                console.log(err.response.data.message);
            });
    };
};

export const updateTrip = (trip) => {

    return (dispatch) => {
        dispatch(startLoading());
        axios({
            method: "PUT",
            url: `${API_URL}/api/trips/${trip.id}`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            data: JSON.stringify(trip),
        })
            .then((res) => {
                dispatch(stopLoading());
                NotificationManager.success("Trip was updated successfully");
            })
            .catch((err) => {
                dispatch(stopLoading());
                NotificationManager.error(err.response.data.message);
            });
    };
};
