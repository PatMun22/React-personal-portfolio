import React, { useRef } from 'react'
import '../Styles/ContactRight.css';
import emailjs from '@emailjs/browser';

const ContactRight = () => {
  const form = useRef();

  const sendEmail = (e) => {

    
    e.preventDefault();

    emailjs.sendForm('service_8w03d2v', 'template_lmg8xl8', form.current, 'zzbwKXgAMD_n3wcvf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact-right'>
      <form className='contact-form' ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='your full name' required/>
        <input type="email" name='email' placeholder='your email address' required/>
        <textarea name="message" id="textarea-message" rows="10" placeholder='Enter your message...' required></textarea>
        <button type="submit" className='submit-form'>Send Message</button>
      </form>
    </div>
  )
};

export default ContactRight;