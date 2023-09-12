import React from "react";
import "../Styles/ProjectsHeader.css";
import { motion } from "framer-motion";

const ProjectsHeader = () => {
  return (
    <article className="projects-header-container">
      <motion.h1
        className="projects-title"
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
        My <span>Projects</span>
      </motion.h1>
      <motion.p
        className="projects-intro"
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
        Check out some of my recent projects
      </motion.p>
    </article>
  );
};

export default ProjectsHeader;
