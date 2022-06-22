import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//import MapComponent from "../../../components/map";
import CountryList from "../../../components/profile/CountryList";
import FutureTrips from "../../../components/profile/FutureTrips";
import Header from "../../../components/profile/Header";
//import Map from "../../../components/profile/Map";
// import TabGroup from "../../../components/profile/MapNav/TabGroup";
import Trips from "../../../components/profile/Trips";
import SkeletonProfile from "../../../components/SkeletonCard/SkeletonProfile";
import { getMe, getUser } from "../../../store/actions/user.action";

const Profile = () => {
  const { username } = useParams();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let futureTrips = [];
  let pastTrips = [];
  useEffect(
    () => {
      if (user?.username === username) {
        dispatch(getMe(username));
      } else {
        dispatch(getUser(username));
      }
    },
    // eslint-disable-next-line
    []
  );
  const { loading } = useSelector((state) => state.common);
  const { users } = useSelector((state) => state.user);
  if (!loading && users) {
    const today = moment(new Date()).format("YYYY-MM-DD");
    futureTrips = users.trips.filter((trip) =>
      moment(today).isBefore(trip.beginDate, "day")
    );
    pastTrips = users.trips.filter((trip) =>
      moment(today).isAfter(trip.beginDate, "day")
    );
  }
  return (
    <>
      {loading || !users ? (
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
          {/* <TabGroup /> */}
          <FutureTrips trips={futureTrips} />
          <Trips trips={pastTrips} />
          <CountryList />
        </>
      )}
    </>
  );
};

export default Profile;
