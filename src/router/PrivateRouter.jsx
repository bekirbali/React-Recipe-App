import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Login from "../pages/Login";
const PrivateRouter = () => {
  const user = sessionStorage.getItem("user") || false;
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
