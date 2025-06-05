import React from 'react'
import Header from './Header';
import Headings from './Headings';
import ProductsCard from './ProductsCard';
import Footer from './Footer';



export default function Products() {
  const importAll = (requireContext) =>
requireContext.keys().map((key) => {
    const fullName = key.replace('./', '').replace(/\.[^/.]+$/, ''); // e.g., "texture_01"
    const [prefix, suffix] = fullName.split('_'); // split at underscore

    return {
      src: requireContext(key),
      name: fullName,
      prefix: prefix || '', 
      suffix: suffix || ''  
    };
  });
  //const importAll = (requireContext) => requireContext.keys().map(requireContext);
  const textures = importAll(require.context('../Asset/paintings', false, /\.(png|jpe?g|svg)$/));

  return (
    <div>
      <Header />
      <Headings heading="Original works created to be seen, felt, and remembered." />
      <hr className="w-75 bg-dark mx-auto" />
      {textures.map((imgSrc, index) => (
        <ProductsCard key={index} >
          <figure key={index} className="text-center stylish-caption">
            <img className="w-75 h-75 img-fluid" src={imgSrc.src} alt={imgSrc.prefix}></img>
            <figcaption className="mt-2">'{imgSrc.prefix}'</figcaption>
            <figcaption className="mt-2">Size : {imgSrc.suffix}</figcaption>
          </figure>
        </ProductsCard>
      ))}
      <Footer />
    </div>
  )
}
