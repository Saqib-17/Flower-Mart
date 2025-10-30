import React from "react";
import Container from "./Ui/Container";
import heroImg from "../assets/home-page-image.png";

export default function Hero() {
  return (
    <section className="py-16">
      <Container className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h1 className="hero-title text-7xl lg:text-6xl leading-tight tracking-tight">
            <span className="block">ALWAYS <span className="text-brand">FRESH</span></span>
            <span className="block text-brand">FLOWERS</span>
          </h1>
          <p className="mt-6 text-gray-600 max-w-xl text-xl">
            Indulge your senses with the beauty and fragrance of our fresh flower shop. From classic roses to exotic blooms, we offer a wide variety of fresh flowers that are perfect for any occasion.
          </p>
        </div>

        <div className="lg:w-1/2 flex justify-end w-full">
          <img src={heroImg} alt="Hero bouquet" className="object-cover  " />
        </div>
      </Container>
    </section>
  );
}
