import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//import MapComponent from "../../../components/map";
import CountryList from "../../../components/profile/CountryList";
import FutureTrips from "../../../components/profile/FutureTrips";
import Header from "../../../components/profile/Header";
//import Map from "../../../components/profile/Map";
import TabGroup from "../../../components/profile/MapNav/TabGroup";
import Trips from "../../../components/profile/Trips";
import { getUser } from "../../../store/actions/user.action";

const Profile = () => {
  const { username } = useParams();
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(getUser(username));
    },
    // eslint-disable-next-line
    []
  );
  const { users } = useSelector((state) => state.user);
  return (
    <>
      <Header users={users} />
      <TabGroup />
      <FutureTrips />
      <Trips />
      <CountryList />
    </>
  );
};

export default Profile;
