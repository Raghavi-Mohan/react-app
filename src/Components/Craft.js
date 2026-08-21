import React from 'react'
import { useParams, Navigate } from 'react-router-dom';

import Header from './Header';
import Headings from './Headings';
import ProductsCard from './ProductsCard';
import Footer from './Footer';


export default function Craft() {

  // Get category from URL
  // Example:
  // /crafts/magnets
  // /crafts/charms
  // /crafts/bookmarks
  // /crafts/shells

  const { category } = useParams();


  // Import all images from each craft folder

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


  // Define each craft category

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
    }

  };


  /*
   * If someone goes to:
   * /crafts
   *
   * send them to the Magnets page.
   */

  if (!category) {
    return <Navigate to="/crafts/magnets" replace />;
  }


  /*
   * Find the selected category
   */

  const selectedCategory =
    craftCategories[category.toLowerCase()];


  /*
   * If someone enters an invalid URL such as:
   *
   * /crafts/abc
   *
   * send them to Magnets.
   */

  if (!selectedCategory) {
    return <Navigate to="/crafts/magnets" replace />;
  }


  return (
    <div className="craft-page">

      <Header />


      <main className="craft-content">

        {/* CATEGORY HEADING */}

        <Headings
          heading={selectedCategory.heading}
        />

        <hr className="w-75 bg-dark mx-auto" />


        {/* SELECTED CATEGORY ITEMS */}

        <section className="craft-items">

          {selectedCategory.items.map((imgSrc, index) => (

            <ProductsCard
              key={index}
              paintingId={selectedCategory.paintingId}
            >

              <figure className="text-center stylish-caption">

                <figcaption className="mt-2">
                  {`${selectedCategory.caption} # ${index + 1}`}
                </figcaption>

                <img
                  className="w-75 h-75 img-fluid"
                  src={imgSrc}
                  alt={`${selectedCategory.caption} ${index + 1}`}
                />

                <figcaption className="mt-2"></figcaption>

              </figure>

            </ProductsCard>

          ))}

        </section>

      </main>


      <Footer />

    </div>
  )
}