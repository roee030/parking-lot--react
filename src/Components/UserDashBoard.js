import React, { useState, useEffect } from "react";
import "./UserDashBoard.css";
import usersData from "../utills/users";
import users from "../utills/users";

export default function UserDashBoard(props) {
  let user = props.history.location.userData;
  const [arrayOfUsers, setArrayOfUsers] = useState(
    localStorage.getItem("dataOfUsers")
  );
  const [freeParking, setFreeParking] = useState(false);
  const [dataOfParking, SetDataOfParking] = useState(
    localStorage.getItem("dataOfParking")
  );
  const saveUserToLocalStorage = (user) => {
    if (user) {
      console.log(user);
      // let updateUserObj = JSON.parse(arrayOfUsers).forEach((element) => {
      //   if (element.UserId == user.UserId) {
      //     console.log("duplicate user");
      //   }
      // });
      let updateUserObj = JSON.parse(arrayOfUsers);
      updateUserObj.push(user);
      console.log(updateUserObj);
      localStorage.setItem("dataOfUsers", JSON.stringify(updateUserObj));
    }
  };
  const CheckFreeParking = (user) => {
    if (user) {
      const freeParking = JSON.parse(dataOfParking).filter((p) => !p.taken);
      if (freeParking.length > 0) {
        user.parkId = freeParking[0].id;
        user.parkName = freeParking[0].name;
      }
    }
  };
  useEffect(() => {
    saveUserToLocalStorage(user);
    // const free = CheckFreeParking(user);
  });

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
