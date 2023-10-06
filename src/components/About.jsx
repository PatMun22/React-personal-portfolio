import React from "react";
import PatUlt from "../images/PatUlt.jpg";
import "../Styles/About.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  slideAnimation,
  headTextAnimation,
  headContentAnimation,
} from "../Assets/motion";

const About = () => {
  return (
    <AnimatePresence>
      <section className="about" id="about">
        <article className="about-image-container">
          <img src={PatUlt} alt="about" />
        </article>
        <motion.article className="about-content" {...slideAnimation("right")}>
          <motion.h1 className="about-title" {...headContentAnimation}>
            About <span>Me</span>
          </motion.h1>
          <motion.p className="about-details" {...headTextAnimation}>
            You are looking for a highly adaptable individual, with ability to
            constantly learn new skills and approaches in the front-end
            development realm? You want a front-end engineer that is highly
            flexible and able to respond effectively to working conditions,
            including letting go of outdated technology? You want an individual
            that has high time management, organization, collaboration and task
            prioritization capabilities? I fit these descriptions perfectly.
          </motion.p>
        </motion.article>
      </section>
    </AnimatePresence>
  );
};

export default About;
