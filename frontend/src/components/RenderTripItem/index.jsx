import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListUser } from "../../store/actions/user.action";
import TripItem from "./../TripItem/TripItem";
import { useIsLogin } from "./../../hooks/useIsLogin";
import SkeletonTripItem from "../SkeletonCard/SkeletonTripItem";

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
  const { loading } = useIsLogin();
  return loading ? (
    <SkeletonTripItem />
  ) : (
    listUser.map((listUser, index) => {
      return <TripItem listUser={listUser} key={index} />;
    })
  );
}
