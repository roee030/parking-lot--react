import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <div className="header">
        <Link to="/">Get a parking number</Link>
        <Link to="/userDashBoard">display parking</Link>
      </div>
    </div>
  );
}
