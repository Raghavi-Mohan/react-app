import React, { Fragment, useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProductsCard({ children, paintingId }) {
  const navigate = useNavigate();
  const [isPressed, setIsPressed] = useState(false);
  const [inView, setInView] = useState(false);
  const cardRef = useRef(null);

  const goToPainting = () => navigate(`/painting/${paintingId}`);

  const handleClick = () => {
    setIsPressed(true);
    setTimeout(goToPainting, 150);
  };

  // On touch devices (no real hover), give cards a "hover-like" lift
  // as they scroll through the middle of the viewport.
  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (!isTouchDevice || !cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.6 } // card is "in view" once 60% visible, roughly center-screen
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const classNames = [
    'gallery-card',
    isPressed ? 'is-pressed' : '',
    inView ? 'in-view' : ''
  ].filter(Boolean).join(' ');

  return (
    <Fragment>
      <div
        ref={cardRef}
        className={classNames}
        onClick={handleClick}
        onTouchStart={() => setIsPressed(true)}
        onTouchEnd={() => setIsPressed(false)}
      >
        <div className="gallery-frame">
          {children}
        </div>
      </div>
    </Fragment>
  )
}
