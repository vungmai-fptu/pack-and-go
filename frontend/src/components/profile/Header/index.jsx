import React from 'react'
import styles from "./header.module.css"
import SectionContainer from '../SectionContainer'

const Header = () => {
    return (
        <div>
            <SectionContainer>
                <div className={styles.header}>
                    <div className={styles["header-cover"]}>
                        <div className={styles["header-cover-photo"]}>
                            <div className={styles["header-cover-photo-bg"]}></div>
                            <img alt="" className={styles["header-cover-img"]} src="https://wrld-wa-ec1-prod.b-cdn.net/accounts/99c6fc7f249c364c66075ab4f1cca9ec/profile/86001764857afc2.46359784.jpg?width=1920&height=1920"></img>
                        </div>
                        <div className={styles["header-cover-content"]}>
                            <div className={styles["header-cover-content-details"]}>
                                <div className={styles["avatar-cover"]}>
                                    <div className={styles["avatar-inner-cover"]}>
                                        <img alt="profile" className={styles["avatar-img"]} src="https://wrld-wa-ec1-prod.b-cdn.net/accounts/99c6fc7f249c364c66075ab4f1cca9ec/profile/36001770db99540.28813429.png?width=640&height=640"></img>
                                    </div>
                                </div>
                                <div className={styles.name}>
                                    <div className={styles["user-name"]}> 
                                        Vu Ngoc Mai
                                    </div>
                                    <div className={styles["user-url"]}>/ngocmaivu</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles["header-second-section"]}>
                        <div className={styles["user-info"]}>
                            <div className={styles["user-repository"]}>
                                <div className={styles["user-repo-item"]}>
                                    <span>11</span> countries
                                </div>
                                <div className={styles["user-repo-item"]}>
                                    <span>11</span> trips
                                </div>
                                <div className={styles["user-repo-item"]}>
                                    <span>11</span> photos
                                </div>
                                <div className={styles["user-repo-item"]}>
                                    <span>11</span> videos
                                </div>
                            </div>
                        </div>
                        <div className={styles["user-description"]}>
                            <p>Hi!</p>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </div>
    )
}

export default Header
