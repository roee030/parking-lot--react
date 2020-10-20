import React from "react";
import "./UserDashBoard.css";
export default function UserDashBoard(props) {
  const user = props.history.location.userData;
  console.log(user);
  return user ? (
    <div className="userDataDisplay">
      <div> Create on : {user.date}</div>
      <div> Parking : {user.date}</div>
      <div> Full Name: {user.userFullName}</div>
      <div> Car Number : {user.userCarNumber}</div>
      <div> Car type : {user.userCarType}</div>
    </div>
  ) : (
    ""
  );
}
