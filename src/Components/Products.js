import React, { useEffect, useState } from 'react';
import Header from './Header';
import Headings from './Headings';
import ProductsCard from './ProductsCard';
import Footer from './Footer';
import { storage } from '../firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import './product.css';

export default function Products() {
  const [firebaseImages, setFirebaseImages] = useState([]);

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

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const listRef = ref(storage, 'products');
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

  const renderCard = (img, key) => (
    <ProductsCard key={key} paintingId={img.prefix}>
      <div className="gallery-image-wrap">
        <img className="gallery-image" src={img.src} alt={img.prefix} loading="lazy" />
      </div>
      <div className="gallery-placard">
        <p className="gallery-title">'{img.prefix}'</p>
        {img.suffix && <span className="gallery-size">{img.suffix}</span>}
      </div>
    </ProductsCard>
  );

  return (
    <div>
      <Header />
      <Headings heading="Original works created to be seen, felt, and remembered." />
      <hr className="w-75 bg-dark mx-auto" />

      <div className="gallery-grid">
        {firebaseImages.map((img, index) => renderCard(img, `fb-${index}`))}
        {textures.map((img, index) => renderCard(img, `local-${index}`))}
      </div>

      <Footer />
    </div>
  );
}
