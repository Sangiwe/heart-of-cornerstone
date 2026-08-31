import React from "react";

const HeartIcon = ({ className = "w-6 h-6", style }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} style={style} aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 20.25s-7.5-4.55-9.75-9C.85 8.05 2.4 4.75 5.6 4.2c1.9-.33 3.7.6 4.9 2.15C11.7 4.8 13.5 3.87 15.4 4.2c3.2.55 4.75 3.85 3.35 7.05-2.25 4.45-9.75 9-9.75 9z"
    />
  </svg>
);

const FacebookIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.508 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.88h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z" />
  </svg>
);

export default function Footer({ burgundyColor, facebookUrl }) {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <HeartIcon className="w-4 h-4" style={{ color: burgundyColor }} />
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Heart of Cornerstone. All rights reserved.
          </p>
        </div>
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-stone-300 hover:text-white transition-colors"
        >
          <FacebookIcon className="w-4 h-4" />
          @CornerstoneCharityShop
        </a>
      </div>
    </footer>
  );
}