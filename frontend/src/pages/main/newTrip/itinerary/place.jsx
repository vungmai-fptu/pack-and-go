import { IoLocationSharp } from "react-icons/io5";
import styles from "../trip.module.css";
const Place = () => {
  const place = [
    {
      place: "thăng long",
      description: "đẹp trai",
    },
    {
      place: "hạ long",
      description: "nhà giàu",
    },
  ];
  return place.map((place, index) => {
    return (
      <div className={styles.place} key={index}>
        <div className={styles.allPlace}>
          <div>
            <div style={{ padding: "0 0 4px" }}>
              <div className={styles.enterPlace}>
                <div
                  className={styles.leftPlace}
                  style={{ paddingLeft: "26px" }}
                >
                  <div className={styles.leftPlace}>
                    <div className={styles.leftImg}>
                      <IoLocationSharp />
                    </div>
                    <div className={styles.rightContainer}>
                      <div className={styles.rightCenter}>
                        <div className={styles.rightFlex}>{place.place}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.write}>
                <div style={{ padding: "5.5px 10px 5.5px 80px" }}>
                  <input
                    type="text"
                    placeholder="Write a decription to the trip"
                    value={place.description || ""}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Place;
