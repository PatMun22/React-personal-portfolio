import React from "react";
import "../Styles/FooterIcons.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { motion } from "framer-motion";

const FooterIcons = () => {
  return (
    <motion.article
      className="footer-icons"
      variants={{
        hidden: { opacity: 0, x: -100 },
        reveal: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate="reveal"
      transition={{
        type: "spring",
        duration: 2,
        bounce: 0.3,
        delay: 0.5,
      }}
    >
      <a href="https://github.com/PatMun22" target="_blank" rel="noreferrer">
        <AiFillGithub className="social-icons" />
      </a>
      <a
        href="https://www.linkedin.com/in/patrick-munuku-336259133/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin className="social-icons" />
      </a>
      <a
        href="https://twitter.com/MunukuWafula"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillTwitterCircle className="social-icons" />
      </a>
      <a
        href="https://www.instagram.com/pa_chinookz/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillInstagram className="social-icons" />
      </a>
    </motion.article>
  );
};

export default FooterIcons;
