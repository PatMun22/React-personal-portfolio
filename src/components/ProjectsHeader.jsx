import React from "react";
import "../Styles/ProjectsHeader.css";
import { motion, AnimatePresence } from "framer-motion";
import { slideAnimation, headTextAnimation } from "../Assets/motion";

const ProjectsHeader = () => {
  return (
    <AnimatePresence>
      <article className="projects-header-container">
        <motion.h1 className="projects-title" {...headTextAnimation}>
          My <span>Projects</span>
        </motion.h1>
        <motion.p className="projects-intro" {...slideAnimation("down")}>
          Check out some of my recent projects
        </motion.p>
      </article>
    </AnimatePresence>
  );
};

export default ProjectsHeader;
