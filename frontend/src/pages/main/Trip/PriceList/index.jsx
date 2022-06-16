import React, { useState } from "react";
import styles from './PriceList.module.css';
import { v4 as uuid } from 'uuid';

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
import { SET_CONCURRENCY_UNIT, SET_PRICE_LIST } from "../../../../store/constants/trip.const";
import { useDispatch, useSelector } from "react-redux";




const concurrencies = ["$", "VND"];
const PriceList = () => {
  const { trip } = useSelector(state => state.trip);
  const dispatch = useDispatch();
  const [isSelectingConcurrency, setIsSelectingConcurrency] = useState(false);
  const [updatedId, setUpdatedId] = useState(-1);

  const handleToggleSelect = () => {
    setIsSelectingConcurrency(prev => !prev);
  }

  const handleSelect = (concurrency) => {
    dispatch({
      type: SET_CONCURRENCY_UNIT,
      payload: concurrency
    })
    setIsSelectingConcurrency(false);
  }

  const onDeleteItem = (index) => {
    // setList(prev => prev.filter((item, idx) => idx !== index));
    setUpdatedId(-1);
    const newList = trip.priceList.filter((item, idx) => idx !== index);
    dispatch({
      type: SET_PRICE_LIST,
      payload: newList
    })
  }

  const handleClose = () => {
    setUpdatedId(-1);
  }

  const handleOpen = (id) => {
    if (id != null) {
      setUpdatedId(id);
    } else {
      setUpdatedId(trip.priceList.length);
    }
  }

  const onSaveItem = (newItem) => {
    setUpdatedId(-1);
    const newList = [...trip.priceList];
    newList[updatedId] = { id: uuid(), ...newItem };
    dispatch({
      type: SET_PRICE_LIST,
      payload: newList
    })
  }

  return <div className={styles.container}>
    <div className={styles.header_container}>
      <h3 className={styles.header}>
        <GiMoneyStack />
        Price List</h3>
      <div className={styles.concurrencies_selector}>
        <span onClick={handleToggleSelect}>{trip.concurrencyUnit}
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
      Total: <span className={styles.total_amount}>{trip.priceList.reduce((prev, item) => prev + item.price, 0)} {trip.concurrencyUnit}</span>
    </div>
    <div className={styles.list_item}>
      {
        trip.priceList && trip.priceList.length !== 0 ? trip.priceList.map((item, index) =>
        (
          <PriceItem
            onOpen={() => handleOpen(index)}
            isUpdated={updatedId === index ? true : false}
            handleDelete={() => onDeleteItem(index)}
            item={item}
            key={item.id}
            concurrencyUnit={trip.concurrencyUnit}
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
      {updatedId === trip.priceList.length && <SavePriceItem
        handleClose={handleClose}
        handleSaveItem={onSaveItem}
      />}
    </div>
  </div >
};

export default PriceList;
