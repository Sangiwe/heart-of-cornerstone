import React from "react";
import heroBg from '../assets/hero-bg.jpeg';

const FacebookIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.508 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.88h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z" />
  </svg>
);

export default function Hero({ facebookUrl, burgundyColor }) {
  return (
    <section className="relative h-[92vh] min-h-[600px] w-full overflow-hidden">
      <img
        src={heroBg}
        alt="Heart of Cornerstone shop interior"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-stone-900/70" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 md:px-8 flex flex-col justify-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight text-white">
          Shop Sustainably. Support Community.
        </h1>
        <p className="mt-6 text-xl md:text-2xl leading-relaxed text-stone-200 max-w-2xl font-light">
          Turning Pre-loved goods into funds for the community.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#visit"
            className="inline-flex items-center justify-center rounded-md px-7 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 shadow-lg"
            style={{ backgroundColor: burgundyColor }}
          >
            Visit the Shop
          </a>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-md border border-white/40 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur hover:bg-white/20 transition-colors"
          >
            <FacebookIcon className="w-5 h-5" />
            Follow on Facebook
          </a>
        </div>
      </div>
    </section>
  );
}