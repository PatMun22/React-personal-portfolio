import React from 'react'
import '../Styles/Contact.css';
import ContactHeader from './ContactHeader';
import ContactDetails from './ContactDetails';

const Contact = () => {
  return (
    <div className='contacts' id='contacts'>
      <ContactHeader />
      <ContactDetails />  
    </div>
  )
};

export default Contact;