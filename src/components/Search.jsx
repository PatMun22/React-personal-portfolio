import React, { useState } from "react";
import "../Styles/Search.css";
import { BsSearch } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Search = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSearch = (searchTerm) => {};

  return (
    <div className="search">
      <form>
        <BsSearch className="search-icon" />
        <input
          type="text"
          value={value}
          placeholder="Search..."
          onChange={onChange}
        />
        <button className="btn" type="button" onClick={onSearch}>
          <BsFillArrowRightCircleFill className="btn-icon" />
        </button>
      </form>
    </div>
  );
};

export default Search;
