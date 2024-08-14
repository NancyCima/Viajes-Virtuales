// src/routes.js
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import Comments from './pages/Comments';
import Header from './components/Header';
import Footer from './components/Footer';
import CityDetails from './components/CityDetails';


function AppRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/details/:id" element={<CityDetails />} />
        <Route path="/comments" element={<Comments />} />

      </Routes>
      <Footer />
    </>
  );
}

export default AppRoutes;
