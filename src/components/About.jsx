import React from "react";
import PatUlt from "../images/PatUlt.jpg";
import "../Styles/About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <article className="about-image-container">
        <img src={PatUlt} alt="about" />
      </article>
      <article className="about-content">
        <h1 className="about-title">
          About <span>Me</span>
        </h1>
        <p className="about-details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          perspiciatis doloremque iusto fuga laudantium voluptates?
        </p>
      </article>
    </section>
  );
};

export default About;
