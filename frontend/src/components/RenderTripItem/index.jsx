import React, { useEffect, useState } from "react";
import TripItem from "./../TripItem/TripItem";
import { useIsLogin } from "./../../hooks/useIsLogin";
import SkeletonTripItem from "../SkeletonCard/SkeletonTripItem";
export default function RenderTripItem() {
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getUserList = () => {
      setLoading(true);
      fetch(`${process.env.REACT_APP_API_URL}/api/trips?page=${page}&size=9`)
        .then((res) => res.json())
        .then((res) => {
          setTotalPages(res.data.length);
          setUserList([...userList, ...res.data]);
          setLoading(false);
        });
    };
    getUserList();
  }, [page]);

  const { isLogin } = useIsLogin();
  return userList.length === 0 ? (
    <div className="w_cw">
      <div className="w_cW w_cX ">
        <label className="w_rI w_rT">New Trips</label>
        <div className="w_cx">
          <SkeletonTripItem />
        </div>
      </div>
    </div>
  ) : (
    <div className="w_cw">
      <div className="w_cW w_cX ">
        {isLogin && <label className="w_rI w_rT">New Trips</label>}
        <div className="w_cx">
          {userList.map((listTrip, index) => (
            <TripItem listTrip={listTrip} key={index} />
          ))}
        </div>
        {totalPages !== 0 && (
          <div className="w_i-" style={{ justifyContent: "center" }}>
            {loading ? (
              <button
                disabled
                className="w_ih w_ik w_cy"
                style={{ width: "auto" }}
              >
                <span className="w_ia">Load More</span>
                <div className="loadingio-spinner-ripple-ormwzc5m72e">
                  <div className="ldio-gw2gg1659v">
                    <div />
                    <div />
                  </div>
                </div>
              </button>
            ) : (
              <button
                onClick={() => setPage(page + 1)}
                className="w_ih w_ik w_cy"
                style={{ width: "auto" }}
              >
                <span className="w_ia">Load More</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
