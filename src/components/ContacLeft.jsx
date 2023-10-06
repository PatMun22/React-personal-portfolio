import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import "../Styles/ContactLeft.css";
import { motion, AnimatePresence } from "framer-motion";
import { slideAnimation } from "../Assets/motion";

const ContacLeft = () => {
  return (
    <AnimatePresence>
      <article className="contact-left">
        <motion.article
          className="left-contact-container"
          {...slideAnimation("left")}
        >
          <BiLogoGmail className="contact-icon" />
          <h1>Email Message</h1>
          <a
            href="mailto:wafulapatrick6@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Send a message
          </a>
        </motion.article>
        <motion.article
          className="left-contact-container"
          {...slideAnimation("right")}
        >
          <IoLogoWhatsapp className="contact-icon" />
          <h1>WhatsApp</h1>
          <a href="https://wa.me/254719710778" target="_blank" rel="noreferrer">
            Send a message
          </a>
        </motion.article>
      </article>
    </AnimatePresence>
  );
};

export default ContacLeft;
