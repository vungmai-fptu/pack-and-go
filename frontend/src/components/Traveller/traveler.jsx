import React from 'react'
import styles from './traveler.module.css'
import { BiWorld } from 'react-icons/bi'
import { FaSuitcase } from 'react-icons/fa'
import { BsFillCameraFill } from 'react-icons/bs'

const Traveler = (props) => {
    return (
        <div>
            <div className={styles["container"]} >
                <div className={styles["inner-container"]}>
                    <div className={styles["card"]}>
                        <div className={styles["cover-photo"]}>
                            <img src={props.coverPhoto} alt="" className={styles["cover-photo-img"]} />
                        </div>
                        <div className={styles["content"]}>
                            <div className={styles["avt-container"]}>
                                <div className={styles["avt-inner-container"]}>
                                    <img className={styles["avt"]} alt="profile" src={props.profilePhoto} />
                                </div>
                            </div>
                            <a href='/profile/mai' className={styles["name-container"]}>
                                <span className={styles["name"]}>{props.username}</span>
                            </a>
                            <div className={styles["description-container"]}>
                                <span className={styles["description"]}>{props.country}</span>
                            </div>
                            <div className={styles["info-nav-container"]}>
                                <div className={styles["info-item"]}>
                                    <div className={styles["item-icon"]}>{BiWorld}</div>
                                    <div className={styles["item-content"]}>
                                        <label className={styles["number"]}>{props.numOfCountries}</label>
                                        Countries
                                    </div>
                                </div>
                                <div className={styles["info-item"]}>
                                    <div className={styles["item-icon"]}>{FaSuitcase}</div>
                                    <div className={styles["item-content"]}>
                                        <label className={styles["number"]}>{props.numOfTrips}</label>
                                        Trips
                                    </div>
                                </div>
                                <div className={styles["info-item"]}>
                                    <div className={styles["item-icon"]}>{BsFillCameraFill}</div>
                                    <div className={styles["item-content"]}>
                                        <label className={styles["number"]}>{props.numOfPhotos}</label>
                                        Photos
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};


export default Traveler;