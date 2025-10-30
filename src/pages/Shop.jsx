import React from "react";
import Container from "../components/Ui/Container";
import ProductGrid from "../components/ProductGrid";

export default function Shop() {
  return (
    <div>
      <section className="py-12">
        <Container>
          <h1 className="text-3xl font-semibold">Shop</h1>
          <p className="text-gray-500 mt-2">Browse all our plants and bouquets.</p>
        </Container>
      </section>
      <ProductGrid />
    </div>
  );
}
