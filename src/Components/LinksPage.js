import React from "react";
import "../LinksPage.css";

const textureTonesLogo = `${process.env.PUBLIC_URL}/texture-tones-logo.png`;
const studioBrushes = `${process.env.PUBLIC_URL}/studio-brushes.png`;

const SocialIcon = ({ type }) => {
  const common = {
    viewBox: "0 0 24 24",
    width: 25,
    height: 25,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (type) {
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle
            cx="17.4"
            cy="6.7"
            r="1"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );

    case "tiktok":
      return (
        <svg {...common}>
          <path d="M14.2 4v9.2a4.3 4.3 0 1 1-3.2-4.15V12a1.8 1.8 0 1 0 1.5 1.75V4h1.7c.35 1.4 1.2 2.4 2.8 2.85V8.5A6 6 0 0 1 14.2 7V4Z" />
        </svg>
      );

    case "venmo":
      return <span className="brand-letter-icon">V</span>;

    case "cashapp":
      return <span className="brand-symbol-icon">$</span>;

    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.8 9h16.4M3.8 15h16.4M12 3.5c2.2 2.3 3.2 5.1 3.2 8.5S14.2 18.2 12 20.5M12 3.5C9.8 5.8 8.8 8.6 8.8 12s1 6.2 3.2 8.5" />
        </svg>
      );
  }
};

const LinksPage = () => {
  const links = [
    {
      name: "Instagram",
      description: "Behind the scenes, new art & updates",
      url: "https://www.instagram.com/texture_and_tones?igsh=M203MmpnNmRsZG91&utm_source=qr",
      color:
        "linear-gradient(110deg, #f9b34b 0%, #ed7656 38%, #d13a7c 70%, #8151c9 100%)",
      textColor: "#fff",
      icon: "instagram",
      className: "instagram-link",
    },
    {
      name: "TikTok",
      description: "Short videos of my art process",
      url: "https://www.tiktok.com/@textureandtones?_t=ZP-90sq38SXUg2&_r=1",
      color: "linear-gradient(135deg, #151515 0%, #050505 100%)",
      textColor: "#fff",
      icon: "tiktok",
      className: "tiktok-link",
    },
    {
      name: "Venmo",
      description: "Support my art",
      url: "https://venmo.com/u/Raghavi-Mohan-1",
      color: "linear-gradient(135deg, #58a9dc 0%, #3d95ce 100%)",
      textColor: "#fff",
      icon: "venmo",
      className: "venmo-link",
    },
    {
      name: "Cash App",
      description: "Support my art",
      url: "https://cash.app/$RaghaviM",
      color: "linear-gradient(135deg, #21c967 0%, #00a942 100%)",
      textColor: "#fff",
      icon: "cashapp",
      className: "cashapp-link",
    },
    {
      name: "Website",
      description: "Explore my collection of artwork",
      url: "https://raghavi-mohan.github.io/react-app/#/",
      color: "#fffaf6",
      textColor: "#332923",
      icon: "website",
      className: "website-link",
    },
  ];

  const handleShare = async () => {
    const shareData = {
      title: "Texture & Tones",
      text: "Explore Texture & Tones — art, studio updates and more.",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
      }
    } catch (error) {
      // User cancelled the native share dialog.
    }
  };

  return (
    <div className="links-root">

      <div className="links-card">

        {/* Share button */}
        <button
          type="button"
          className="share-button"
          onClick={handleShare}
          aria-label="Share Texture & Tones"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="18" cy="5" r="2.2" />
            <circle cx="6" cy="12" r="2.2" />
            <circle cx="18" cy="19" r="2.2" />
            <path d="m8 11 8-5M8 13l8 5" />
          </svg>
        </button>

        {/* Header */}
        <header className="links-header">

          <div className="brand-logo-wrap">
            <img
              className="brand-logo"
              src={textureTonesLogo}
              alt="Texture & Tones"
            />
          </div>

          <h1 className="links-title">
            Connect with me
          </h1>

          <div
            className="title-divider"
            aria-hidden="true"
          >
            <span />
            <b>♡</b>
            <span />
          </div>

          <p className="links-sub">
            Follow, support or explore — I share new work and studio updates
            here.
          </p>

        </header>

        {/* Links */}
        <ul
          className="links-list"
          role="list"
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="links-item"
            >
              <a
                className={`link-btn ${link.className}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: link.color,
                  color: link.textColor,
                }}
                aria-label={`Open ${link.name} in a new tab`}
              >

                {/* Icon */}
                <span
                  className="btn-icon"
                  aria-hidden="true"
                >
                  <SocialIcon type={link.icon} />
                </span>

                {/* Text */}
                <span className="btn-content">

                  <span className="btn-text">
                    {link.name}
                  </span>

                  <span className="btn-description">
                    {link.description}
                  </span>

                </span>

                {/* Arrow */}
                <span
                  className="btn-arrow"
                  aria-hidden="true"
                >
                  ›
                </span>

              </a>
            </li>
          ))}
        </ul>

        {/* Decorative divider */}
        <div
          className="footer-divider"
          aria-hidden="true"
        >
          <span />
          <span className="leaf-mark">
            ⌁
          </span>
          <span />
        </div>

        {/* Footer */}
        <footer className="links-footer">

          <div className="footer-message">

            <div className="footer-copy">

              <span
                className="footer-heart"
                aria-hidden="true"
              >
                ♡
              </span>

              <div>
                <h2>
                  Thanks for visiting
                </h2>

                <p>
                  Creative ideas, commissions and collaborations welcome.
                </p>
              </div>

            </div>

            <img
              className="studio-brushes"
              src={studioBrushes}
              alt="Paint brushes in an artist's cup with leaves"
            />

          </div>

          <p className="signature-line">
            Handmade with ♡ and lots of texture
          </p>

        </footer>

      </div>

    </div>
  );
};

export default LinksPage;