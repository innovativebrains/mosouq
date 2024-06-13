import React from "react";

import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "42.5px",
        padding: "5px",
        backgroundColor: "#EDEDED",
        position: "relative",
        width: "100%",
        marginTop: "2rem",
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
          color: "#9D173F",
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
      <div className="business-button">
        <button> Search </button>
      </div>
    </div>
  );
};

export default SearchBar;
