import React from "react";
import RenderTraveler from "../../../components/RenderTraveler";
import RenderTripItem from "./../../../components/RenderTripItem";
function Feed() {
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
            <div className="w_cv">
              <RenderTraveler />
            </div>
          </div>
        </div>
        <div className="w_cw">
          <div className="w_cW w_cX ">
            <label className="w_rI w_rT">New Trips</label>
            <div className="w_cx">
              <RenderTripItem />
            </div>
            <div className="w_i-" style={{ justifyContent: "center" }}>
              <button className="w_ih w_ik w_cy" style={{ width: "auto" }}>
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
