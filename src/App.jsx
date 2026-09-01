import React from "react";
import Header from './components/Header';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Community from './components/Community';
import InStore from './components/InStore';
import Donate from './components/Donate';
import Visit from './components/Visit';
import Footer from './components/Footer';

const BURGUNDY = "#8B0000";
const WHATSAPP_URL = "https://wa.me/27835895475?text=Hi!%20I%20saw%20your%20website%20and%20I%20would%20like%20to%20join%20the%20WhatsApp%20group%20to%20get%20updates%20on%20the%20daily%20new%20arrivals.";
const FACEBOOK_URL = "https://web.facebook.com/CornerstoneCharityShop";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 antialiased scroll-smooth">
      <Header burgundyColor={BURGUNDY} whatsappUrl={WHATSAPP_URL} />
      
      <main id="top">
        <Hero facebookUrl={FACEBOOK_URL} burgundyColor={BURGUNDY} />
        <OurStory burgundyColor={BURGUNDY} />
        <Community burgundyColor={BURGUNDY} />
        <InStore burgundyColor={BURGUNDY} />
        <Donate />
        <Visit burgundyColor={BURGUNDY} whatsappUrl={WHATSAPP_URL} />
      </main>

      <Footer burgundyColor={BURGUNDY} facebookUrl={FACEBOOK_URL} />
    </div>
  );
}