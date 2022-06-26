import React, { useCallback, useState } from "react";
import styles from "./comment.module.css";
import FormComment from "./formComment";
import InputComment from "./inputComment";

function Comment() {
  const dataComment = [
    {
      id: 1,
      name: "user1",
      comment: "test comment 1",
      reply: [
        { id: 2, name: "user2", comment: "test comment 2" },
        { id: 3, name: "user3", comment: "test comment 3" },
      ],
    },
    {
      id: 4,
      name: "user4",
      comment: "test comment 4",
      reply: [{ id: 5, name: "user5", comment: "test comment 5" }],
    },
    { id: 6, name: "user6", comment: "test comment 6", reply: [] },
  ];
  const [comment, setComment] = useState("");
  const [name, setName] = useState("long");
  const [list, setList] = useState(dataComment);
  const addComment = () => {
    const newComment = {
      id: Math.random().toString().substring(2, 9),
      name,
      comment,
      reply: [],
    };
    setList([...list, newComment]);
    setComment("");
  };

  const onDelete = useCallback((comment) => {
    setList((list) =>
      list.filter((oldComment) =>
        oldComment.id === comment.id ? null : { oldComment }
      )
    );
  }, []);
  return (
    <div className={styles.container}>
      {list.map((comment, index) => (
        <FormComment
          comment={comment}
          onDelete={onDelete}
          popup={true}
          key={index}
        />
      ))}
      <InputComment
        comment={comment}
        setComment={setComment}
        addComment={addComment}
      />
    </div>
  );
}

export default Comment;
