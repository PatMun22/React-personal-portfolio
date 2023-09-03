import React from "react";
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
    <div className="skills-icon-container">
      {skills.map((skill, index) => {
        const SkillsIcons = skillsIcons[index];
        return (
          <div className="icon-container">
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
          </div>
        );
      })}
    </div>
  );
}

export default SkillsIconsDetails;
