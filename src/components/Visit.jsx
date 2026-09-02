import React from "react";

const MapPinIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-7.05 7-11.5A7 7 0 0 0 5 9.5C5 13.95 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ClockIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" strokeLinecap="round" strokeLinejoin="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5V12l3 1.75" />
  </svg>
);

const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.27-1.38a9.87 9.87 0 0 0 4.72 1.2h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2zm0 1.8a8.1 8.1 0 0 1 5.75 2.38 8.08 8.08 0 0 1 2.38 5.73c0 4.48-3.65 8.12-8.14 8.12a8.13 8.13 0 0 1-4.13-1.13l-.3-.17-3.13.82.84-3.05-.19-.31a8.08 8.08 0 0 1-1.24-4.32c0-4.48 3.65-8.07 8.16-8.07zm-4.5 4.63c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.03 0 1.2.87 2.36 1 2.52.13.17 1.7 2.72 4.19 3.71 2.07.82 2.49.66 2.94.62.45-.04 1.45-.59 1.66-1.16.2-.57.2-1.06.14-1.16-.06-.1-.23-.16-.48-.29-.25-.13-1.45-.72-1.68-.8-.22-.08-.39-.13-.55.13-.16.25-.63.8-.78.97-.14.16-.28.18-.53.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.43-.06-.13-.55-1.36-.77-1.86-.2-.48-.4-.42-.55-.42h-.47z" />
  </svg>
);

export default function Visit({ burgundyColor, whatsappUrl }) {
  return (
    <section id="visit" className="bg-stone-100 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="text-center mb-14 md:mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: burgundyColor }}
          >
            Come See Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900">
            Visit &amp; Contact
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left: details */}
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <div
                className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-white shadow-sm"
                style={{ backgroundColor: burgundyColor }}
              >
                <MapPinIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-stone-900 mb-1">
                  Address
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Cornerstone Park
                  <br />
                  19 West Turffontein Rd
                  <br />
                  Behind BP on Klipriver Road
                  <br />
                  <span className="text-stone-500 text-sm mt-2 block">
                    Inside Ace Auto property<br/>
                    Big red gate • Safe ample parking
                  </span>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-white shadow-sm"
                style={{ backgroundColor: burgundyColor }}
              >
                <ClockIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-stone-900 mb-1">
                  Opening Hours
                </h3>
                <ul className="text-stone-600 leading-relaxed space-y-1">
                  <li className="flex justify-between gap-6 max-w-xs">
                    <span>Mon &ndash; Fri</span>
                    <span>09:00 &ndash; 16:30</span>
                  </li>
                  <li className="flex justify-between gap-6 max-w-xs">
                    <span>Saturday</span>
                    <span>09:00 &ndash; 12:00</span>
                  </li>
                  <li className="flex justify-between gap-6 max-w-xs text-sm text-stone-400 mt-2">
                    <span>(Closed on Sundays & Public Holidays)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-2 border-t border-stone-200">
              <h3 className="font-serif text-lg text-stone-900 mb-2">
                Get First Dibs!
              </h3>
              <p className="text-stone-600 leading-relaxed text-sm mb-4 max-w-xs">
                We post our newest treasures here first. Join our community group to see daily new arrivals.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-md px-7 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 shadow-sm"
                style={{ backgroundColor: burgundyColor }}
              >
                <WhatsAppIcon className="w-5 h-5" />
                Join our WhatsApp Group
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full aspect-[4/3] md:aspect-auto md:h-full min-h-[320px] rounded-lg overflow-hidden border border-stone-200 shadow-md">
            <iframe
              title="Heart of Cornerstone location map"
              src="https://www.google.com/maps?q=19+West+Turffontein+Rd,+Johannesburg&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}