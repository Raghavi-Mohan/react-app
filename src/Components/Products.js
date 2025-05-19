import React from 'react'
import Header from './Header';
import Headings from './Headings';
import ProductsCard from './ProductsCard';
import Footer from './Footer';
import T_1 from '../Asset/T_1.png'
import T_2 from '../Asset/T_2.png'
import T_3 from '../Asset/T_3.png'
import T_4 from '../Asset/T_4.png'
import T_5 from '../Asset/T_5.png'
import T_6 from '../Asset/T_6.png'
import T_7 from '../Asset/T_7.png'
import T_8 from '../Asset/T_8.png'
import T_9 from '../Asset/T_9.png'



export default function Products() {
  const items = [T_1, T_2,T_3,T_4,T_5, T_6,T_7,T_8,T_9]; // or fetched from API, etc.

  return (
    <div>
       <Header />
       <Headings  heading="Original Arts"/>
       <hr className="w-75 bg-dark mx-auto" />
       {items.map((imgSrc, index) => (
        <ProductsCard key={index} topic={`Textures : ${index + 1}`} size="Size: 6X6"> 
        <img className="w-75 h-75 img-fluid" src={imgSrc} alt="icon"></img>
        </ProductsCard>
      ))}
       <Footer />
    </div>
  )
}
