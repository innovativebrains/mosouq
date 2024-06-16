import React from "react";
import "./header.desktop.css";

import { AiOutlineSearch } from "react-icons/ai";

import { Link } from "react-router-dom";

import {Container} from "react-bootstrap"

const Header = () => {
  return (
    <header className="header">
        <div className="header-container">
          <div className="logo">
            <img src="/mosouq-logo.png" alt="MOSOUQ" style={{height:"55px", width:"191px"}} />
          </div>

          <div>test</div>
          <nav className="nav-links">
            <Link to="/">
              Home
            </Link>
            <Link to="categories">
              Categories
            </Link>

            <Link to='/about'>
              About
            </Link>
            <Link to="blog">
              Blogs
            </Link>
            <Link to="login">
              Login
            </Link>
          </nav>
          
            <button className="business-button-header">For Business</button>
          
        </div>
    </header>
  );
};

export default Header;
