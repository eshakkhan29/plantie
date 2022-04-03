import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../logo.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <NavLink className="link active-link" to="/home">
            Home
          </NavLink>
          <NavLink className="link" to="/review">
            Review
          </NavLink>
          <NavLink className="link" to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink className="link" to="/blogs">
            Blogs
          </NavLink>
          <NavLink className="link" to="/about">
            About
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
