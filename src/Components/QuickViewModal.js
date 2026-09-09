import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function QuickViewModal({ item, onClose }) {
  const navigate = useNavigate();

  if (!item) return null;

  const goToFullPage = () => {
    onClose();
    if (item.linkTo) {
      navigate(item.linkTo);
    } else {
      navigate(`/painting/${item.paintingId}`);
    }
  };

  return (
    <div className="quickview-overlay" onClick={onClose}>
      <div className="quickview-content" onClick={(e) => e.stopPropagation()}>
        <button className="quickview-close" onClick={onClose} aria-label="Close">
          &times;
        </button>

        <div className="quickview-image-wrap">
          <img className="quickview-image" src={item.src} alt={item.title} />
        </div>

        <div className="quickview-details">
          <h3 className="quickview-title">'{item.title}'</h3>
          {item.size && <p className="quickview-size">Size : {item.size}</p>}

          <div className="quickview-actions">
            <button className="quickview-view-btn" onClick={goToFullPage}>
              {item.linkLabel || 'View Full Page'}
            </button>
            <button className="quickview-close-btn" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}