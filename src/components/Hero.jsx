import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import CV from "../Assets/My Curriculum Vitaef.pdf";
import "../Styles/Hero.css";
import PatUlt from "../images/PatUlt.jpg";
import { motion, AnimatePresence } from "framer-motion";
import {
  //headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../Assets/motion";

const Hero = () => {
  return (
    <AnimatePresence>
      <section className="hero-container" id="home">
        <motion.article
          className="hero-left"
          {...slideAnimation("down")}
          {...headContentAnimation}
        >
          <div className="hero-left-text">
            <motion.h1>
              Hello, <span>I'm</span>
              <span>Patrick W. Munuku</span>
            </motion.h1>
            <motion.h3>A Front-End Developer</motion.h3>
            <motion.p>
              I pride myself in possessing the ability to convert ideas and
              imaginations into beautiful, functioning, interactive, scalable
              and user-friendly web and web application user interfaces.
            </motion.p>
          </div>
          <div className="hero-left-buttons">
            <motion.div className="button-div">
              <motion.button className="hero-btn" type="button">
                <a href="#contacts">Let's Talk</a>
              </motion.button>
              <motion.button className="hero-btn" type="button">
                <a href={CV} download>
                  <AiOutlineDownload className="down-icon" />
                  CV
                </a>
              </motion.button>
            </motion.div>
            <motion.div className="icons-div">
              <p>Check out my: </p>
              <div className="icons-container">
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
            </motion.div>
          </div>
        </motion.article>
        <motion.article
          className="hero-right"
          {...slideAnimation("up")}
          {...headTextAnimation}
        >
          <div className="image-container">
            <img src={PatUlt} alt="profile" />
          </div>
        </motion.article>
        <div className="overlay one"></div>
        <div className="overlay two"></div>
      </section>
    </AnimatePresence>
  );
};

export default Hero;
