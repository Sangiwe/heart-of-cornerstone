import React from "react";
// History photos for the collage
import streetStall1 from '../assets/street-stall-1.jpeg';
import streetStall2 from '../assets/street-stall-2.jpeg';
import picture2011 from '../assets/2011-picture.jpeg';

// Present day team photos
import acePic from '../assets/Ace-pic.JPG';
import linda from '../assets/Linda-pic.jpg';
import nini from '../assets/Nini-pic.jpg';

const HeartIcon = ({ className = "w-6 h-6", style }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} style={style} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25s-7.5-4.55-9.75-9C.85 8.05 2.4 4.75 5.6 4.2c1.9-.33 3.7.6 4.9 2.15C11.7 4.8 13.5 3.87 15.4 4.2c3.2.55 4.75 3.85 3.35 7.05-2.25 4.45-9.75 9-9.75 9z" />
  </svg>
);

const SectionLabel = ({ children, burgundyColor }) => (
  <div className="flex items-center justify-center gap-3 mb-4">
    <HeartIcon className="w-5 h-5" style={{ color: burgundyColor }} />
    <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: burgundyColor }}>
      {children}
    </p>
  </div>
);

const TeamPhoto = ({ src, alt, name, caption }) => (
  <div className="flex flex-col items-center text-center w-36 sm:w-44">
    <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-lg bg-stone-100">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </div>
    <h4 className="font-serif text-lg text-stone-900 mt-4">{name}</h4>
    <p className="text-sm text-stone-500 mt-0.5 leading-snug">{caption}</p>
  </div>
);

export default function OurStory({ burgundyColor }) {
  return (
    <section id="story" className="bg-white border-b border-stone-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">

        {/* ============================================================ */}
        {/*  BEAT 1 — Headline & Video                                    */}
        {/* ============================================================ */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 md:mb-24">
          <SectionLabel burgundyColor={burgundyColor}>Our Journey</SectionLabel>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 leading-tight mb-10">
            The stone that everybody overlooked.
          </h2>

          <div className="w-full relative aspect-video bg-stone-100 rounded-xl overflow-hidden shadow-lg border border-stone-200">
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCornerstoneCharityShop%2Fvideos%2F1005936530428779%2F&show_text=false&t=0"
              title="Heart of Cornerstone story video"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>

        {/* ============================================================ */}
        {/*  BEAT 2 — How It Started: text + pavement-era collage         */}
        {/* ============================================================ */}
        <div className="max-w-3xl mx-auto mb-20 md:mb-24">
          <div className="space-y-5 text-stone-600 leading-relaxed text-lg">
            <p>
              What is now a powerhouse community warehouse started over a decade ago on a pavement in Turffontein. For two years, founder Linda and Hellen White spent every Saturday morning slogging away in the elements, selling whatever donations they had received that week to support the community.
            </p>

            <p>
              Eventually, family support allowed them to move into a humble shop in Bellavista. For years, they forged deep connections, assisting everyone from local children to animal rescues. But as the economy struggled, the community's suffering deepened, and the shop faced its darkest days.
            </p>
          </div>

          {/* Pavement-era photo collage */}
          <div className="mt-12">
            <p className="text-center text-xs uppercase tracking-[0.2em] text-stone-400 font-semibold mb-6">
              The Pavement Days &mdash; Turffontein, 2011
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 justify-center items-center">
              <div className="bg-white p-2 pb-4 shadow-md border border-stone-100 rotate-[-2deg] hover:rotate-0 transition-transform duration-300 w-full max-w-[280px] sm:w-1/3">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={streetStall1}
                    alt="Early charity pavement stall with community members"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white p-2 pb-4 shadow-md border border-stone-100 rotate-[1.5deg] hover:rotate-0 transition-transform duration-300 w-full max-w-[280px] sm:w-1/3 sm:mt-4">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={streetStall2}
                    alt="Linda selling donated goods on the pavement"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white p-2 pb-4 shadow-md border border-stone-100 rotate-[-1deg] hover:rotate-0 transition-transform duration-300 w-full max-w-[280px] sm:w-1/3">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={picture2011}
                    alt="Hellen and the early volunteer team, 2011"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
 
        {/* ============================================================ */}
        {/*  BEAT 3 — Pull quote                                          */}
        {/* ============================================================ */}
        <div className="max-w-3xl mx-auto mb-20 md:mb-24">
          <blockquote
            className="border-l-4 pl-6 md:pl-8 py-2 italic text-xl md:text-2xl text-stone-800 leading-relaxed"
            style={{ borderColor: burgundyColor }}
          >
            &ldquo;No man is an island, no man stands alone. A person comes with an animal, an animal comes with a person, and an elder comes with a family. None of us are in isolation.&rdquo;
          </blockquote>
        </div>

        {/* ============================================================ */}
        {/*  BEAT 4 — Growth, partners & present day intro                */}
        {/* ============================================================ */}
        <div className="max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="space-y-5 text-stone-600 leading-relaxed text-lg">
            <p>
              When despair was at its deepest, a new vision was born. Thanks to the incredible generosity and sponsorship of{" "}
              <a href="https://acesalvage.co.za/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline" style={{ color: burgundyColor }}>Ace Auto Salvage</a>,{" "}
              <a href="https://salvagesolutions.co.za/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline" style={{ color: burgundyColor }}>Salvage Solutions</a>,{" "}
              <em className="italic">and their short-term insurance partners</em>, a massive new warehouse was established to serve as their official charity outreach wing.
            </p>
          </div>

          <p className="text-stone-600 leading-relaxed text-lg mt-8">
            Today, Heart of Cornerstone is a thriving community hub. Run by Linda, alongside the indispensable Nini and our beloved shop dog, Ace, the mission remains the same as it was on that pavement ten years ago: to put the heart back into the community.
          </p>

          {/* Named photo byline — the people just mentioned above */}
          <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-10 sm:gap-x-14">
            <TeamPhoto
              src={linda}
              alt="Linda at the shop"
              name="Linda"
              caption="Founder"
            />
            <TeamPhoto
              src={nini}
              alt="Nini at the shop"
              name="Nini"
              caption="Indispensable"
            />
            <TeamPhoto
              src={acePic}
              alt="Ace the shop dog napping among the donations"
              name="Ace"
              caption="Shop dog"
            />
          </div>
        </div>

      </div>
    </section>
  );
}