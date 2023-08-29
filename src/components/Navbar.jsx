import React, { useState } from 'react'
import '../Styles/Navbar.css';
import { GoHome } from 'react-icons/go';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineCopy } from 'react-icons/ai';
import { AiOutlineMessage } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';

const Navbar = () => {

  const [activeLink, setActiveLink] = useState('#home');

  return (
    <div className='navbar'>
      <ul>
        <li>
          <a 
            href='#home'  
            className={activeLink === '#home' ? 'active' : ''} 
            onClick={() => setActiveLink('#home')}
          > 
            <span>Home</span> <GoHome className='nav-icon'/>
          </a>
        </li>
        <li>
          <a 
            href='#about' 
            className={activeLink === '#about' ? 'active' : ''} 
            onClick={() => setActiveLink('#about')}
          >
            <span>About</span> <AiOutlineUser className='nav-icon'/>
          </a>
        </li>
        <li>
          <a 
          href='#skills' 
          className={activeLink === '#skills' ? 'active' : ''} 
          onClick={() => setActiveLink('#skills')}
          >
            <span>Skills</span> <BsCodeSlash className='nav-icon'/>
          </a>
        </li>
        <li>
          <a 
            href='#projects' 
            className={activeLink === '#projects' ? 'active' : ''} 
            onClick={() => setActiveLink('#projects')}
          >
            <span>Projects</span> <AiOutlineCopy className='nav-icon'/>
          </a>
        </li>
        <li>
          <a 
            href='#contacts' 
            className={activeLink === '#contacts' ? 'active' : ''} 
            onClick={() => setActiveLink('#contacts')}
          >
            <span>Contacts</span> <AiOutlineMessage className='nav-icon'/>
          </a>
        </li>
      </ul>
    </div>
  )
};

export default Navbar;