import React from 'react'
import '../Styles/ContactHeader.css';


const ContactHeader = () => {
  return (
    <div className='contact-header'>
        <h3>My <span>Contacts</span></h3>
        <div className='right-details'>
          <h2>Get in touch</h2>
          <p>contact me via: </p>
        </div>
    </div>
  )
};

export default ContactHeader;