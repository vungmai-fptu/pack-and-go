import React from 'react'
import styles from './map.module.css'
import SectionHeader from '../SectionHeader'
import SectionContainer from '../SectionContainer'

const Map = () => {
    return (
        <div>
            <SectionContainer>
                <SectionHeader>Map</SectionHeader>
                <div className={styles.map}></div>
                <div className={styles["map-buttons-side"]}>
                    <div className={styles["map-buttons"]}>
                        <button className={styles["map-btn"]}>
                            <div className={styles["map-img-box"]}></div>
                            <img className={styles["map-btn-img"]} alt="" src="/client/sprites/src_app_components_components_svgIcon_icons_commonsprite-8ddb95.svg#plusbq-usage"></img>
                            <span></span>
                            </button>
                        <div className={styles.line}></div>
                        <button className={styles["map-btn"]}>
                            <div className={styles["map-img-box"]}></div>
                            <img className={styles["map-btn-img"]} alt="" src="/client/sprites/src_app_components_components_svgIcon_icons_commonsprite-8ddb95.svg#minusaV-usage"></img>
                            <span></span>
                            </button>
                    </div>
                    <div className={styles["map-single-button"]}>
                        <button className={styles["map-btn"]}>
                            <div className={styles["map-img-box"]}></div>
                            <img className={styles["map-btn-img"]} alt="" src="/client/sprites/src_app_components_components_svgIcon_icons_commonsprite-8ddb95.svg#info_fullap-usage"></img>
                            <span></span>
                            </button>
                    </div>
                </div>
            </SectionContainer>
        </div>
    );
}

export default Map;
