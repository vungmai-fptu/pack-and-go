import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NoteEditor from "./../../../../components/NoteEditor/index";
import { SET_NOTE } from "../../../../store/constants/trip.const";
import styles from "../settingProfile.module.css";
import classNames from "classnames";
function AboutMe() {
  const { trip } = useSelector((state) => state.trip);
  const dispatch = useDispatch();
  const handleChangeNote = (html) => {
    dispatch({
      type: SET_NOTE,
      payload: html,
    });
  };
  return (
    <div className={classNames(`${styles.boxInput}`, `${styles.w100}`)}>
      <label htmlFor="ome-text-editor"> About me </label>
      <div className={styles.input}>
        <div
          className={classNames(
            `${styles.trumbowygBox}`,
            `${styles.trumbowygEditorVisible}`,
            `${styles.trumbowygEn}`,
            `${styles.trumbowyg}`
          )}
        >
          <NoteEditor html={trip.note || ""} setHtml={handleChangeNote} />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
