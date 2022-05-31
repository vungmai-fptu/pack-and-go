import classNames from "classnames";
import { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styles from "./settingProfile.module.css";
import { EditorState } from "draft-js";
class SettingProfile extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
  render() {
    const { editorState } = this.state;
    return (
      <div id={styles.app}>
        <div id="snippet--flashes" />
        <div className={styles.pageContent}>
          <div className={styles.accountPage}>
            <div className={styles.container}>
              <div className={styles.flexAccount}>
                <aside className={styles.menuAside}>
                  <div className={styles.bcg} />
                  <ul>
                    <li className={styles.active}>
                      <a href="/account/account">
                        <span className={styles.barOfSpan}>
                          <img
                            src="https://www.worldee.com/images/asideucet.svg"
                            alt="Můj účet"
                          />
                        </span>
                        <label> My account </label>{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        className={styles.barOfa}
                        href="/account/social-networks"
                      >
                        <span className={styles.barOfSpan}>
                          <img
                            src="https://www.worldee.com/images/asidesocsite.svg"
                            alt="Sociální sítě"
                          />
                        </span>{" "}
                        <label>Social media </label>{" "}
                      </a>
                    </li>
                    <li>
                      <a className={styles.barOfa} href="/account/private">
                        <span className={styles.barOfSpan}>
                          <img
                            src="https://www.worldee.com/images/asidesoukromi.svg"
                            alt="Soukromí"
                          />
                        </span>{" "}
                        <label>Privacy </label>{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        className={styles.barOfa}
                        href="/account/change-password"
                      >
                        <span className={styles.barOfSpan}>
                          <img
                            src="https://www.worldee.com/images/asideheslo.svg"
                            alt="Změna hesla"
                          />
                        </span>
                        <label> Password change</label>{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        className={styles.barOfa}
                        href="/account/notify-settings"
                      >
                        <span className={styles.barOfSpan}>
                          <img
                            src="https://www.worldee.com/images/asideupozorneni.svg"
                            alt="Upozornění"
                          />
                        </span>{" "}
                        <label>Notifications </label>{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        className={styles.barOfa}
                        href="/account/premium-account"
                      >
                        <span className={styles.barOfSpan}>
                          <img
                            src="https://www.worldee.com/images/asidepremium.svg"
                            alt="Premiová verze"
                          />
                        </span>{" "}
                        <label>Premium version </label>{" "}
                      </a>
                    </li>
                    <li>
                      <a className={styles.barOfa} href="/account/payments">
                        <span className={styles.barOfSpan}>
                          <img
                            src="https://www.worldee.com/images/wallet.svg"
                            alt="Platby"
                          />
                        </span>
                        <label>Payments </label>{" "}
                      </a>
                    </li>
                    <li>
                      <a className={styles.barOfa} href="/account/referral">
                        <span className={styles.barOfSpan}>
                          <img
                            src="https://www.worldee.com/images/asidereferral.svg"
                            alt="Referral"
                          />
                        </span>{" "}
                        <label>Referral </label>{" "}
                      </a>
                    </li>
                    <li>
                      <a className={styles.barOfa} href="/sign/out">
                        <span className={styles.barOfSpan}>
                          <img
                            src="https://www.worldee.com/images/asideodhlasitse.svg"
                            alt="Odhlásit se"
                          />
                        </span>{" "}
                        <label>Log out</label>{" "}
                      </a>
                    </li>
                  </ul>
                </aside>
                <div className={styles.accountPageContent}>
                  <div className={styles.titleHeader}>
                    <h1> My Account</h1>
                    <div className="spinner-master">
                      <input type="checkbox" id="spinner-form" />
                      <label htmlFor="spinner-form" className="spinner-spin">
                        <span className="spinner diagonal part-1" />
                        <span className="spinner horizontal" />
                        <span className="spinner diagonal part-2" />
                      </label>
                    </div>
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
                                  {" "}
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
                                  {" "}
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
                            <div id="banner-modal" className={styles.modalFoto}>
                              <div className={styles.fileInputWrapper}>
                                <label
                                  htmlFor="uvodnifoto"
                                  className={styles.btnFileInput}
                                >
                                  {" "}
                                  Load photo
                                </label>
                                <input
                                  id={styles.uvodnifoto}
                                  type="file"
                                  name="uvodnifoto"
                                  className={styles.btnFileInput}
                                />
                              </div>
                              <div className="vybrat-smazat-fotku">
                                <a href="/account/account?do=removeIntroPhoto">
                                  {" "}
                                  Remove photo
                                </a>
                              </div>
                            </div>
                          </div>
                          <input
                            type="hidden"
                            name="profilovyhidden"
                            id="profilovy-hidden"
                            defaultValue
                          />
                          <input
                            type="hidden"
                            name="uvodnihidden"
                            id="uvodni-hidden"
                            defaultValue
                          />
                          <input
                            type="hidden"
                            name="_do"
                            defaultValue="changePhotosForm-submit"
                          />
                        </form>
                        <form
                          action="/account/account"
                          method="post"
                          id="frm-accountForm"
                        >
                          <div
                            className={classNames(
                              `${styles.boxInput}`,
                              `${styles.mt40}`,
                              `${styles.w100}`
                            )}
                          >
                            <label htmlFor="vystupovat">
                              Appear on Worldee :{" "}
                            </label>
                            <div
                              id="vystupovat-select"
                              className={styles.customSelect}
                              ajax-val={1}
                            >
                              <div className={styles.selected}>
                                <p> Under the name</p>
                              </div>
                              <div className={styles.selectOptions}>
                                <div
                                  className={styles.selectOption}
                                  ajax-val={1}
                                >
                                  <p> Under the name</p>
                                </div>
                                <div
                                  className={styles.selectOption}
                                  ajax-val={2}
                                >
                                  <p>Under the nickname</p>
                                </div>
                                <input
                                  type="hidden"
                                  name="vystupovat"
                                  id="vystupovat-hidden"
                                  defaultValue={1}
                                />
                              </div>
                            </div>
                            <p className={styles.info}>
                              {" "}
                              Your profile is under the link :{" "}
                              <a href="/longpc">
                                https://www.worldee.com/longpc
                              </a>
                            </p>
                          </div>
                          <div
                            className={classNames(
                              `${styles.boxInput}`,
                              `${styles.mt60}`
                            )}
                          >
                            <label htmlFor="prezdivka"> Nickname </label>
                            <div className={styles.input}>
                              <input
                                id="prezdivka"
                                name="prezdivka"
                                defaultValue="Longpc"
                                required
                                type="text"
                                data-nette-rules='[{"op":":filled","msg":"This field is required."}]'
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
                          <div className="clearfix" />
                          <div className={styles.boxInput}>
                            <label htmlFor="vasejmeno"> Name </label>
                            <div className={styles.input}>
                              <input
                                id="vasejmeno"
                                type="text"
                                name="vasejmeno"
                                defaultValue="Long"
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
                            <label htmlFor="prijmeni"> Surname </label>
                            <div className={styles.input}>
                              <input
                                id="prijmeni"
                                type="text"
                                name="prijmeni"
                                defaultValue="Trần"
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
                            <label htmlFor="email"> Email </label>
                            <div className={styles.input}>
                              <input
                                id="email"
                                type="email"
                                name="email"
                                defaultValue="longnlp14@gmail.com"
                                required
                                data-nette-rules='[{"op":":filled","msg":"This field is required."},{"op":":email","msg":"Please enter a valid email address."}]'
                              />
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
                            <label htmlFor="telefon"> Telephone number</label>
                            <div className={styles.input}>
                              <input
                                id="telefon"
                                type="tel"
                                name="telefon"
                                defaultValue
                              />
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
                                autoComplete="off"
                                defaultValue
                                className="pac-target-input"
                                placeholder="Enter a location"
                              />
                              <div
                                className={styles.selectBox}
                                id="visible-city-select"
                                ajax-val={1}
                              >
                                <i></i>
                                <div className={styles.selected}>
                                  <p data-tooltip="Public">
                                    <img
                                      src="https://www.worldee.com/images/verejne.svg"
                                      alt="veřejné"
                                    />{" "}
                                    Public{" "}
                                  </p>
                                </div>
                                <div className={styles.selectOptions}>
                                  <div
                                    className={styles.selectOption}
                                    ajax-val={1}
                                  >
                                    <p data-tooltip="Public">
                                      <img
                                        src="https://www.worldee.com/images/verejne.svg"
                                        alt="veřejné"
                                      />{" "}
                                      Public{" "}
                                    </p>
                                  </div>
                                  <div
                                    className={styles.selectOption}
                                    ajax-val={0}
                                  >
                                    <p data-tooltip="  Private">
                                      <img
                                        className={styles.private}
                                        src="https://www.worldee.com/images/soukrome.svg"
                                        alt="soukromé"
                                      />
                                      Private
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.boxInput}>
                            <label htmlFor="stat"> Country </label>
                            <div className={styles.input}>
                              <select name="stat" id={styles.stat}>
                                <option value="0">-</option>
                                <option value="AF">Afghanistan</option>
                                <option value="AX">Aland Islands</option>
                                <option value="AL">Albania</option>
                                <option value="DZ">Algeria</option>
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
                            <div
                              id="gender-select"
                              className={styles.customSelect}
                              ajax-val={2}
                            >
                              <div className={styles.selected}>
                                <p>not specified</p>
                              </div>
                              <div className={styles.selectOptions}>
                                <div
                                  className={styles.selectOption}
                                  ajax-val={2}
                                >
                                  <p>not specified</p>
                                </div>
                                <div
                                  className={styles.selectOption}
                                  ajax-val={0}
                                >
                                  <p>woman</p>
                                </div>
                                <div
                                  className={styles.selectOption}
                                  ajax-val={1}
                                >
                                  <p>man</p>
                                </div>
                                <input
                                  type="hidden"
                                  name="zenamuz"
                                  id="gender-hidden"
                                  defaultValue={2}
                                />
                              </div>
                            </div>
                            <div
                              className={classNames(
                                `${styles.selectBox}`,
                                `${styles.another}`,
                                `${styles.open}`
                              )}
                              id="visible-gender-select"
                              ajax-val={1}
                            >
                              <div className={styles.selected}>
                                <p data-tooltip="Public">
                                  <img
                                    src="https://www.worldee.com/images/verejne.svg"
                                    alt="veřejné"
                                  />{" "}
                                  Public{" "}
                                </p>
                              </div>
                              <div className={styles.selectOptions}>
                                <div
                                  className={styles.selectOption}
                                  ajax-val={1}
                                >
                                  <p data-tooltip="Public">
                                    <img
                                      src="https://www.worldee.com/images/verejne.svg"
                                      alt="veřejné"
                                    />{" "}
                                    Public{" "}
                                  </p>
                                </div>
                                <div
                                  className={styles.selectOption}
                                  ajax-val={0}
                                >
                                  <p data-tooltip="  Private">
                                    <img
                                      src="https://www.worldee.com/images/soukrome.svg"
                                      alt="soukromé"
                                    />{" "}
                                    Private{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className={classNames(
                              `${styles.boxInput}`,
                              `${styles.dateerror}`
                            )}
                          >
                            <label htmlFor="datumnarozeni">
                              {" "}
                              Date of birth
                            </label>
                            <div
                              className={classNames(
                                `${styles.selectBox}`,
                                `${styles.another}`
                              )}
                              id="visible-age-select"
                              ajax-val={1}
                            >
                              <div className={styles.selected}>
                                <p data-tooltip="Public">
                                  <img
                                    src="https://www.worldee.com/images/verejne.svg"
                                    alt="veřejné"
                                  />{" "}
                                  Public{" "}
                                </p>
                              </div>
                              <div className={styles.selectOptions}>
                                <div
                                  className={styles.selectOption}
                                  ajax-val={1}
                                >
                                  <p data-tooltip="Public">
                                    <img
                                      src="https://www.worldee.com/images/verejne.svg"
                                      alt="veřejné"
                                    />{" "}
                                    Public{" "}
                                  </p>
                                </div>
                                <div
                                  className={styles.selectOption}
                                  ajax-val={0}
                                >
                                  <p data-tooltip=" Private">
                                    <img
                                      src="https://www.worldee.com/images/soukrome.svg"
                                      alt="soukromé"
                                    />{" "}
                                    Private{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              className={classNames(
                                `${styles.input}`,
                                `${styles.triple}`
                              )}
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
                                    data-nette-rules='[{"op":"optional"},{"op":":integer","msg":"Please enter a valid integer."}]'
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
                                    data-nette-rules='[{"op":"optional"},{"op":":integer","msg":"Please enter a valid integer."}]'
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
                                    data-nette-rules='[{"op":"optional"},{"op":":integer","msg":"Please enter a valid integer."}]'
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className={classNames(
                              `${styles.boxInput}`,
                              `${styles.w100}`
                            )}
                          >
                            <label htmlFor="ome-text-editor"> About me </label>
                            <div className={styles.input}>
                              <div
                                className={classNames(
                                  `${styles.trumbowygBox}`,
                                  `${styles.trumbowygEditorVisible}`,
                                  `${styles.trumbowygEn}`,
                                  `${styles.trumbowyg}`
                                )}
                              >
                                <Editor
                                  editorState={editorState}
                                  toolbarClassName="toolbarClassName"
                                  wrapperClassName="wrapperClassName"
                                  editorClassName="editorClassName"
                                  onEditorStateChange={this.onEditorStateChange}
                                />
                              </div>
                              <span data-tooltip="Public">
                                <img
                                  src="https://www.worldee.com/images/verejne.svg"
                                  alt="veřejné"
                                />
                              </span>
                            </div>
                          </div>
                          <div
                            className="box-input"
                            style={{ display: "none" }}
                          >
                            <label htmlFor="jsem">
                              {" "}
                              Picture upload quality{" "}
                            </label>
                            <div className="styled-input wbigger">
                              <div className="animate-checked">
                                <div className="animation-efekt" />
                                <div className="checkbox-styled">
                                  <input
                                    id="zakladni"
                                    type="radio"
                                    name="zaklpuvo"
                                    defaultValue={1}
                                  />
                                  <label htmlFor="zakladni">
                                    <span> Basic</span>
                                  </label>
                                </div>
                                <div className="checkbox-styled">
                                  <input
                                    id="puvodni"
                                    type="radio"
                                    name="zaklpuvo"
                                    defaultValue={0}
                                    defaultChecked
                                  />
                                  <label htmlFor="puvodni">
                                    <span>Default </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="box-input"
                            style={{ display: "none" }}
                          >
                            <label htmlFor="jsem"> Video upload quality </label>
                            <div className="styled-input wbigger">
                              <div className="animate-checked">
                                <div className="animation-efekt" />
                                <div className="checkbox-styled">
                                  <input
                                    id="videazakladni"
                                    type="radio"
                                    name="videazaklpuvo"
                                    defaultValue={1}
                                  />
                                  <label htmlFor="videazakladni">
                                    <span> Basic </span>
                                  </label>
                                </div>
                                <div className="checkbox-styled">
                                  <input
                                    id="videapuvodni"
                                    type="radio"
                                    name="videazaklpuvo"
                                    defaultValue={0}
                                    defaultChecked
                                  />
                                  <label htmlFor="videapuvodni">
                                    <span> Default </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div className={styles.boxInput}>
                            <label htmlFor="vystupova"> Map variant</label>
                            <div
                              id="maps_type-select"
                              className={styles.customSelect}
                              ajax-val="Europe"
                            >
                              <div className={styles.selected}>
                                <p>Europe centered</p>
                              </div>
                              <div className={styles.selectOptions}>
                                <div
                                  className={styles.selectOption}
                                  ajax-val="Europe"
                                >
                                  <p>Europe centered</p>
                                </div>
                                <div
                                  className={styles.selectOption}
                                  ajax-val="Asia"
                                >
                                  <p>Asia centered</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.boxInput}>
                            <label htmlFor="vystupova">
                              {" "}
                              Language settings
                            </label>
                            <div
                              id="jazyk-select"
                              className={styles.customSelect}
                              ajax-val="EN"
                            >
                              <div className={styles.selected}>
                                <p>English</p>
                              </div>
                              <div className={styles.selectOptions}>
                                <div
                                  className={styles.selectOption}
                                  ajax-val="CS"
                                >
                                  <p>Čeština</p>
                                </div>
                                <div
                                  className={styles.selectOption}
                                  ajax-val="EN"
                                >
                                  <p>English</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.odsraneniUctu}>
                            <button
                              type="button"
                              className={styles.toggleButton}
                            >
                              <strong>Delete profile</strong>
                            </button>
                            <div className={styles.content}>
                              <p>
                                Are you sure you want to delete your profile? By
                                deleting your profile you will delete all your
                                Worldee content (your profile, photos and
                                trips). No user will be able to find you again.
                              </p>
                              <a id="removeacc" href="#" data-has-password>
                                {" "}
                                Delete profile{" "}
                              </a>
                            </div>
                          </div>
                          <hr className={styles.noTopMargin} />
                        </form>
                      </div>
                      <button
                        className={classNames(
                          `${styles.button}`,
                          `${styles.submit}`
                        )}
                        id={styles.send}
                        type="submit"
                        name="button"
                      >
                        <span> Save changes </span>
                      </button>
                      <input
                        type="hidden"
                        name="mestohidden"
                        id="mestohidden"
                        defaultValue
                      />
                      <input
                        type="hidden"
                        name="mesto_latlng"
                        id="mesto_latlng"
                        defaultValue
                      />
                      <input
                        type="hidden"
                        name="jazyk"
                        id="jazyk-hidden"
                        defaultValue="EN"
                      />
                      <input
                        type="hidden"
                        name="maps_type"
                        id="maps_type-hidden"
                        defaultValue="Europe"
                      />
                      <input
                        type="hidden"
                        name="visibleCity"
                        id="visible-city-hidden"
                        defaultValue={1}
                      />
                      <input
                        type="hidden"
                        name="visibleAge"
                        id="visible-age-hidden"
                        defaultValue={1}
                      />
                      <input
                        type="hidden"
                        name="visibleGender"
                        id="visible-gender-hidden"
                        defaultValue={1}
                      />
                      <input
                        type="hidden"
                        name="_do"
                        defaultValue="accountForm-submit"
                      />
                      <div id="delete-button" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.modalHandler}>
            <div className={styles.modalContent}>
              <h4> Confirm </h4>
              <a className={styles.zavritOkno} href="#">
                <img
                  src="https://www.worldee.com/images/close.svg"
                  alt="Close"
                />
              </a>
              <hr />
              <p> Are you sure you want to delete your account? </p>
              <a className={styles.smazat} href="#">
                {" "}
                Erase{" "}
              </a>
              <a className={styles.button} href="#">
                Cancel{" "}
              </a>
            </div>
          </div>
          <div className={styles.containerEdWrap}>
            <div id={styles.edWrap}>
              <div id={styles.editor} />
              <div className={styles.buttony}>
                <div className={styles.rotateButtons}>
                  <button
                    data-tool="Rotate left"
                    type="button"
                    name="button"
                    data-deg={90}
                    className={styles.croppieRotate}
                  >
                    <img
                      src="https://www.worldee.com/images/rotate-left.svg"
                      alt="arrow"
                    />
                  </button>
                  <button
                    data-tool="Rotate left"
                    type="button"
                    name="button"
                    data-deg={-90}
                    className={styles.croppieRotate}
                  >
                    <img
                      src="https://www.worldee.com/images/rotate-right.svg"
                      alt="arrow"
                    />
                  </button>
                </div>
                <button id="editor-cancel" className={styles.croppieRotate}>
                  <span>Cancel</span>
                </button>
                <button id="editor-save" className={styles.button}>
                  crop
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SettingProfile;
