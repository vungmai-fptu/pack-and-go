import { IoMdAddCircleOutline } from "react-icons/io";
import styles from "../trip.module.css";
import Place from "./place";
import Collapse from "../../../../components/collapse";
const Day = (props) => {
  return props.visitDay.map((day, index) => {
    return (
      <div className={styles.containerDay} key={index}>
        <Collapse day={day} handleRemove={props.handleRemove} index={index}>
          {day.visitPlaces ? <Place place={day.visitPlaces} /> : ""}
          <div className={styles.enterPlace}>
            <div className={styles.leftPlace} style={{ paddingLeft: "26px" }}>
              <div className={styles.leftPlace}>
                <div className={styles.leftImg}>
                  <IoMdAddCircleOutline />
                </div>
                <div className={styles.rightContainer}>
                  <div className={styles.rightCenter}>
                    <div className={styles.rightFlex}>
                      <div
                        className="comBoBoxSmall__control"
                        style={{ display: "grid" }}
                      >
                        <div
                          style={{
                            display: "flex",
                            width: " 100%",
                          }}
                        >
                          <input
                            type="text"
                            placeholder="Enter the place you want to visit"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Collapse>
        <div
          className={styles.containerDay}
          style={{ paddingTop: "10px", paddingBottom: 0 }}
        >
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
    );
  });
};

export default Day;
