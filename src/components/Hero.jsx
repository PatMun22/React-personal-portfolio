import React, { useEfect, useRef } from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import CV from "../Assets/My Curriculum Vitaef.pdf";
import "../Styles/Hero.css";
import PatUlt from "../images/PatUlt.jpg";
import { useAnimation, useInView, motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-container" id="home">
      <motion.article className="hero-left">
        <div className="hero-left-text">
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 100 },
              reveal: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="reveal"
            transition={{
              type: "spring",
              duration: 2,
              bounce: 0.3,
              delay: 0.1,
            }}
          >
            Hello, <span>I'm</span>
            <span>Patrick W. Munuku</span>
          </motion.h1>
          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 100 },
              reveal: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="reveal"
            transition={{
              type: "spring",
              duration: 2,
              bounce: 0.3,
              delay: 0.2,
            }}
          >
            A Front-End Developer/Electrical Engineer
          </motion.h3>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 100 },
              reveal: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="reveal"
            transition={{
              type: "spring",
              duration: 2,
              bounce: 0.3,
              delay: 0.3,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            pariatur minima fugit ab nemo repudiandae illum nihil soluta
            reiciendis unde eum labore, non tempore quasi asperiores modi error
            sequi exercitationem?
          </motion.p>
        </div>
        <div className="hero-left-buttons">
          <motion.div
            className="button-div"
            variants={{
              hidden: { opacity: 0, y: 100 },
              reveal: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="reveal"
            transition={{
              type: "spring",
              duration: 2,
              bounce: 0.3,
              delay: 0.4,
            }}
          >
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
          <motion.div
            className="icons-div"
            variants={{
              hidden: { opacity: 0, y: 100 },
              reveal: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="reveal"
            transition={{
              type: "spring",
              duration: 2,
              bounce: 0.3,
              delay: 0.5,
            }}
          >
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
        variants={{
          hidden: { opacity: 0, y: -100 },
          reveal: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="reveal"
        transition={{ type: "spring", duration: 2, bounce: 0.3, delay: 0.5 }}
      >
        <div className="image-container">
          <img src={PatUlt} alt="profile" />
        </div>
      </motion.article>
      <div className="overlay one"></div>
      <div className="overlay two"></div>
    </section>
  );
};

export default Hero;
