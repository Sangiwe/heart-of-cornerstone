import React from "react";

const HeartIcon = ({ className = "w-6 h-6", style }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} style={style} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25s-7.5-4.55-9.75-9C.85 8.05 2.4 4.75 5.6 4.2c1.9-.33 3.7.6 4.9 2.15C11.7 4.8 13.5 3.87 15.4 4.2c3.2.55 4.75 3.85 3.35 7.05-2.25 4.45-9.75 9-9.75 9z" />
  </svg>
);

const FacebookIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.508 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.88h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z" />
  </svg>
);

export default function Footer({ burgundyColor, facebookUrl }) {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
          
          
          <div className="col-span-2 md:col-span-5 flex flex-col gap-4 md:pr-8">
            <div className="flex items-center gap-2">
              <HeartIcon className="w-5 h-5" style={{ color: burgundyColor }} />
              <span className="font-serif text-xl text-white">Heart of Cornerstone</span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed max-w-xs">
              Turning pre-loved goods into funds for the community. Supporting local organizations across Johannesburg.
            </p>
          </div>

          
          <div className="col-span-1 md:col-span-3 flex flex-col gap-4">
            <h4 className="text-white font-semibold tracking-wider text-sm uppercase">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <a href="#story" className="text-sm text-stone-400 hover:text-white transition-colors w-fit">Our Story</a>
              <a href="#in-store" className="text-sm text-stone-400 hover:text-white transition-colors w-fit">What We Sell</a>
              <a href="#community" className="text-sm text-stone-400 hover:text-white transition-colors w-fit">Community Action</a>
              <a href="#donate" className="text-sm text-stone-400 hover:text-white transition-colors w-fit">How to Donate</a>
            </nav>
          </div>

          {/* (Spans 1 col on mobile, 4 on desktop) */}
          <div className="col-span-1 md:col-span-4 flex flex-col gap-4">
            <h4 className="text-white font-semibold tracking-wider text-sm uppercase">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-white transition-colors w-fit"
              >
                <FacebookIcon className="w-4 h-4" />
                Follow on Facebook
              </a>
              <p className="text-sm text-stone-400 leading-relaxed mt-1">
                Cornerstone Park<br />
                19 West Turffontein Rd
              </p>
            </div>
          </div>

        </div>

        {/* Copyright & Built By */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Heart of Cornerstone Charity Shop. All rights reserved.
          </p>
          <p className="text-xs text-stone-500">
            Built by <a href="#" className="text-stone-400 hover:text-white transition-colors underline underline-offset-4">Sangiwe Nkwanyana</a>
          </p>
        </div>

      </div>
    </footer>
  );
}