import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListUser } from "../../store/actions/user.action";
import Traveler from "./../Traveller/traveler";

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
  console.log(
    "🚀 ~ file: index.jsx ~ line 16 ~ RenderTraveler ~ listUser",
    listUser
  );
  return listUser.map((listUser, index) => {
    return <Traveler listUser={listUser} key={index} />;
  });
}
