import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../store/actions/user.action";
import Traveler from "./../../../components/Traveller/traveler";
import TripItem from "./../../../components/TripItem/TripItem";
function Feed() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  const { listUser } = useSelector((state) => state.user);
  const renderListUser = () => {
    return listUser.map((listUser, index) => {
      return <Traveler listUser={listUser} />;
    });
  };
  const renderTripItem = () => {
    return listUser.map((listUser, index) => {
      return <TripItem listUser={listUser} />;
    });
  };
  return (
    <div className="w_mS w_mT">
      <div className="w_cs">
        <div className="w_cu">
          <div className="w_cW w_cX ">
            <div className="w_i-">
              <label className="w_rI w_rT w_ct">Popular Travelers</label>
              <a href="/explore/trips" className="w_ii w_im">
                <div
                  className="w_A9 w_A-"
                  width="82.8125"
                  height="19.1875"
                  style={{
                    width: "100%",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  <span className="w_ia">Get Inspired</span>
                </div>
              </a>
            </div>
            <div className="w_cv">{renderListUser()}</div>
          </div>
        </div>
        <div className="w_cw">
          <div className="w_cW w_cX ">
            <label className="w_rI w_rT">New Trips</label>
            <div className="w_cx">{renderTripItem()}</div>
            <div className="w_i-" style={{ justifyContent: "center" }}>
              <button className="w_ih w_ik w_cy">
                <span className="w_ia">Load More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
