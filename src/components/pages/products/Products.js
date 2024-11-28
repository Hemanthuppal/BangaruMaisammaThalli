import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import gallery1 from "./../../img/temple gallery.png";
import gallery2 from "./../../img/3-2.jpg";
import gallery3 from "./../../img/4-2.jpg";
import gallery4 from "./../../img/8-1.jpg";
import gallery5 from "./../../img/5-2.jpg";
import gallery6 from "./../../img/6-2.jpg";
import gallery7 from "./../../img/7-1.jpg";
import gallery8 from "./../../img/8-1.jpg";
import gallery9 from "./../../img/9-1.jpg";
import "./Product.css";
import underline from "./../../img/cropunderline.png";

const Products = () => {
  const images = [
    gallery1, gallery2, gallery3,
    gallery4, gallery5, gallery6,
    gallery7, gallery8, gallery9
  ];

  const [showCarousel, setShowCarousel] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openCarousel = (index) => {
    setCurrentIndex(index);
    setShowCarousel(true);
  };

  const closeCarousel = (e) => {
    if (e.target.classList.contains('carousel-overlay')) {
      setShowCarousel(false);
    }
  };

  const handleSelect = (selectedIndex) => {
    setCurrentIndex(selectedIndex);
  };

  return (
    <div
      className="gallery-background"
      style={{ backgroundColor: "#FEFCF3", backgroundImage: "none", minHeight: "100vh" }}
    >
      <div className="container" style={{ marginTop: "50px" }}>
        {/* Header */}
        <h3 className="text-center mb-2" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
          Gallery
        </h3>
        <div className="text-center mb-5">
          <img
            src={underline}
            alt="Underline Decoration"
            style={{ width: "200px", height: "auto" }}
          />
        </div>

        {/* Image Grid */}
        <div className="row g-4">
          {images.map((image, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="image-frame"
                style={{
                  border: "4px solid #ddd", // Increased border size for a thicker frame
                  borderRadius: "20px", // More rounded corners for a smoother frame
                  padding: "15px", // Increased padding for a larger frame
                  backgroundColor: "#fff",
                  boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)", // Larger shadow for a bigger effect
                }}
              >
                <img
                  src={image}
                  className="img-fluid gallery-img"
                  alt={`Gallery ${index + 1}`}
                  onClick={() => openCarousel(index)}
                  style={{
                    cursor: "pointer",
                    borderRadius: "15px", // Rounding the inner image
                    height: "400px", // Increased height for bigger images
                    objectFit: "cover", // Ensures the image fits the frame properly
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Overlay */}
        {showCarousel && (
          <div
            className="carousel-overlay"
            onClick={closeCarousel}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: 1050,
            }}
          >
            <Carousel
              activeIndex={currentIndex}
              onSelect={handleSelect}
              indicators={false}
              interval={null}
              controls
            >
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="d-block w-100"
                    style={{
                      height: index === 0 ? "65vh" : "90vh", // First image has reduced height
                      objectFit: "cover", // Ensures the image covers the container
                      objectPosition: index === 0 ? "top" : "center", // Top part for the first image
                    }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
