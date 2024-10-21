import React from 'react';
import './footer.css'
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Padding } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-white mt-3" style={{ backgroundColor: '#0d0f21' }}>
      <Container className="p-2 pb-0 text-white">
      <Row>
          <Col md={4} lg={4} xl={4} className="mx-auto mt-3 text-center" >
            <h7 className="text-uppercase mb-4 font-weight-bold text-white">© 2024 IT-Z<span style={{ color: 'red' }}>O</span>NE</h7>
            <p className='d-none d-md-block'>
            In the IT industry, our team decided to alter direction. 
            One Stop Destination for all your laptop things.
            </p>
            
            <p>Mon - Sat: 09:00 AM - 06:00 PM</p>
          </Col>

          <Col md={4} lg={4} xl={4} className="mx-auto mt-3 text-center quick-links-container">
  <h7 className="text-uppercase mb-5 font-weight-bold quicklinks " >Quick links</h7>
  <div style={{marginTop:"15px"}}>
  <p><a href="/" className="text-white zoom-effect " >Home</a></p>
  <p><a href="/products" className="text-white zoom-effect">Products</a></p>
  <p><a href="/services" className="text-white zoom-effect">Services</a></p>
  <p><a href="/about" className="text-white zoom-effect">About</a></p>
  <p><a href="/contact" className="text-white zoom-effect">Contact</a></p>
  </div>
</Col>

          <Col md={4} lg={4} xl={4} className="mx-auto mt-3 ">
            <h7 className="text-uppercase mb-4 font-weight-bold quicklinks"style={{ marginLeft:"20px"}}>Address</h7>
            <p><i className="fas fa-map-marker-alt mt-4"></i>  <a
                  href="https://maps.app.goo.gl/d1K48MBZf6ktAY5T9"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color:"white"}}
                >
                  IT-Z<span style={{color: "red"}}>O</span>NE,
                  Auto Tower,J. C Road,<br/><span style={{marginLeft: "18px"}}> Bengaluru 560002.</span>
                </a>  </p>
            <p><i className="fas fa-envelope mr-3"></i> <a
                  href="mailto:info@it-zone.in"
                  style={{ textDecoration: "none",  color:"white" }}
                >
                  info@it-z<span style={{color:"red"}}>o</span>ne.in
                </a></p>
            <p><i className="fas fa-phone mr-3"></i>  <a href="tel:8861796976" style={{ textDecoration: "none", color:"white"}}>
                     8861796976
                </a></p>
          </Col>
        </Row>

        <hr className="my-3" />

        <section className="p-3 pt-0">
          <Row className="d-flex align-items-center">
            <Col md={12} lg={12} className="text-center text-md-center">
              <div className="p-3">
                © 2024 :
                <a href="/" className="text-white"> Bangaru Maisamma Thalli</a>
              </div>
            </Col>

            {/* <Col md={5} lg={4} className="ml-lg-0 text-center text-md-end">
            <p className='mb-3 'style={{fontSize:"22px", marginRight:"20px"}}>Follow us: <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='p-2'>
            <FontAwesomeIcon icon={faInstagram}  />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='p-2'>
            <FontAwesomeIcon icon={faTwitter}  />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='p-2 icon'>
            <FontAwesomeIcon icon={faFacebook} />
          </a></p>
            </Col> */}
          </Row>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;