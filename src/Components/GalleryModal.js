// ...existing code...
import React, { useEffect, useState, useCallback, useMemo } from 'react'
import Header from './Header';
import Footer from './Footer';
import T_ALL_1 from '../Asset/T_ALL_1.png'
import ALL_2 from '../Asset/ALL_2.png'
import me from '../Asset/my.png'
import '../Gallery.css' // create this file or reuse earlier CSS

export default function GalleryPage() {
 const images = useMemo(() => {
    try {
      const req = require.context('../Asset/paintings', false, /\.(png|jpe?g|webp|gif)$/);
      return req.keys().sort().map(req); // returns resolved URLs
    } catch (err) {
      console.warn('No paintings directory or require.context not available', err);
      return [];
    }
  }, []);  
  const [index, setIndex] = useState(0)

  const prev = useCallback(() => setIndex(i => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setIndex(i => (i + 1) % images.length), [images.length])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') window.history.back()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  return (
    <div className="gallery-page">
      <Header />

      <main className="gallery-stage">
        <button className="g-nav g-prev" onClick={prev} aria-label="Previous">‹</button>

        <div className="g-image-wrap">
          <img src={images[index]} alt={`Artwork ${index + 1}`} loading="lazy" />
          <div className="g-caption">{index + 1} / {images.length}</div>
        </div>

        <button className="g-nav g-next" onClick={next} aria-label="Next">›</button>
      </main>

      <div className="g-thumbs">
        {images.map((src, i) => (
          <button key={i} className={`g-thumb ${i === index ? 'active' : ''}`} onClick={() => setIndex(i)} aria-label={`View ${i+1}`}>
            <img src={src} alt={`thumb ${i+1}`} loading="lazy" />
          </button>
        ))}
      </div>

      <Footer />
    </div>
  )
}
// ...existing code...