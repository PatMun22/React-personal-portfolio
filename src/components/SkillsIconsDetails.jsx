import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3 } from 'react-icons/bi';
import { FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { DiSass } from 'react-icons/di';
import { BiLogoJavascript } from 'react-icons/bi';
import { BiLogoJquery } from 'react-icons/bi';
import { BiLogoReact } from 'react-icons/bi';

import '../Styles/SkillsIconsDetails.css';

function SkillsIconsDetails() {
  return (
    <div className="skills-icon-container">
        <div className="icon-container">
            <AiFillHtml5 className='icon'/>
            <div className="icon-details">
                <h3 className="icon-title">HTML5</h3>
                <div className="skill-experience">
                <div className="skill-rating">
                </div>
                </div>
            </div>
        </div>
        <div className="icon-container">
            <BiLogoCss3 className='icon'/>
            <div className="icon-details">
                <h3 className="icon-title">CSS3</h3>
                <div className="skill-experience">
                <div className="skill-rating">
                </div>
                </div>
            </div>
        </div>
        <div className="icon-container">
            <FaBootstrap className='icon'/>
            <div className="icon-details">
                <h3 className="icon-title">BOOTSRAP</h3>
                <div className="skill-experience">
                <div className="skill-rating">
                </div>
                </div>
            </div>
        </div>
        <div className="icon-container">
            <SiTailwindcss className='icon'/>
            <div className="icon-details">
                <h3 className="icon-title">TAILWIND CSS</h3>
                <div className="skill-experience">
                <div className="skill-rating">
                </div>
                </div>
            </div>
        </div>
        <div className="icon-container">
            <DiSass className='icon'/>
            <div className="icon-details">
                <h3 className="icon-title">SASS</h3>
                <div className="skill-experience">
                <div className="skill-rating">
                </div>
                </div>
            </div>
        </div>
        <div className="icon-container">
            <BiLogoJavascript className='icon'/>
            <div className="icon-details">
                <h3 className="icon-title">JAVASCRIPT</h3>
                <div className="skill-experience">
                <div className="skill-rating">
                </div>
                </div>
            </div>
        </div>
        <div className="icon-container">
            <BiLogoJquery className='icon'/>
            <div className="icon-details">
                <h3 className="icon-title">JQUERY</h3>
                <div className="skill-experience">
                    <div className="skill-rating">
                    </div>
                </div>
            </div>
        </div>
        <div className="icon-container">
            <BiLogoReact className='icon'/>
            <div className="icon-details">
                <h3 className="icon-title">REACT.JS</h3>
                <div className="skill-experience">
                    <div className="skill-rating">
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillsIconsDetails