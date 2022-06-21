import React, { useRef, useState, useReducer } from "react";
import { RiMailAddLine } from "react-icons/ri";
import { BiPlus } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai"
import { useDetectOutsideClick } from "../../../../components/useDetectOutsideClick";
import styles from "./headerTrip.module.css";
import { inviteToJoinTrip, removeTripMates } from "../../../../services/trip/useTrip";
import { Link } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { async } from "@firebase/util";
import { useDispatch } from "react-redux";
import { ADD_TRIPMATE, REMOVE_TRIPMATE } from "../../../../store/constants/trip.const";

const InviteFriends = ({ tripId, invitedUsers }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState({
    isInviting: false,
    isRemoving: false,
  });
  const dispatch = useDispatch();

  console.log(invitedUsers);

  const onClick = () => setIsActive(!isActive);

  const onChange = (event) => {
    setEmail(event.target.value);
  }
  const addInviteFriends = () => {
    const sentInviteEmail = async () => {
      if (email && email.length !== 0) {
        setIsLoading((prev) => ({
          ...prev,
          isInviting: true
        }));
        try {
          const res = await inviteToJoinTrip(tripId, email);
          setEmail("");
          setIsLoading((prev) => ({
            ...prev,
            isInviting: false
          }));
          dispatch({ type: ADD_TRIPMATE, payload: email });
          NotificationManager.success("Invite tripmate successfully!");
        } catch (err) {
          setIsLoading((prev) => ({
            ...prev,
            isInviting: false
          }));
          NotificationManager.error(err.response?.data?.message || "Fail to invite user");
        }
      }
    }
    sentInviteEmail();
  };

  const onRemoveTripMate = (username) => {
    const removeTripMate = async () => {
      if (username && username.length !== 0) {
        setIsLoading((prev) => ({
          ...prev,
          isRemoving: true
        }));
        try {
          const res = await removeTripMates(tripId, username);
          setIsLoading((prev) => ({
            ...prev,
            isRemoving: false
          }));
          dispatch({ type: REMOVE_TRIPMATE, payload: username });
          NotificationManager.success("Remove your tripmate successfully!");
        } catch (err) {
          setIsLoading((prev) => ({
            ...prev,
            isRemoving: false
          }));
          NotificationManager.error(err.response?.data?.message || "Fail to remove your tripmate");
        }

      }
    }
    removeTripMate();
  }
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
            <div className="w_WV w_WW">+{invitedUsers.length}</div>
          </div>
        </div>
        <button className="w_kj" onClick={onClick}>
          <div className="w_WS" style={{ marginBottom: "3px" }}>
            <div className="w_WV w_WX" style={{ color: "#fff" }}>
              <BiPlus />
            </div>
          </div>
        </button>
      </div>
      <div
        ref={dropdownRef}
        className={`${styles.popupContent} ${isActive ? `${styles.active}` : "inactive"
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
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
                  <input
                    value={email}
                    onChange={onChange}
                    type="text"
                    placeholder="Invite Friends"
                  />
                  <div className={styles.addMail} onClick={addInviteFriends}>
                    {!isLoading.isInviting ?
                      <button>
                        <RiMailAddLine />
                      </button>
                      : "Inviting..."}
                  </div>
                </div>
              </div>
              <div className={styles.listMail}>
                {invitedUsers && invitedUsers.length !== 0 && invitedUsers.map((item, index) => {
                  return (
                    <div className={styles.mailItem} key={item}>
                      <div className={styles.listGmail}>
                        <Link to={`/profile/${item}`}>
                          {item}
                        </Link>
                      </div>
                      <div className={styles.remove_icon} onClick={() => onRemoveTripMate(item)}>
                        {!isLoading.isRemoving ? <AiOutlineCloseCircle className={styles.icon} /> : "Removing..."}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InviteFriends;
