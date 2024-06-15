import React from "react";
import "./header.desktop.css";

import { AiOutlineSearch } from "react-icons/ai";

import { Link } from "react-router-dom";

import {Container} from "react-bootstrap"

const Header = () => {
  return (
    <header className="header">
      <Container fluid>
        <div className="header-container">
          <div className="logo">
            <img src="/mosouq-logo.png" alt="MOSOUQ" />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #ccc",
              borderRadius: "42.5px",
              padding: "5px",
              backgroundColor: "#EDEDED",
              position: "relative",
              width: "40%",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <AiOutlineSearch
              style={{
                position: "absolute",
                left: "15px",
                color: "#0056B3",
                background: "#F9F9F9",
                height: "22px",
                width: "22.02px",
                color: "#0066FF",
                backgroundColor: "#EDEDED",
              }}
            />
            <input
              type="text"
              placeholder="Search"
              style={{
                border: "none",
                outline: "none",
                padding: "10px 15px",
                flex: 1,
                backgroundColor: "transparent",
                marginLeft: "30px",
              }}
            />
          </div>

          <nav className="nav-links">
            <Link to="/">
              Home
            </Link>
            <Link to="categories">
              Categories
            </Link>

            <Link to='about'>
              About
            </Link>
            <Link to="blog">
              Blogs
            </Link>
            <Link to="login">
              Login
            </Link>
          </nav>
          <div className="business-button-header">
            <button>For Business</button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
