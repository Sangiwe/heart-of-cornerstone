import React, { useState } from "react";
import logo from './assets/logo.svg'; 
import heroBg from './assets/hero-bg.jpeg';
import impactBooks from './assets/impact-books.jpeg';
import shopClothes from './assets/shop-clothes.jpeg';
import shopBooks from './assets/shop-books.jpeg';
import shopArt from './assets/shop-art.jpeg';
import shopPlants from './assets/shop-plants.jpeg';
import shopCollectables from './assets/shop-collectables.jpeg';
import shopFurniture from './assets/shop-furniture.jpeg';
import donateBanner from './assets/donate-banner.jpeg';
// --- Story & Community Imports ---
import lindaNini from './assets/Linda-Nini.jpeg';
import acePic from './assets/ace-pic.jpeg';
import streetStall from './assets/street-stall-1.jpeg';
import outreachBoxes from './assets/outreach-boxes.jpeg';
import cocosLogo from './assets/cocos-logo.jpeg';
import lcaraLogo from './assets/LCARA-logo.jpeg';
import donation2 from './assets/donation-2.jpeg';
import bookStall from './assets/book-stall.jpeg';
import donation5 from './assets/donation-5.jpeg';
import donation7 from './assets/donation-7.jpeg';
import donation4 from './assets/donation-4.jpeg';
import communityPic3 from './assets/community-pic-3.jpeg';
import donation1 from './assets/donation-1.jpeg';
import donation3 from './assets/donation-3.jpeg';
import booksDonations from './assets/books-donations.jpeg';
import picture2011 from './assets/2011-picture.jpeg';


/* ------------------------------------------------------------------ */
/*  Design tokens                                                     */
/* ------------------------------------------------------------------ */

const BURGUNDY = "#8B0000";
const WHATSAPP_URL =
  "https://wa.me/27835895475?text=Hi!%20I%20saw%20your%20website%20and%20I%20would%20like%20to%20join%20the%20WhatsApp%20group%20to%20get%20updates%20and%20reserve%20items.";
const FACEBOOK_URL = "https://web.facebook.com/CornerstoneCharityShop";

/* ------------------------------------------------------------------ */
/*  Inline SVG Icons (no external icon library)                       */
/* ------------------------------------------------------------------ */

const MenuIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
    <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

const CloseIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
    <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
  </svg>
);

const FacebookIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.508 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.88h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z" />
  </svg>
);

const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.27-1.38a9.87 9.87 0 0 0 4.72 1.2h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2zm0 1.8a8.1 8.1 0 0 1 5.75 2.38 8.08 8.08 0 0 1 2.38 5.73c0 4.48-3.65 8.12-8.14 8.12a8.13 8.13 0 0 1-4.13-1.13l-.3-.17-3.13.82.84-3.05-.19-.31a8.08 8.08 0 0 1-1.24-4.32c0-4.48 3.65-8.07 8.16-8.07zm-4.5 4.63c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.03 0 1.2.87 2.36 1 2.52.13.17 1.7 2.72 4.19 3.71 2.07.82 2.49.66 2.94.62.45-.04 1.45-.59 1.66-1.16.2-.57.2-1.06.14-1.16-.06-.1-.23-.16-.48-.29-.25-.13-1.45-.72-1.68-.8-.22-.08-.39-.13-.55.13-.16.25-.63.8-.78.97-.14.16-.28.18-.53.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.43-.06-.13-.55-1.36-.77-1.86-.2-.48-.4-.42-.55-.42h-.47z" />
  </svg>
);

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

const HeartIcon = ({ className = "w-6 h-6", style }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} style={style} aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 20.25s-7.5-4.55-9.75-9C.85 8.05 2.4 4.75 5.6 4.2c1.9-.33 3.7.6 4.9 2.15C11.7 4.8 13.5 3.87 15.4 4.2c3.2.55 4.75 3.85 3.35 7.05-2.25 4.45-9.75 9-9.75 9z"
    />
  </svg>
);

const BookIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5c-1.5-1-4-1.5-6.5-1v13c2.5-.5 5 0 6.5 1 1.5-1 4-1.5 6.5-1v-13c-2.5-.5-5 0-6.5 1z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5v13" />
  </svg>
);

const SproutIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 13c0-3.5-2.5-6-6.5-6C5.2 10.8 8 13 12 13z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 13c0-4 2.8-7 7.5-7.3C19.8 9.9 16.4 13 12 13z" />
  </svg>
);

const SchoolIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 2 8l10 5 10-5-10-5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 10.5V16c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5.5" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Reusable UI bits                                                  */
/* ------------------------------------------------------------------ */

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
  >
    {children}
  </a>
);

