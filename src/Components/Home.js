// ...existing code...
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import T_ALL_1 from '../Asset/T_ALL_1.png'
import ALL_2 from '../Asset/ALL_2.png'
import me from '../Asset/my.png'
import B_ALL_1 from '../Asset/B_ALL_1.png'
import ALL_3 from '../Asset/C_ALL_1.png'
import '../Home.css'
// ...existing code...

export default function Home() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(i => obs.observe(i));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="home-page">
      <Header />

      <main className="home-main">
        {/* HERO */}
        <section className="hero reveal">
          <div className="container">
            <div className="row align-items-center gx-5">
              <div className="col-lg-6 text-center text-lg-start">
                <h1 className="hero-title">Crafted with Passion, Painted with Purpose</h1>
                <p className="hero-sub">Original abstract paintings and handcrafted mini-treasures made with layered textures and color harmonies.</p>
                <div className="hero-ctas">
                  <a href="#/products" className="btn btn-primary btn-lg me-2">View Studio</a>
                  <Link to="/gallery" className="btn btn-outline-dark btn-lg">Browse Works</Link>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="art-card">
                  <img src={T_ALL_1} alt="Studio artwork" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE / COLLECTIONS */}
        <section className="features reveal">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <article className="feature-card">
                  <div className="card-media">
                    <img src={ALL_2} alt="Pocket & Page Collection" loading="lazy" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Mini Treasures</h3>
                    <p className="card-text">Handcrafted magnets, bookmarks, and keychains—small in size, rich in story.</p>
                    <a href="#/crafts" className="btn btn-sm btn-primary">View Collection</a>
                  </div>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="feature-card">
                  <div className="card-media">
                    <img src={me} alt="Artist portrait" loading="lazy" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Behind the Brush</h3>
                    <p className="card-text">I’m Raghavi — a self-representing abstract artist blending spontaneity and texture-driven layers.</p>
                    <a href="#/aboutme" className="btn btn-sm btn-primary">About Me</a>
                  </div>
                </article>
              </div>
                <div className="col-12 col-md-6 col-lg-4 order-3">
                <article className="feature-card promo">
                  <div className="promo-content">
                    <h3 className="card-title">Commissions & Framing</h3>
                    <p className="card-text">Custom sizes, framing advice, and safe shipping — let's create something for your wall.</p>
                    <a href="#/links" className="btn btn-sm btn-outline-dark">Get in touch</a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* SMALL GALLERY PREVIEW */}
        <section id="gallery" className="gallery-preview reveal">
          <div className="container">
            <h4 className="section-heading text-center mb-4">A few recent works</h4>
            <div className="row g-3 justify-content-center">
              <div className="col-6 col-sm-4 col-md-3">
                <div className="thumb">
                  <img src={B_ALL_1} alt="" loading="lazy" />
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-3">
                <div className="thumb">
                  <img src={ALL_2} alt="" loading="lazy" />
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-3">
                <div className="thumb">
                  <img src={ALL_3} alt="" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
// ...existing code...