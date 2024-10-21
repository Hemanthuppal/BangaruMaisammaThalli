import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
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


const firebaseConfig = {
    apiKey: "AIzaSyAN5iAQ-SH1c1kH0o7sQLVPQmxoA1Y720o",
    authDomain: "itzone-1.firebaseapp.com",
    projectId: "itzone-1",
    storageBucket: "itzone-1.appspot.com",
    messagingSenderId: "1039888475771",
    appId: "1:1039888475771:web:3fdc6ad5245122d623e4de",
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);
  const auth = getAuth(app);
  
  export { app, db, storage, getFirestore, auth };



function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <ScrollBar />
                <Routes>
                    <Route path="/" exact element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/services" element={<Services/>}/> 
                    <Route path="/products" element={<Products/>} />
                    <Route path="/contact" element={<Contact/>} /> 
                    <Route path="/donation" element={<Donation/>} /> 
                    
                    
                </Routes>
                <Footer/>
                <WhatsApp/>
            </div>
        </Router>
    );
}

export default App;
