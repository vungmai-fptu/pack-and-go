import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NoteEditor from "../../../../components/NoteEditor";
import { SET_NOTE } from "../../../../store/constants/trip.const";
import styles from "../trip.module.css";

function Note() {
  const { trip } = useSelector(state => state.trip);
  const dispatch = useDispatch();
  const handleChangeNote = (html) => {
    dispatch({
      type: SET_NOTE,
      payload: html
    })
  }
  return (
    <div className={styles.iTin}>
      <div className={styles.iTin} style={{ position: "relative" }}>
        <div className={styles.tripItin}>
          <div style={{ padding: "32px 32px 0" }}>
            <label>Notes</label>
            <NoteEditor html={trip.note || ""} setHtml={handleChangeNote} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
