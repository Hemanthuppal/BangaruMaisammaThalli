import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../img/bangaru maisamma (3).jpg';


const Navbar = () => {
    const [activeLink, setActiveLink] = useState(window.location.pathname);
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("");
    const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);
    const [showScrollContent, setShowScrollContent] = useState(false);
    const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
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
        setActiveLink(activeLink);
        setIsOpen(false);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const openProductsDropdown = () => {
        clearTimeout(closingTimer.current);
        setProductsDropdownOpen(true);
        setServicesDropdownOpen(false); // Close services dropdown if open
    };

    const closeProductsDropdown = () => {
        closingTimer.current = setTimeout(() => {
            setProductsDropdownOpen(false);
        }, 300); // Delay the closing by 300 ms
    };

    const openServicesDropdown = () => {
        clearTimeout(closingTimer.current);
        setServicesDropdownOpen(true);
        setProductsDropdownOpen(false); // Close products dropdown if open
    };

    const closeServicesDropdown = () => {
        closingTimer.current = setTimeout(() => {
            setServicesDropdownOpen(false);
        }, 300); // Delay the closing by 300 ms
    };



    return (
        <>
        <div className='navabar-itzone' >
           
            <nav className={`navbar ${showScrollContent ? 'fixed-top' : ''}`} style={{ position: 'fixed', width: '100%',height: "100px", zIndex: 100 }}>
                <div className="navbar-container">
                    <img src={logo} alt="Logo" className="logo img-fluid" />
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
                            <a
                                href="/"
                                className={`nav-item ${activeLink === "/" ? "active" : ""}`}
                                onClick={() => handleSetActive("home")}
                            >
                                Home
                            </a>
                        </li>
                        <li onMouseEnter={openProductsDropdown} onMouseLeave={closeProductsDropdown}>
                            <a
                                href="/products"
                                className={`nav-item ${activeLink === "/products" ? "active" : ""}`}
                                onClick={() => handleSetActive("products")}
                            >
                                Gallery
                            </a>
                          
                        </li>
                        <li onMouseEnter={openServicesDropdown} onMouseLeave={closeServicesDropdown}>
                            <a
                                href="/services"
                                className={`nav-item ${activeLink === "/services" ? "active" : ""}`}
                                onClick={() => handleSetActive("services")}
                            >
                                Event
                            </a>
                          
                        </li>
                        <li>
                            <a
                                href="/about"
                                className={`nav-item ${activeLink === "/about" ? "active" : ""}`}
                                onClick={() => handleSetActive("about")}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/donation"
                                className={`nav-item ${activeLink === "/donation" ? "active" : ""}`}
                                onClick={() => handleSetActive("donation")}
                            >
                                Donation
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className={`nav-item ${activeLink === "/contact" ? "active" : ""}`}
                                onClick={() => handleSetActive("contact")}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        </>
    );
};

export default Navbar;
