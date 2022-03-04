import React from 'react';
import Navbar  from './Navbar';
import Footer from './Footer';
import Home from './Home';
import AboutContent from './AboutContent';
import FAQContent from './FAQContent';
import ServiceContent from './ServiceContent';
import { Routes, Route } from "react-router-dom";


export default function App(){
    return (
        <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/AboutContent" element={<AboutContent />} />
          <Route exact path="/FAQContent" element={<FAQContent />} />
          <Route exact path="/ServiceContent" element={<ServiceContent />} />
          </Routes>
          <Footer/>
    </div>
    );
}
