import React from "react";
import TripItem from "../../../../components/TripItem/TripItem";

function UserTrip({ userList }) {
  return (
    <div
      style={{
        display: "grid",
        gap: "24px",
        gridTemplateColumns: "repeat(3, 1fr)",
        margin: "16px 0",
      }}
    >
      {userList.map((listTrip, index) => (
        <TripItem listTrip={listTrip} key={index} />
      ))}
    </div>
  );
}

export default UserTrip;
