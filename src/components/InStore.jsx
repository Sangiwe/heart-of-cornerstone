import React from "react";

import shopClothes from '../assets/shop-clothes.jpeg';
import shopBooks from '../assets/shop-books.jpeg';
import shopArt from '../assets/shop-art.jpeg';
import shopPlants from '../assets/shop-plants.jpeg';
import shopCollectables from '../assets/shop-collectables.jpeg';
import shopFurniture from '../assets/shop-furniture.jpeg';


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

export default function InStore({ burgundyColor }) {
  return (
    <section id="in-store" className="bg-stone-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="text-center mb-10 md:mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: burgundyColor }}>
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
  );
}