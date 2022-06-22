import React from 'react'
import Nav from '../navbar'

import styles from './header.module.css'

const Header = (props) => {
    return (
        <div>
            <div className={styles["header"]}>
                <div className={styles["header-content"]}>
                    <label className={styles["header-label"]}>Results for: {props.keyword}</label>
                </div>
            </div>
        </div>
    )
}

export default Header