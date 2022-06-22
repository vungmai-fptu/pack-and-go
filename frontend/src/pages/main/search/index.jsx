import React from "react";
import Header from "../../../components/search/header";
import Travelers from "../../../components/search/travelers";
import TripList from "../../../components/search/Trips";

// import Travelers from "../../../components/search/travelers";
// // import ProfileCardSlider from '../../../components/search/travelers/slider'
// import Trips from "../../../components/search/Trips";

const SearchPage = () => {
  return (
    <>
      <Header/>
      <Travelers/>
      <TripList/>
    </>
  );
};

export default SearchPage
