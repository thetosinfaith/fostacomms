"use client";

import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-fostacomms-yellow text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-4">
          <div className="lg:col-span-5">
            <div className="mb-8">
              <Link to="/" className="inline-block">
                <div className="flex flex-col items-start">
                  <img src={Logo} alt="" className="h-10 w-auto" />
                </div>
              </Link>
            </div>

            <p className="text-fostacomms-black mt-4 max-w-md">
            Public Relations & Consulting Firm in Lagos
            </p>
          </div>

          <div className="hidden md:block lg:hidden"></div>

          <div className="lg:col-span-2 lg:col-start-7">
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-fostacomms-black hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-fostacomms-black hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-fostacomms-black hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-fostacomms-black hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-fostacomms-black hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/license"
                  className="text-fostacomms-black hover:text-white transition-colors"
                >
                  Become a Client
                </Link>
              </li>
              <li>
                <Link
                  to="/style-guide"
                  className="text-fostacomms-black hover:text-white transition-colors"
                >
                  Enquiry Form
                </Link>
              </li>
              <li>
                <Link
                  to="/changelog"
                  className="text-fostacomms-black hover:text-white transition-colors"
                >
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-fostacomms-black hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-fostacomms-black hover:text-white transition-colors"
                >
                  Website Design
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6">Social Link</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="https://linkedin.com"
                  className="text-fostacomms-black hover:text-white transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  to="https://twitter.com"
                  className="text-fostacomms-black hover:text-white transition-colors"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  to="https://facebook.com"
                  className="text-fostacomms-black hover:text-white transition-colors"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  to="https://instagram.com"
                  className="text-fostacomms-black hover:text-white transition-colors"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-gray-800 text-fostacomms-black text-sm">
          <p>Copyright © 2025 Fostacomms</p>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-8 right-8 w-14 h-14 rounded-full bg-fostacomms-black flex items-center justify-center"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5 bg-fostacomms-black text-fostacomms-yellow" />
      </button>
    </footer>
  );
}
