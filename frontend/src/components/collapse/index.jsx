import React, { useState } from "react";
import { IoChevronUpSharp, IoChevronDownSharp } from "react-icons/io5";
import styles from "../../pages/main/newTrip/trip.module.css";
const style = {
  collapsed: {
    display: "none",
  },
  expanded: {
    display: "block",
  },
  buttonStyle: {
    display: "block",
    width: "100%",
  },
};

function Collapse(props) {
  const [isCollapsed, setCollapsed] = useState(props.collapsed);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className={styles.dayOne}>
        <div className={styles.dayTop} onClick={() => toggleCollapse()}>
          {isCollapsed ? <IoChevronDownSharp /> : <IoChevronUpSharp />}
        </div>
        <div className={styles.spanOne}>Day {props.day}</div>
        <div className={styles.dayBa}></div>
      </div>
      <div
        className="collapse-content"
        style={isCollapsed ? style.collapsed : style.expanded}
        aria-expanded={isCollapsed}
      >
        {props.children}
      </div>
    </>
  );
}

export default Collapse;
