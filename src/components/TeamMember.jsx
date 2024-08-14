import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const TeamMember = ({ name, role, descripcion, image, linkedinUrl, githubUrl }) => {
    return (
      <div className="team-member">
        <img src={image} alt={name} />
        <h2 className='dark:text-[#b6f4ff]'>{name}</h2>
        <h3 className='dark:text-[#b6f4ff]'>{role}</h3>
        <p className='text-[#071952} dark:text-[#EBF4F6]'>{descripcion}</p>
        <div className="social-links">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="linkedin-icon" />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub className="github-icon" />
          </a>
        </div>
      </div>
    );
  };
  
export default TeamMember;