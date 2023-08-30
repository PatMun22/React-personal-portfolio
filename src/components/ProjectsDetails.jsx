import React from 'react'
import { projects } from '../Assets/data';
import '../Styles/ProjectsDetails.css';


const ProjectsDetails = () => {
  return (
    <div className="project-details-container">
      {
        projects && projects.map((project, id) => {
          return (
            <div className="project-container" key={id}>
              <div className="image-container">  
                <img src={ project.imageLink } alt={project.projectName} />
              </div>
              <div className="project-details">
                <h3 className="project-title">{project.projectName}</h3>
                <div className="project-links">
                  <a 
                    href='#{project.github}' 
                    target="_blank" 
                    rel='noreferrer' 
                    className='github-link'
                  >
                    See code<span>{project.githubIcon}</span>
                  </a>
                  <a 
                    href={project.live}
                    target="_blank" 
                    rel='noreferrer' 
                    className='live-link'
                  >
                    <span>{project.liveLink}</span>Visit site
                  </a>
                </div>
              </div>
              <div className='tech-stack'>
              {
                projects.techStacks && projects.techStacks.map((techStack) => {
                  return (
                    <div className='btn'>{techStack}</div>
                  )
                  })
              }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ProjectsDetails;