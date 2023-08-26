import React from 'react'
import '../Styles/ContactRight.css';

const ContactRight = () => {
  return (
    <div className='contact-right'>
      <div className='right-details'>
        <h2>Get in touch</h2>
        <p>contact me</p>
      </div>
      <form action="" className='contact-form'>
        <input type='text' placeholder='your full name' required/>
        <input type="email" placeholder='your email address' required/>
        <textarea name="" id="" rows="10" placeholder='Enter you message...' required></textarea>
        <button type="submit" className='submit-form'>Submit</button>
      </form>
    </div>
  )
};

export default ContactRight;