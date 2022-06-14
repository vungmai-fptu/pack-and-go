import React from "react";
//import MapComponent from "../../../components/map";
import CountryList from "../../../components/profile/CountryList";
import FutureTrips from "../../../components/profile/FutureTrips";
import Header from "../../../components/profile/Header";
//import Map from "../../../components/profile/Map";
import TabGroup from "../../../components/profile/MapNav/TabGroup";
import Trips from "../../../components/profile/Trips";

const Profile = () => {
  return (
    <>
      <Header />
      <TabGroup/>
      <FutureTrips />
      <Trips />
      <CountryList />
    </>
  );
};

export default Profile;
