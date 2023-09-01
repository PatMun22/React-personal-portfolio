import React from "react";
import { projects } from "../Assets/data";
import "../Styles/ProjectsDetails.css";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import "../Styles/SkillsIconsDetails.css";

const ProjectsDetails = () => {
  return (
    <div className="project-details-container">
      {projects.map((project, id) => {
        return (
          <div className="project-container" key={id}>
            <div className="image-container">
              <img src={project.imageLink} alt={project.projectName} />
            </div>
            <div className="project-details">
              <h3 className="project-title">{project.projectName}</h3>
              <div className="project-links">
                <a
                  href="#{project.github}"
                  target="_blank"
                  rel="noreferrer"
                  className="github-link"
                >
                  See code
                  <span>
                    <AiFillGithub />
                  </span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="live-link"
                >
                  <span>
                    <FiExternalLink />
                  </span>
                  Visit site
                </a>
              </div>
            </div>
            <div className="tech-stack">
              {project.techStacks.map((techstack, i) => {
                return (
                  <div className="btn" key={i}>
                    {techstack}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsDetails;
