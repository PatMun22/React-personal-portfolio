import React from 'react'
import '../Styles/FooterBottom.css';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const FooterBottom = () => {
  return (
    <div className='footer-bottom'>
      <h3><span><AiOutlineCopyrightCircle className='copyright'/></span>2023. All Rights Reserved. WaphWebs</h3>
    </div>
  )
};

export default FooterBottom;