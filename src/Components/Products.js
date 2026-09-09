import React, { useEffect, useState, useMemo } from 'react';
import Header from './Header';
import Headings from './Headings';
import ProductsCard from './ProductsCard';
import QuickViewModal from './QuickViewModal';
import SortDropdown from './SortDropdown';
import Footer from './Footer';
import { storage } from '../firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import './product.css';

export default function Products() {
  const [firebaseImages, setFirebaseImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('name-asc');
  const [quickViewItem, setQuickViewItem] = useState(null);

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

  // Merge both sources into one list so search/sort applies uniformly,
  // regardless of whether a piece came from Firebase or the local Asset folder.
  const allImages = useMemo(() => {
    const fb = firebaseImages.map((img, i) => ({ ...img, key: `fb-${i}` }));
    const local = textures.map((img, i) => ({ ...img, key: `local-${i}` }));
    return [...fb, ...local];
  }, [firebaseImages, textures]);

  const visibleImages = useMemo(() => {
    let list = allImages;

    if (searchTerm.trim()) {
      const term = searchTerm.trim().toLowerCase();
      list = list.filter((img) => img.prefix.toLowerCase().includes(term));
    }

    const sorted = [...list];
    switch (sortOption) {
      case 'name-asc':
        sorted.sort((a, b) => a.prefix.localeCompare(b.prefix));
        break;
      case 'name-desc':
        sorted.sort((a, b) => b.prefix.localeCompare(a.prefix));
        break;
      case 'size-asc':
        sorted.sort((a, b) => (a.suffix || '').localeCompare(b.suffix || ''));
        break;
      default:
        break;
    }
    return sorted;
  }, [allImages, searchTerm, sortOption]);

  const openQuickView = (img) => {
    setQuickViewItem({
      src: img.src,
      title: img.prefix,
      size: img.suffix,
      paintingId: img.prefix
    });
  };

  return (
    <div>
      <Header />

      <Headings
        eyebrow="Paintings"
        heading="Original works created to be seen, felt, and remembered."
      />

      <div className="gallery-toolbar">
        <div className="gallery-search-wrap">
          <svg className="gallery-search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5.25" stroke="currentColor" strokeWidth="1.4" />
            <path d="M11 11L14.5 14.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>

          <input
            type="text"
            className="gallery-search"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {searchTerm && (
            <button
              type="button"
              className="gallery-search-clear"
              onClick={() => setSearchTerm('')}
              aria-label="Clear search"
            >
              &times;
            </button>
          )}
        </div>

        <SortDropdown
          options={[
            { value: 'name-asc', label: 'Name (A-Z)' },
            { value: 'name-desc', label: 'Name (Z-A)' },
            { value: 'size-asc', label: 'Size' }
          ]}
          value={sortOption}
          onChange={setSortOption}
        />

        <span className="gallery-count">
          {visibleImages.length} {visibleImages.length === 1 ? 'piece' : 'pieces'}
        </span>
      </div>

      <div className="gallery-grid">
        {visibleImages.map((img) => (
          <ProductsCard
            key={img.key}
            paintingId={img.prefix}
            onQuickView={() => openQuickView(img)}
          >
            <div className="gallery-image-wrap">
              <img className="gallery-image" src={img.src} alt={img.prefix} loading="lazy" />
            </div>
            <div className="gallery-placard">
              <p className="gallery-title">'{img.prefix}'</p>
              {img.suffix && <span className="gallery-size">{img.suffix}</span>}
            </div>
          </ProductsCard>
        ))}
      </div>

      {visibleImages.length === 0 && (
        <p className="gallery-empty">No pieces match your search.</p>
      )}

      <QuickViewModal item={quickViewItem} onClose={() => setQuickViewItem(null)} />

      <Footer />
    </div>
  );
}