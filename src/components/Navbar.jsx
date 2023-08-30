import React, { useState } from 'react'
import '../Styles/Navbar.css';
import { linkDatas } from '../Assets/data';

const Navbar = () => {

  const [activeLink, setActiveLink] = useState('#home');

  return (
    <div className='navbar'>
      <ul>
        {
          linkDatas && linkDatas.map((linkData) => {
            return (
              <li>
                <a 
                  href='#{linkData.linkID}'  
                  className={activeLink === '#{linkData.linkID}' ? 'active' : ''} 
                  onClick={() => setActiveLink('#{linkData.linkID}')}
                >
                  <span>{linkData.linkName}</span>
                  <linkData.linkIcon className='link_icon' />
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