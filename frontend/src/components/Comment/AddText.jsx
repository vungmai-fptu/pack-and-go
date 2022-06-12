import React from 'react'
import styles from './addtext.module.css'
import {BiSend} from 'react-icons/bi'

const AddText = (username, image) => {
    return (
        <div className={styles["container"]}>
            <div className={styles["profile-photo"]}>
                <div className={styles["photo-inner"]}>
                    <div className={styles["photo-second-inner"]}>
                        <div className={styles["photo-last-inner"]}>
                            <img src={image} alt="" className={styles["image"]} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["add-text"]}>
                <div className={styles["add-inner"]}>
                    <div className={styles["add-second-inner"]}>
                        <input className={styles["input-text"]} />
                    </div>
                </div>
            </div>
            <div className={styles["send-btn"]}>
                <button className={styles["btn"]}>
                    <div className={styles["btn-icon"]}>
                        <BiSend/>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default AddText