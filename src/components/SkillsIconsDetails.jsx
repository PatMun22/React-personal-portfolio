import React from "react";
import "../Styles/SkillsIconsDetails.css";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoJquery,
  BiLogoReact,
} from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { BsGit } from "react-icons/bs";
import { skills } from "../Assets/data";
import { motion, AnimatePresence } from "framer-motion";
import { slideAnimation } from "../Assets/motion";

const skillsIcons = [
  AiFillHtml5,
  BiLogoCss3,
  FaBootstrap,
  SiTailwindcss,
  DiSass,
  BiLogoJavascript,
  BiLogoJquery,
  BiLogoReact,
  AiFillGithub,
  BsGit,
];

function SkillsIconsDetails() {
  return (
    <AnimatePresence>
      <article className="skills-icon-container">
        {skills.map((skill, index) => {
          const SkillsIcons = skillsIcons[index];
          return (
            <motion.div
              className="icon-container"
              key={index}
              {...slideAnimation}
            >
              <SkillsIcons className="icon" />
              <div className="icon-details">
                <h3 className="icon-title">{skill.skillName}</h3>
                <div className="skill-experience">
                  <div
                    className="skill-rating"
                    style={{ width: skill.experienceRating }}
                  ></div>
                  <span style={{ marginLeft: skill.experienceRating }}>
                    {skill.experienceRating}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </article>
    </AnimatePresence>
  );
}

export default SkillsIconsDetails;
