import React from "react";
import { Link } from "react-router-dom";
import { IoSend } from "react-icons/io5";
import styles from "./comment.module.css";

function Comment() {
  return (
    <div className={styles.container}>
      <div className={styles.formComment}>
        <div className={styles.comment}>
          <Link to="/">
            <img
              alt="profile"
              src="https://wrld-se-prod.b-cdn.net/images/user-empty.svg"
            />
          </Link>
        </div>
        <div className={styles.content}>
          <div>
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: "8px" }}>Long</span>
              <p>06/03/2022, 22:26:42</p>
            </Link>
            <div className={styles.main}>test comment</div>
          </div>
        </div>
      </div>
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
          <input type="text" placeholder="Enter comment..." />
          <button disabled>
            <IoSend />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comment;
