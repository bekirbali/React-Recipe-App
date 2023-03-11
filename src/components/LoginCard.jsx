import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginCard.module.scss";

const LoginCard = ({ setUser }) => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", e.target.username.value);
    setUser(e.target.username.value);
    navigate(-1);
  };
  return (
    <form onSubmit={submitHandler} className={styles.login}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Username..."
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password..."
      />
      <button className="btn btn-primary" type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginCard;
