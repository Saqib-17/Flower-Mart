import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  // For demo we render 8 identical cards to match the Figma layout
  const items = new Array(8).fill(0);
  return (
    <section className="py-12">
      <div className="section-container">
        <h2 className="text-3xl text-center font-semibold">
          <span className="text-brand font-display text-2xl lg:text-5xl leading-tight font-bold ">Our</span > <span className="font-display text-2xl lg:text-5xl leading-tight font-bold ">Plants</span >
        </h2>
        <p className="text-center text-gray-500 mt-2 max-w-2xl mx-auto">
          Indulge your senses with the beauty and fragrance of our fresh flower shop. From classic roses to exotic blooms, we offer a wide variety of fresh.
        </p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((_, i) => (
            <ProductCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
