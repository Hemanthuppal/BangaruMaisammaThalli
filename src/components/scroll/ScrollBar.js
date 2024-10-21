import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import './ScrollBar.css';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to scroll smoothly to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                console.log("Show button");
                setIsVisible(true);
            } else {
                console.log("Hide button");
                setIsVisible(false);
            }
        };
    
        window.addEventListener('scroll', toggleVisibility);
    
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    

    return (
        <button
        onClick={scrollToTop}
        className={`scroll-to-top ${isVisible ? 'show' : ''}`}
        style={{ display: isVisible ? 'block' : 'none', backgroundColor: 'red' }} // temporary background color
    >
        <FaAngleUp size={24} />
    </button>
    
    );
};

export default ScrollToTop;
