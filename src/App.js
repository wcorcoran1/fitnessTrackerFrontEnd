import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Activities from "./components/Activities";
import Routines from "./components/Routines";

const App = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    localToken ? setToken(localToken) : console.log("Trouble setting token...");
  }, [token]);

  return (
    <div className="main_container">
      <NavBar />
      <div className="main_title">Welcome to Fitness Tracker</div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route
          path="/sign-up"
          element={<SignUp token={token} setToken={setToken} />}
        />
        <Route
          path="/Login"
          element={<Login />}
        />
         <Route
          path="/activities"
          element={<Activities />}
        />
        <Route 
          path="/routines"
          element={<Routines />}
        />
      </Routes>
    </div>
  );
};

export default App;
