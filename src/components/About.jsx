import React from 'react'
import PatUlt from '../images/PatUlt.jpg';
import '../Styles/About.css';

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="about-image-container">
            <img src={PatUlt} alt="about" />
        </div>
        <div className='about-content'>
            <h1 className="about-title">About <span>Me</span></h1>
            <p className='about-details'>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Sint perspiciatis doloremque iusto fuga 
                laudantium voluptates?
            </p>
        </div>
    </section>
  )
};

export default About;