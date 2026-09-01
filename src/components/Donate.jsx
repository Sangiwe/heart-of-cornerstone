import React from "react";
import donateBanner from '../assets/donate-banner.jpeg';

const HeartIcon = ({ className = "w-6 h-6", style }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} style={style} aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 20.25s-7.5-4.55-9.75-9C.85 8.05 2.4 4.75 5.6 4.2c1.9-.33 3.7.6 4.9 2.15C11.7 4.8 13.5 3.87 15.4 4.2c3.2.55 4.75 3.85 3.35 7.05-2.25 4.45-9.75 9-9.75 9z"
    />
  </svg>
);

export default function Donate() {
  return (
    <section id="donate" className="relative overflow-hidden border-t border-stone-300">
      <img
        src={donateBanner} 
        alt="Heart of Cornerstone shop top view"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-stone-900/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 py-20 text-center">
        <HeartIcon className="w-10 h-10 mx-auto mb-6 text-white" />
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
          Have items to give?
        </h2>
        <p className="text-stone-200 leading-relaxed text-lg mb-8 max-w-3xl mx-auto">
          We rely entirely on the generosity of our community. If you have gently used clothing, books, homeware, furniture or collectables, please consider dropping them off during our operating hours. Every donation turns directly into funds for those who need it most.
        </p>
        <p className="text-sm font-semibold uppercase tracking-widest text-stone-400">
          Drop-offs accepted Monday - Saturday
        </p>
      </div>
    </section>
  );
}