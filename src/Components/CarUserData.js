import React from "react";

export default function CarUserData() {
  const userData = localStorage.getItem("dataOfUsers");
  let displayUserInParkingSpot;
  if (userData) {
    displayUserInParkingSpot = JSON.parse(userData).map((u) => {
      if (u.parkId !== null) {
        return (
          <div>
            {u.userFullName}
            {u.parkName}
          </div>
        );
      }
    });
  }
  return <div>{displayUserInParkingSpot}</div>;
}
