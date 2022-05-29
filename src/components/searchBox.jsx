import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="row g-0">
      <input
        type="text"
        className="form-control my-3"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBox;
