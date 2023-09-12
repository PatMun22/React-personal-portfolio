import React from "react";
import "../Styles/FooterTop.css";
import { motion } from "framer-motion";

const FooterTop = () => {
  return (
    <motion.article
      className="footer-top"
      variants={{
        hidden: { opacity: 0, y: -100 },
        reveal: { opacity: 1, y: 0 },
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
      <h1 className="footer-initials">PMW</h1>
      <h2 className="footer-head">Portfolio</h2>
    </motion.article>
  );
};

export default FooterTop;
