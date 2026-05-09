import React from "react";
import heroImage from "../../assets/hero-mage.png";
export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <h2>Hi, I'm Alma, Frontend Developer/Full Stack Developer</h2>
        <span className="highlight">
          Creative Problem Solver. Building modern and responsive web
          experiences.
        </span>
        <div className="button-container">
          <button className="btn">Get in Touch</button>
        </div>
      </div>
      <div className="hero-image">
        <img
          src={heroImage}
          alt="Hero"
          className="hero-img"
          width="400"
          height="500"
        />
      </div>
    </section>
  );
}
