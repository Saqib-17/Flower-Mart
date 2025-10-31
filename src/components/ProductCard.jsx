import React from "react";
import Button from "./Ui/Button"; // keep this path if Button.jsx is in components/Ui/

export default function ProductCard({ item }) {
  if (!item)
    return <div className="bg-gray-100 rounded-lg p-4 h-64 animate-pulse" />;

  const displayName = item.name || item.title || "Untitled";
  const priceNum = Number(item.price) || 0;

  // POST to backend and notify Navbar to refresh cart
  const handleAddToCart = async () => {
    try {
      const res = await fetch(
        `https://flower-mart-backend.onrender.com/cart/${item._id}`,
        { method: "POST" }
      );
      if (!res.ok) throw new Error("Failed to add to cart");
      window.dispatchEvent(new Event("cart:updated")); // let Navbar refresh
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  return (
    <div className="bg-white rounded-md overflow-hidden shadow-sm flex flex-col items-center p-4">
      <img
        src={
          item.image
            ? item.image
            : `https://source.unsplash.com/300x300/?flowers,${encodeURIComponent(
                displayName
              )}`
        }
        alt={displayName}
        className="w-full h-60 object-cover"
      />

      <div className="mt-4 text-center">
        <h3 className="font-semibold text-gray-900">{displayName}</h3>
        <p className="text-sm text-gray-600 mt-1">${priceNum}</p>
        <p className="text-xs text-gray-400 mt-1">{item.description}</p>

        <Button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-brand hover:bg-pink transition-transform transform hover:scale-105 rounded-none"
        >
          ADD TO CART
        </Button>
      </div>
    </div>
  );
}
