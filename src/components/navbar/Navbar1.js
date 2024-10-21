import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar1.css';
import logo from '../img/IT ZONE LOGO.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    const [active, setActive] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isServicessDropdownOpen, setServicessDropdownOpen] = useState(false);
    const [showScrollContent, setShowScrollContent] = useState(false);
    const navigate = useNavigate();
    const closingTimer = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollContent(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSetActive = (link) => {
        setActive(active !== link ? link : "");
        setIsOpen(false);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const openServicessDropdown = () => {
        clearTimeout(closingTimer.current);
        setServicessDropdownOpen(true);
    };

    const closeServicesDropdown = () => {
        closingTimer.current = setTimeout(() => {
            setServicessDropdownOpen(false);
        }, 300); // Delay the closing by 300 ms
    };

    const  navigateToServicesSection = (hash) => {
      // Navigate function might not need to change the route but just handle the scrolling
      const path = `/services#${hash}`;
      navigate(path);
      setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
          }
      }, 0); // Adjust timing if needed, but it might work immediately if the elements are already mounted
  };
  

    return (
        <>
            <div className={`scroll-content ${showScrollContent ? 'show' : ''}`}>
                <div className='d-flex nav'>
                    <div className='d-flex para'>
                        <a href="tel:8861796976" style={{ textDecoration: "none", color: "black" }}>
                           &nbsp; &nbsp; &nbsp; &nbsp;  <i className="fas fa-phone"></i> 8861796976
                        </a> &nbsp; &nbsp; &nbsp; &nbsp;
                        <a href="mailto:info@it-zone.in" style={{ textDecoration: "none", color: "black" }}>
                            <i className="fas fa-envelope"></i> info@it-zone.in
                        </a>
                    </div>
                    <p className='mb-3'>Follow us:
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='p-2'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='p-2'>
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='p-2 icon'>
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </p>
                </div>
                <hr />
            </div>
            <nav className={`navbar ${showScrollContent ? 'fixed-top' : ''}`}>
                <div className="navbar-container">
                    <img src={logo} alt="Logo" className="logo" />
                    <div className="menu-toggle" onClick={toggleMenu}>
                        {isOpen ? (
                            <div className="close-icon">
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                        ) : (
                            <>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </>
                        )}
                    </div>
                    <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                        <li>
                            <NavLink exact to="/" activeClassName="active" onClick={() => handleSetActive("home")}>Home</NavLink>
                        </li>
                        <li onMouseEnter={openServicessDropdown} onMouseLeave={closeServicesDropdown}>
    <NavLink to="/services" activeClassName="active">Services</NavLink>
    {isServicessDropdownOpen && (
        <div className="service-dropdown" style={{ position: 'absolute', top: '60px' }}>
            <div className="service-dropdown-column">
                <button onClick={() =>  navigateToServicesSection('laptop-repair')} className='service-id1'>Laptop & Repair Services</button>
                <button onClick={() =>  navigateToServicesSection('data-backup&recovery')} className='service-id2'>Data Backup & Recovery</button>
               
            </div>
            <div className="dropdown-column" >
            <button onClick={() =>  navigateToServicesSection('software-licensing-service')} className='service-id3'>Software Licensing Service </button>
                <button onClick={() =>  navigateToServicesSection('cctv-installation')} className='service-id4'>CCTV Camera Installation</button>
            </div>
        </div>
    )}
</li>
                        <li>
                            <NavLink to="/services" activeClassName="active" onClick={() => handleSetActive("services")}>Products</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName="active" onClick={() => handleSetActive("about")}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeClassName="active" onClick={() => handleSetActive("contact")}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
