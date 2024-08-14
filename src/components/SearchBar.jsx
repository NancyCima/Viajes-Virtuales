import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-5">
      <input
        type="text"
        placeholder="Buscar destino..."
        value={searchTerm}
        onChange={handleInputChange}
        className="w-1/3 p-2 text-black dark:text-white bg-lightBackground dark:bg-[#071952] border-2 border-primary rounded-full focus:outline-none focus:border-focus text-lg font-inter placeholder-[gray-500]"
      />
    </div>
  );
};

export default SearchBar;