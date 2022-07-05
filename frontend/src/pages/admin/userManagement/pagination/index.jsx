import React from "react";
import { FcPrevious, FcNext } from "react-icons/fc";
import styles from "../../Dashboard/dashboard.module.css";
function Pagination({ postPerPage, totalPosts, pagiNate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={styles.pagination}>
      <ul>
        <li className={styles.btn}>
          <span>
            <FcPrevious /> Prev
          </span>
        </li>
        {pageNumbers.map((item) => (
          <li key={item} className={styles.numb}>
            <span onClick={() => pagiNate(item)}>{item}</span>
          </li>
        ))}
        <li className={styles.btn}>
          <span>
            Next <FcNext />
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
