import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


const PaintingDescription = ({ description }) => {
  const [expanded, setExpanded] = useState(false);
  const previewSentenceCount = 2;

  // Split description into sentences
  const sentences = description.split(/(?<=\.)\s+/); // splits after each period

  const toggleExpanded = () => setExpanded((previousExpanded) => !previousExpanded);

  const visibleSentences = expanded
    ? sentences
    : sentences.slice(0, previewSentenceCount);

  return (
    <div>
      {visibleSentences.map((sentence, index) => (
        <p key={index} className="painting-description">
          {sentence.trim()}
        </p>
      ))}

      {sentences.length > previewSentenceCount && (
        <button
            type="button"
          onClick={toggleExpanded}
          className="painting-description-toggle"
            aria-label={expanded ? 'Collapse description' : 'Expand description'}
            aria-expanded={expanded}
        >
          {expanded ? <FaChevronUp /> : <FaChevronDown />}
          <span>{expanded ? 'Less' : 'More'}</span>
        </button>
      )}
    </div>
  );
};

export default PaintingDescription;
