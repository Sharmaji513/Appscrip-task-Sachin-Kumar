// Header.js
import React, { useState } from "react";
import "./Header.css"; // Importing the CSS for styling
import logo from '../../assets/Images/Logo.png'
import { FaShoppingCart, FaUser, FaHeart, FaSearch, FaBars, FaTimes } from "react-icons/fa"; // Importing icons

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="top-bar">
      {isMenuOpen ? (
            <FaTimes className="hamburger-menu" onClick={toggleMenu} />
          ) : (
            <FaBars className="hamburger-menu" onClick={toggleMenu} />
          )}
        <div className="logo">
        
          <img
            src={logo}
            alt="Logo"
          />
        </div>
        <div className="site-name">
          <h1>Appscrip</h1>
        </div>
        <div className="right-side">
          <FaSearch className="icon" />
          <FaHeart className="icon" />
          <FaShoppingCart className="icon" />
          <FaUser className="icon" />
          <select className="language-selector">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
          
        </div>
      </div>
      <nav className={`navigation navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>Shop</li>
          <li>Stories</li>
          <li>Skills</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
