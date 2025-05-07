"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-6" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-8 md:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Fostacomms logo" className="h-10 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8 font-heading">
            <Link
              to="/services"
              className="text-gray-800 hover:text-[#FF5C00] font-heading"
            >
              Services
            </Link>
            <Link
              to="/why-us"
              className="text-gray-800 hover:text-[#FF5C00] font-heading"
            >
              Why Us
            </Link>
            <Link
              to="/our-works"
              className="text-gray-800 hover:text-[#FF5C00] font-heading"
            >
              Our Works
            </Link>
            <Link
              to="/testimonial"
              className="text-gray-800 hover:text-[#FF5C00] font-heading"
            >
              Testimonial
            </Link>
            <Link
              to="/pricing"
              className="text-gray-800 hover:text-[#FF5C00] font-heading"
            >
              Pricing
            </Link>
            <Link
              to="/faq"
              className="text-gray-800 hover:text-[#FF5C00] font-heading"
            >
              FAQ
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link
              to="/get-started"
              className="bg-fostacomms-blue text-white px-6 py-3 rounded-full flex items-center font-heading hover:bg-[#E65300] transition-colors"
            >
              Start a Project
              <span className="ml-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>

          <button
            className="md:hidden text-gray-800 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-4">
          {[
            { to: "/services", text: "Services" },
            { to: "/why-us", text: "Why Us" },
            { to: "/our-works", text: "Our Works" },
            { to: "/testimonial", text: "Testimonial" },
            { to: "/pricing", text: "Pricing" },
            { to: "/faq", text: "FAQ" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block text-gray-800 hover:text-[#FF5C00] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.text}
            </Link>
          ))}
          <Link
            to="/get-started"
            className="block bg-[#FF5C00] text-white px-4 py-2 rounded-full font-medium hover:bg-[#E65300] transition-colors w-full text-center mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Viral Today
          </Link>
        </div>
      </div>
    </header>
  );
}
