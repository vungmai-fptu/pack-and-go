import React from 'react'
import SectionContainer from '../../profile/SectionContainer'
import styles from './travelers.module.css'
import { Link } from "react-router-dom";
import RenderTraveler from '../../RenderTraveler';

const Travelers = () => {
    return (
        <SectionContainer>
            <div className={styles["trips-title"]}>
                <div className={styles["title-wrapper"]}><label className={styles.title}>Travelers</label>
                    <Link to="/alltravelers" className={styles["add-btn"]}><div className={styles["add-btn-title"]}><span className={["add-btn-text"]}>Show all</span></div></Link>
                </div>
            </div>
            <div className={styles.travelers_container}>
                <RenderTraveler />
            </div>
            {/* <div className={styles["content-container"]}>
            </div> */}
        </SectionContainer>
    )
}

export default Travelers