import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

import Header from './Header';
import Headings from './Headings';
import ProductsCard from './ProductsCard';
import QuickViewModal from './QuickViewModal';
import Footer from './Footer';
import './product.css';


export default function Craft() {

  const { category } = useParams();
  const [quickViewItem, setQuickViewItem] = useState(null);


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

  const scentedTrayItems = importAll(
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
      heading: "A Shell Reimagined.. - Shell Trinket Dish",
      caption: "Shell Trinket Dish",
      paintingId: "ShellTrinketDish"
    },

    scentedtrays: {
      items: scentedTrayItems,
      heading: "Scented Trays for Quiet Moments",
      caption: "Scented Tray",
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
          eyebrow={categoryData.caption}
          heading={categoryData.heading}
        />

        <div className="gallery-grid">
          {categoryData.items.map((imgSrc, index) => {
            const title = `${categoryData.caption} # ${index + 1}`;

            return (
              <ProductsCard
                key={index}
                paintingId={categoryData.paintingId}
                onQuickView={() => setQuickViewItem({
                  src: imgSrc,
                  title,
                  size: null,
                  paintingId: categoryData.paintingId
                })}
              >

                <div className="gallery-image-wrap">
                  <img
                    className="gallery-image"
                    src={imgSrc}
                    alt={title}
                    loading="lazy"
                  />
                </div>

                <div className="gallery-placard">
                  <p className="gallery-title">
                    {title}
                  </p>
                </div>

              </ProductsCard>
            );
          })}
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

        <QuickViewModal item={quickViewItem} onClose={() => setQuickViewItem(null)} />

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

      <QuickViewModal item={quickViewItem} onClose={() => setQuickViewItem(null)} />

    </div>
  );

}