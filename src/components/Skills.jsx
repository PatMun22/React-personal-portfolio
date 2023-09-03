import React from "react";
import "../Styles/Skills.css";
import SkillsHeader from "./SkillsHeader";
import SkillsIconsDetails from "./SkillsIconsDetails";

function Skills() {
  return (
    <section className="skills-container" id="skills">
      <SkillsHeader />
      <SkillsIconsDetails />
    </section>
  );
}

export default Skills;
