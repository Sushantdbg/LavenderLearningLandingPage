import React from 'react';
import Navbar  from './Navbar';
import Footer from './Footer';
import HomeContent from './HomeContent';
import AboutContent from './AboutContent';
import FAQContent from './FAQContent';
import ServiceContent from './ServiceContent';

export default function App(){
    return (
        <>
        <Navbar />
        <HomeContent />
        <AboutContent />
        <FAQContent />
        <ServiceContent />
        <Footer />
        </>
    )
}
