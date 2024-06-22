import React, { useState } from "react";
import "./header.desktop.css";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/mosouq-logo.png" alt="MOSOUQ" style={{ height: "55px", width: "191px" }} />
        </div>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/categories" onClick={toggleMenu}>
            Categories
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/error" onClick={toggleMenu}>
            Blogs
          </Link>
          <Link to="/login" onClick={toggleMenu}>
            Login
          </Link>
          <button className="business-button-header">For Business</button>
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
