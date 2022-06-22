import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getListUser } from "../../store/actions/user.action";
import Traveler from "./../Traveller/traveler";
import SkeletonTraveler from "../SkeletonCard/SkeletonTraveler";
import { useIsLogin } from "./../../hooks/useIsLogin";

export default function RenderTraveler() {
  const dispatch = useDispatch();
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { isLogin } = useIsLogin();
  useEffect(
    () => {
      dispatch(
        getListUser(page, userList, setUserList, setTotalPages, setLoading)
      );
    },
    // eslint-disable-next-line
    [page]
  );

  // const trips = userList.map((trips) =>
  //   trips.trips.length.sort(function (a, b) {
  //     return b - a;
  //   })
  // );

  console.log(
    "---------",
    userList.map((trips) =>
      trips.trips.length.sort(function (a, b) {
        return b - a;
      })
    )
  );
  return userList.length === 0 ? (
    <div className="w_cv">
      <SkeletonTraveler />
    </div>
  ) : (
    <>
      <div className="w_cv">
        {userList.map((listUser, index) => {
          return <Traveler listUser={listUser} key={index} />;
        })}
      </div>
      {isLogin && (
        <div
          className="w_i-"
          style={{ justifyContent: "center", marginTop: "35px" }}
        >
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
            <>
              {totalPages !== page && (
                <button
                  onClick={() => setPage(page + 1, setLoading(true))}
                  className="w_ih w_ik w_cy"
                  style={{ width: "auto" }}
                >
                  <span className="w_ia">Load More</span>
                </button>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}
