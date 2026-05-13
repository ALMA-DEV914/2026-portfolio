import React from "react";
import heroImage from "../../assets/me.png";
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Alma</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color"> Frontend or Full Stack</span>{" "}
            <br />
            Developer - 
          </h1>
          <p className="hero--section-description">
            a passionate Web Developer focused on building responsive, user-friendly, and modern web applications. I enjoy turning ideas into functional digital experiences using technologies like React, JavaScript, Node.js, and modern UI frameworks. I’m always eager to learn new tools and create projects that combine clean design with efficient functionality.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src={heroImage} alt="Hero Section" className="hero-img" />
      </div>
    </section>
  );
}