import React, { useState } from "react";
import "../Styles/Search.css";
import { BsSearch } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { linkDatas } from "../Assets/data";
import { projects } from "../Assets/data";
import { skills } from "../Assets/data";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const keys = ["linkName", "projectName", "skillName"];

  // console.log(projects[0]);

  const search = (data) => {
    data.filter(
      (item) =>
        item.linkName.toLowerCase().includes(searchText.toLowerCase()) ||
        item.projectName.toLowerCase().includes(searchText.toLowerCase()) ||
        item.skillName.toLowerCase().includes(searchText.toLowerCase())
    );
  };
  console.log(
    linkDatas.filter((linkData) =>
      linkData.linkName.toLowerCase().includes("home")
    ) &&
      projects.filter((project) =>
        project.projectName.toLowerCase().includes("note")
      ) &&
      skills.filter((skill) => skill.skillName.toLowerCase().includes("boot"))
  );
  // const onSearch = (searchTerm) => {
  //   //const value = {};
  // };
  return (
    <article className="search">
      <form>
        <BsSearch className="search-icon" />
        <input
          type="text"
          value={searchText}
          placeholder="Search..."
          onChange={handleSearchText}
        />
        <button className="btn" type="button">
          <BsFillArrowRightCircleFill className="btn-icon" />
        </button>
      </form>
    </article>
  );
};

export default Search;
