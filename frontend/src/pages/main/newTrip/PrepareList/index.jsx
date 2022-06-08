import React, { useState } from "react";
import styles from "./PrepareList.module.css";

import { AiOutlineCloseCircle, AiOutlinePlusCircle } from "react-icons/ai";

import { GiLightBackpack } from "react-icons/gi";
import NoItem from "../NoItem";

const fake_data = ["backpage", "Cloth", "Food", "Drink"];

const PrepareList = ({ items, addItems }) => {
  const [list, setList] = useState(fake_data);
  const [updatedId, setUpdateId] = useState(0);

  const handleUpdateItem = (e, id) => {
    const value = e.target.value;
    setList((prev) => {
      let newList = [...prev];
      newList[id] = value;
      return newList;
    });
  };

  const handleRemoveItem = (id) => {
    setList((prev) => {
      let newList = prev.filter((item, index) => index !== id);
      return newList;
    });
  };

  const handleAddItem = () => {
    setUpdateId(list.length);
    setList((prev) => {
      return prev.length !== 0 && prev.slice(-1)[0].length === 0
        ? [...prev]
        : [...prev, ""];
    });
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>
        <GiLightBackpack />
        What should be prepared? ({list.length})
      </h3>
      <div className={styles.list_container}>
        <div>
          {list && list.length !== 0 ? (
            list.map((item, index) => (
              <div key={index} className={styles.item}>
                <div className={styles.item_name}>
                  <span>{index + 1}. </span>
                  <input
                    value={item}
                    onChange={(e) => handleUpdateItem(e, index)}
                    autoFocus={index === updatedId ? true : false}
                  />
                </div>
                <div
                  className={styles.action_button}
                  onClick={() => handleRemoveItem(index)}
                >
                  <AiOutlineCloseCircle />
                </div>
              </div>
            ))
          ) : (
            <NoItem />
          )}
        </div>
      </div>
      <div className={styles.add_item} onClick={handleAddItem}>
        <div className={styles.add_button}>
          <AiOutlinePlusCircle />
        </div>
        <span>Add new item</span>
      </div>
    </div>
  );
};

export default PrepareList;
