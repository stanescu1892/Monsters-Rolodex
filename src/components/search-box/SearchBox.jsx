import React from "react";
import "./SearchBoxCss.css";

function SearchBox({ placeholder, handleChange }) {
  return (
    <div>
      <input
        type="search"
        className="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;
