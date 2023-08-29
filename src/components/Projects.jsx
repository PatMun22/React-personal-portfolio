import React from 'react'
import ProjectsHeader from './ProjectsHeader';
import ProjectsDetails from './ProjectsDetails';
import '../Styles/Projects.css';

const Projects = () => {
  return (
    <section className='projects-container' id='projects'>
        <ProjectsHeader />
        <ProjectsDetails />
    </section>
  )
};

export default Projects;