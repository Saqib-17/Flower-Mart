import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import Cart from "../components/Cart";

export default function Shop() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <>
      <Navbar setCartOpen={setCartOpen} cartCount={cartItems.length} />
      <ProductGrid onAddToCart={addToCart} />
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        total={total}
      />
    </>
  );
}
