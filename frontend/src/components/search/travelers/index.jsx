import React from 'react'
import ProfileCardSlider from './slider'
import styles from './travelers.module.css'

const Travelers = () => {
    return (
        <div>
            <div className={styles["trips-title"]}>
                <div className={styles["title-wrapper"]}><label className={styles.title}>Travelers</label>
                    <button className={styles["add-btn"]}><div className={styles["add-btn-title"]}><span className={["add-btn-text"]}>Show all</span></div></button>
                </div>
            </div>
            <div className={styles["content-container"]}>
                <ProfileCardSlider />
            </div>
        </div>
    )
}

export default Travelers