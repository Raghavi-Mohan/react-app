import React, { Fragment } from 'react';
import Header from './Header';
import Headings from './Headings';
import Footer from './Footer';
import PaintingDescription from './PaintingDescription';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import paintings from './paintings.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PaintingDetail = () => {
    const { title } = useParams();
    const decodedTitle = decodeURIComponent(title);
    const painting = paintings.find(p => p.title === decodedTitle);
    console.log("Raw title:", title);
    console.log("Decoded title:", decodedTitle);
    console.log("Slider image array:", painting.slider);
    painting.slider.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => console.log("Loaded:", src);
        img.onerror = () => console.error("Failed to load:", src);
    });

    if (!painting) return <p>Painting not found</p>;

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: true
                }
            }
        ]
    };

    return (
        <Fragment>
            <Header />
            <div className="slider-container">
                <Headings heading={painting.title} />
                <hr className="w-85 bg-dark mx-auto mt-1 mb-1" />
                <Slider {...settings}>
                    {painting.slider.map((src, index) => (
                        <div key={index} className="slide-wrapper" style={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
                            <img
                                src={src}
                                alt={`Slide ${index}`}
                                className='slider-img slider-image'
                                style={{ maxWidth:'100%', transition: 'transform 0.5s ease-in-out' }}
                            />
                        </div>
                    ))}
                </Slider>
                <hr className="w-85 bg-dark mx-auto mt-4 mb-2" />

                <div className="mt-2">
                    <h5 className='description fw-bold fst-italic'>Availablity :</h5>
                    <PaintingDescription description={painting.availablity} />
                </div>
                <div className="mt-2">
                    <h5 className='description fw-bold fst-italic'>Material Options :</h5>
                    <PaintingDescription description={painting.options} />
                </div>
                <div className="mt-2">
                    <h5 className='description fw-bold fst-italic'>Details :</h5>
                    <PaintingDescription description={painting.description} />
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default PaintingDetail;