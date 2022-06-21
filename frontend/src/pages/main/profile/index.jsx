import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//import MapComponent from "../../../components/map";
import CountryList from "../../../components/profile/CountryList";
import FutureTrips from "../../../components/profile/FutureTrips";
import Header from "../../../components/profile/Header";
//import Map from "../../../components/profile/Map";
import TabGroup from "../../../components/profile/MapNav/TabGroup";
import Trips from "../../../components/profile/Trips";
import SkeletonProfile from "../../../components/SkeletonCard/SkeletonProfile";
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
  const { loading } = useSelector((state) => state.common);
  const { users } = useSelector((state) => state.user);

  return (
    <>
      {loading || users.username == null ? (
        <>
          <SkeletonProfile />
          <div className="loadingio-spinner-ripple-p4t4leicp3h">
            <div className="ldio-a43e4tfg33">
              <div></div>
              <div></div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Header users={users} />
          <TabGroup />
          <FutureTrips users={users} />
          <Trips users={users} />
          <CountryList />
        </>
      )}
    </>
  );
};

export default Profile;
