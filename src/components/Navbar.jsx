import React, { useState } from "react";
import "../Styles/Navbar.css";
import { linkDatas } from "../Assets/data";
import { GoHome } from "react-icons/go";
import { AiOutlineUser, AiOutlineCopy, AiOutlineMessage } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";

const icons = [
  GoHome,
  AiOutlineUser,
  BsCodeSlash,
  AiOutlineCopy,
  AiOutlineMessage,
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <div className="navbar">
      <ul>
        {linkDatas.map((linkData, index) => {
          const Icon = icons[index];
          return (
            <li key={index}>
              <a
                href={linkData.linkUrl}
                className={activeLink === index && "active"}
                onClick={() => setActiveLink(index)}
              >
                <span>{linkData.linkName}</span>
                <Icon className="nav-icon" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
