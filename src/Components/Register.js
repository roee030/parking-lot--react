import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Parking from "../utills/parking";
import * as UserFun from "../utills/users";
import "./Register.css";
export default function Register() {
  const [userFullName, setUserFullName] = useState();
  const [userCarNumber, setUserCarNumber] = useState();
  const [userCarType, setUserCarType] = useState();
  const [userId, setUserId] = useState(uuidv4());
  const [flag, setFlag] = useState(false);
  const [date, setDate] = useState(
    new Intl.DateTimeFormat("en-US").format(new Date())
  );
  const getDataFromLocalStorage = () => {
    let dataOfUsers = localStorage.getItem("dataOfUsers");
    let dataOfParking = localStorage.getItem("dataOfParking");
    if (!dataOfUsers) {
      dataOfUsers = localStorage.setItem("dataOfUsers", JSON.stringify([]));
    }
    if (!dataOfParking) {
      dataOfUsers = localStorage.setItem(
        "dataOfParking",
        JSON.stringify(Parking)
      );
    }
  };
  useEffect(() => {
    getDataFromLocalStorage();

    if (userFullName && userCarNumber && userCarType) {
      setFlag(true);
    }
  });

  return (
    <div className="formWraper">
      <h1>Register</h1>
      <form className="formRegister">
        <input
          type="text"
          placeholder="full Name"
          onChange={(e) => setUserFullName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Car Number"
          onChange={(e) => setUserCarNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Car Type"
          onChange={(e) => setUserCarType(e.target.value)}
        />
        {flag ? (
          <Link
            className="onsubmit-btn-wraper"
            to={{
              pathname: "/userdashboard",
              userData: {
                userFullName,
                userCarNumber,
                userCarType,
                userId,
                date,
                parkId: UserFun.setParkId(),
                parkName: UserFun.setParkName(),
              },
            }}
          >
            <input
              className="onsubmit-btn"
              value="GET PARKING NUMBER"
              readOnly
            />
          </Link>
        ) : (
          <Link
            className="onsubmit-btn-wraper"
            to={{
              pathname: "/",
            }}
          >
            <input
              className="onsubmit-btn"
              type="text"
              value="GET PARKING NUMBER"
              readOnly
              disabled
            />
          </Link>
        )}
      </form>
    </div>
  );
}
