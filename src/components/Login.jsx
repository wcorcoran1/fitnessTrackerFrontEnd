import React, { useState, useEffect } from "react";
import { userLogin } from "../api";

const Login = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);

  const onLogin = async (e) => {
    e.preventDefault();
    const result = await userLogin(username, password);
    localStorage.setItem("token", result.token);
    console.log(localStorage, "Token added!")
    setLoginStatus(true)
    const userObject = result.user
    localStorage.setItem("username", username)
    console.log("User Object from login", userObject.id)
  };

  const onLogOut = async (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    console.log(localStorage, "Token removed!");
    setLoginStatus(false);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoginStatus(true);
    }
  }, [loginStatus]);

  return (
    <div>
      {loginStatus ? (
        <button onClick={onLogOut}>Log Out</button>
      ) : (
        <form
          onSubmit={(e) => {
            onLogin(e);
          }}
        >
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
      )}
    </div>
  );
};

export default Login;
