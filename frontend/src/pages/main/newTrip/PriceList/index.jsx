import React, { useState } from "react";
import styles from './PriceList.module.css';
import {
  GiMoneyStack
} from 'react-icons/gi';

import {
  AiOutlinePlusCircle
} from 'react-icons/ai';

import {
  RiArrowDropDownLine
} from 'react-icons/ri'
import PriceItem from "./PriceItem";
import SavePriceItem from "./SavePriceItem";
import NoItem from "../NoItem";


const fake_data = [
  {
    name: "Buy Cloth",
    price: 1,
  },
  {
    name: "Buy Cloth",
    price: 2,
  },
  {
    name: "Buy Tent",
    price: 3,
  },
  {
    name: "Food",
    price: 4,
  },
]


const concurrencies = ["$", "VND"];
const PriceList = () => {

  const [concurrencyUnit, setConcerrencyUnit] = useState("$");
  const [isSelectingConcurrency, setIsSelectingConcurrency] = useState(false);
  const [list, setList] = useState(fake_data);
  const [updatedId, setUpdatedId] = useState(-1);

  const handleToggleSelect = () => {
    setIsSelectingConcurrency(prev => !prev);
  }

  const handleSelect = (concurrency) => {
    setConcerrencyUnit(concurrency);
    setIsSelectingConcurrency(false);
  }

  const onDeleteItem = (index) => {
    setList(prev => prev.filter((item, idx) => idx !== index));
    setUpdatedId(-1);
  }

  const handleClose = () => {
    setUpdatedId(-1);
  }

  const handleOpen = (id) => {
    if (id != null) {
      setUpdatedId(id);
    } else {
      setUpdatedId(list.length);
    }
  }

  const onSaveItem = (newItem) => {
    const newList = [...list];

    newList[updatedId] = newItem;

    setList(newList);
    setUpdatedId(-1);
  }

  return <div className={styles.container}>
    <div className={styles.header_container}>
      <h3 className={styles.header}>
        <GiMoneyStack />
        Price List</h3>
      <div className={styles.concurrencies_selector}>
        <span onClick={handleToggleSelect}>{concurrencyUnit}
          <RiArrowDropDownLine />
        </span>
        <div className={
          isSelectingConcurrency ?
            `${styles.concurrencies} ${styles.appear}` :
            styles.concurrencies
        }>
          {

            concurrencies.map((item) => (
              <div
                className={styles.concurrency_item}
                key={item}
                onClick={() => handleSelect(item)}>{item}</div>
            ))
          }
        </div>
      </div>
    </div>
    <div className={styles.total}>
      Total: <span className={styles.total_amount}>{list.reduce((prev, item) => prev + item.price, 0)} {concurrencyUnit}</span>
    </div>
    <div className={styles.list_item}>
      {
        list && list.length !== 0 ? list.map((item, index) =>
        (
          <PriceItem
            onOpen={() => handleOpen(index)}
            isUpdated={updatedId === index ? true : false}
            handleDelete={() => onDeleteItem(index)}
            item={item}
            key={index}
            concurrencyUnit={concurrencyUnit}
            onClose={handleClose}
            handleUpdate={onSaveItem}
          />
        )
        ) : <NoItem />
      }
    </div>

    <div>
      <div
        className={styles.add_item}
        onClick={() => handleOpen()}
      >
        <div className={styles.add_button}>
          <AiOutlinePlusCircle />
        </div>
        <span>Add new item</span>
      </div>
      {updatedId === list.length && <SavePriceItem
        handleClose={handleClose}
        handleSaveItem={onSaveItem}
      />}
    </div>
  </div >
};

export default PriceList;
