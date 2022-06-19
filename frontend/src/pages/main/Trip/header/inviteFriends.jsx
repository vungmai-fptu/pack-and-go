import React, { useRef, useState, useReducer } from "react";
import { RiMailAddLine } from "react-icons/ri";
import { useDetectOutsideClick } from "../../../../components/useDetectOutsideClick";
import styles from "./headerTrip.module.css";
const reducer = (state, action) => {
  if (action.type === "add") {
    state = [...state, action.value];
    return state;
  }
  return state;
};
const InviteFriends = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const [items, setItem] = useState();
  const [list, dispatch] = useReducer(reducer, []);
  const onClick = () => setIsActive(!isActive);
  const addInviteFriends = () => {
    setItem();
    items && dispatch({ type: "add", value: items });
  };
  return (
    <>
      <div className="w_ki">
        <div className="w_AP w_kj w_kr">
          <img
            className="w_km"
            alt="profile"
            src="https://wrld-se-prod.b-cdn.net/images/user-empty.svg?width=640&height=640"
          />
        </div>
        <div className="w_kj">
          <div className="w_WS">
            <div className="w_WV w_WW">+{list.length}</div>
          </div>
        </div>
        <button className="w_kj" onClick={onClick}>
          <div className="w_WS">
            <div className="w_WV w_WX">
              <img
                src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#plusbt-usage"
                alt="common/plus"
                className="w_fu w_fA w_fQ"
              />
            </div>
          </div>
        </button>
      </div>
      <div
        ref={dropdownRef}
        className={`${styles.popupContent} ${
          isActive ? `${styles.active}` : "inactive"
        }`}
      >
        <div className={styles.dropdownTop}>
          <svg
            data-testid="arrow"
            viewBox="0 0 32 16"
            style={{ position: "absolute" }}
          >
            <path d="M16 0l16 16H0z" fill="currentcolor" />
          </svg>
        </div>
        <div className={styles.formLogout}>
          <div>
            <div className={styles.logoutContent}>
              <div style={{ display: "flex" }}>
                <input
                  onChange={(e) => setItem(e.target.value)}
                  type="text"
                  placeholder="Invite Friends"
                />
                <div className={styles.addMail} onClick={addInviteFriends}>
                  <RiMailAddLine />
                </div>
              </div>
              {list.map((item, index) => {
                return (
                  <div className={styles.listGmail} key={index}>
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InviteFriends;
