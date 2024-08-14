import React from 'react';

const MainSection = () => {
    return (
        <section className="flex items-center justify-center h-screen w-full py-16 bg-gradient-to-r from-[#EBF4F6] to-[#37B7C3] dark:from-[#1d5963] dark:to-[#2d3748]">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 ml-7 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#071952] dark:text-[#b6f4ff] mb-4">
                        ¡Bienvenidos a TripTastic!
                    </h1>
                    <p className="text-lg text-[#071952] dark:text-[#b6f4ff]">
                        Descubre los destinos más impresionantes del mundo, explora opiniones de otros viajeros y amplía tus horizontes. 
                        Encuentra el lugar perfecto para tu próxima aventura y comparte tus propias experiencias.
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-center md:ml-16">
                    <img src="assets/Journey-amico.png" alt="Journey" className="w-3/4 md:w-1/2" />
                </div>
            </div>
        </section>
    );
}

export default MainSection;
