import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import "../Styles/ContactLeft.css";

const ContacLeft = () => {
  return (
    <article className="contact-left">
      <article className="left-contact-container">
        <BiLogoGmail className="contact-icon" />
        <h1>Email Message</h1>
        <a
          href="mailto:wafulapatrick6@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Send a message
        </a>
      </article>
      <article className="left-contact-container">
        <IoLogoWhatsapp className="contact-icon" />
        <h1>WhatsApp</h1>
        <a href="https://wa.me/254719710778" target="_blank" rel="noreferrer">
          Send a message
        </a>
      </article>
    </article>
  );
};

export default ContacLeft;
