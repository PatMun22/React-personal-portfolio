import React from 'react'
import '../Styles/Footer.css';
import FooterTop from './FooterTop';
import FooterLinks from './FooterLinks';
import FooterIcons from './FooterIcons';
import FooterBottom from './FooterBottom';

const Footer = () => {
  return (
    <section className='footer'>
        <FooterTop />
        <FooterLinks />
        <FooterIcons />
        <FooterBottom />
    </section>
  )
};

export default Footer;