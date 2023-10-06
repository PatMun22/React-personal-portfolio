import React from "react";
import "../Styles/ContactHeader.css";
import { motion, AnimatePresence } from "framer-motion";
import { slideAnimation, headTextAnimation } from "../Assets/motion";

const ContactHeader = () => {
  return (
    <AnimatePresence>
      <article className="contact-header">
        <motion.h3 {...headTextAnimation}>
          My <span>Contacts</span>
        </motion.h3>
        <motion.div className="right-details" {...slideAnimation("down")}>
          <h2>Get in touch</h2>
          <p>contact me via: </p>
        </motion.div>
      </article>
    </AnimatePresence>
  );
};

export default ContactHeader;
