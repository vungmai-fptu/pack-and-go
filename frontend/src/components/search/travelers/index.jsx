import React from 'react'
import styles from './travelers.module.css'
import { Grid } from '../../Grid/Grid';
import Traveler from '../../Traveller/traveler';
import SectionContainer from '../../landing/SectionContainer';
import { useState } from 'react';

const Travelers = ({ travelers }) => {
    const [showed, setShowed] = useState(false);

    const onShowList = () => {
        setShowed(prev => !prev);
    }

    const showedList = !showed ? [...travelers].slice(0, 4) : [...travelers];

    return (
        <SectionContainer>
            <div className={styles["travelers-section"]}>
                <div className={styles["trips-title"]}>
                    <div className={styles["title-wrapper"]}>
                        <label className={styles.title}>Travelers</label>
                        <div
                            onClick={onShowList}
                            className={styles["add-btn"]}>
                            <div className={styles["add-btn-title"]}>
                                <span
                                    className={["add-btn-text"]}
                                >{showed ? "Collapse" : "Show all"}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.travelers_container}>
                    {
                        travelers && travelers.length !== 0 ?
                            (<Grid>
                                {
                                    showedList.map(traveler =>
                                        <Traveler listUser={traveler} key={traveler.username} />
                                    )
                                }
                            </Grid>) : "NOT FOUND"

                    }
                </div>
            </div>
        </SectionContainer >
    )
}

export default Travelers