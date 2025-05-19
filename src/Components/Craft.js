import React from 'react'
import Header from './Header';
import Headings from './Headings';
import ProductsCard from './ProductsCard';
import Footer from './Footer';
import M_1 from '../Asset/M_1.png'
import M_2 from '../Asset/M_2.png'
import M_3 from '../Asset/M_3.png'
import M_4 from '../Asset/M_4.png'
import M_5 from '../Asset/M_5.png'
import M_6 from '../Asset/M_6.png'
import M_7 from '../Asset/M_7.png'
import M_8 from '../Asset/M_8.png'
import M_9 from '../Asset/M_9.png'
import M_10 from '../Asset/M_10.png'
import C_1 from '../Asset/C_1.png'
import C_2 from '../Asset/C_2.png'
import C_3 from '../Asset/C_3.png'
import C_4 from '../Asset/C_4.png'
import B_1 from '../Asset/B_1.png'
import B_2 from '../Asset/B_2.png'
import B_3 from '../Asset/B_3.png'
import B_4 from '../Asset/B_4.png'
import B_5 from '../Asset/B_5.png'
import B_6 from '../Asset/B_6.png'




export default function Craft() {
  const MagnetItems = [M_1, M_2,M_3,M_4,M_5, M_6,M_7,M_8,M_9,M_10]; // or fetched from API, etc.
  const keyChainItems = [C_1, C_2,C_3,C_4]; // or fetched from API, etc.
  const bookItems = [B_1, B_2,B_3,B_4,B_5,B_6]; // or fetched from API, etc.

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
