import React, { useEffect } from "react";
import styles from "../settingProfile.module.css";
import AboutMe from "../aboutMe";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useIsLogin } from "../../../../hooks/useIsLogin";
import { getUser, updateInfo } from "./../../../../store/actions/user.action";
import { NotificationContainer } from "react-notifications";
import ImageUpload from "./../imageUpload/index";
import { useState } from "react";
function MyAccount() {
  const dispatch = useDispatch();
  const { user, loading } = useIsLogin();
  const { users } = useSelector((state) => state.user);
  const setting = users == null ? "user" : users;
  const [coverImageUrl, setCoverImageUrl] = useState(setting.coverImageUrl);
  const [profileImageUrl, setProfileImageUrl] = useState(
    setting.profileImageUrl
  );
  const [aboutMe, setAboutMe] = useState(setting.aboutMe);
  const [userSetting, setUserSetting] = useState({
    city: "",
    country: setting.country,
    dateOfBirth: "",
    firstName: "",
    gender: "",
    lastName: "",
    phoneNumber: "",
  });
  useEffect(
    () => {
      dispatch(getUser(user.username));
    },
    // eslint-disable-next-line
    []
  );
  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserSetting({
      ...userSetting,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateInfo(profileImageUrl, coverImageUrl, aboutMe, userSetting));
  };

  return (
    <div className={styles.accountPageContent}>
      <div className={styles.titleHeader}>
        <h1> My Account</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.inputs}>
          <div className={styles.row}>
            <form id="frm-accountForm" onSubmit={handleSubmit}>
              <ImageUpload
                defaultImage={
                  "https://wrld-se-prod.b-cdn.net/images/user-empty.svg"
                }
                imageList={profileImageUrl}
                setImageList={setProfileImageUrl}
                w={true}
              />
              <ImageUpload
                defaultImage={
                  "https://wrld-se-prod.b-cdn.net/images/bezfotky.png"
                }
                imageList={coverImageUrl}
                setImageList={setCoverImageUrl}
                w={false}
              />
              <div className="clearfix" />
              <div className={styles.boxInput}>
                <label> Name </label>
                <div className={styles.input}>
                  <input type="text" name="firstName" onChange={handleChange} />
                </div>
              </div>
              <div className={styles.boxInput}>
                <label> Surname </label>
                <div className={styles.input}>
                  <input type="text" name="lastName" onChange={handleChange} />
                </div>
              </div>
              <div className={styles.boxInput}>
                <label> Telephone number</label>
                <div className={styles.input}>
                  <input
                    type="tel"
                    name="phoneNumber"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.boxInput}>
                <label> City </label>
                <div className={styles.input}>
                  <input
                    type="text"
                    name="city"
                    className="pac-target-input"
                    placeholder="Enter a location"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.boxInput}>
                <label> Country </label>
                <div className={styles.input}>
                  <input
                    type="text"
                    name="country"
                    className="pac-target-input"
                    placeholder="Enter a country"
                    value={userSetting.country}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.boxInput}>
                <label> Gender </label>
                <div className={styles.input}>
                  <input
                    type="text"
                    name="gender"
                    className="pac-target-input"
                    placeholder="Enter a gender"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div
                className={classNames(
                  `${styles.boxInput}`,
                  `${styles.dateerror}`
                )}
              >
                <label>Date of birth</label>
                <div
                  className={classNames(`${styles.input}`, `${styles.triple}`)}
                >
                  <div className={styles.row} id="jumpForm">
                    <div className={styles.input}>
                      <input
                        maxLength={2}
                        id="den"
                        type="number"
                        name="den"
                        defaultValue
                        placeholder="DD"
                      />
                    </div>
                    <div className={styles.input}>
                      <input
                        maxLength={2}
                        id="mesic"
                        type="number"
                        name="mesic"
                        defaultValue
                        placeholder="MM"
                      />
                    </div>
                    <div className={styles.input}>
                      <input
                        maxLength={4}
                        id="rok"
                        type="number"
                        name="rok"
                        defaultValue
                        placeholder="RRRR"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <AboutMe
                profileAboutMe={aboutMe}
                setProfileAboutMe={setAboutMe}
              />
              {loading ? (
                <button
                  className={classNames(`${styles.button}`, `${styles.submit}`)}
                  id={styles.send}
                  style={{ width: "96.5%", opacity: ".4" }}
                  disabled
                >
                  <span> Save changes </span>
                  <div className="loadingio-spinner-ripple-ormwzc5m72e">
                    <div className="ldio-gw2gg1659v">
                      <div />
                      <div />
                    </div>
                  </div>
                </button>
              ) : (
                <button
                  className={classNames(`${styles.button}`, `${styles.submit}`)}
                  id={styles.send}
                  style={{ width: "96.5%" }}
                >
                  <span> Save changes </span>
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
}
export default MyAccount;
