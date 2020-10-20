import React, { useState, useEffect } from "react";
import "./UserDashBoard.css";
import usersData from "../utills/users";
import users from "../utills/users";
import parking from "../utills/parking";
export default function UserDashBoard(props) {
  let user = props.history.location.userData;
  users.push(user);
  const [success, setSuccess] = useState(false);
  const CheckFreeParking = (user) => {
    if (user) {
      parking.forEach((p) => {
        if (!p.taken) {
          user.parkId = p.id;
          user.parkName = p.name;
          setSuccess(true);
        } else {
          setSuccess(false);
        }
      });
    }
  };
  useEffect(() => {
    CheckFreeParking(user);
  }, []);

  return user ? (
    <div className="userDataDisplayWraper">
      <div className="userDataDisplay">
        <div className=" data">
          <div>Create on :</div>
          <div>{user.date}</div>
        </div>
        <div className=" data">
          <div>Parking :</div>
          <div>{user.parkName}</div>
        </div>
        <div className=" data">
          <div>Full Name :</div>
          <div>{user.userFullName}</div>
        </div>
        <div className=" data">
          <div>Car Number :</div>
          <div>{user.userCarNumber}</div>
        </div>
        <div className=" data">
          <div>Car type :</div>
          <div>{user.userCarType}</div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
