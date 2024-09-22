
import React from 'react';
import '../custom_css/Hero.css';
import image from '../assets/image.png'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src= {image} alt="profile" />
      </div>
      <div className="hero-text">
        <h1>Hello!</h1>
        <p>I’m an India-based web designer and developer working closely with early-stage startup founders to create beautiful and lovable websites for their business.</p>
        <button className="contact-btn">Contact</button>
      </div>
    </section>
  );
};

export default Hero;
