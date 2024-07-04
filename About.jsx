import React from 'react';
import './about.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>At Deals & Wheels, our story began with a passion for automobiles. Founded in 2010 by two car enthusiasts, John and Sarah, our journey started from a small garage, where we repaired and restored classic cars as a hobby. Over time, our love for cars grew into a thriving business, and Deals & Wheels was born.</p>
        </section>
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>Our mission at Deals & Wheels is to provide customers with top-quality vehicles and exceptional service. We strive to exceed expectations by offering a wide selection of cars, transparent pricing, and personalized assistance. Whether you're buying your first car or upgrading to a luxury model, we're here to help you find the perfect vehicle to fit your lifestyle and budget.</p>
        </section>
        <section className="about-section">
          <h2>Our Team</h2>
          <p>Our team consists of dedicated professionals who share a common passion for cars. From our experienced sales representatives to our skilled mechanics, everyone at Deals & Wheels is committed to delivering excellence. We work tirelessly to ensure that every customer has a positive experience and drives away satisfied with their purchase. Meet our team and discover why Deals & Wheels is your trusted source for all things automotive.</p>
        </section>
      </div>
    </div>
  );
};

export default About;
