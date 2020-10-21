import React, { useState, useEffect } from "react";

export default function CarUserData() {
  let displayUserInParkingSpot;
  (() => {
    const userData = localStorage.getItem("dataOfUsers");

    if (userData) {
      displayUserInParkingSpot = JSON.parse(userData).map((u) => {
        console.log(u.parkId !== null);
        if (u.parkId !== null) {
          return (
            <div key={u.userId}>
              <div className="data">
                <div>Full Name :</div>
                <div> {u.userFullName}</div>
                <div>Park Number :</div>
                <div> {u.parkName}</div>
              </div>
            </div>
          );
        }
      });
    }
  })();

  return (
    <div className="userDataDisplayWraper">
      <div className="userDataDisplay">{displayUserInParkingSpot}</div>;
    </div>
  );
}
