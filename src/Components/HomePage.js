// HomePage.js
import React, { useState, useEffect } from 'react';
import '../CSS/Homepage.css';
import image1 from '../Images/C2.jpg'
import image2 from '../Images/C4.jpg'
import image3 from '../Images/launch.jpg';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    image3,
    image1,
    image2,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [slides.length]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="home-page">

      {/* Slideshow Section */}
      <section className="slideshow">
        <button className="arrow prev" onClick={goToPrevSlide}>&lt;</button>
        <img className="slide" src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        <button className="arrow next" onClick={goToNextSlide}>&gt;</button>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
      
      </section>

    </div>
  );
};

export default HomePage;
