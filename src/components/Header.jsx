import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import Search from './Search';
import '../Styles/Header.css';

const Header = () => {
  return (
    <div className='header'>
        <Logo />
        <Navbar />
        <Search />
    </div>
  )
};

export default Header