import { IoMdAddCircleOutline } from "react-icons/io";
import styles from "../trip.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_DAY,
  SET_DESCRIPTION,
  TRIP_MODE,
} from "../../../../store/constants/trip.const";
import VisitDay from "./day";
import NoItem from "../NoItem";
import { v4 as uuid } from "uuid";

export default function Itinerary() {
  const { trip, mode } = useSelector((state) => state.trip);
  const [description, setDescription] = useState(trip.description || "");
  const dispatch = useDispatch();
  const handleAddFirstDay = () => {
    dispatch({
      type: ADD_DAY,
      payload: {
        order: 0,
        day: {
          id: uuid(),
          description: "",
          visitPlaces: [],
        },
      },
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: SET_DESCRIPTION, payload: description });
    }, 1000);

    return () => clearTimeout(timer);
  }, [description]);

  return (
    <div className={styles.iTin_wrapper}>
      <div className={styles.iTin} style={{ position: "relative" }}>
        <div className={styles.tripItin}>
          <div style={{ padding: "32px 32px 0", marginBottom: "30px" }}>
            <label>Trip Itinerary</label>
            <div className={styles.write}>
              {mode === TRIP_MODE.VIEW ?
                <san>{trip.description}</san>
                :
                <div style={{ padding: "5.5px 10px" }}>
                  <input
                    type="text"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="Write a decription to the trip"
                  ></input>
                </div>
              }
            </div>
          </div>
          <div className={styles.allDay}>
            <div className={styles.leftAdd} />
            <div className={styles.day}>
              <div className={styles.containerDay}>
                {
                  mode !== TRIP_MODE.VIEW &&
                  <div className={styles.addADay}>
                    <div className={styles.aDay} onClick={handleAddFirstDay}>
                      <div className={styles.addDIcon}>
                        <IoMdAddCircleOutline />
                      </div>
                      <div style={{ paddingLeft: "10px" }}>
                        <span>Add a Day</span>
                      </div>
                    </div>
                  </div>
                }
              </div>
              {trip.visitDays && trip.visitDays.length !== 0 ? (
                trip.visitDays.map((day, index) => (
                  <VisitDay key={day.id} detail={day} order={index} />
                ))
              ) : (
                <NoItem />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
