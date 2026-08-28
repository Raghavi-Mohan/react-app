import React from "react";
import "./Headings.css";

export default function Headings({ heading, subtitle }) {
  return (
    <section className="page-heading" aria-labelledby="page-heading-title">

      {/* Small artistic eyebrow */}
      <div className="page-heading-eyebrow">
        <span className="heading-line" />
        <span className="heading-dot">✦</span>
        <span className="heading-line" />
      </div>

      {/* Main heading */}
      <h1
        id="page-heading-title"
        className="page-heading-title"
      >
        {heading}
      </h1>

      {/* Optional subtitle */}
      {subtitle && (
        <p className="page-heading-subtitle">
          {subtitle}
        </p>
      )}

      {/* Decorative bottom element */}
      <div className="page-heading-accent">
        <span />
        <span className="accent-leaf">⌁</span>
        <span />
      </div>

    </section>
  );
}