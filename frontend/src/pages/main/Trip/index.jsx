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
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTrip } from "../../../store/actions/trip.action";
import { useEffect } from "react";
import { SET_TRIP, TRIP_MODE } from "../../../store/constants/trip.const";
import { tripInitialState } from "../../../store/reducers/trip.reducer";
import { useLayoutEffect } from "react";

function Trip() {
  const { id } = useParams();
  const { loading } = useSelector(state => state.common);
  const { trip } = useSelector(state => state.trip);
  const dispatch = useDispatch();

  console.log("TRIP:", trip);

  useEffect(() => {
    if (id) {
      dispatch(setTrip(id));
    }
    return () => {
      dispatch({
        type: SET_TRIP,
        payload: {
          mode: TRIP_MODE.CREATE,
          trip: { ...tripInitialState.trip, beginDate: new Date() }
        }
      })
    }
  }, []);


  return (<div className={styles.newTrip}>
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
          <div label="Prepare" Icon={FaCheckSquare}>
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
    <NotificationContainer />
  </div>)
}

export default Trip;
