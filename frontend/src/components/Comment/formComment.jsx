import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./comment.module.css";
import InputComment from "./inputComment";

function FormComment({ comment, onDelete, popup }) {
  const [popupReply, setPopupReply] = useState(false);
  const [reply, setReply] = useState("");
  const [name, setName] = useState("long");
  const [list, setList] = useState(comment.reply);
  const addReply = () => {
    const newComment = {
      id: Math.random().toString(),
      name,
      comment: reply,
    };
    setList([...list, newComment]);
    setReply("");
  };

  const onDeleteReply = useCallback((comments) => {
    setList((list) =>
      list.filter((oldComment) =>
        oldComment.id === comments.id ? null : { oldComment }
      )
    );
  }, []);
  return (
    <div className={styles.formComment}>
      <div className={styles.comment}>
        <Link to="/">
          <img
            alt="profile"
            src="https://wrld-se-prod.b-cdn.net/images/user-empty.svg"
          />
        </Link>
      </div>
      <div>
        <div className={styles.content_box}>
          <div className={styles.content}>
            <div>
              <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                <span style={{ marginRight: "8px" }}>{comment.name}</span>
                <p>06/03/2022, 22:26:42</p>
              </Link>
              <div className={styles.main}>{comment.comment}</div>
            </div>
          </div>
          <div style={{ display: "inline-flex" }}>
            {popup && (
              <button onClick={() => setPopupReply(!popupReply)}>
                <span>Reply</span>
              </button>
            )}
            <button onClick={() => onDelete(comment)}>
              <span>Delete</span>
            </button>
            <button>
              <span>Edit</span>
            </button>
          </div>
        </div>
        {comment.reply === undefined ? (
          <></>
        ) : (
          list.map((comment, index) => (
            <FormComment
              comment={comment}
              onDelete={onDeleteReply}
              popup={false}
              key={index}
            />
          ))
        )}
        {popupReply && (
          <InputComment
            comment={reply}
            setComment={setReply}
            addComment={addReply}
          />
        )}
      </div>
    </div>
  );
}

export default FormComment;
