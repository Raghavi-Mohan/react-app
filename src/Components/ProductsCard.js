import React, { Fragment, useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProductsCard({ children, paintingId, onQuickView }) {
  const navigate = useNavigate();
  const [isPressed, setIsPressed] = useState(false);
  const [touchHover, setTouchHover] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const cardRef = useRef(null);

  const goToPainting = () => navigate(`/painting/${paintingId}`);

  const handleClick = () => {
    setIsPressed(true);
    // If a quick-view handler was passed in, open the modal instead of
    // navigating straight to the full page. Falls back to direct
    // navigation if no handler is provided, so this stays backward
    // compatible with any usage that doesn't pass onQuickView.
    setTimeout(() => {
      if (onQuickView) {
        onQuickView();
      } else {
        goToPainting();
      }
    }, 150);
  };

  // On touch devices (no real hover), give cards a "hover-like" lift
  // as they scroll through the middle of the viewport. Repeats every
  // time the card passes through view.
  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (!isTouchDevice || !cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setTouchHover(entry.isIntersecting),
      { threshold: 0.6 }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  // Scroll-reveal: fade/slide the card in the first time it enters the
  // viewport. Runs on all devices (not just touch), and only fires once
  // per card - we unobserve after the first reveal.
  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const classNames = [
    'gallery-card',
    isPressed ? 'is-pressed' : '',
    touchHover ? 'touch-hover' : '',
    revealed ? 'revealed' : ''
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