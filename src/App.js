import './App.css';
import React from "react";
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Products from './Components/Products';
import Craft from './Components/Craft';
import ScrollTop from './Components/ScrollTop';
import { Routes, Route } from 'react-router-dom';
import PaintingDetail from './Components/PaintingDetail';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {
  return (
    <div className="App"> {/* Keep this for styling/layout */}
      <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/products" element={<Products />} />
          <Route path="/painting/:title" element={<PaintingDetail />} />
          <Route path="/crafts" element={<Craft />} />
        </Routes>
    </div>
  );
}

export default App;
