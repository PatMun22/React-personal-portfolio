import React from "react";
import PatUlt from "../images/PatUlt.jpg";
import "../Styles/About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about" id="about">
      <motion.article
        className="about-image-container"
        variants={{
          hidden: { opacity: 0, x: -100 },
          reveal: { opacity: 1, x: 0 },
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
        <img src={PatUlt} alt="about" />
      </motion.article>
      <article className="about-content">
        <motion.h1
          className="about-title"
          variants={{
            hidden: { opacity: 0, x: 100 },
            reveal: { opacity: 1, x: 0 },
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
          About <span>Me</span>
        </motion.h1>
        <motion.p
          className="about-details"
          variants={{
            hidden: { opacity: 0, x: -100 },
            reveal: { opacity: 1, x: 0 },
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          perspiciatis doloremque iusto fuga laudantium voluptates?
        </motion.p>
      </article>
    </section>
  );
};

export default About;
