import React from "react";
import { Link } from "react-router-dom";
import { IoSend } from "react-icons/io5";
import styles from "./comment.module.css";

function InputComment({
  comment,
  updated,
  setUpdated,
  setComment,
  addComment,
  onUpdate,
}) {
  return (
    <>
      {updated.id === null || updated === undefined ? (
        <div className={styles.formComment}>
          <div className={styles.comment}>
            <Link to="/">
              <img
                alt="profile"
                src="https://wrld-se-prod.b-cdn.net/images/user-empty.svg"
              />
            </Link>
          </div>
          <div className={styles.comment_box}>
            <input
              type="text"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              placeholder="Enter comment..."
            />
            <button onClick={addComment}>
              <IoSend />
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.formComment}>
          <div className={styles.comment}>
            <Link to="/">
              <img
                alt="profile"
                src="https://wrld-se-prod.b-cdn.net/images/user-empty.svg"
              />
            </Link>
          </div>
          <div className={styles.comment_box}>
            <input
              type="text"
              value={updated.comment}
              onChange={(event) => setUpdated()}
              placeholder="Enter comment..."
            />
            <button onClick={onUpdate}>
              <IoSend />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default InputComment;
