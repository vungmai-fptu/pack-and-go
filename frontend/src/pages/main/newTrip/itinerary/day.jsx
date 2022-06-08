import { IoChevronUpSharp, IoLocationSharp } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import styles from "../trip.module.css";
import Place from "./place";
const Day = () => {
  const day = [
    {
      day: 1,
    },
    {
      day: 2,
    },
  ];
  return day.map((day, index) => {
    return (
      <div className={styles.containerDay} key={index}>
        <div>
          <div className={styles.dayOne}>
            <div className={styles.dayTop}>
              <IoChevronUpSharp />
            </div>
            <div className={styles.spanOne}>Day {day.day}</div>
            <div className={styles.dayBa}></div>
          </div>
          <Place />
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
        </div>
      </div>
    );
  });
};

export default Day;
