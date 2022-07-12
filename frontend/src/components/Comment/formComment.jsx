import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./comment.module.css";
import InputComment from "./inputComment";

function FormComment({ comment, onDelete, setUpdated, popup, updated }) {
  const [popupReply, setPopupReply] = useState(false);
  const [reply, setReply] = useState("");
  const [name, setName] = useState("long");
  console.log("🚀", setName);
  const [list, setList] = useState(comment.extraComment);
  const { user } = useSelector((state) => state.user);

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
        <Link to={`/profile/${comment.username}`}>
          <img
            alt="profile"
            src={
              comment.avatar ||
              "https://wrld-se-prod.b-cdn.net/images/user-empty.svg"
            }
          />
        </Link>
      </div>
      <div>
        <div className={styles.content_box}>
          <div className={styles.content}>
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Link to={`/profile/${comment.username}`}>
                  <span style={{ marginRight: "8px" }}>{comment.username}</span>
                </Link>
                <p>{comment.time}</p>
              </div>
              <div className={styles.main}>{comment.content}</div>
            </div>
          </div>
          <div
            className={styles.comment_actions}
            style={{ display: "inline-flex" }}
          >
            <button onClick={() => setPopupReply(!popupReply)}>
              <span>Reply</span>
            </button>
            {comment.username === user.username && (
              <>
                <button onClick={() => onDelete(comment)}>
                  <span>Delete</span>
                </button>
                <button onClick={() => setUpdated(comment)}>
                  <span>Edit</span>
                </button>
              </>
            )}
          </div>
        </div>
        {comment.extraComment === undefined ? (
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
            style={{ marginBottom: "20px" }}
            comment={reply}
            updated={updated}
            setComment={setReply}
            addComment={addReply}
          />
        )}
      </div>
    </div>
  );
}

export default FormComment;
