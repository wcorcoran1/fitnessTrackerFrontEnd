import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

const App = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
    } else {
      console.log("Trouble setting token...");
    }
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
      </Routes>
    </div>
  );
};

export default App;
