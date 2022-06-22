import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

export const inviteToJoinTrip = async (tripId, usernameOrEmail) => {
    const userLoginString = localStorage.getItem("userLogin");
    if (!userLoginString) {
        return;
    }

    const userLogin = JSON.parse(userLoginString);
    const { token } = userLogin;

    const res = await axios({
        method: "POST",
        url: `${baseUrl}/api/invitation/${tripId}/invite/${usernameOrEmail}`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    return res.data;
}
export const removeTripMates = async (tripId, usernameOrEmail) => {
    const userLoginString = localStorage.getItem("userLogin");
    if (!userLoginString) {
        return;
    }

    const userLogin = JSON.parse(userLoginString);
    const { token } = userLogin;

    const res = await axios({
        method: "DELETE",
        url: `${baseUrl}/api/invitation/${tripId}/uninvite/${usernameOrEmail}`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    return res.data;
}

export const deleteTrip = async (tripId) => {
    const userLoginString = localStorage.getItem("userLogin");
    if (!userLoginString) {
        return;
    }

    const userLogin = JSON.parse(userLoginString);
    const { token } = userLogin;

    const res = await fetch(`${baseUrl}/api/trips/${tripId}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    return await res.json();
}