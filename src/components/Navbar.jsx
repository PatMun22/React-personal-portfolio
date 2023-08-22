import React from 'react'
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li>
          <a href='#home'  className='active'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#skills'>Skills</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#contact'>Contacts</a>
        </li>
      </ul>
    </div>
  )
};

export default Navbar;