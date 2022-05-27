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
                            All trips
                        </div>
                        <div className={styles.btn}>
                            Global trips
                        </div>
                        <div className={styles.btn}>
                            <div className={styles["btn-icon"]}><img src="https://www.worldometers.info/img/flags/vm-flag.gif" alt="country flag" className={styles["btn-circle-img"]}/></div>
                            Local Trips
                        </div>
                        <div className={styles.btn}>
                            <div className={styles["btn-icon"]}><BiFilter /></div>Filter countries <BsChevronDown />
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </div>
    );
}

export default MapNav;
