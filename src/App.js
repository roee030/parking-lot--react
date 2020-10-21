import React, { useState, useEffect } from "react";
import "./App.css";
import Register from "./Components/Register";
import UserDashBoard from "./Components/UserDashBoard";
import CarUserData from "./Components/CarUserData";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Register}></Route>
        <Route path="/userDashBoard" exact component={UserDashBoard}></Route>
        <Route path="/displayParking" exact component={CarUserData}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
