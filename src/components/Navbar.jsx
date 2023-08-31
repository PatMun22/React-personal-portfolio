import React, { useState } from 'react'
import '../Styles/Navbar.css';
import { linkDatas } from '../Assets/data';
import { GoHome } from 'react-icons/go';
import { AiOutlineUser, AiOutlineCopy, AiOutlineMessage } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';

const icons = [
  GoHome,
  AiOutlineUser,
  BsCodeSlash, 
  AiOutlineCopy, 
  AiOutlineMessage, 
];

const Navbar = () => {

  const [activeLink, setActiveLink] = useState('#home');

  return (
    <div className='navbar'>
      <ul>
        {
          linkDatas && linkDatas.map((linkData, idx) => {

            const Icon = icons[idx];
            return (
              <li>
                <a 
                  href='#{linkData.linkID}'  
                  className={activeLink === '#{linkData.linkID}' ? 'active' : ''} 
                  onClick={() => setActiveLink('#{linkData.linkID}')}
                >
                  <span>{linkData.linkName}</span>
                  <Icon className='nav-icon' />
                </a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
};

export default Navbar;