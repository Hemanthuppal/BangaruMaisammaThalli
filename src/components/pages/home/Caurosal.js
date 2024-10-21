import React from 'react';
import './Carousel.css'; // Adjust the path based on your folder structure


const Carousel = ({ images }) => {
  return (
    <div id="demo" className="carousel slide" data-bs-ride="carousel" style={{ marginTop: "30px" }}>
      {/* Indicators/Dots */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
          ></button>
        ))}
      </div>

      {/* Slideshow/Carousel */}
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <img src={image.src} alt={image.alt} className="d-block w-100 carousel-image" />
          </div>
        ))}
      </div>

      {/* Left and right controls/icons */}
      <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Carousel;
