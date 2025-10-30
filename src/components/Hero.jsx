import React from "react";
import Container from "./Ui/Container";
import heroImg from "../assets/home-page-image.png";

export default function Hero() {
  return (
    <section className="pt-24 lg:pt-32 pb-8">
      <Container className="flex flex-col lg:flex-row items-end justify-between gap-10 lg:gap-16">
        {/* Left side text */}
        <div className="lg:w-1/2 flex flex-col justify-end">
          <h1 className="hero-title text-5xl lg:text-5xl font-bold leading-tight tracking-tight">
            <span className="block tracking-normal ">
              ALWAYS <span className="text-brand tracking-normal">FRESH</span>
            </span>
            <span className="block text-brand tracking-normal">FLOWERS</span>
          </h1>
          <p className="mt-6 text-gray-600  max-w-md text-xl">
            Indulge your senses with the beauty and fragrance of our fresh flower shop.
            From classic roses to exotic blooms, we offer a wide variety of fresh flowers
            that are perfect for any occasion.
          </p>
        </div>

        {/* Right side image */}
        <div className="lg:w-1/2 flex justify-end">
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
