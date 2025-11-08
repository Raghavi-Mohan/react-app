// ...existing code...
import React, { useEffect } from 'react'
import Header from './Header';
import Footer from './Footer';
import ab from '../Asset/AB_1.png'
import abme from '../Asset/my_2.png'
import '../AboutMe.css'
// ...existing code...

export default function AboutMe() {
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
    <div className="about-page">
      <Header />
      <main className="container py-5">
        <section className="hero reveal">
          <div className="row align-items-center gx-5">
            <div className="col-md-6 text-center text-md-start">
              <h1 className="display-5 fw-bold">Discover My Art</h1>
              <p className="lead text-muted">
                I'm Raghavi Mohan — an abstract artist exploring Indian painting combined with rich textures. Each piece is crafted to add tactile depth and evolving visual interest.
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <div className="art-card">
                <img src={ab} alt="Abstract textured painting" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className="split reveal mt-5">
          <div className="row align-items-center gx-5">
            <div className="col-lg-6 order-lg-1">
              <div className="art-card alt">
                <img src={abme} alt="Artist portrait" loading="lazy" />
              </div>
            </div>
            <div className="col-lg-6 order-lg-2">
              <h2 className="fw-semibold">More Than a Signature</h2>
              <p className="text-muted">
                My work merges traditional Indian motifs with contemporary texture work — thoughtful layers, color harmonies, and tactile surfaces that invite closer viewing.
              </p>
              <ul className="list-unstyled text-muted">
                <li>• Textured mixed-media pieces</li>
                <li>• Commissions & framed walls</li>
                <li>• Shipping & display guidance</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
