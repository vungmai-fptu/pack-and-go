import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListUser } from "../../store/actions/user.action";
import Traveler from "./../Traveller/traveler";
import { useIsLogin } from "./../../hooks/useIsLogin";
import SkeletonTraveler from "../SkeletonCard/SkeletonTraveler";

export default function RenderTraveler() {
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(getListUser());
    },
    // eslint-disable-next-line
    []
  );
  const { listUser } = useSelector((state) => state.user);
  return listUser.length === 0 ? (
    <SkeletonTraveler />
  ) : (
    listUser.slice(0, 4).map((listUser, index) => {
      return <Traveler listUser={listUser} key={index} />;
    })
  );
}
