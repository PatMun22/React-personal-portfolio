import React from 'react'
import { FiExternalLink } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import '../Styles/ProjectsDetails.css';
import ELW from '../images/E-learningApp.PNG';
import Cart from '../images/CartApp.PNG';
import CV from '../images/CVApp.PNG';
import Calculator from '../images/AgeClculatorApp.PNG';
import form from '../images/Loginform.PNG';
import notes from '../images/NotesApp.PNG';

const ProjectsDetails = () => {
  return (
    <div className='project-details-container'>
      <div className="project-container">
        <div className="image-container">  
          <img src={ ELW } alt='E-leearning website' />
        </div>
        <div className="project-details">
          <h3 className="project-title">E-Learning Website</h3>
          <div className="project-links">
            <a href='https://github.com/PatMun22/E-Learning-website' target="_blank" rel='noreferrer' className='github-link'>See code<span><AiFillGithub /></span></a>
            <a href='https://patmun22.github.io/E-Learning-website/' target="_blank" rel='noreferrer' className='live-link'><FiExternalLink /> Visit site</a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="image-container">  
          <img src={ notes } alt='note app' />
        </div>
        <div className="project-details">
          <h3 className="project-title">React Note App</h3>
          <div className="project-links">
            <a href='https://github.com/PatMun22/react-note-app' target="_blank" rel='noreferrer' className='github-link'>See code <AiFillGithub /></a>
            <a href='https://chinookz-react-notes-app.netlify.app/' target="_blank" rel='noreferrer' className='live-link'><FiExternalLink /> Visit site</a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="image-container">  
          <img src={ Cart } alt='Cart app' />
        </div>
        <div className="project-details">
          <h3 className="project-title">React Cart App</h3>
          <div className="project-links">
            <a href='https://github.com/PatMun22/React-cart-app' target="_blank" rel='noreferrer' className='github-link'>See code <AiFillGithub /></a>
            <a href='https://first-react-cart-app.netlify.app/' target="_blank" rel='noreferrer' className='live-link'><FiExternalLink />Visit site</a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="image-container">  
          <img src={ form } alt='login/reg form' />
        </div>
        <div className="project-details">
          <h3 className="project-title">Login/Registration Form</h3>
          <div className="project-links">
            <a href='https://github.com/PatMun22/Registration-Login-form-with-JS' target="_blank" rel='noreferrer' className='github-link'>See code <AiFillGithub /></a>
            <a href='https://registration-login-form-with-js.netlify.app/' target="_blank" rel='noreferrer' className='live-link'><FiExternalLink />Visit site</a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="image-container">  
          <img src={ Calculator } alt='age calculator' />
        </div>
        <div className="project-details">
          <h3 className="project-title">Age Calculator</h3>
          <div className="project-links">
            <a href='https://github.com/PatMun22/Age-Calculator' target="_blank" rel='noreferrer' className='github-link'>See code <AiFillGithub /></a>
            <a href='https://patmun22.github.io/Age-Calculator/' target="_blank" rel='noreferrer' className='live-link'><FiExternalLink />Visit site</a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="image-container">  
          <img src={ CV } alt='resume' />
        </div>
        <div className="project-details">
          <h3 className="project-title">Resume App</h3>
          <div className="project-links">
            <a href='https://github.com/PatMun22/CV-using-Sass-and-Js' target="_blank" rel='noreferrer' className='github-link'>See code <AiFillGithub /></a>
            <a href='https://patmun22.github.io/CV-using-Sass-and-Js/' target="_blank" rel='noreferrer' className='live-link'><FiExternalLink />Visit site</a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProjectsDetails;