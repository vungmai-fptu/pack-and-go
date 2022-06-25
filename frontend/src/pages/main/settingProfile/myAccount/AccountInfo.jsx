import React from "react";
import styles from "../settingProfile.module.css";
import AboutMe from "../aboutMe";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useIsLogin } from "../../../../hooks/useIsLogin";
import { updateInfo } from "./../../../../store/actions/user.action";
import { NotificationContainer } from "react-notifications";
import ImageUpload from "./../imageUpload/index";
import htmlToDraft from "html-to-draftjs";
import { useState } from "react";
function AccountInfo({ userSettings }) {
  const dispatch = useDispatch();
  const { loading } = useIsLogin();
  const [userSetting, setUserSetting] = useState(userSettings);
  console.log(
    "🚀 ~ file: AccountInfo.jsx ~ line 15 ~ AccountInfo ~ userSetting",
    userSetting
  );
  const [coverImageUrl, setCoverImageUrl] = useState(userSetting.coverImageUrl);
  const [profileImageUrl, setProfileImageUrl] = useState(
    userSetting.profileImageUrl
  );
  const [aboutMe, setAboutMe] = useState(userSetting.aboutMe);
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
    <form id="frm-accountForm" onSubmit={handleSubmit}>
      <ImageUpload
        defaultImage={"https://wrld-se-prod.b-cdn.net/images/user-empty.svg"}
        imageList={profileImageUrl}
        setImageList={setProfileImageUrl}
        w={true}
      />
      <ImageUpload
        defaultImage={"https://wrld-se-prod.b-cdn.net/images/bezfotky.png"}
        imageList={coverImageUrl}
        setImageList={setCoverImageUrl}
        w={false}
      />
      <div className="clearfix" />
      <div className={styles.boxInput}>
        <label> firstName </label>
        <div className={styles.input}>
          <input
            type="text"
            name="firstName"
            value={userSetting.firstName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.boxInput}>
        <label> lastName </label>
        <div className={styles.input}>
          <input
            type="text"
            name="lastName"
            value={userSetting.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.boxInput}>
        <label> Telephone number</label>
        <div className={styles.input}>
          <input
            type="tel"
            name="phoneNumber"
            value={userSetting.phoneNumber}
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
            value={userSetting.city}
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
            value={userSetting.gender}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={classNames(`${styles.boxInput}`, `${styles.dateerror}`)}>
        <label>Date of birth</label>
        <div className={classNames(`${styles.input}`, `${styles.triple}`)}>
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
      <AboutMe profileAboutMe={aboutMe} setProfileAboutMe={setAboutMe} />
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
  );
}
export default AccountInfo;
