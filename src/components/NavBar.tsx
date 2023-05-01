import React from "react";

import "./NavBar.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const getClass = (isActive: boolean) => (isActive ? "active" : "");

  return (
    <nav className="navbar">
      <NavLink className={({ isActive }) => getClass(isActive)} to="/">
        Home
      </NavLink>
      <NavLink className={({ isActive }) => getClass(isActive)} to="/education">
        Education
      </NavLink>
      <NavLink
        className={({ isActive }) => getClass(isActive)}
        to="/experience"
      >
        Experience
      </NavLink>
      <NavLink className={({ isActive }) => getClass(isActive)} to="/projects">
        Projects
      </NavLink>
    </nav>
  );
};

export default NavBar;
