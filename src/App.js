import './App.css';
import React from "react";

import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Products from './Components/Products';
import Craft from './Components/Craft';
import ScrollTop from './Components/ScrollTop';
import PaintingDetail from './Components/PaintingDetail';
import GalleryPage from './Components/GalleryModal';
import LinksPage from './Components/LinksPage';
import NavigationLoader from './Components/NavigationLoader';

import { Routes, Route } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArtGuideWidget from "./Components/ArtGuideWidget";


function App() {

  return (
    <div className="App">

      {/* Scroll page to top whenever route changes */}
      <ScrollTop />

      {/* Loading screen during navigation */}
      <NavigationLoader />

      {/* Website Routes */}
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />


        {/* ABOUT */}
        <Route
          path="/aboutme"
          element={<AboutMe />}
        />


        {/* PAINTINGS */}
        <Route
          path="/products"
          element={<Products />}
        />


        {/* GALLERY */}
        <Route
          path="/gallery"
          element={<GalleryPage />}
        />


        {/* INDIVIDUAL PAINTING / PRODUCT */}
        <Route
          path="/painting/:title"
          element={<PaintingDetail />}
        />


        {/* LITTLE TREASURES - MAIN */}
        {/* Shows all 4 categories */}
        <Route
          path="/crafts"
          element={<Craft />}
        />


        {/* LITTLE TREASURES - INDIVIDUAL CATEGORIES */}
        <Route
          path="/crafts/:category"
          element={<Craft />}
        />


        {/* LINKS */}
        <Route
          path="/links"
          element={<LinksPage />}
        />

      </Routes>


      {/* AI ART GUIDE */}
      <ArtGuideWidget />

    </div>
  );
}


export default App;