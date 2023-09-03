import React from "react";
import "../Styles/Footer.css";
import FooterTop from "./FooterTop";
import FooterLinks from "./FooterLinks";
import FooterIcons from "./FooterIcons";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="footer">
      <FooterTop />
      <FooterLinks />
      <FooterIcons />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
