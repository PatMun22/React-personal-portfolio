import React from "react";
import "../Styles/SkillsHeader.css";
import { motion } from "framer-motion";

const SkillsHeader = () => {
  return (
    <article className="skills-details">
      <motion.h1
        className="skills-title"
        variants={{
          hidden: { opacity: 0, y: 100 },
          reveal: { opacity: 1, y: 0 },
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
        My <span>Skills</span>
      </motion.h1>
      <motion.p
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
          delay: 0.5,
        }}
      >
        I am proficient in these skills
      </motion.p>
    </article>
  );
};

export default SkillsHeader;
