import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


const PaintingDescription = ({ description }) => {
  const [expanded, setExpanded] = useState(false);
  const previewSentenceCount = 2;

  // Split description into sentences
  const sentences = description.split(/(?<=\.)\s+/); // splits after each period

  const toggleExpanded = () => setExpanded(!expanded);

  const visibleSentences = expanded
    ? sentences
    : sentences.slice(0, previewSentenceCount);

  return (
    <div>
      {visibleSentences.map((sentence, index) => (
        <p key={index}  className="description" style={{ lineHeight: '1.5' }}>
          {sentence.trim()}
        </p>
      ))}

      {sentences.length > previewSentenceCount && (
        <button
          onClick={toggleExpanded}
          style={{
            background: 'none',
            border: 'none',
            color: '#000',
            cursor: 'pointer',
            padding: 0,
            fontSize: '1em',
          }}
        >
          {expanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      )}
    </div>
  );
};

export default PaintingDescription;
