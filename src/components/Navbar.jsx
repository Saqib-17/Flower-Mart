import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import cartIcon from "../assets/cart.png";

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ===== Navbar ===== */}
      <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
        <div className="section-container flex items-center justify-between py-4">
          
          {/* Left: Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Faugel Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Right: Nav Links + Cart */}
          <div className="flex items-center gap-8">
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-semibold"
                    : "text-[rgba(0,0,0,0.5)]"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-semibold"
                    : "text-[rgba(0,0,0,0.5)]"
                }
              >
                Shop
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-semibold"
                    : "text-[rgba(0,0,0,0.5)]"
                }
              >
                About us
              </NavLink>
            </nav>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 text-[15px] text-black hover:opacity-80 transition"
            >
              <img src={cartIcon} alt="Cart" className="w-5 h-5 object-contain" />
              <span className="hidden sm:inline">Cart ($56)</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden focus:outline-none"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                {menuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* ===== Mobile Menu ===== */}
        <div
          className={`md:hidden bg-white border-t shadow-inner overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-48 py-3" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col items-center gap-3 text-[15px] font-medium">
            {["/", "/shop", "/about"].map((path, i) => (
              <NavLink
                key={i}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-semibold"
                    : "text-[rgba(0,0,0,0.5)]"
                }
              >
                {path === "/"
                  ? "Home"
                  : path === "/shop"
                  ? "Shop"
                  : "About us"}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* ===== Overlay ===== */}
      {isCartOpen && (
        <div
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
        />
      )}

      {/* ===== Popup Cart Modal (Drops from Top) ===== */}
      <div
        className={`fixed left-1/2 top-0 transform -translate-x-1/2 transition-all duration-300 ease-out z-50 ${
          isCartOpen
            ? "opacity-100 translate-y-20"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="bg-white shadow-2xl rounded-xl w-[400px] max-w-[90vw] p-6">
          <div className="flex items-center justify-between border-b pb-3">
            <h2 className="text-lg font-semibold">Your Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-gray-500 hover:text-black text-2xl leading-none"
            >
              &times;
            </button>
          </div>

          {/* Cart Items */}
          <div className="mt-4 space-y-4">
            {[
              { name: "Red Rose Bouquet", qty: 1, price: 28 },
              { name: "Sunflower Mix", qty: 1, price: 28 },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                </div>
                <span className="font-semibold">${item.price}</span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t mt-4 pt-4">
            <div className="flex items-center justify-between mb-3 font-semibold">
              <span>Total:</span>
              <span>$56</span>
            </div>
            <button className="w-full bg-brand hover:bg-brand-deep text-white py-2.5 rounded-md transition">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
