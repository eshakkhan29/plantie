import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../logo.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header py-5">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/home">
            Home
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/review">
            Review
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/blogs">
            Blogs
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/about">
            About
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
