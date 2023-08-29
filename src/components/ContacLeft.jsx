import React from 'react'
import { BiLogoGmail } from 'react-icons/bi';
import { IoLogoWhatsapp } from 'react-icons/io';
import '../Styles/ContactLeft.css';

const ContacLeft = () => {
  return (
    <div className='contact-left'>
        <div className='left-contact-container'>
          <BiLogoGmail className='contact-icon'/>
          <h1>Email</h1>
          <p>pwafula62@gmail.com</p>
          <a href='mailto:pwafula62@gmail.com' target='_blank' rel='noreferrer'>Send a message</a>
        </div>
        <div className='left-contact-container'>
          <IoLogoWhatsapp className='contact-icon'/>
          <h1>WhatsApp</h1>
          <p>+254 719710778</p>
          <a href='http://api.whatsapp.com/send?phone=+254719710778' target='_blank' rel='noreferrer'>Send a message</a>
        </div>
    </div>
  )
};

export default ContacLeft;