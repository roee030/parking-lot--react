import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import "./Register.css";
export default function Register({ setUserData }) {
  const [userFullName, setUserFullName] = useState();
  const [userCarNumber, setUserCarNumber] = useState();
  const [userCarType, setUserCarType] = useState();
  const [userId, setUserId] = useState(uuidv4());
  const [flag, setFlag] = useState(false);
  const [date, setDate] = useState(
    new Intl.DateTimeFormat("en-US").format(new Date())
  );
  useEffect(() => {
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
            to={{
              pathname: "/userdashboard",
              userData: {
                userFullName,
                userCarNumber,
                userCarType,
                userId,
                date,
              },
            }}
          >
            <button>GET PARKING NUMBER</button>
          </Link>
        ) : (
          <Link
            to={{
              pathname: "/",
            }}
          >
            <button>GET PARKING NUMBER</button>
          </Link>
        )}
      </form>
    </div>
  );
}
