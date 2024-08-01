import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`navbar ${isActive ? "active" : ""}`}>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={toggleMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
