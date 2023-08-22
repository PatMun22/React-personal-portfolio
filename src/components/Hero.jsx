import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import '../Styles/Hero.css';

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero-left'>
            <div className='hero-left-text'>
                <h1>Hello, <span>I'm</span><span>Patrick W. Munuku</span></h1>
                <h3>A Front-End Developer/Electrical Engineer</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Architecto pariatur minima fugit ab nemo repudiandae illum 
                    nihil soluta reiciendis unde eum labore, non tempore quasi 
                    asperiores modi error sequi exercitationem?
                </p>
            </div>
            <div className='hero-left-buttons'>
                <button className='hero-btn' type='button'>Let's Talk</button>
                <div className='icons-div'>
                    <p>Check out my: </p>
                    <a href='https://github.com/PatMun22' target='_blank' rel='noreferrer'><AiFillGithub className='social-icons'/></a>
                    <a href='https://www.linkedin.com/in/patrick-munuku-336259133/' target='_blank' rel='noreferrer'><AiFillLinkedin className='social-icons'/></a>
                    <a href='https://twitter.com/MunukuWafula' target='_blank' rel='noreferrer'><AiFillTwitterCircle className='social-icons'/></a>
                    <a href='https://www.instagram.com/pa_chinookz/' target='_blank' rel='noreferrer'><AiFillInstagram className='social-icons'/></a>
                </div>
            </div>
        </div>
        <div className='hero-right'>
            <div className='image-container'>
            </div>
        </div>
    </div>
  )
};

export default Hero;