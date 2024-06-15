import React from "react";

import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #E4E5E8",
        borderRadius: "8px",
        padding: "5px",
        backgroundColor: "#EDEDED",
        position: "relative",
        width: "100%",
        marginTop: "2rem",
        height:"80px"
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
        <button className="business-button"> Search </button>
    </div>
  );
};

export default SearchBar;
