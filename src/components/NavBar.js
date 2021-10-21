import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/"> Home</Link> <Link to="/about"> about</Link>
      <Link to="/discover">discover</Link>
    </div>
  );
}
