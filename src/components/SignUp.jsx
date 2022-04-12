import React, { useState } from "react";
import { registerUser } from "../api";

const SignUp = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = async(e) => {
    e.preventDefault();
    const result = await registerUser(username, password);
    console.log(result)
    localStorage.setItem("token", result.token);
    const myToken = result.token;
    setToken(myToken);
  };

  return (
    <div>
      <form onSubmit={onSignUp}>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
