import React from "react";

// Sponsor Logos
import aceLogo from '../assets/logos/aceAutoSalvage-logo.png';
import salvageLogo from '../assets/logos/salvageSolutions-logo.png';

// Community Logos
import mowLogo from '../assets/logos/mealsOnWheels-logo.png';
import lcaraLogo from '../assets/logos/lcara-logo.png';
import cocosLogo from '../assets/logos/cocos-logo.jpeg';
import felineFriendzLogo from '../assets/logos/feralDomestic-pic2.jpeg';
import joziFeralLogo from '../assets/logos/joziFeralCats-logo.png';
import matlosanaLogo from '../assets/logos/motlasanaShelter-logo.jpeg';
import twjLogo from '../assets/logos/twjEvents-logo.png';

// Single Logo Component
const LogoImage = ({ src, alt }) => (
  <img 
    src={src} 
    alt={alt} 
    loading="lazy"
    className="h-16 md:h-20 w-auto max-w-[140px] md:max-w-[180px] shrink-0 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mix-blend-multiply"
  />
);

// Grouping them makes it easy to duplicate for the infinite loop
const CommunityLogos = () => (
  <>
    <LogoImage src={mowLogo} alt="Meals on Wheels" />
    <LogoImage src={lcaraLogo} alt="LCARA" />
    <LogoImage src={cocosLogo} alt="Coco's Animal Haven" />
    <LogoImage src={felineFriendzLogo} alt="Feline Friendz" />
    <LogoImage src={joziFeralLogo} alt="Jozi Feral Cats" />
    <LogoImage src={matlosanaLogo} alt="Matlosana Animal Shelter" />
    <LogoImage src={twjLogo} alt="TWJ Events" />
  </>
);

export default function Partners({ burgundyColor }) {
  return (
    <section id="partners" className="bg-white py-20 border-b border-stone-200 overflow-hidden">
      
      {/* Custom CSS for the infinite scroll */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .marquee-container:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* TIER 1: Sponsors (Static) */}
        <div className="mb-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-8 text-stone-400">
            Proudly Sponsored By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 mb-4">
            <LogoImage src={aceLogo} alt="Ace Auto Salvage" />
            <LogoImage src={salvageLogo} alt="Salvage Solutions" />
          </div>
          <p className="text-xs text-stone-400 font-medium italic">
            ...and their short-term insurance partners
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-stone-200 mx-auto mb-16"></div>

        {/* TIER 2: Supported Charities (Moving Marquee) */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: burgundyColor }}>
            Our Community Network
          </p>
          
          {/* Marquee Wrapper */}
          <div className="relative flex overflow-hidden marquee-container py-4">
            
            {/* Left/Right Fade Gradients for a clean cut-off */}
            <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

            {/* Scrolling Tracks (Duplicated to create the infinite loop) */}
            <div className="flex animate-marquee shrink-0 items-center gap-12 md:gap-20 pr-12 md:pr-20">
              <CommunityLogos />
            </div>
            <div className="flex animate-marquee shrink-0 items-center gap-12 md:gap-20 pr-12 md:pr-20" aria-hidden="true">
              <CommunityLogos />
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}