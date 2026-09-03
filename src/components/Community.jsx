import React, { useState } from "react";

// Specific Outreach Photos
import mowDonation from '../assets/mealsOnWheels-donation.jpeg';
import mowVolunteers1 from '../assets/mealsOnWheels-volunteers- pic1.jpeg';
import mowVolunteers2 from '../assets/mealsOnWheels-volunteers- pic2.jpeg';
import mowVolunteers3 from '../assets/mealsOnWheels-volunteers- pic3.jpeg';
import mowVolunteers4 from '../assets/mealsOnWheels-volunteers- pic4.jpeg';
import nkanyisaWCC1 from '../assets/nkanyisaWCC-pic1.jpeg';
import nkanyisaWCC2 from '../assets/nkanyisaWCC-pic2.jpeg';
import feralDomesticPic1 from '../assets/feralDomestic-pic1.jpeg';
import feralDomesticPic2 from '../assets/feralDomestic-pic2.jpeg';

// Reusable Impact Card Component (With Mobile-Friendly Slider & Dynamic Category)
const ImpactCard = ({ title, category, partner, partnerUrl, description, images, burgundyColor }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextImage = () => {
    setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden flex flex-col md:flex-row mb-10">
      
      {/* Image Container with Slider */}
      <div className="md:w-5/12 relative bg-stone-100 min-h-[300px] md:min-h-[auto] group">
        <img
          src={images[currentIdx]}
          alt={`${title} - view ${currentIdx + 1}`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
        />
        
        {images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-stone-800 w-8 h-8 rounded-full shadow flex items-center justify-center opacity-70 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Previous image"
            >
              &larr;
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-stone-800 w-8 h-8 rounded-full shadow flex items-center justify-center opacity-70 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Next image"
            >
              &rarr;
            </button>
            
            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full pointer-events-none">
              {currentIdx + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Content Container */}
      <div className="p-8 md:p-10 md:w-7/12 flex flex-col justify-center">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
            {category}
          </span>
          {partnerUrl && (
            <a 
              href={partnerUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs font-semibold hover:underline bg-stone-50 px-3 py-1.5 rounded-full border border-stone-100" 
              style={{ color: burgundyColor }}
            >
              Visit {partner} &rarr;
            </a>
          )}
        </div>
        
        <h3 className="font-serif text-2xl md:text-3xl text-stone-900 mb-4 leading-snug">
          {title}
        </h3>
        
        <div className="text-stone-600 leading-relaxed space-y-4">
          {description}
        </div>
      </div>
    </div>
  );
};

export default function Community({ burgundyColor }) {
  return (
    <section id="community" className="bg-stone-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
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

        {/* Specific Outreach Actions */}
        <div className="max-w-4xl mx-auto">
          
          <ImpactCard
            burgundyColor={burgundyColor}
            category="Family Support"
            title="Supplying Toys & Baby Goods"
            partner="Meals on Wheels"
            partnerUrl="https://mow.org.za"
            images={[mowDonation]}
            description={
              <>
                <p>
                  We are incredibly proud to load up and dispatch full truckloads of toys and baby goods to families in need. A special thank you to <span className="font-medium text-stone-700">Elize</span> from <span className="font-medium text-stone-700">Meals on Wheels</span> for facilitating the process and ensuring every item is correctly allocated.
                </p>
                <p>
                  As always, this outreach is made possible through the continued generosity of <span className="font-medium text-stone-700">Ace Auto Salvage</span> and <span className="font-medium text-stone-700">Salvage Solutions</span>.
                </p>
              </>
            }
          />

          <ImpactCard
            burgundyColor={burgundyColor}
            category="Elderly Care"
            title="Heritage Day at Reuven Old Age Home"
            partner="Meals on Wheels"
            partnerUrl="https://mow.org.za"
            images={[mowVolunteers2, mowVolunteers1, mowVolunteers3, mowVolunteers4]}
            description={
              <>
                <p>
                  Our dedicated youth volunteers spent a special Heritage Day giving back to the community. The team assisted <span className="font-medium text-stone-700">Christine Crossley</span> from <span className="font-medium text-stone-700">Meals on Wheels</span> in preparing a festive lunch and delivering much-needed food parcels to the residents of <span className="font-medium text-stone-700">Reuven Old Age Home</span>.
                </p>
                <p>
                  We are incredibly proud of our young volunteers for embodying the spirit of community and paying it forward.
                </p>
              </>
            }
          />

          <ImpactCard
            burgundyColor={burgundyColor}
            category="Education & Literacy"
            title="Library for Nkanyisa Waverley Care Centre"
            partner="Nkanyisa WCC"
            images={[nkanyisaWCC1, nkanyisaWCC2]}
            description={
              <>
                <p>
                  We were so happy to be able to help set up a library for <span className="font-medium text-stone-700">Nkanyisa Waverley Care Centre</span>, and even more wonderful to meet <span className="font-medium text-stone-700">Frans Lekoloane</span> and <span className="font-medium text-stone-700">Thalitha Malatji</span>. They also left with craft items and other bits and pieces to support their activities.
                </p>
                <p>
                  It is always a privilege to redirect our community's generous book donations into facilities that provide such essential care.
                </p>
              </>
            }
          />

          <ImpactCard
            burgundyColor={burgundyColor}
            category="Animal Welfare"
            title="Supporting Local Animal Rescues"
            partner="Feline Friendz Feral & Domestic Foundation"
            images={[feralDomesticPic1, feralDomesticPic2]}
            description={
              <>
                <p>
                  We were overjoyed to fill <span className="font-medium text-stone-700">Mischelly's</span> car with donations of clothing, shoes, and costume jewellery. These items are resold to raise much-needed funds for the cats and kittens in the care of the <span className="font-medium text-stone-700">Feline Friendz Feral & Domestic Foundation</span>.
                </p>
                <p>
                  It is an absolute honor to support the incredible individuals who dedicate their time to animal welfare in our city.
                </p>
              </>
            }
          />

          {/* Call to Action for more posts */}
          <div className="mt-16 text-center">
            <a
              href="https://www.facebook.com/CornerstoneCharityShop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-stone-200 text-stone-600 font-semibold hover:border-stone-900 hover:text-stone-900 transition-colors"
            >
              See more stories on Facebook &rarr;
            </a>
          </div>
          
        </div>

      </div>
    </section>
  );
}