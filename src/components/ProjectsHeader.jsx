import React from "react";
import "../Styles/ProjectsHeader.css";

const ProjectsHeader = () => {
  return (
    <article className="projects-header-container">
      <h1 className="projects-title">
        My <span>Projects</span>
      </h1>
      <p className="projects-intro">Check out some of my recent projects</p>
    </article>
  );
};

export default ProjectsHeader;
