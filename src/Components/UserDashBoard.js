import React, { useState, useEffect } from "react";
import "./UserDashBoard.css";
import usersData from "../utills/users";
import users from "../utills/users";

export default function UserDashBoard(props) {
  let user = props.history.location.userData;
  const [arrayOfUsers, setArrayOfUsers] = useState();
  const [freeParking, setFreeParking] = useState(false);
  const [dataOfParking, SetDataOfParking] = useState();
  let [userData, setUserData] = useState(props.history.location.userData);
  console.log(userData);
  const getData = () => {
    setArrayOfUsers(localStorage.getItem("dataOfUsers"));
    SetDataOfParking(localStorage.getItem("dataOfParking"));
  };
  useEffect(() => {
    console.log("getData");
    getData();
    saveUserToLocalStorage(user);
  });
  const saveUserToLocalStorage = (user) => {
    if (user && arrayOfUsers) {
      // let updateUserObj = JSON.parse(arrayOfUsers).forEach((element) => {
      //   if (element.UserId == user.UserId) {
      //     console.log("duplicate user");
      //   }
      // });
      let updateUserObj = JSON.parse(arrayOfUsers);
      updateUserObj.push(user);
      console.log(updateUserObj);

      localStorage.setItem("dataOfUsers", JSON.stringify(updateUserObj));
      //   setArrayOfUsers(JSON.stringify(updateUserObj));
    }
  };
  const constUpdateUserAndSaveToLocalStorage = (user) => {
    console.log(user);
    let updateUserArray = JSON.parse(localStorage.getItem("dataOfUsers")).map(
      (element) => {
        if (element.userId == user.userId) {
          return {
            date: user.date,
            parkId: user.parkId,
            parkName: user.parkName,
            userCarNumber: user.userCarNumber,
            userCarType: user.userCarType,
            userId: user.userId,
          };
        } else {
          return element;
        }
      }
    );

    console.log(updateUserArray);
    userData = updateUserArray;
  };
  const CheckFreeParking = (user) => {
    if (user && dataOfParking) {
      //   console.log(JSON.parse(dataOfParking));
      //   console.log(JSON.parse(arrayOfUsers));
      const freeParking = JSON.parse(
        localStorage.getItem("dataOfParking")
      ).filter((p) => !p.taken);
      if (freeParking.length > 0) {
        console.log("asaaaaaaaaaaaaaaaaaaaaaaaaad");
        user.parkId = freeParking[0].id;
        user.parkName = freeParking[0].name;
        console.log(user);
        constUpdateUserAndSaveToLocalStorage(user);
      }
    }
  };

  useEffect(() => {
    console.log("effect");
    // getData();

    const free = CheckFreeParking(user);
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
          <div>{userData.parkName}</div>
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
