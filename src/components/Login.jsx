import React, { useState, useEffect } from "react";
import { userLogin } from "../api";

const Login = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await userLogin(username, password);
      localStorage.setItem("token", await result.data.token);
      setToken(result.data.token);
      setLoginStatus(true);
    } catch (error) {
      console.error(error, "Trouble with Login...");
      throw error;
    }
  };
  const onLogOut = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setLoginStatus(false);
    } catch (error) {
      console.error(error, "Trouble in LogOut....");
      throw error;
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoginStatus(true);
    }
  }, [loginStatus]);

  return (
    <div>
        {!loginStatus ? (
            <button onClick={onLogin}>Login</button>) :( <button onClick={onLogOut}>Logout</button>
        )}
      <form onSubmit={Login}>
        <input
          value={username}
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          value={password}
          type="text"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
