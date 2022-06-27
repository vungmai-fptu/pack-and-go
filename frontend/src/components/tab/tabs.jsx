import React, { useState } from "react";
import Tab from "./tab";
import styles from "./Tabs.module.css";
import { FcLikePlaceholder, FcLike, FcComments, FcShare } from "react-icons/fc";
import Comment from "../Comment";
import { useSelector } from "react-redux";
import { TRIP_MODE } from "../../store/constants/trip.const";
function Tabs(props) {
  const [activeTab, setActiveTab] = useState(props.children[0].props.label);
  const [formComment, setFormComment] = useState(false);
  const [isHeart, setIsHeart] = useState(false);
  const { mode } = useSelector((state) => state.trip);
  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w_CS" style={{ minWidth: "fit-content" }}>
      <div style={{ background: "#071125" }} className={styles.tabs}>
        {props.children.map((child) => {
          const { label, Icon } = child.props;
          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
              Icon={Icon}
            />
          );
        })}
      </div>
      <div style={{ flex: "1 1", display: "flex", flexDirection: "column" }}>
        {props.children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
        {mode !== TRIP_MODE.CREATE && (
          <div style={{ borderTop: "1px solid #d0d8e6" }}>
            <div style={{ display: "flex" }}>
              <div className={styles.interactive} style={{ display: "flex" }}>
                <button
                  onClick={() => {
                    setIsHeart(!isHeart);
                  }}
                >
                  <div>{isHeart ? <FcLike /> : <FcLikePlaceholder />}</div>
                  <span>00</span>
                </button>
                <button
                  onClick={() => {
                    setFormComment(!formComment);
                  }}
                >
                  <div>
                    <FcComments />
                  </div>
                  <span>00</span>
                </button>
                <button>
                  <div>
                    <FcShare />
                  </div>
                </button>
              </div>
            </div>
            {formComment && <Comment />}
          </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;
