import { IoMdAddCircleOutline } from "react-icons/io";
import styles from "../trip.module.css";
import Day from "./day";
export default function Itinerary() {
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
                  <div className={styles.aDay}>
                    <div className={styles.addDIcon}>
                      <IoMdAddCircleOutline />
                    </div>
                    <div style={{ paddingLeft: "10px" }}>
                      <span>Add a Day</span>
                    </div>
                  </div>
                </div>
              </div>
              <Day />
              <div className={styles.containerDay}>
                <div className={styles.addADay}>
                  <div className={styles.aDay}>
                    <div className={styles.addDIcon}>
                      <IoMdAddCircleOutline />
                    </div>
                    <div style={{ paddingLeft: "10px" }}>
                      <span>Add a Day</span>
                    </div>
                  </div>
                </div>
              </div>
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
