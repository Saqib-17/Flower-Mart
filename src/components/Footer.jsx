import React from "react";
import { Link } from "react-router-dom";
import footerImage from "../assets/footer-image.png";
import logo from "../assets/logo.png";

// Social icons
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/YouTube.png";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700">
      {/* === Top Banner Section === */}
      <section
        className="relative bg-cover bg-center py-24 text-center"
        style={{ backgroundImage: `url(${footerImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
{/* Top Banner: centered title + form with exact matching width */}
<div className="relative z-10 flex flex-col items-center justify-center px-4">
  {/* Title: fixed width to match design (586px) on md+ screens */}
  <h2
    className="text-white font-display font-bold text-2xl md:text-5xl mb-6 text-center"
    style={{ width: "100%", maxWidth: "586px" }}
  >
    Join the colorful Bunch
  </h2>

  {/* Form: same exact width as the title (586px) on md+ screens */}
  <form
    className="flex w-full max-w-[768px] bg-white  overflow-hidden "
    style={{ minWidth: 0 }}
  >
    <input
      type="email"
      placeholder="Write email"
      className="flex-1 px-4 py-3 text-sm text-gray-700 outline-none"
    />
    <button
      type="submit"
      className="bg-brand hover:bg-brand-deep text-white text-sm px-6 py-3 transition-colors whitespace-nowrap"
    >
      Subscribe
    </button>
  </form>
</div>



      </section>

      {/* === Bottom Footer Section === */}
      <section className="py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          {/* Logo and Description */}
          <div className="flex flex-col items-start text-gray-500
">
            <img src={logo} alt="Faugei Logo" className="w-32 mb-4" />
            <p className="text-sm leading-relaxed max-w-xs">
              Indulge your senses with the beauty and fragrance of our fresh
              flower shop.
            </p>
          </div>

          {/* Column 1 */}
          <div  >
            <ul className="text-sm space-y-3 text-gray-500">
              <li >
                <Link to="/" className="hover:text-brand transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-brand transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-brand transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="text-gray-500
">
            <ul className="text-sm space-y-3">
              <li>
                <Link to="/features" className="hover:text-brand transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-brand transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-brand transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-brand transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-brand transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex md:justify-end gap-4 mt-6 md:mt-0">
            <a href="#" >
              <img src={linkedin} alt="LinkedIn"className="w-10 h-10" />
            </a>
            <a href="#" >
              <img src={twitter} alt="Twitter"className="w-10 h-10"  />
            </a>
            <a href="#" >
              <img src={facebook} alt="Facebook" className="w-10 h-10" />
            </a>
            <a href="#" >
              <img src={youtube} alt="YouTube" className="w-10 h-10" />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}
