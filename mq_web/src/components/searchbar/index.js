import React from "react";

import { AiOutlineSearch } from "react-icons/ai";

import "./index.css"

const SearchBar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #E4E5E8",
        borderRadius: "8px",
        padding: "5px",
        backgroundColor: "#FFFFFF",
        position: "relative",
        marginTop: "2rem",
        width: "546px",
        height:"80px",
        padding:"12px",
        gap: "12px"
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
          backgroundColor: "#FFFFFF",
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
        <button className="search-button"> Search </button>
    </div>
  );
};

export default SearchBar;
