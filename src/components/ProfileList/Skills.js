import React from 'react';


const Skills = ({ skills }) => {
    return (
        <div className="profile-skills">
            {skills.map((skill, index) => (
                <span key={index} className="skill-item">{skill}</span>
            ))
            }
        </div>
    );
}

export default Skills;