import React, { useState } from "react";
import logo from '../assets/logo.svg'; 

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

const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.27-1.38a9.87 9.87 0 0 0 4.72 1.2h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2zm0 1.8a8.1 8.1 0 0 1 5.75 2.38 8.08 8.08 0 0 1 2.38 5.73c0 4.48-3.65 8.12-8.14 8.12a8.13 8.13 0 0 1-4.13-1.13l-.3-.17-3.13.82.84-3.05-.19-.31a8.08 8.08 0 0 1-1.24-4.32c0-4.48 3.65-8.07 8.16-8.07zm-4.5 4.63c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.03 0 1.2.87 2.36 1 2.52.13.17 1.7 2.72 4.19 3.71 2.07.82 2.49.66 2.94.62.45-.04 1.45-.59 1.66-1.16.2-.57.2-1.06.14-1.16-.06-.1-.23-.16-.48-.29-.25-.13-1.45-.72-1.68-.8-.22-.08-.39-.13-.55.13-.16.25-.63.8-.78.97-.14.16-.28.18-.53.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.43-.06-.13-.55-1.36-.77-1.86-.2-.48-.4-.42-.55-.42h-.47z" />
  </svg>
);

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
  >
    {children}
  </a>
);

export default function Header({ burgundyColor, whatsappUrl }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#top" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img 
              src={logo} 
              alt="Heart of Cornerstone Logo" 
              className="h-10 md:h-12 w-auto mix-blend-multiply"
            />
            <div className="flex flex-col leading-none justify-center mt-1">
              <span className="text-lg md:text-xl font-bold tracking-tight" style={{ color: burgundyColor }}>
                Heart of Cornerstone
              </span>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-stone-500 font-semibold mt-0.5">
                Charity Thrift Shop
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#story">Our Story</NavLink>
            <NavLink href="#community">Community</NavLink>
            <NavLink href="#in-store">In Store</NavLink>
            <NavLink href="#donate">Donate</NavLink>
            <NavLink href="#visit">Visit Us</NavLink>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: burgundyColor }}
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp Us
            </a>
          </nav>

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

      {menuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-stone-50">
          <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-5">
            <NavLink href="#story" onClick={closeMenu}>Our Story</NavLink>
            <NavLink href="#community" onClick={closeMenu}>Community</NavLink>
            <NavLink href="#in-store" onClick={closeMenu}>In Store</NavLink>
            <NavLink href="#donate" onClick={closeMenu}>Donate</NavLink>
            <NavLink href="#visit" onClick={closeMenu}>Visit Us</NavLink>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-base font-semibold text-white"
              style={{ backgroundColor: burgundyColor }}
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}