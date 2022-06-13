import { IoMdAddCircleOutline } from "react-icons/io";
import styles from "../trip.module.css";
import Day from "./day";
import { useState } from "react";
export default function Itinerary() {
  const visitDays = [
    {
      dayNumber: 1,
      description: "long",
      visitPlaces: [{ place: "thăng long", description: "string" }],
    },
    {
      dayNumber: 2,
      description: "string",
      visitPlaces: [
        { place: "thăng long", description: "long" },
        { place: "hạ long", description: "nhà giàu" },
      ],
    },
  ];
  const [dayNumber, setDayNumber] = useState(0);
  const [description, setDescription] = useState("");
  const [visitPlaces, setVisitPlaces] = useState([]);
  const [visitDay, setVisitDay] = useState(visitDays);
  const handleSubmit = () => {
    const Day = {
      dayNumber: visitDay.length + 1,
      description: "",
    };
    setVisitDay((visitDay) => {
      return [...visitDay, Day];
    });
  };
  const handleRemove = (id) => {
    setVisitDay((visitDay) => {
      const Day = visitDay.filter((item, index) => index !== id);
      console.log(" Day", Day);
    });
  };
  return (
    <div className={styles.iTin}>
      <div className={styles.iTin} style={{ position: "relative" }}>
        <div className={styles.tripItin}>
          <div style={{ padding: "32px 32px 0" }}>
            <label>Trip Itinerary</label>
            <div className={styles.write}>
              <div style={{ padding: "5.5px 10px" }}>
                <input
                  type="text"
                  placeholder="Write a decription to the trip"
                ></input>
              </div>
            </div>
          </div>
          <div className={styles.allDay}>
            <div className={styles.leftAdd} />
            <div className={styles.day}>
              <div className={styles.containerDay}>
                <div className={styles.addADay}>
                  <div className={styles.aDay} onClick={handleSubmit}>
                    <div className={styles.addDIcon}>
                      <IoMdAddCircleOutline />
                    </div>
                    <div style={{ paddingLeft: "10px" }}>
                      <span>Add a Day</span>
                    </div>
                  </div>
                </div>
              </div>
              <Day visitDay={visitDay} handleRemove={handleRemove} />
            </div>
          </div>
          <div style={{ padding: "0 30px" }}>
            <div className={styles.write}>
              <div style={{ padding: "5.5px 10px" }}>
                <input
                  type="text"
                  placeholder="Write a conclusion to the trip"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
