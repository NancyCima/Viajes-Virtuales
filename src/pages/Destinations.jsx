import CityList from '../components/CityList';
import SearchBar from '../components/SearchBar';
import cities from '../data/cities.json';
import React, { useState, useEffect } from 'react';

const Destinations = () => {
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    setFilteredCities(cities);
  }, []);

  const handleSearch = (searchTerm) => {
    let filtered;
    if (searchTerm.length > 0) {
      filtered = cities.filter((city) => 
        city.titulo && city.titulo.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      filtered = cities;
    }
    setFilteredCities(filtered);
  };

  return (
    <body className='bg-gradient-to-r from-[#EBF4F6] to-[#37B7C3] dark:from-[#1d5963] dark:to-[#2d3748]'>
      <div>
        <h1 className="text-5xl text-center my-8 py-4 border-b-4 font-bold text-[#071952] dark:text-[#36C2CE] border-[#071952] dark:border-[#36C2CE]">Destinos</h1>
        <SearchBar onSearch={handleSearch} />
        <CityList filteredCities={filteredCities} />
      </div>
    </body>
  );
};

export default Destinations;