import React, { useState } from 'react'
import '../Styles/Navbar.css';

const Navbar = () => {

  const [activeLink, setActiveLink] = useState('#home');

  return (
    <div className='navbar'>
      <ul>
        <li>
          <a href='#home'  className={activeLink === '#home' ? 'active' : ''} onClick={() => setActiveLink('#home')}>Home</a>
        </li>
        <li>
          <a href='#about' className={activeLink === '#about' ? 'active' : ''} onClick={() => setActiveLink('#about')}>About</a>
        </li>
        <li>
          <a href='#skills' className={activeLink === '#skills' ? 'active' : ''} onClick={() => setActiveLink('#skills')}>Skills</a>
        </li>
        <li>
          <a href='#projects' className={activeLink === '#projects' ? 'active' : ''} onClick={() => setActiveLink('#projects')}>Projects</a>
        </li>
        <li>
          <a href='#contacts' className={activeLink === '#contacts' ? 'active' : ''} onClick={() => setActiveLink('#contacts')}>Contacts</a>
        </li>
      </ul>
    </div>
  )
};

export default Navbar;