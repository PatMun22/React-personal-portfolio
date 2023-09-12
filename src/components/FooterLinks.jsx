import React from "react";
import "../Styles/FooterLinks.css";
import { motion } from "framer-motion";

const FooterLinks = () => {
  return (
    <motion.article
      className="footer-links"
      variants={{
        hidden: { opacity: 0, x: 300 },
        reveal: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate="reveal"
      transition={{
        type: "spring",
        duration: 2,
        bounce: 0.3,
        delay: 0.2,
      }}
    >
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <div className="footer-skills">
        <a href="#skills">Skills</a>
        <div className="footer-specific-skills">
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap</li>
            <li>TailwindCss</li>
            <li>Sass</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React.js</li>
          </ul>
        </div>
      </div>
      <div className="footer-projects">
        <a href="#projects">Projects</a>
        <div className="footer-specific-projects">
          <ul>
            <li>E-Learning Website</li>
            <li>React Note App</li>
            <li>React Cart App</li>
            <li>Login/Registration Form</li>
            <li>Age Calculator</li>
            <li>Resume App</li>
          </ul>
        </div>
      </div>
      <a href="#contacts">Contacts</a>
    </motion.article>
  );
};

export default FooterLinks;
