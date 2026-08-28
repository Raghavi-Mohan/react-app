import React from 'react'
import { useParams } from 'react-router-dom';

import Header from './Header';
import Headings from './Headings';
import ProductsCard from './ProductsCard';
import Footer from './Footer';
import './product.css';


export default function Craft() {

  const { category } = useParams();


  // Import all images

  const importAll = (requireContext) =>
    requireContext.keys().map(requireContext);


  const MagnetItems = importAll(
    require.context(
      '../Asset/magnets',
      false,
      /\.(png|jpe?g|svg)$/
    )
  );


  const keyChainItems = importAll(
    require.context(
      '../Asset/keyChains',
      false,
      /\.(png|jpe?g|svg)$/
    )
  );


  const bookItems = importAll(
    require.context(
      '../Asset/bookMarks',
      false,
      /\.(png|jpe?g|svg)$/
    )
  );


  const shellItems = importAll(
    require.context(
      '../Asset/shellTrinketDish',
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

    const scentedTrays = importAll(
    require.context(
      '../Asset/scentedTrays',
      false,
      /\.(png|jpe?g|svg)$/
    )
  );


  // =====================================================
  // CATEGORY CONFIGURATION
  // =====================================================

  const craftCategories = {

    charms: {
      items: keyChainItems,
      heading: "Tiny Sculptures That Travel with You - Charms",
      caption: "Charms",
      paintingId: "Charms"
    },

    bookmarks: {
      items: bookItems,
      heading: "Textured Tales for Every Page - BookMarks",
      caption: "Story Stems",
      paintingId: "StoryStems"
    },

    magnets: {
      items: MagnetItems,
      heading: "Stick a Little Story to Your Space - Fridge Magnets",
      caption: "Minis",
      paintingId: "Minis"
    },

    shells: {
      items: shellItems,
      heading: "An elegent shoreline escape for your everyday jewelry - Shell Trinket Dish",
      caption: "Shell Trinket Dish",
      paintingId: "Shell"
    },

    scentedtrays: {
      items: scentedTrays,
      heading: "A handmade home for your favorite scents - Incense stick holder",
      caption: "Scented Trays",
      paintingId: "ScentedTrays"
    }


  };


  // =====================================================
  // DISPLAY ONE CATEGORY
  // =====================================================

  const renderCategory = (categoryData) => {

    return (
      <React.Fragment>

        <Headings
          heading={categoryData.heading}
        />

        <hr className="w-75 bg-dark mx-auto" />

        <div className="gallery-grid">
          {categoryData.items.map((imgSrc, index) => (

            <ProductsCard
              key={index}
              paintingId={categoryData.paintingId}
            >

              <div className="gallery-image-wrap">
                <img
                  className="gallery-image"
                  src={imgSrc}
                  alt={`${categoryData.caption} ${index + 1}`}
                  loading="lazy"
                />
              </div>

              <div className="gallery-placard">
                <p className="gallery-title">
                  {`${categoryData.caption} # ${index + 1}`}
                </p>
              </div>

            </ProductsCard>

          ))}
        </div>

      </React.Fragment>
    );
  };


  // =====================================================
  // MAIN /CRAFTS PAGE
  // DISPLAY ALL FOUR CATEGORIES
  // =====================================================

  if (!category) {

    return (
      <div className="craft-page">

        <Header />

        <main className="craft-content">

          {/* MAGNETS */}

          {renderCategory(craftCategories.magnets)}


          {/* CHARMS */}

          {renderCategory(craftCategories.charms)}


          {/* BOOKMARKS */}

          {renderCategory(craftCategories.bookmarks)}


          {/* SHELLS */}

          {renderCategory(craftCategories.shells)}

          {/* SCENTED TRAYS */}

          {renderCategory(craftCategories.scentedtrays)}

        </main>

        <Footer />

      </div>
    );
  }


  // =====================================================
  // SUBMENU PAGE
  // DISPLAY ONLY SELECTED CATEGORY
  // =====================================================

  const selectedCategory =
    craftCategories[category.toLowerCase()];


  // Invalid category

  if (!selectedCategory) {

    return (
      <div className="craft-page">

        <Header />

        <main className="craft-content">

          <Headings heading="Little Treasures" />

          <p className="text-center mt-4">
            This collection could not be found.
          </p>

        </main>

        <Footer />

      </div>
    );

  }


  // =====================================================
  // SELECTED CATEGORY
  // =====================================================

  return (
    <div className="craft-page">

      <Header />

      <main className="craft-content">

        {renderCategory(selectedCategory)}

      </main>

      <Footer />

    </div>
  );

}