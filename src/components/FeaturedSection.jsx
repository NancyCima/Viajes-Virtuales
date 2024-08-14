import React from 'react';
import { FaGlobe, FaStar, FaInfoCircle } from 'react-icons/fa'; // Importa los íconos que necesites
import './FeaturedSection.css';

const FeaturedSection = () => {
    return (
        <section className="featured-section py-12 bg-background dark:bg-[#071952]">
            <h2 className="text-4xl font-bold text-center mb-10 text-title dark:text-[#b6f4ff]">
                En TripTastic encontrarás:
            </h2>
            <div className="cards-container flex flex-wrap justify-center gap-3">
                <div className="e-card playing">
                    <div className="image" style={{ backgroundImage: "url('/assets/iconic-landscape.jpg')" }}></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="infotop flex flex-col items-center justify-center h-full">
                        <div className="icon-container mb-2">
                            <FaGlobe className="icon" />
                        </div>
                        <div className="name text-xl font-bold">
                            Los mejores destinos
                        </div>
                    </div>
                </div>
                <div className="e-card playing">
                    <div className="image" style={{ backgroundImage: "url('/assets/review-icon.jpg')" }}></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="infotop flex flex-col items-center justify-center h-full">
                        <div className="icon-container mb-2">
                            <FaStar className="icon" />
                        </div>
                        <div className="name text-xl font-bold">
                            Reseñas y Opiniones
                        </div>
                    </div>
                </div>
                <div className="e-card playing">
                    <div className="image" style={{ backgroundImage: "url('/assets/travel-tips-icon.jpg')" }}></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="infotop flex flex-col items-center justify-center h-full">
                        <div className="icon-container mb-2">
                            <FaInfoCircle className="icon" />
                        </div>
                        <div className="name text-xl font-bold">
                            Consejos de Viaje
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedSection;
