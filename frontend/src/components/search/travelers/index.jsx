import React from 'react'
import SectionContainer from '../../profile/SectionContainer'
import ProfileCardSlider from './slider'
import styles from './travelers.module.css'

const Travelers = () => {
    return (
        <SectionContainer>
            <div className={styles["trips-title"]}>
                <div className={styles["title-wrapper"]}><label className={styles.title}>Travelers</label>
                    <button className={styles["add-btn"]}><div className={styles["add-btn-title"]}><span className={["add-btn-text"]}>Show all</span></div></button>
                </div>
            </div>
            <ProfileCardSlider />
            {/* <div className={styles["content-container"]}>
            </div> */}
        </SectionContainer>
    )
}

export default Travelers