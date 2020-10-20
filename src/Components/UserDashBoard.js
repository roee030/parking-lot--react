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
        <div className="date data"> Create on : {user.date}</div>
        <div className="parking-lot data"> Parking:{user.parkName}</div>
        <table>
          <tbody>
            <tr className=" data">
              <td>Full Name :</td>
              <td>{user.userFullName}</td>
            </tr>
            <tr>
              <td>Car Number :</td>
              <td>{user.userCarNumber}</td>
            </tr>
            <tr>
              <td>Car type :</td>
              <td>{user.userCarType}</td>
            </tr>
          </tbody>
        </table>
        {/* <div> Parking : {user.date}</div>
        <div> Full Name: {user.userFullName}</div>
        <div> Car Number : {user.userCarNumber}</div>
        <div> Car type : {user.userCarType}</div> */}
      </div>
    </div>
  ) : (
    ""
  );
}
