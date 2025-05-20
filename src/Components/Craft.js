import React from 'react'
import Header from './Header';
import Headings from './Headings';
import ProductsCard from './ProductsCard';
import Footer from './Footer';




export default function Craft() {
  //const MagnetItems = [M_1, M_2,M_3,M_4,M_5, M_6,M_7,M_8,M_9,M_10]; // or fetched from API, etc.
  //const keyChainItems = [C_1, C_2,C_3,C_4]; // or fetched from API, etc.
  //const bookItems = [B_1, B_2,B_3,B_4,B_5,B_6]; // or fetched from API, etc.
  const importAll = (requireContext) => requireContext.keys().map(requireContext);
  const MagnetItems = importAll(require.context('../Asset/magnets', false, /\.(png|jpe?g|svg)$/));
  const keyChainItems = importAll(require.context('../Asset/keyChains', false, /\.(png|jpe?g|svg)$/));
  const bookItems = importAll(require.context('../Asset/bookMarks', false, /\.(png|jpe?g|svg)$/));

  return (
    <div>
       <Header />
       <Headings  heading="Fridge Magnets | Key Chains | BookMarks"/>
       <hr className="w-75 bg-dark mx-auto" />
       {MagnetItems.map((imgSrc, index) => (
        <ProductsCard key={index} topic={`Magnet : ${index + 1}`} size="Size: 1X2"> 
        <img className="w-75 h-75 img-fluid" src={imgSrc} alt="icon"></img>
        </ProductsCard>
      ))}
      <hr className="w-75 bg-dark mx-auto" />
      {keyChainItems.map((imgSrc, index) => (
        <ProductsCard key={index} topic={`Magnet : ${index + 1}`}> 
        <img className="w-75 h-75 img-fluid" src={imgSrc} alt="icon"></img>
        </ProductsCard>
      ))}
      <hr className="w-75 bg-dark mx-auto" />
      {bookItems.map((imgSrc, index) => (
        <ProductsCard key={index} topic={`BookMark : ${index + 1}`}> 
        <img className="w-75 h-75 img-fluid" src={imgSrc} alt="icon"></img>
        </ProductsCard>
      ))}
       <Footer />
    </div>
  )
}
