import React from "react";
import styles from "./header.module.css";
import SectionContainer from "../SectionContainer";

const Header = (props) => {
  return (
    <div style={{ paddingTop: "95px" }}>
      <SectionContainer>
        <div>
          <div className={styles["header-cover"]}>
            <div className={styles["header-cover-photo"]}>
              <div className={styles["header-cover-photo-bg"]}></div>
              <img
                alt="coverImage"
                className={styles["header-cover-img"]}
                src={
                  `${props.users.thumbnailUrl}` == null
                    ? `${props.users.thumbnailUrl}`
                    : "https://wrld-se-prod.b-cdn.net/images/bezfotky.png"
                }
              ></img>
            </div>
            <div className={styles["header-cover-content"]}>
              <div className={styles["header-cover-content-details"]}>
                <div className={styles["avatar-cover"]}>
                  <div className={styles["avatar-inner-cover"]}>
                    <img
                      alt="profile"
                      className={styles["avatar-img"]}
                      src={
                        `${props.users.coverImageUrl}` == null
                          ? `${props.users.coverImageUrl}`
                          : "https://wrld-se-prod.b-cdn.net/images/user-empty.svg"
                      }
                    />
                  </div>
                </div>
                <div className={styles.name}>
                  <div className={styles["user-name"]}>
                    {props.users.username}
                  </div>
                  <div className={styles["user-url"]}>
                    /{props.users.username}
                  </div>
                  <div className={styles["row"]}>
                    <br />
                    <br />
                    <br />
                  </div>
                  <div className={styles["header-second-section"]}>
                    <div className={styles["user-info"]}>
                      <div className={styles["user-repository"]}>
                        <div className={styles["user-repo-item"]}>
                          <span>00</span> countries
                        </div>
                        <div className={styles["user-repo-item"]}>
                          <span>00</span> trips
                        </div>
                        <div className={styles["user-repo-item"]}>
                          <span>00</span> photos
                        </div>
                        <div className={styles["user-repo-item"]}>
                          <span>00</span> videos
                        </div>
                      </div>
                    </div>
                    <div className={styles["user-description"]}>
                      <p>Hi!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Header;
