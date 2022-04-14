import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  NavBar,
  Home,
  SignUp,
  Login,
  Activities,
  Routines,
  MyRoutines,
} from "./components";
import { getRoutines } from "./api";
const App = () => {
  const [token, setToken] = useState("");
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const fetchRoutines = async () => {
      const data = await getRoutines();
      setRoutines(data);
    };
    fetchRoutines();
  }, [setRoutines]);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    localToken ? setToken(localToken) : console.log("Trouble setting token...");
  }, [token]);

  return (
    <div className="main_container">
      <NavBar />
      <div className="main_title">Welcome to Fitness Tracker</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/sign-up"
          element={<SignUp token={token} setToken={setToken} />}
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/activities" element={<Activities />} />
        <Route
          path="/routines"
          element={<Routines routines={routines} setRoutines={setRoutines} />}
        />
        <Route
          path="/myRoutines"
          element={
            <MyRoutines
              routines={routines}
              setRoutines={setRoutines}
              token={token}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
