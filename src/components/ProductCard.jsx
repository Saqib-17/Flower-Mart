import React from "react";
import Button from "./Ui/Button";
import placeholder from "../assets/card-image.png";

export default function ProductCard({ title = "Lily Blossom", price = "20 USD", image = placeholder }) {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-sm">
      <img src={image} alt={title} className=" object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-center">{title}</h3>
        <div className="text-sm text-gray-600 text-center mt-1">{price}</div>
        <div className="mt-4">
          <Button className="w-full bg-brand">ADD TO CART</Button>
        </div>
      </div>
    </div>
  );
}
