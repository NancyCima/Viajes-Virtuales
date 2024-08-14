import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPlane, FaInfoCircle, FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dark, setDark] = React.useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={'bg-blue-900 dark:bg-[#071952] text-white shadow-md transition-colors duration-300'}>
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold ml-7">
                    <Link to="/" className="hover:text-[#37B7C3] transition-colors duration-300">
                        TripTastic
                    </Link>
                </div>
                <nav className="md:flex hidden items-center">
                    <ul className="flex space-x-8 text-md mr-7">
                        <li>
                            <Link
                                to="/"
                                className="hover:text-[#37B7C3] transition-colors duration-300 flex items-center"
                            >
                                <FaHome className="mr-1" /> Inicio
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/destinations"
                                className="hover:text-[#37B7C3] transition-colors duration-300 flex items-center"
                            >
                                <FaPlane className="mr-1" /> Destinos
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="hover:text-[#37B7C3] transition-colors duration-300 flex items-center"
                            >
                                <FaInfoCircle className="mr-1" /> Acerca de
                            </Link>
                        </li>
                    </ul>
                    <div>
                        <button onClick={()=> darkModeHandler()}>
                            {
                                
                                dark && <FaSun />
                            }
                            {
                                !dark && <FaMoon />
                            }
                        </button>
                    </div>
                </nav>
                <div className="md:hidden flex items-center">
                    <button
                        className="text-2xl"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className={`md:hidden block ${darkMode ? 'bg-gray-800' : 'bg-[#071952]'} p-4 transition-colors duration-300`}>
                    <ul className="space-y-4 text-md">
                        <li>
                            <Link
                                to="/"
                                className="hover:text-[#37B7C3] transition-colors duration-300 flex items-center"
                                onClick={toggleMenu}
                            >
                                <FaHome className="mr-1" /> Inicio
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/destinations"
                                className="hover:text-[#37B7C3] transition-colors duration-300 flex items-center"
                                onClick={toggleMenu}
                            >
                                <FaPlane className="mr-1" /> Destinos
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="hover:text-[#37B7C3] transition-colors duration-300 flex items-center"
                                onClick={toggleMenu}
                            >
                                <FaInfoCircle className="mr-1" /> Acerca de
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;