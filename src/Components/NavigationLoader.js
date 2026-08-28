import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./LoadingScreen.css";

export default function NavigationLoader() {
  const location = useLocation();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loader whenever navigation happens
    setLoading(true);

    // Hide after the target page has had time to render
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname]);

  if (!loading) {
    return null;
  }

  return (
    <div className="navigation-loading-overlay">

      <div className="navigation-loading-card">

        {/* Logo */}
        <div className="loading-logo-wrapper">
          <img
            src={`${process.env.PUBLIC_URL}/texture-tones-logo.png`}
            alt="Texture & Tones"
            className="loading-logo"
          />
        </div>

        {/* Brand */}
        <div className="loading-brand">
          Texture & Tones
        </div>

        {/* Loading message */}
        <div className="loading-message">
          Something beautiful is taking shape…
        </div>

        {/* Paint brush loading animation */}
        <div className="paint-loader-wrapper">

          <svg
            className="paint-loader"
            viewBox="0 0 260 90"
            role="img"
            aria-label="Painting in progress"
          >

            {/* Invisible path used by the brush animation */}
            <path
              id="paintLoadingPath"
              d="
                M 18 48
                C 32 18,
                  55 18,
                  68 46
                S 103 74,
                  118 45
                S 151 17,
                  168 45
                S 204 74,
                  220 38
                S 242 24,
                  250 16
              "
              fill="none"
            />

            {/* Soft background stroke */}
            <path
              className="paint-stroke-base"
              d="
                M 18 48
                C 32 18,
                  55 18,
                  68 46
                S 103 74,
                  118 45
                S 151 17,
                  168 45
                S 204 74,
                  220 38
                S 242 24,
                  250 16
              "
              fill="none"
              pathLength="100"
            />

            {/* Animated painted stroke */}
            <path
              className="paint-stroke-progress"
              d="
                M 18 48
                C 32 18,
                  55 18,
                  68 46
                S 103 74,
                  118 45
                S 151 17,
                  168 45
                S 204 74,
                  220 38
                S 242 24,
                  250 16
              "
              fill="none"
              pathLength="100"
            />

            {/* Paint brush */}
            <g className="paint-brush">

              {/* Brush bristles */}
              <path
                className="brush-bristles"
                d="M 0 0 L 12 -5 L 16 5 L 3 8 Z"
              />

              {/* Brush ferrule */}
              <rect
                className="brush-ferrule"
                x="10"
                y="-5"
                width="9"
                height="10"
                rx="2"
              />

              {/* Brush handle */}
              <path
                className="brush-handle"
                d="
                  M 18 0
                  L 31 -3
                  Q 35 -4 37 0
                  Q 35 4 31 3
                  Z
                "
              />

              {/* Small highlight */}
              <path
                className="brush-highlight"
                d="M 20 -1 L 31 -2"
              />

              {/* Brush animation along the painted path */}
              <animateMotion
                dur="2.8s"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href="#paintLoadingPath" />
              </animateMotion>

            </g>

          </svg>

          {/* Tiny paint dots */}
          <span className="paint-dot paint-dot-one" />
          <span className="paint-dot paint-dot-two" />
          <span className="paint-dot paint-dot-three" />

        </div>

      </div>

    </div>
  );
}