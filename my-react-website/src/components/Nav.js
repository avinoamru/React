import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="navbar">
      <Link style={{ textDecoration: "none" }} to="/">
        <h3 id="logo">Logo</h3>
      </Link>

      <ul id="links-list">
        <Link style={{ textDecoration: "none" }} to="/tutorial">
          <li className="nav-links">Tutorial</li>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/contact">
          <li className="nav-links">Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
