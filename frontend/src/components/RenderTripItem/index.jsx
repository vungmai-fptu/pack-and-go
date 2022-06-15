import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListUser } from "../../store/actions/user.action";
import TripItem from "./../TripItem/TripItem";

export default function RenderTripItem() {
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(getListUser());
    },
    // eslint-disable-next-line
    []
  );
  const { listUser } = useSelector((state) => state.user);
  console.log(
    "🚀 ~ file: index.jsx ~ line 16 ~ RenderTripItem ~ listUser",
    listUser
  );
  return listUser.map((listUser, index) => {
    return <TripItem listUser={listUser} key={index} />;
  });
}
