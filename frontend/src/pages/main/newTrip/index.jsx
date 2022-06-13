import React from "react";
import Tabs from "../../../components/tab/tabs";
import Header from "./header";
import PrepareList from "./PrepareList";
import PriceList from "./PriceList";
import Itinerary from "./itinerary";
import Overview from "./overview";
import styles from "./trip.module.css";
import MapComponent from "./../../../components/map/index";
import {
  FaSuitcase,
  FaMapMarkedAlt,
  FaCheckSquare,
  FaMoneyBill,
  FaCommentAlt,
} from "react-icons/fa";
import Note from "./note";
function NewTrip() {
  return (
    <div className={styles.newTrip}>
      <Header />
      <div className="w_i- w_hM">
        <div style={{ width: "60%", height: "100%", display: "flex" }}>
          <Tabs>
            <div label="Overview" Icon={FaSuitcase}>
              <Overview />
            </div>
            <div label="Itinerary" Icon={FaMapMarkedAlt}>
              <Itinerary />
            </div>
            <div label="Preparedlist" Icon={FaCheckSquare}>
              <PrepareList />
            </div>
            <div label="PriceList" Icon={FaMoneyBill}>
              <PriceList />
            </div>
            <div label="Note" Icon={FaCommentAlt}>
              <Note />
            </div>
          </Tabs>
        </div>
        <div style={{ width: "40%", height: "100%" }}>
          <MapComponent />
        </div>
      </div>
    </div>
  );
}

export default NewTrip;
