import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="section-container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-rose-300 to-orange-300 rounded-full flex items-center justify-center">
            {/* logo placeholder */}
            <span className="text-white font-bold">F</span>
          </div>
          <div>
            <div className="text-brand font-bold">faugel</div>
            <div className="text-xs text-gray-400 -mt-1">Flower Shop</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-brand font-semibold' : 'text-gray-700'}>Home</NavLink>
          <NavLink to="/shop" className={({isActive}) => isActive ? 'text-brand font-semibold' : 'text-gray-700'}>Shop</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-brand font-semibold' : 'text-gray-700'}>About us</NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-gray-600">Cart ($56)</button>
          <button className="md:hidden p-2">
            <svg width="22" height="22" fill="none" stroke="currentColor"><path d="M3 6h18M3 12h18M3 18h18" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
