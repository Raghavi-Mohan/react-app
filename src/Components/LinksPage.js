// ...existing code...
import React from "react";
import '../LinksPage.css';

const LinksPage = () => {
  const links = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/texture_and_tones?igsh=M203MmpnNmRsZG91&utm_source=qr",
      color: "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
      textColor: "#fff"
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@textureandtones?_t=ZP-90sq38SXUg2&_r=1",
      color: "#000",
      textColor: "#fff"
    },
    {
      name: "Venmo",
      url: "https://venmo.com/u/Raghavi-Mohan-1",
      color: "#3D95CE",
      textColor: "#fff"
    },
    {
      name: "Cash App",
      url: "https://cash.app/$RaghaviM",
      color: "#00C244",
      textColor: "#fff"
    },
    {
      name: "Website",
      url: "https://raghavi-mohan.github.io/react-app/#/",
      color: "#e0e0e0",
      textColor: "#111"
    },
  ];

  return (
    <div className="links-root">
      <div className="links-card">
        <header className="links-header">
          <h1 className="links-title">Connect with me</h1>
          <p className="links-sub">Follow, support or explore — I share new work and studio updates here.</p>
        </header>

        <ul className="links-list" role="list">
          {links.map((link, index) => (
            <li key={index} className="links-item">
              <a
                className="link-btn"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: link.color, color: link.textColor }}
                aria-label={`Open ${link.name} in a new tab`}
              >
                <span className="btn-icon" aria-hidden>{link.name.charAt(0)}</span>
                <span className="btn-text">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>

        <footer className="links-footer">
          <small>Thanks for visiting — orders, commissions and collaborations welcome.</small>
        </footer>
      </div>
    </div>
  );
};

export default LinksPage;
// ...existing code...