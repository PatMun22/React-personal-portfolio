import React from "react";
import "../Styles/ContactHeader.css";
import { motion } from "framer-motion";

const ContactHeader = () => {
  return (
    <article className="contact-header">
      <motion.h3
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
        My <span>Contacts</span>
      </motion.h3>
      <motion.div
        className="right-details"
        variants={{
          hidden: { opacity: 0, x: 100 },
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
        <h2>Get in touch</h2>
        <p>contact me via: </p>
      </motion.div>
    </article>
  );
};

export default ContactHeader;
