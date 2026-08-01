import React, { useEffect, useState } from 'react';
import Header from './Header';
import Headings from './Headings';
import ProductsCard from './ProductsCard';
import Footer from './Footer';
import { storage } from '../firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

export default function Products() {
  const [firebaseImages, setFirebaseImages] = useState([]);

  // Import local images
  const importAll = (requireContext) =>
    requireContext.keys().map((key) => {
      const fullName = key.replace('./', '').replace(/\.[^/.]+$/, '');
      const [prefix, suffix] = fullName.split('_');

      return {
        src: requireContext(key),
        name: fullName,
        prefix: prefix || '',
        suffix: suffix || ''
      };
    });

  const textures = importAll(
    require.context('../Asset/paintings', false, /\.(png|heic|jpe?g|svg)$/)
  );

  // Fetch images from Firebase Storage
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const listRef = ref(storage, 'products'); // 🔥 folder name inside Firebase Storage
        const result = await listAll(listRef);

        const urls = await Promise.all(
          result.items.map(async (item) => {
            const url = await getDownloadURL(item);

            const fullName = item.name.replace(/\.[^/.]+$/, '');
            const [prefix, suffix] = fullName.split('_');

            return {
              src: url,
              prefix: prefix || '',
              suffix: suffix || ''
            };
          })
        );

        setFirebaseImages(urls);
      } catch (error) {
        console.error('Error loading Firebase images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <Header />
      <Headings heading="Original works created to be seen, felt, and remembered." />
      <hr className="w-75 bg-dark mx-auto" />

      {/* 🔥 FIRST: Display Firebase Storage images */}
      {firebaseImages.map((img, index) => (
        <ProductsCard key={`fb-${index}`} paintingId={img.prefix}>
          <figure className="text-center stylish-caption">
            <img className="w-75 h-75 img-fluid" src={img.src} alt={img.prefix} />
            <figcaption className="mt-2">'{img.prefix}'</figcaption>
            <figcaption className="mt-2">Size : {img.suffix}</figcaption>
          </figure>
        </ProductsCard>
      ))}

      {/* 🔥 SECOND: Display Local Images (existing way) */}
      {textures.map((img, index) => (
        <ProductsCard key={`local-${index}`} paintingId={img.prefix}>
          <figure className="text-center stylish-caption">
            <img className="w-75 h-75 img-fluid" src={img.src} alt={img.prefix} />
            <figcaption className="mt-2">'{img.prefix}'</figcaption>
            <figcaption className="mt-2">Size : {img.suffix}</figcaption>
          </figure>
        </ProductsCard>
      ))}

      <Footer />
    </div>
  );
}
