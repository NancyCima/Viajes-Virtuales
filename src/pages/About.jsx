import React, { useState } from 'react';
import TeamMember from '../components/TeamMember';
import './About.css'

const About = () => {
  const [teamMembers] = useState([
    {
      name: 'Nancy Cima',
      role: 'Data scientist & Técnica en IA',
      descripcion: 'Soy un apasionada por los datos con una sólida formación académica en ciencias de la computación, estadística y matemáticas. Poseo habilidades analíticas y de resolución de problemas que me permiten abordar desafíos complejos con creatividad y precisión. Tengo buenas habilidades de comunicación y trabajo bien tanto en equipo como individualmente. Siempre estoy dispuesta a afrontar nuevos retos, pues, los veo como una oportunidad para profundizar conocimientos.',
      image: '/assets/avatarNancy.png',
      linkedinUrl: 'https://www.linkedin.com/in/nancy-lucia-cima/',
      githubUrl: 'https://github.com/NancyCima'
    },
    {
      name: 'Lautaro Tintez',
      role: 'Desarrollador Backend',
      descripcion: 'Desarrollador Backend, con experiencia inicial en el desarrollo de aplicaciones web. Recientemente me gradué como Técnico en Análisis de Sistemas, y estoy dando mis primeros pasos en la industria tecnológica. Me caracterizo por mi enfoque en la resolución de desafíos y la búsqueda de soluciones eficientes en el ámbito del desarrollo de software. Aunque estoy en las primeras etapas de mi carrera, mi capacidad para abordar problemas complejos y aprender rápidamente me ha permitido contribuir de manera significativa en proyectos en los que he participado.' ,
      image: '/assets/avatarLautaro.png',
      linkedinUrl: 'https://www.linkedin.com/in/lautarotintez/',
      githubUrl: 'https://github.com/LTintez'
    }
  ]);

  return (
    <body className='bg-gradient-to-r from-[#EBF4F6] to-[#37B7C3] dark:from-[#1d5963] dark:to-[#2d3748] mb-0'>
      <div className="about-page">
        <h1 className="text-4xl md:text-5xl font-bold text-[#071952] mb-4 dark:text-[#36C2CE]">Acerca de TripTastic</h1>
        <div className="app-info">
          <p className="text-lg text-[#071952] dark:text-[#36C2CE]">
            <strong>¡Bienvenido a TripTastic!</strong> <br />
            Somos la nueva aplicación web que transforma la exploración
            de destinos turísticos en una experiencia virtual única. Nuestro propósito es ofrecerte
            una inmersión total y emocionante, permitiéndote descubrir y disfrutar de diferentes
            lugares del mundo desde la comodidad de tu hogar. <br />
            <strong>¡Prepárate para una fantastica aventura sin moverte de tu casa!</strong>
          </p>
          <img src="assets\computadora.png" alt="computadora con imagenes de viajes" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-[#071952] dark:text-[#36C2CE] mb-4">Nuestro Equipo de Desarrollo</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              descripcion={member.descripcion}
              image={member.image}
              linkedinUrl={member.linkedinUrl}
              githubUrl={member.githubUrl}
            />
          ))}
        </div>
      </div>
    </body>
  );
};

export default About;