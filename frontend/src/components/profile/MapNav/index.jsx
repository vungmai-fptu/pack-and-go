import React from 'react';
import styles from './nav.module.css'
import SectionContainer from '../SectionContainer';
import {BiFilter} from 'react-icons/bi'
import {BsChevronDown} from 'react-icons/bs'

const MapNav = () => {
    return (
        <div>
            <SectionContainer>
                <div className={styles["nav-wrapper"]}>
                    <div className={styles["map-nav"]}>
                        <div className={styles["btn-selected"]}>
                            <span className={styles["nav-title"]}>All trips</span>
                        </div>
                        <div className={styles.btn}>
                            <span className={styles["nav-title"]}>Global trips</span>
                        </div>
                        <div className={styles.btn}>
                            <div className={styles["btn-icon"]}><img src="https://www.worldometers.info/img/flags/vm-flag.gif" alt="country flag" className={styles["btn-circle-img"]}/></div>
                            <span className={styles["nav-title"]}>Local Trips</span>
                        </div>
                        <div className={styles.btn}>
                            <div className={styles["btn-icon"]}><BiFilter /></div><span className={styles["nav-title"]}>Filter countries <BsChevronDown /></span>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </div>
    );
}

export default MapNav;
