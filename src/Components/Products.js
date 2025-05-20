import React from 'react'
import Header from './Header';
import Headings from './Headings';
import ProductsCard from './ProductsCard';
import Footer from './Footer';



export default function Products() {
//const items = [T_1, T_2,T_3,T_4,T_5, T_6,T_7,T_8,T_9]; // or fetched from API, etc.
const importAll = (requireContext) => requireContext.keys().map(requireContext);
const textures = importAll(require.context('../Asset/paintings', false, /\.(png|jpe?g|svg)$/));

return (
    <div>
       <Header />
       <Headings  heading="Original Arts"/>
       <hr className="w-75 bg-dark mx-auto" />
       {textures.map((imgSrc, index) => (
        <ProductsCard key={index} topic={`Textures : ${index + 1}`} size="Size: 6X6"> 
        <img className="w-75 h-75 img-fluid" src={imgSrc} alt="icon"></img>
        </ProductsCard>
      ))}
       <Footer />
    </div>
  )
}
