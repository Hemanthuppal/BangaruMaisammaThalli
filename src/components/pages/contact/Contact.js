import React, { useState } from "react";
import axios from "axios";
import "./Contact.css"; // Import CSS file
import "@fortawesome/fontawesome-free/css/all.css";
import { Button, TextField } from "@mui/material";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    setResult("Sending....");
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://kodamharish.pythonanywhere.com/it_zone_send_mail",
        {
          to_email: `${formData.email}`,
          user_subject: `Confirmation Message from IT Zone`,
          admin_subject: "Enquiry from customer",
          mobile: `${formData.phone}`,
          name: `${formData.name}`,
          message: `${formData.message}`,
        }
      );
      setResult("Form Submitted Successfully");
      setFormData({
        name: "",
        email: "",
        message: "",
        phone: "",
      });
    } catch (error) {
      console.error("Failed to send message:", error);
      setResult("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      {/* Banner Image */}
      <div className="banner">
        <img
          src="https://t3.ftcdn.net/jpg/03/82/68/88/360_F_382688869_JMSmjsyJnC5Kro9yVxRwtS42R7OHmybw.jpg"  // Updated Banner Image
          alt="Banner"
          className="banner-image"
        />
      </div>

      {/* Contact Section (Quick Contact and Form Side by Side) */}
      <div className="contact-section" style={{ backgroundImage: "url(https://sreebhadrakalimatha.com/images/background/foot-bg.jpg)" }}>
        <div className="contact-content">
          {/* Quick Contact Section */}
          <div className="quick-contact">
            <h3>Quick Contact</h3>
            <p style={{fontSize:"20px"}}>If you have any questions, simply use the following contact details.</p>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i> Address:
              <p style={{fontSize:"20px"}}>Tadkamalla Village, Warangal, Telangana 506007.</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i> Email:
              <p style={{fontSize:"20px"}}>sreebhadrakalimatasree@gmail.com</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i> PHONE:
              <p style={{fontSize:"20px"}}>(+91) 949 1000 707</p>
            </div>

            {/* Social Media Icons */}
            <div className="social-icons ">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-pinterest"></i>
              <i className="fab fa-google"></i>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form">
            <h3>Contact Us</h3>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                required
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </form>
            <p>{result}</p>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3888.1948484614027!2d77.5829783!3d12.9593803!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e714f6f185%3A0xe595c218e966697e!2sAuto%20Tower!5e0!3m2!1sen!2sin!4v1714993188457!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

