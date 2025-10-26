import React from "react";

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
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.heading}>Connect With Me</h1>
        <ul style={styles.list}>
          {links.map((link, index) => (
            <li key={index} style={styles.listItem}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...styles.link,
                  background: link.color,
                  color: link.textColor,
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f7f7f8",
    margin: 0,
    padding: "20px",
  },
  box: {
    textAlign: "center",
    background: "#fff",
    padding: "40px 30px",
    borderRadius: "16px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
    width: "100%",
    maxWidth: "420px",
  },
  heading: {
    marginBottom: "24px",
    fontSize: "26px",
    fontWeight: "700",
    color: "#111",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    margin: "12px 0",
  },
  link: {
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "600",
    borderRadius: "12px",
    display: "inline-block",
    width: "80%",
    padding: "14px 0",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
};

// subtle hover effect
styles.linkHover = {
  transform: "translateY(-2px)",
  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
};

export default LinksPage;