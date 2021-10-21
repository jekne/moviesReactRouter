import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink
        activeStyle={{ backgroundColor: "red", fontWeight: "bold" }}
        to="/"
      >
        {" "}
        HOME
      </NavLink>
      <NavLink
        activeStyle={{ backgroundColor: "yellow", fontWeight: "bold" }}
        to="/about"
      >
        {" "}
        ABOUT
      </NavLink>
      <NavLink
        activeStyle={{ backgroundColor: "green", fontWeight: "bold" }}
        to="/discover"
      >
        DISCOVER
      </NavLink>
      <NavLink to="/discover"></NavLink>
    </div>
  );
}
