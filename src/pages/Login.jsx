import React from "react";
import { useNavigate } from "react-router-dom";
import LoginCard from "../components/LoginCard";

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", e.target.username.value);
    setUser(e.target.username.value);
    navigate(-1);
  };
  return <LoginCard setUser={setUser} />;
};

export default Login;
