import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import Services from "./components/pages/services/Services";
import Home from "./components/pages/home/Home";
import Products from "./components/pages/products/Products";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";

import ScrollBar from "./components/scroll/ScrollBar";
import WhatsApp from './components/whatsapp/WhatsAppButton';
import Donation from "./components/pages/Donation/Donation";
import Events from "./components/pages/Events/Events";
import Service from "./components/pages/Service/Services";
import Admincontact from "./components/Admin/Contact/Contact";
import Login from "./components/Admin/Login/Login";
import Admindonation from "./components/Admin/Donation/Donation";

function AppLayout({ children }) {
    const location = useLocation();

    // Define paths where Navbar, ScrollBar, Footer, and WhatsApp are excluded
    const excludedPaths = ["/admincontact", "/login", "/admindonation"];
    const isExcluded = excludedPaths.includes(location.pathname);

    return (
        <>
            {!isExcluded && <Navbar />}
            {!isExcluded && <ScrollBar />}
            {children}
            {!isExcluded && <Footer />}
            {!isExcluded && <WhatsApp />}
        </>
    );
}

function App() {
    return (
        <Router>
            <AppLayout>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/donation" element={<Donation />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/admincontact" element={<Admincontact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admindonation" element={<Admindonation />} />
                </Routes>
            </AppLayout>
        </Router>
    );
}

export default App;
