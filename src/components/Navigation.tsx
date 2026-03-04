"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "nav-blur bg-[#0A0A0A]/80 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B9D] to-[#C44DFF] flex items-center justify-center text-sm font-bold font-[family-name:var(--font-heading)] group-hover:scale-110 transition-transform duration-300">
            F
          </div>
          <span className="text-lg font-bold font-[family-name:var(--font-heading)] tracking-tight">
            Fruitful
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/#features"
            className="text-sm text-[#A0A0A0] hover:text-white transition-colors duration-200"
          >
            Features
          </Link>
          <Link
            href="/#pricing"
            className="text-sm text-[#A0A0A0] hover:text-white transition-colors duration-200"
          >
            Pricing
          </Link>
          <Link
            href="/support"
            className="text-sm text-[#A0A0A0] hover:text-white transition-colors duration-200"
          >
            Support
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF6B9D] to-[#C44DFF] text-white text-sm font-semibold hover:opacity-90 transition-all duration-200 hover:scale-105"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-80 border-b border-white/5" : "max-h-0"
        }`}
      >
        <div className="px-5 py-4 space-y-4 nav-blur bg-[#0A0A0A]/90">
          <Link
            href="/#features"
            onClick={() => setMobileOpen(false)}
            className="block text-[#A0A0A0] hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#pricing"
            onClick={() => setMobileOpen(false)}
            className="block text-[#A0A0A0] hover:text-white transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/support"
            onClick={() => setMobileOpen(false)}
            className="block text-[#A0A0A0] hover:text-white transition-colors"
          >
            Support
          </Link>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF6B9D] to-[#C44DFF] text-white text-sm font-semibold"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}
