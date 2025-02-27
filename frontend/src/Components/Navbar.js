import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar-section">
      {/* Logo */}
      <h1 className="navbar-title">
        <Link to="/">Health <span className="navbar-sign">+</span></Link>
      </h1>

      {/* Center Links */}
      <ul className="navbar-items">
        <li><Link to="/" className="navbar-links">Home</Link></li>
        <li><a href="#services" className="navbar-links">Services</a></li>
        <li><a href="#about" className="navbar-links">About</a></li>
        <li><a href="#reviews" className="navbar-links">Reviews</a></li>
        <li><a href="#doctors" className="navbar-links">Doctors</a></li>
        <li><Link to="/docthea" className="navbar-links">Docthea</Link></li>
      </ul>

      {/* Right Section: Login & AI Assist Button */}
      <div className="navbar-right">
        <Link to="/login" className="navbar-login-btn">Login</Link>
        <Link to="/chatbot" className="navbar-btn">
          <FontAwesomeIcon icon={faRobot} className="ai-icon" />
          <span>AI Assist</span>
        </Link>
      </div>

      {/* Mobile Navigation Button */}
      <div className="mobile-nav">
        <FontAwesomeIcon icon={faBars} onClick={openNav} className="hamb-icon" />
      </div>

      {/* Mobile Navbar */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <FontAwesomeIcon icon={faXmark} onClick={openNav} className="mobile-navbar-close hamb-icon" />
        <ul className="mobile-navbar-links">
          <li><Link to="/" onClick={openNav}>Home</Link></li>
          <li><a href="#services" onClick={openNav}>Services</a></li>
          <li><a href="#about" onClick={openNav}>About</a></li>
          <li><a href="#reviews" onClick={openNav}>Reviews</a></li>
          <li><a href="#doctors" onClick={openNav}>Doctors</a></li>
          <li><a href="/docthea" onClick={openNav}>Docthea</a></li>
          <li><Link to="/login" onClick={openNav}>Login</Link></li>
          <li><Link to="/chatbot" onClick={openNav}>AI Assist</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
