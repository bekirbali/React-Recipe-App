import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import restaurantLogo from "../assets/restaurantlogo.png";

const Navbar = ({ user, setUser }) => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img width="150px" src={restaurantLogo} alt="" />
        </NavLink>

        <h1>Taste Avenue</h1>
      </div>
      <ul className={styles.list}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive && "#b3fabc",
                border: isActive && "1px solid #0d851b",
              };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive && "#b3fabc",
                border: isActive && "1px solid #0d851b",
              };
            }}
          >
            About
          </NavLink>
        </li>
        {!user ? (
          <li>
            <NavLink
              to="/login"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive && "#b3fabc",
                  border: isActive && "1px solid #0d851b",
                };
              }}
            >
              Login
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink
              to="/login"
              onClick={() => {
                sessionStorage.clear();
                setUser(false);
              }}
            >
              Logout
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