const ImpactItem = ({ icon: Icon, title, desc }) => (
  <div className="flex gap-4">
    <div
      className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-white"
      style={{ backgroundColor: BURGUNDY }}
    >
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h3 className="font-serif text-lg text-stone-900 mb-1">{title}</h3>
      <p className="text-stone-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const ShopCard = ({ image, title }) => (
  <div className="group rounded-lg overflow-hidden border border-stone-200 bg-white hover:border-stone-300 transition-colors shadow-sm">
    <div className="aspect-[4/3] overflow-hidden bg-stone-200">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-5 border-t border-stone-100">
      <h3 className="font-serif text-lg text-stone-900">{title}</h3>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  App                                                               */
/* ------------------------------------------------------------------ */

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 antialiased scroll-smooth">
      {/* ---------------------------------------------------------- */}
      {/*  Sticky Navbar                                            */}
      {/* ---------------------------------------------------------- */}
      <header className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <a href="#top" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <img 
                src={logo} 
                alt="Heart of Cornerstone Logo" 
                className="h-10 md:h-12 w-auto mix-blend-multiply"
              />
              <div className="flex flex-col leading-none justify-center mt-1">
                <span
                  className="text-lg md:text-xl font-bold tracking-tight"
                  style={{ color: BURGUNDY }}
                >
                  Heart of Cornerstone
                </span>
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-stone-500 font-semibold mt-0.5">
                  Charity Thrift Shop
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="#story">Our Story</NavLink>
              <NavLink href="#community">Community</NavLink>
              <NavLink href="#in-store">In Store</NavLink>
              <NavLink href="#donate">Donate</NavLink>
              <NavLink href="#visit">Visit Us</NavLink>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: BURGUNDY }}
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp Us
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-stone-700 hover:bg-stone-100"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile nav panel */}
        {menuOpen && (
          <div className="md:hidden border-t border-stone-200 bg-stone-50">
            <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-5">
              <NavLink href="#story" onClick={closeMenu}>Our Story</NavLink>
              <NavLink href="#community" onClick={closeMenu}>Community</NavLink>
              <NavLink href="#in-store" onClick={closeMenu}>In Store</NavLink>
              <NavLink href="#donate" onClick={closeMenu}>Donate</NavLink>
              <NavLink href="#visit" onClick={closeMenu}>Visit Us</NavLink>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-base font-semibold text-white"
                style={{ backgroundColor: BURGUNDY }}
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        {/* -------------------------------------------------------- */}
        {/*  Hero Section                                           */}
        {/* -------------------------------------------------------- */}
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
                style={{ backgroundColor: BURGUNDY }}
              >
                Visit the Shop
              </a>
              <a
                href={FACEBOOK_URL}
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

        {/* -------------------------------------------------------- */}
        {/*  Our Story                                              */}
        {/* -------------------------------------------------------- */}
        <section id="story" className="bg-white border-b border-stone-200">
          <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              
              {/* Left: Text Content */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: BURGUNDY }}>
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
                    <HeartIcon className="w-5 h-5" style={{ color: BURGUNDY }} />
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

        {/* -------------------------------------------------------- */}
        {/*  Our Community                                          */}
        {/* -------------------------------------------------------- */}
        <section id="community" className="bg-stone-100 border-b border-stone-200">
          <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
            <div className="text-center mb-10 md:mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: BURGUNDY }}>
                Making a Difference
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">
                Community Action
              </h2>
              <p className="text-stone-600 leading-relaxed text-lg max-w-2xl mx-auto">
                Every purchase and donation directly helps us proudly support local organizations, youth care facilities, old age homes, and animal rescue shelters across Johannesburg.
              </p>
            </div>

            {/* Horizontal Swipe Gallery */}
            <div className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory">
              
              {/* Image 1 */}
              <img 
                src={donation2} 
                alt="Meals and supplies donated to local organizations" 
                loading="lazy"
                className="w-72 md:w-96 shrink-0 aspect-[4/3] object-cover rounded-lg snap-center shadow-sm" 
              />
              
              {/* Image 2 (Logo needing a white background and contain) */}
              <img 
                src={bookStall} 
                alt="book stall supporting local community" 
                loading="lazy"
                className="w-72 md:w-96 shrink-0 aspect-[4/3] object-cover rounded-lg snap-center shadow-sm" 
              />

              {/* Image 3 (Logo needing a white background and contain) */}
              <img 
                src={donation5} 
                alt="bags of donations for local community" 
                loading="lazy"
                className="w-72 md:w-96 shrink-0 aspect-[4/3] object-cover rounded-lg snap-center shadow-sm" 
              />

              <img 
                src={donation7} 
                alt="donations for local community" 
                loading="lazy"
                className="w-72 md:w-96 shrink-0 aspect-[4/3] object-cover rounded-lg snap-center shadow-sm" 
              /> 

              <img 
                src={donation4} 
                alt="donations for local community" 
                loading="lazy"
                className="w-72 md:w-96 shrink-0 aspect-[4/3] object-cover rounded-lg snap-center shadow-sm" 
              /> 
              
              <img 
                src={communityPic3} 
                alt="garden and plants donated to local community" 
                loading="lazy"
                className="w-72 md:w-96 shrink-0 aspect-[4/3] object-cover rounded-lg snap-center shadow-sm" 
              /> 

              <img 
                src={donation1} 
                alt="garden and plants donated to local community" 
                loading="lazy"
                className="w-72 md:w-96 shrink-0 aspect-[4/3] object-cover rounded-lg snap-center shadow-sm" 
              />

              <img 
                src={donation3} 
                alt="donations for local community" 
                loading="lazy"
                className="w-72 md:w-96 shrink-0 aspect-[4/3] object-cover rounded-lg snap-center shadow-sm" 
              />

              <img 
                src={outreachBoxes} 
                alt="donations to cape town outreach boxes" 
                loading="lazy"
                className="w-72 md:w-96 shrink-0 aspect-[4/3] object-cover rounded-lg snap-center shadow-sm" 
              />

              <img 
                src={booksDonations} 
                alt="donations of books to local community" 
                loading="lazy"
                className="w-72 md:w-96 shrink-0 aspect-[4/3] object-cover rounded-lg snap-center shadow-sm" 
              />

              <img 
                src={picture2011} 
                alt="2011 picture of the original street stall" 
                loading="lazy"
                className="w-72 md:w-96 shrink-0 aspect-[4/3] object-cover rounded-lg snap-center shadow-sm" 
              />

            </div>
            
            <div className="text-center mt-2">
              <p className="text-xs uppercase tracking-widest text-stone-400 font-semibold">
                &larr; Swipe to explore &rarr;
              </p>
            </div>
            
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  What We Sell (Swipe Gallery)                           */}
        {/* -------------------------------------------------------- */}
        <section id="in-store" className="bg-stone-50 border-b border-stone-200">
          <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
            <div className="text-center mb-10 md:mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: BURGUNDY }}>
                Full of Great Surprises
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900">
                What We Sell
              </h2>
            </div>

            {/* Gallery: Horizontal on Mobile, Grid on Desktop */}
            <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory md:snap-none">
              
              <div className="w-64 md:w-auto shrink-0 md:shrink snap-center md:snap-align-none">
                <ShopCard image={shopClothes} title="Clothing & Shoes" />
              </div>
              <div className="w-64 md:w-auto shrink-0 md:shrink snap-center md:snap-align-none">
                <ShopCard image={shopBooks} title="Books & Toys" />
              </div>
              <div className="w-64 md:w-auto shrink-0 md:shrink snap-center md:snap-align-none">
                <ShopCard image={shopArt} title="Art & Paintings" />
              </div>
              <div className="w-64 md:w-auto shrink-0 md:shrink snap-center md:snap-align-none">
                <ShopCard image={shopCollectables} title="Collectables" />
              </div>
              <div className="w-64 md:w-auto shrink-0 md:shrink snap-center md:snap-align-none">
                <ShopCard image={shopFurniture} title="Furniture & Crockery" />
              </div>
              <div className="w-64 md:w-auto shrink-0 md:shrink snap-center md:snap-align-none">
                <ShopCard image={shopPlants} title="Plants" />
              </div>

            </div>
            
            {/* Swipe helper text - Hidden on Desktop! */}
            <div className="text-center mt-2 md:hidden">
              <p className="text-xs uppercase tracking-widest text-stone-400 font-semibold">
                &larr; Swipe to explore &rarr;
              </p>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  How to Donate                                           */}
        {/* -------------------------------------------------------- */}
        <section id="donate" className="relative overflow-hidden border-t border-stone-300">
          <img
            src={donateBanner} 
            alt="Heart of Cornerstone shop top view"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark Overlay so the text pops */}
          <div className="absolute inset-0 bg-stone-900/80" />

          {/* Added relative and z-10 here to keep text above the image */}
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

        {/* -------------------------------------------------------- */}
        {/*  Visit & Contact                                        */}
        {/* -------------------------------------------------------- */}
        <section id="visit" className="bg-stone-100 border-t border-stone-200">
          <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
            <div className="text-center mb-14 md:mb-16">
              <p
                className="text-sm font-semibold uppercase tracking-[0.2em] mb-4"
                style={{ color: BURGUNDY }}
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
                    style={{ backgroundColor: BURGUNDY }}
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
                    style={{ backgroundColor: BURGUNDY }}
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
                    We post our newest treasures here first. Join our community group to see daily new arrivals and reserve items before they even hit the shop floor.
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-md px-7 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 shadow-sm"
                    style={{ backgroundColor: BURGUNDY }}
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    Join our WhatsApp Group
                  </a>
                </div>
              </div>

              {/* Right: Google Map */}
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
      </main>

      {/* ---------------------------------------------------------- */}
      {/*  Footer                                                   */}
      {/* ---------------------------------------------------------- */}
      <footer className="bg-stone-900 text-stone-300">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <HeartIcon className="w-4 h-4" style={{ color: BURGUNDY }} />
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Heart of Cornerstone. All
              rights reserved.
            </p>
          </div>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-stone-300 hover:text-white transition-colors"
          >
            <FacebookIcon className="w-4 h-4" />
            @CornerstoneCharityShop
          </a>
        </div>
      </footer>
    </div>
  );
}