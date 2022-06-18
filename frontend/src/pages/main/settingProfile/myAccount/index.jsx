import React from "react";
import styles from "../settingProfile.module.css";
import AboutMe from "../aboutMe";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../../../components/useForm/useForm";
import { useIsLogin } from "../../../../hooks/useIsLogin";
import { validateMyAccount } from "../../../../components/validateInput/validateInput";
import { updateInfo } from "./../../../../store/actions/user.action";
import ImageUpload from "../../../../components/imageUpload";
import { SET_PROFILE_IMAGE } from "../../../../store/constants/user.const";
import { NotificationContainer } from "react-notifications";
function MyAccount() {
  const dispatch = useDispatch();
  const { loading } = useIsLogin();
  const { profile } = useSelector((state) => state.user);
  console.log("🚀 ~ file: index.jsx ~ line 16 ~ MyAccount ~ profile", profile);
  const { values, errors, handleChange, handleSubmit } = useForm(
    handleSubmits,
    validateMyAccount
  );
  function handleSubmits() {
    dispatch(updateInfo(profile));
  }

  const handleChangeProfileImage = (image) => {
    dispatch({
      type: SET_PROFILE_IMAGE,
      payload: image,
    });
  };

  return (
    <div className={styles.accountPageContent}>
      <div className={styles.titleHeader}>
        <h1> My Account</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.inputs}>
          <div className={styles.row}>
            <form id="frm-accountForm" onSubmit={handleSubmit} noValidate>
              <div
                className={classNames(
                  `${styles.boxInput}`,
                  `${styles.w20}`,
                  `${styles.specialwidth}`
                )}
              >
                <div
                  className={styles.imageHandler}
                  id={styles.profilePhotoThumbnail}
                >
                  <img
                    src="https://wrld-se-prod.b-cdn.net/images/user-empty.svg"
                    alt="thumbnail"
                    className={styles.thumbnail}
                  />
                </div>
                <ImageUpload
                  image={profile.profileImageUrl}
                  handleChangeImage={handleChangeProfileImage}
                />
                {/* <button
                  id="profil-foto"
                  className={styles.upravitnahratsmazat}
                  type="button"
                  name="button"
                >
                  <img
                    src="https://www.worldee.com/images/upravitimg.svg"
                    alt="Upravit"
                  />
                </button> */}
              </div>
              <div
                className={classNames(
                  `${styles.boxInput}`,
                  `${styles.w80}`,
                  `${styles.specialwidth}`
                )}
              >
                <div
                  className={styles.imageHandler}
                  id={styles.introPhotoThumbnail}
                >
                  <img
                    src="https://wrld-se-prod.b-cdn.net/images/bezfotky.png"
                    alt="nahranafotka"
                    className={styles.thumbnail}
                  />
                </div>
                <button
                  id="profil-banner"
                  className={styles.upravitnahratsmazat}
                  type="button"
                  name="button"
                >
                  <img
                    src="https://www.worldee.com/images/upravitimg.svg"
                    alt="Upravit"
                  />
                </button>
              </div>
              <div className="clearfix" />
              <div className={styles.boxInput}>
                <label> Name </label>
                <div className={styles.input}>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={values.name || ""}
                    required
                  />
                </div>
              </div>
              <div className={styles.boxInput}>
                <label> Surname </label>
                <div className={styles.input}>
                  <input id="prijmeni" type="text" name="prijmeni" />
                </div>
              </div>
              <div className={styles.boxInput}>
                <label> Telephone number</label>
                <div className={styles.input}>
                  <input id="telefon" type="tel" name="telefon" />
                </div>
              </div>
              <div className={styles.boxInput}>
                <label> City </label>
                <div className={styles.input}>
                  <input
                    id="mesto"
                    type="text"
                    name="mesto"
                    className="pac-target-input"
                    placeholder="Enter a location"
                  />
                </div>
              </div>
              <div className={styles.boxInput}>
                <label> Country </label>
                <div className={styles.input}>
                  <select name="stat" id={styles.stat}>
                    <option value="0">-</option>
                    <option value="Việt Nam">Việt Nam</option>
                    <option value="Hàn Quốc">Hàn Quốc</option>
                  </select>
                  <span data-tooltip="Public">
                    <i />
                    <img
                      src="https://www.worldee.com/images/verejne.svg"
                      alt="veřejné"
                    />
                  </span>
                </div>
              </div>
              <div className={styles.boxInput}>
                <label htmlFor="jsem"> Gender </label>
                <div id="gender-select" className={styles.customSelect}>
                  <div className={styles.selected}>
                    <p>not specified</p>
                  </div>
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
              <AboutMe />
              <button
                className={classNames(`${styles.button}`, `${styles.submit}`)}
                id={styles.send}
              >
                <span> Save changes </span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
}
export default MyAccount;
