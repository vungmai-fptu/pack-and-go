import React from "react";
import SectionContainer from "../../profile/SectionContainer";
import Traveler from "../../Traveller/traveler";
import SectionHeader from "../SectionHeader";
import styles from './Travelers.module.css';

const Travelers = (props) => {
  return (<SectionContainer>
    <SectionHeader>Popular travelers</SectionHeader>
    <div className={styles.travelers_container}>
      <div className="traveler">
        <Traveler
          coverPhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/b3ddf1b8e4375675283ffa7170dbdc2b/profile/262862abc6edfb6.00558336.jpg"
          profilePhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/b3ddf1b8e4375675283ffa7170dbdc2b/profile/562862a7ad5f452.50968303.jpg?width=640&height=640"
          username="Sara Bech Mai Walther"
          country="Denmark"
          numOfCountries="4"
          numOfTrips="0"
          numOfPhotos="0"
        />
      </div>
      <div className="traveler">
        <Traveler
          coverPhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/b3ddf1b8e4375675283ffa7170dbdc2b/profile/262862abc6edfb6.00558336.jpg"
          profilePhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/b3ddf1b8e4375675283ffa7170dbdc2b/profile/562862a7ad5f452.50968303.jpg?width=640&height=640"
          username="Sara Bech Mai Walther"
          country="Denmark"
          numOfCountries="4"
          numOfTrips="0"
          numOfPhotos="0"
        />
      </div>
      <div className="traveler">
        <Traveler
          coverPhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/b3ddf1b8e4375675283ffa7170dbdc2b/profile/262862abc6edfb6.00558336.jpg"
          profilePhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/b3ddf1b8e4375675283ffa7170dbdc2b/profile/562862a7ad5f452.50968303.jpg?width=640&height=640"
          username="Sara Bech Mai Walther"
          country="Denmark"
          numOfCountries="4"
          numOfTrips="0"
          numOfPhotos="0"
        />
      </div>
      <div className="traveler">
        <Traveler
          coverPhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/b3ddf1b8e4375675283ffa7170dbdc2b/profile/262862abc6edfb6.00558336.jpg"
          profilePhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/b3ddf1b8e4375675283ffa7170dbdc2b/profile/562862a7ad5f452.50968303.jpg?width=640&height=640"
          username="Sara Bech Mai Walther"
          country="Denmark"
          numOfCountries="4"
          numOfTrips="0"
          numOfPhotos="0"
        />
      </div>
      <div className="traveler">
        <Traveler
          coverPhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/b3ddf1b8e4375675283ffa7170dbdc2b/profile/262862abc6edfb6.00558336.jpg"
          profilePhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/b3ddf1b8e4375675283ffa7170dbdc2b/profile/562862a7ad5f452.50968303.jpg?width=640&height=640"
          username="Sara Bech Mai Walther"
          country="Denmark"
          numOfCountries="4"
          numOfTrips="0"
          numOfPhotos="0"
        />
      </div>
      <div className="traveler">
        <Traveler
          coverPhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/b3ddf1b8e4375675283ffa7170dbdc2b/profile/262862abc6edfb6.00558336.jpg"
          profilePhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/b3ddf1b8e4375675283ffa7170dbdc2b/profile/562862a7ad5f452.50968303.jpg?width=640&height=640"
          username="Sara Bech Mai Walther"
          country="Denmark"
          numOfCountries="4"
          numOfTrips="0"
          numOfPhotos="0"
        />
      </div>
    </div>
  </SectionContainer>);
};


export default Travelers;
