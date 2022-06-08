import React from "react";
import Tabs from "../../../components/tab/tabs";
import Header from "./header";
import PrepareList from "./PrepareList";
import PriceList from "./PriceList";
import Itinerary from "./itinerary";
import Overview from "./overview";
import styles from "./trip.module.css";
import MapComponent from "../../../components/map";
function NewTrip() {
  return (
    <div className={styles.newTrip}>
      <Header />
      <div className="w_i- w_hM">
        <div className="w_hN w_hO TRIP_INFO">
          <Tabs>
            <div label="Overview">
              <Overview />
            </div>
            <div label="Itinerary">
              <Itinerary />
            </div>
            <div label="Preparedlist">
              <PrepareList />
            </div>
            <div label="PriceList">
              <PriceList />
            </div>
          </Tabs>
        </div>
        <MapComponent />
        {/* <div className="w_hN w_hP TRIP_MAP">
          <div className="w_iN">
            <div className="w_BN">
              <img
                src="fonts/src_app_components_components_svgIcon_icons_customsprite-70fd46.svg#background-mapiV-usage"
                alt="custom/background-map"
                className="w_fu w_fB w_BO"
              />
              <div className="w_DN">
                <span className="w_DU w_DX">
                  The map will be displayed after entering locations
                </span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default NewTrip;
