import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../trip.module.css";
import { IoPeopleOutline, IoLockClosedOutline } from "react-icons/io5";
import Date from "./date";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_TRIP_NAME,
  SET_TRIP_STATUS,
  TRIP_MODE,
} from "../../../../store/constants/trip.const";
import { saveTrip, updateTrip } from "../../../../store/actions/trip.action";
import Loading from "../../../../components/Loading";
import logo from "../../../../assets/images/logos/logo-black-2.png";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Header() {
  const { trip, mode } = useSelector((state) => state.trip);
  const { loading } = useSelector((state) => state.common);
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const dropdownRef = useRef(null);

  // const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const [isActive, setIsActive] = useState(false);

  const onClick = () => {
    if (mode === TRIP_MODE.VIEW) {
      return;
    }
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: SET_TRIP_NAME, payload: name });
    }, 1000);

    return () => clearTimeout(timer);
  }, [name]);

  useEffect(() => {
    setName(trip.name || "");
  }, [trip]);

  const handleStatusChange = (status) => {
    setIsActive(false);
    dispatch({
      type: SET_TRIP_STATUS,
      payload: status,
    });
  };

  const onSaveTrip = () => {
    if (mode === TRIP_MODE.CREATE) {
      dispatch(saveTrip(trip));
    } else if (mode === TRIP_MODE.UPDATE) {
      dispatch(updateTrip(trip));
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Link to="/">
              <img alt="logo" src={logo} />
            </Link>
          </div>
          <div className={styles.content}>
            <div style={{ marginRight: "8px", minWidth: "60px" }}>
              <div className={styles.tripName}>
                <input
                  value={name}
                  readOnly={mode === TRIP_MODE.VIEW}
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  placeholder="Enter plan name"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Date />
      <div className={styles.save}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button className={styles.boxControl} onClick={onClick}>
            {trip.status === "public" ? (
              <IoPeopleOutline />
            ) : (
              <IoLockClosedOutline />
            )}
            <div className={styles.boxIndicators}>
              <div className={styles.boxDropdown} aria-hidden="true">
                <RiArrowDropDownLine />
              </div>
            </div>
          </button>
          <div
            ref={dropdownRef}
            className={`${styles.popupContent} ${
              isActive ? `${styles.active}` : `${styles.inactive}`
            }`}
            style={{ right: "182px" }}
          >
            <div className={styles.dropdownTop} style={{ left: "50% " }}>
              <svg
                data-testid="arrow"
                className={styles.popupArrow}
                viewBox="0 0 32 16"
                style={{ position: "absolute" }}
              >
                <path d="M16 0l16 16H0z" fill="currentcolor" />
              </svg>
            </div>
            <div className={styles.formLogout}>
              <div
                className={styles.logout}
                onClick={() => handleStatusChange("public")}
              >
                <div className={styles.logoutContent}>
                  <div className={styles.logoutIcon}>
                    <IoPeopleOutline />
                  </div>
                  <div className={styles.logoutTitle}>
                    <span>Visible To All</span>
                  </div>
                </div>
              </div>
              <div
                className={styles.logout}
                onClick={() => handleStatusChange("private")}
              >
                <div className={styles.logoutContent}>
                  <div className={styles.logoutIcon}>
                    <IoLockClosedOutline />
                  </div>
                  <div className={styles.logoutTitle}>
                    <span>Visible To Me</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {mode === TRIP_MODE.VIEW ? (
              <></>
            ) : (
              <button
                className={styles.tripSave}
                onClick={onSaveTrip}
                disabled={loading}
              >
                {!loading ? (
                  <span>Save and close</span>
                ) : (
                  <Loading isSmall={true} />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
