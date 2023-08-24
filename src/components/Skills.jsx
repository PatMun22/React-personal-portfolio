import React from 'react'
import '../Styles/Skills.css';
import SkillsHeader from './SkillsHeader';
import SkillsIconsDetails from './SkillsIconsDetails';

function Skills() {
  return (
    <div className='skills-container' id='skills'>
      <SkillsHeader />
      <SkillsIconsDetails />
    </div>
  )
}

export default Skills;