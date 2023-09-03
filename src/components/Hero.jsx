import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import CV from "../Assets/My Curriculum Vitaef.pdf";
import "../Styles/Hero.css";
import PatUlt from "../images/PatUlt.jpg";

const Hero = () => {
  return (
    <section className="hero-container" id="home">
      <article className="hero-left">
        <div className="hero-left-text">
          <h1>
            Hello, <span>I'm</span>
            <span>Patrick W. Munuku</span>
          </h1>
          <h3>A Front-End Developer/Electrical Engineer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            pariatur minima fugit ab nemo repudiandae illum nihil soluta
            reiciendis unde eum labore, non tempore quasi asperiores modi error
            sequi exercitationem?
          </p>
        </div>
        <div className="hero-left-buttons">
          <div className="button-div">
            <button className="hero-btn" type="button">
              <a href="#contacts">Let's Talk</a>
            </button>
            <button className="hero-btn" type="button">
              <a href={CV} download>
                <AiOutlineDownload className="down-icon" />
                CV
              </a>
            </button>
          </div>
          <div className="icons-div">
            <p>Check out my: </p>
            <a
              href="https://github.com/PatMun22"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="social-icons" />
            </a>
            <a
              href="https://www.linkedin.com/in/patrick-munuku-336259133/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="social-icons" />
            </a>
            <a
              href="https://twitter.com/MunukuWafula"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillTwitterCircle className="social-icons" />
            </a>
            <a
              href="https://www.instagram.com/pa_chinookz/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram className="social-icons" />
            </a>
          </div>
        </div>
      </article>
      <article className="hero-right">
        <div className="image-container">
          <img src={PatUlt} alt="profile" />
        </div>
      </article>
      <div className="overlay one"></div>
      <div className="overlay two"></div>
    </section>
  );
};

export default Hero;
