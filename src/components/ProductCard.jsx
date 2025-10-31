import React, { useState } from "react";
import Button from "./Ui/Button"; // keep if your Button is here

export default function ProductCard({ item }) {
  const [adding, setAdding] = useState(false);

  if (!item)
    return <div className="bg-gray-100 rounded-lg p-4 h-64 animate-pulse" />;

  const displayName = item.name || item.title || "Untitled";
  const priceNum = Number(item.price) || 0;

  // Robust: support both _id and id
  const addId = item?._id || item?.id;

  const handleAddToCart = async () => {
    if (!addId) {
      console.error("No valid item ID found on product:", item);
      return;
    }
    try {
      setAdding(true);
      const res = await fetch(
        `https://flower-mart-backend.onrender.com/cart/${encodeURIComponent(addId)}`,
        { method: "POST" }
      );

      // Helpful debug in console if something goes wrong
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.error("Add to cart failed:", res.status, text);
        throw new Error(`Failed to add to cart (HTTP ${res.status})`);
      }

      // Tell Navbar (and any listeners) to refresh cart
      window.dispatchEvent(new Event("cart:updated"));
    } catch (err) {
      console.error("Error adding to cart:", err);
    } finally {
      setAdding(false);
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
          disabled={adding}
          className="mt-4 w-full bg-brand hover:bg-pink transition-transform transform hover:scale-105 rounded-none disabled:opacity-60"
        >
          {adding ? "ADDING..." : "ADD TO CART"}
        </Button>
      </div>
    </div>
  );
}
