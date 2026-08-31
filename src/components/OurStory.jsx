import React from "react";
import lindaNini from '../assets/Linda-Nini.jpeg';
import acePic from '../assets/ace-pic.jpeg';
import streetStall from '../assets/street-stall-1.jpeg';

const HeartIcon = ({ className = "w-6 h-6", style }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} style={style} aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 20.25s-7.5-4.55-9.75-9C.85 8.05 2.4 4.75 5.6 4.2c1.9-.33 3.7.6 4.9 2.15C11.7 4.8 13.5 3.87 15.4 4.2c3.2.55 4.75 3.85 3.35 7.05-2.25 4.45-9.75 9-9.75 9z"
    />
  </svg>
);

export default function OurStory({ burgundyColor }) {
  return (
    <section id="story" className="bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Left: Text Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: burgundyColor }}>
              Since 2011
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6 leading-snug">
              From the Side Streets to Cornerstone Park
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-lg mb-8">
              <p>
                Heart of Cornerstone started back in 2011 with a simple goal: to support our local community. What began as a humble stall on the side streets has grown into the beautiful, bustling charity shop we call home today.
              </p>
              <p>
                Whether you are a regular looking for your next treasure or stopping by for the first time, Linda and Nini are always here to welcome you with a smile. 
              </p>
              <p className="flex items-center gap-3 pt-2 font-medium text-stone-800">
                <HeartIcon className="w-5 h-5" style={{ color: burgundyColor }} />
                Say hello to Ace, our rescued shop dog and Chief Greeting Officer!
              </p>
            </div>
          </div>

          {/* Right: Photo Collage */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <img
              src={lindaNini}
              alt="Linda and Nini outside the shop"
              loading="lazy"
              className="col-span-2 w-full aspect-[4/3] object-cover rounded-lg shadow-md"
            />
            <img
              src={streetStall}
              alt="Our original street stall in 2011"
              loading="lazy"
              className="w-full aspect-square object-cover rounded-lg shadow-md"
            />
            <img
              src={acePic}
              alt="Ace the shop dog"
              loading="lazy"
              className="w-full aspect-square object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}