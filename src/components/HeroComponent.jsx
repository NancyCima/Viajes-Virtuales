import React from 'react';
import { Link } from 'react-router-dom';

const HeroComponent = () => {
  return (
    <div className="relative w-full h-screen">
      <video className="absolute w-full h-full object-cover" autoPlay muted loop>
        <source src="/assets/background-hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 md:px-12 lg:px-24 text-[#EBF4F6]">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-3 text-[#36C2CE]">
          TripTastic
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Descubre los mejores <br /> destinos para tus vacaciones
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Explora lugares increíbles y vive experiencias únicas en cada rincón del mundo.
        </p>
        <Link
          to="/destinations"
          className="bg-[#071952] text-[#EBF4F6] border-2 border-[#37B7C3] py-2 px-4 rounded-md hover:bg-[#088395] hover:border-[#37B7C3] hover:text-[#EBF4F6] transition duration-300"
        >
          Explorar más
        </Link>
      </div>
    </div>
  );
};

export default HeroComponent;
