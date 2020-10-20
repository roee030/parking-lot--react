import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <div className="header-wraper">
      <div className="header">
        <Link to="/">Get a parking number</Link>
        <Link to="/userDashBoard">Display parking</Link>
      </div>
    </div>
  );
}
