import React from 'react'
import ProjectsHeader from './ProjectsHeader';
import ProjectsDetails from './ProjectsDetails';
import '../Styles/Projects.css';

const Projects = () => {
  return (
    <div className='projects-container' id='projects'>
        <ProjectsHeader />
        <ProjectsDetails />
    </div>
  )
};

export default Projects;