import React from 'react';
import '../Styles/ContactDetails.css';
import ContacLeft from './ContacLeft';
import ContactRight from './ContactRight';

const ContactDetails = () => {
  return (
    <div className='contact-details'>
        <ContacLeft />
        <ContactRight />
    </div>
  )
};

export default ContactDetails;