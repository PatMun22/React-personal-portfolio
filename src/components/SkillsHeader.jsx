import React from "react";
import "../Styles/SkillsHeader.css";
import { motion, AnimatePresence } from "framer-motion";
import { headTextAnimation, slideAnimation } from "../Assets/motion";

const SkillsHeader = () => {
  return (
    <AnimatePresence>
      <article className="skills-details">
        <motion.h1 className="skills-title" {...headTextAnimation}>
          My <span>Skills</span>
        </motion.h1>
        <motion.p {...slideAnimation("down")}>
          I am proficient in these skills
        </motion.p>
      </article>
    </AnimatePresence>
  );
};

export default SkillsHeader;
