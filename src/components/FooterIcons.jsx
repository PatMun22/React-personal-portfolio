import React from "react";
import "../Styles/FooterIcons.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const FooterIcons = () => {
  return (
    <article className="footer-icons">
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
    </article>
  );
};

export default FooterIcons;
