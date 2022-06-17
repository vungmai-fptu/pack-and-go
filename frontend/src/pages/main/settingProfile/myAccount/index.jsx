import React from "react";
import styles from "../settingProfile.module.css";
import AboutMe from "../aboutMe";
import classNames from "classnames";
function MyAccount() {
  return (
    <div className={styles.accountPageContent}>
      <div className={styles.titleHeader}>
        <h1> My Account</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.inputs}>
          <div className={styles.row}>
            <form
              action="/account/account"
              method="post"
              className="ajax form-send"
              encType="multipart/form-data"
              id="frm-changePhotosForm"
            >
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
                    alt="nahraneuzivatel"
                    className={styles.thumbnail}
                  />
                </div>
                <button
                  id="profil-foto"
                  className={styles.upravitnahratsmazat}
                  type="button"
                  name="button"
                >
                  <img
                    src="https://www.worldee.com/images/upravitimg.svg"
                    alt="Upravit"
                  />
                </button>
                <div id="foto-modal" className={styles.modalFoto}>
                  <div className={styles.fileInputWrapper}>
                    <label
                      htmlFor="profilovyobrazek"
                      className={styles.btnFileInput}
                    >
                      Load photo
                    </label>
                    <input
                      id="profilovyobrazek"
                      type="file"
                      name="profilovyobrazek"
                    />
                  </div>
                  <div className={styles.vybrSmazatFotkuat}>
                    <a href="/account/account?do=removeProfilePhoto">
                      Remove photo
                    </a>
                  </div>
                </div>
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
            </form>
            <form action="/account/account" method="post" id="frm-accountForm">
              <div className="clearfix" />
              <div className={styles.boxInput}>
                <label> Name </label>
                <div className={styles.input}>
                  <input id="vasejmeno" type="text" name="vasejmeno" />
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
                <label htmlFor="prijmeni"> Surname </label>
                <div className={styles.input}>
                  <input id="prijmeni" type="text" name="prijmeni" />
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
                <label htmlFor="telefon"> Telephone number</label>
                <div className={styles.input}>
                  <input id="telefon" type="tel" name="telefon" />
                  <span data-tooltip=" Private">
                    <i />
                    <img
                      className={styles.private}
                      src="https://www.worldee.com/images/soukrome.svg"
                      alt="soukromé"
                    />
                  </span>
                </div>
              </div>
              <div className={styles.boxInput}>
                <label htmlFor="mesto"> City </label>
                <div className={styles.input}>
                  <input
                    id="mesto"
                    type="text"
                    name="mesto"
                    className="pac-target-input"
                    placeholder="Enter a location"
                  />
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
                <label htmlFor="stat"> Country </label>
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
            </form>
          </div>
          <button
            className={classNames(`${styles.button}`, `${styles.submit}`)}
            id={styles.send}
            type="submit"
            name="button"
          >
            <span> Save changes </span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default MyAccount;
