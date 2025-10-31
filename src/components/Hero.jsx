import React from "react";
import Container from "./Ui/Container";
import heroImg from "../assets/home-page-image.png";

export default function Hero() {
  return (
    <section className="pt-24 lg:pt-32 pb-0 lg:pb-8">
      <Container
        className="
          flex flex-col-reverse lg:flex-row
          items-center lg:items-end
          justify-between 
          gap-10 lg:gap-16
        "
      >
        {/* Left side text (below image on mobile) */}
        <div className="lg:w-1/2 flex flex-col justify-end text-left lg:text-left">
          <h1 className="hero-title text-2xl lg:text-5xl font-bold leading-tight tracking-tight">
            <span className="block">
              ALWAYS <span className="text-brand">FRESH</span>
            </span>
            <span className="block text-brand">FLOWERS</span>
          </h1>
          <p className="mt-6 text-gray-600 max-w-md text-lg">
            Indulge your senses with the beauty and fragrance of our fresh flower shop.
            From classic roses to exotic blooms, we offer a wide variety of fresh flowers
            that are perfect for any occasion.
          </p>
        </div>

        {/* Right side image (first on mobile) */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={heroImg}
            alt="Hero bouquet"
            className="object-contain w-full max-w-[560px]"
          />
        </div>
      </Container>
    </section>
  );
}
