import React from "react";
import DraftWysiwyg from "../../../../components/DraftWysiwyg";
import styles from "../trip.module.css";
function Note() {
  return (
    <div className={styles.iTin}>
      <div className={styles.iTin} style={{ position: "relative" }}>
        <div className={styles.tripItin}>
          <div style={{ padding: "32px 32px 0" }}>
            <label>Notes</label>
            <DraftWysiwyg />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
