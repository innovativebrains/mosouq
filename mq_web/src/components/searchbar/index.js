import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./index.css";

const SearchBar = () => {
  return (
    <div
      className="search-bar"
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #E4E5E8",
        borderRadius: "8px",
        padding: "12px",
        backgroundColor: "#FFFFFF",
        position: "relative",
        marginTop: "2rem",
        width: "100%", // Changed to 100% for responsiveness
        maxWidth: "546px",
        height: "auto", // Changed to auto for responsiveness
        gap: "12px"
      }}
    >
      <AiOutlineSearch
        style={{
          position: "absolute",
          left: "15px",
          color: "#0066FF",
          backgroundColor: "#FFFFFF",
          height: "22px",
          width: "22px",
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
      <button className="search-button" style={{ flexShrink: 0 }}> Search </button>
    </div>
  );
};

export default SearchBar;
