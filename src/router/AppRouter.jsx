import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import Details from "../pages/Details";

const AppRouter = () => {
  const [user, setUser] = useState(sessionStorage.getItem("user") || false);
  return (
    <BrowserRouter>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route element={<PrivateRouter user={user} />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/details/:uri" element={<Details />} />

        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
