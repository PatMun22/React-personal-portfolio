import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Search from "./Search";
import "../Styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navbar />
      <Search />
    </header>
  );
};

export default Header;
