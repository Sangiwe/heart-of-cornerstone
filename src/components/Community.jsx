import React from "react";

import donation2 from '../assets/donation-2.jpeg';
import bookStall from '../assets/book-stall.jpeg';
import donation5 from '../assets/donation-5.jpeg';
import donation7 from '../assets/donation-7.jpeg';
import donation4 from '../assets/donation-4.jpeg';
import communityPic3 from '../assets/community-pic-3.jpeg';
import donation1 from '../assets/donation-1.jpeg';
import donation3 from '../assets/donation-3.jpeg';
import outreachBoxes from '../assets/outreach-boxes.jpeg';
import booksDonations from '../assets/books-donations.jpeg';
import picture2011 from '../assets/2011-picture.jpeg';

export default function Community({ burgundyColor }) {
  return (
    <section id="community" className="bg-stone-100 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="text-center mb-10 md:mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: burgundyColor }}>
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
          <img src={donation2} alt="Meals and supplies donated to local organizations" loading="lazy" className="w-72 md:w-96 shrink-0 aspect-[4/3] object-cover rounded-lg snap-center shadow-sm" />
          <img src={bookStall} alt="book stall supporting local community" loading="lazy" className="w-72 md:w-96 shrink-0 aspect-[4/3] object-cover rounded-lg snap-center shadow-sm" />
          <img src={donation5} alt="bags of donations for local community" loading="lazy" className="w-72 md:w-96 shrink-0 aspect-[4/3] object-cover rounded-lg snap-center shadow-sm" />
          <img src={donation7} alt="donations for local community" loading="lazy" className="w-72 md:w-96 shrink-0 aspect-[4/3] object-cover rounded-lg snap-center shadow-sm" />
          <img src={donation4} alt="donations for local community" loading="lazy" className="w-72 md:w-96 shrink-0 aspect-[4/3] object-cover rounded-lg snap-center shadow-sm" />
          <img src={communityPic3} alt="garden and plants donated to local community" loading="lazy" className="w-72 md:w-96 shrink-0 aspect-[4/3] object-cover rounded-lg snap-center shadow-sm" />
          <img src={donation1} alt="garden and plants donated to local community" loading="lazy" className="w-72 md:w-96 shrink-0 aspect-[4/3] object-cover rounded-lg snap-center shadow-sm" />
          <img src={donation3} alt="donations for local community" loading="lazy" className="w-72 md:w-96 shrink-0 aspect-[4/3] object-cover rounded-lg snap-center shadow-sm" />
          <img src={outreachBoxes} alt="donations to cape town outreach boxes" loading="lazy" className="w-72 md:w-96 shrink-0 aspect-[4/3] object-cover rounded-lg snap-center shadow-sm" />
          <img src={booksDonations} alt="donations of books to local community" loading="lazy" className="w-72 md:w-96 shrink-0 aspect-[4/3] object-cover rounded-lg snap-center shadow-sm" />
          <img src={picture2011} alt="2011 picture of the original street stall" loading="lazy" className="w-72 md:w-96 shrink-0 aspect-[4/3] object-cover rounded-lg snap-center shadow-sm" />
        </div>
        
        <div className="text-center mt-2">
          <p className="text-xs uppercase tracking-widest text-stone-400 font-semibold">
            &larr; Swipe to explore &rarr;
          </p>
        </div>
      </div>
    </section>
  );
}