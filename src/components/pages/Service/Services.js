import React from 'react';
import './Services.css';
import archana from './../../img/templeview614@2x.b0a8b7de.png';
import annadanam from './../../img/annadanam.jpg';
import underline from "./../../img/cropunderline.png"

const Services = () => {
  return (
    <div
      className="services-temple"
      style={{
        backgroundColor: "#FEFCF3", // Set background color
        padding: "50px",
        minHeight: "100vh", // Ensure the section spans the viewport height
      }}
    >
      <div className="container mt-4">
        {/* Page Header */}
        <h1
          className="text-center mb-2 mt-5"
          style={{ marginTop: "20px" }} // Added margin-top for Services header
        >
          Services
        </h1>
        <div className="text-center mb-5 ">
          <img
            src={underline}
            alt="Underline Decoration"
            style={{ width: "200px", height: "auto" }}
          />
        </div>
      

        {/* Archana Section */}
        <div className="row mb-5 d-flex align-items-stretch">
          <div
            className="col-md-4 d-flex"
            style={{ marginTop: "30px" }} // Added margin-top for the Archana image
          >
            <img
              src={archana}
              alt="Archana"
              className="img-fluid rounded"
              style={{ width: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-center">
            <h2 className="text-start">Archana</h2>
            <p>
              Archana is a special prayer offered to the deity to seek blessings.
              It is performed with devotion and includes chanting of the devotee's
              name and the offering of flowers and other sacred items to the deity.
              This ritual brings a sense of peace and divine connection to the
              devotees. Archana holds a significant role in connecting devotees to
              the divine realm, fostering gratitude, and invoking prosperity. The
              process imbues one with spiritual energy and strengthens their faith.
              Performing Archana regularly is believed to enhance spiritual growth 
              and bring good fortune to one's life.
            </p>
          </div>
        </div>

        {/* Annadanam Section */}
        <div className="row d-flex align-items-stretch">
          <div className="col-md-8 d-flex flex-column justify-content-center">
            <h2 className="text-start">Annadanam</h2>
            <p>
              Annadanam, meaning the donation of food, is a sacred service provided
              by the temple. This initiative ensures that no devotee or needy
              person goes hungry. By offering free food, the temple serves the
              community and helps create a spirit of equality and compassion among
              people. The practice of Annadanam not only alleviates hunger but also
              instills values of sharing and caring among individuals. It is
              believed that feeding the hungry brings immense spiritual benefits
              and contributes to the well-being of society. Annadanam reflects the
              ethos of kindness and serves as a cornerstone for fostering harmony
              and well-being in the community.
            </p>
          </div>
          <div className="col-md-4 d-flex">
            <img
              src={annadanam}
              alt="Annadanam"
              className="img-fluid rounded"
              style={{ width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
