import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import Header from './Header';
import Headings from './Headings';
import Footer from './Footer';
import PaintingDescription from './PaintingDescription';
import paintings from './paintings.js';
import { storage } from '../firebase';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PaintingDetail = () => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);

  const [painting, setPainting] = useState(null);
  const [sliderImages, setSliderImages] = useState([]);
  const [loading, setLoading] = useState(true);
console.log("Decoded Title:", decodedTitle);
  useEffect(() => {
    const fetchPaintingAndImages = async () => {
      const foundPainting = paintings.find(p => p.title === decodedTitle);
      if (!foundPainting.slider || foundPainting.slider.length === 0) {
        try{
        const folderRef = ref(storage, decodedTitle);
        const res = await listAll(folderRef);

        const matchedItems = res.items.filter(itemRef =>
          itemRef.name.toLowerCase().startsWith(decodedTitle.replace(/\s+/g, '').toLowerCase())
        );
            if (matchedItems.length > 0) {
          const urls = await Promise.all(matchedItems.map(item => getDownloadURL(item)));
          setSliderImages(urls);
          setPainting(foundPainting);

        }
        }catch(err){
          console.error("Error listing Firebase folder:", err);
        }
        finally {
        setLoading(false);
      }
      }
      if (foundPainting.slider && foundPainting.slider.length > 0){
      setSliderImages(foundPainting.slider);
      setPainting(foundPainting);
     setLoading(false);
      }
    };

    fetchPaintingAndImages();
  }, [decodedTitle]);

  if (loading) return <p className="text-center">Loading painting...</p>;
  if (!painting) return <p className="text-center">Painting not found</p>;

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1, arrows: true } }]
  };

  return (
    <Fragment>
      <Header />
      <div className="slider-container">
        <Headings heading={painting.title} />
        <hr className="w-85 bg-dark mx-auto mt-1 mb-1" />

        <Slider {...settings}>
          {sliderImages.map((src, index) => (
            <div key={index} className="slide-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src={src}
                alt={`Slide ${index}`}
                className='slider-img slider-image'
                style={{ maxWidth: '100%', transition: 'transform 0.5s ease-in-out' }}
              />
            </div>
          ))}
        </Slider>

        <hr className="w-85 bg-dark mx-auto mt-4 mb-2" />

        <div className="mt-2">
          <h5 className='detail-section-title'>Availability :</h5>
          <PaintingDescription description={painting.availablity} />
        </div>

        <div className="mt-2">
          <h5 className='detail-section-title'>Material Options :</h5>
          <PaintingDescription description={painting.options} />
        </div>

        <div className="mt-2">
          <h5 className='detail-section-title'>Details :</h5>
          <PaintingDescription description={painting.description} />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default PaintingDetail;