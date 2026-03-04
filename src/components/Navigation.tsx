"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-solid" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 sm:h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="group-hover:scale-110 transition-transform duration-300">
            <circle cx="14" cy="14" r="13" fill="#FF6B9D" />
            <path d="M14 4C12 4 8 6 8 14C8 22 12 24 14 24C16 24 20 22 20 14C20 6 16 4 14 4Z" fill="#4ADE80" />
            <circle cx="12" cy="12" r="1.5" fill="#050505" />
            <circle cx="16" cy="16" r="1" fill="#050505" />
            <circle cx="13" cy="18" r="1.2" fill="#050505" />
          </svg>
          <span className="text-[17px] font-bold font-[family-name:var(--font-heading)] tracking-tight">
            fruitful
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          <Link href="/#how-it-works" className="text-[13px] text-[#999] hover:text-white transition-colors duration-200 tracking-wide uppercase font-[family-name:var(--font-heading)]">
            How It Works
          </Link>
          <Link href="/#features" className="text-[13px] text-[#999] hover:text-white transition-colors duration-200 tracking-wide uppercase font-[family-name:var(--font-heading)]">
            Features
          </Link>
          <Link href="/support" className="text-[13px] text-[#999] hover:text-white transition-colors duration-200 tracking-wide uppercase font-[family-name:var(--font-heading)]">
            Support
          </Link>
        </div>

        <a
          href="https://apps.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FF6B9D] text-[#050505] text-sm font-bold hover:bg-[#FF8FAE] transition-all duration-200 hover:scale-105 font-[family-name:var(--font-heading)]"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
          Get the App
        </a>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5" aria-label="Menu">
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-80" : "max-h-0"}`}>
        <div className="px-5 py-5 space-y-4 nav-solid">
          <Link href="/#how-it-works" onClick={() => setMobileOpen(false)} className="block text-[#999] hover:text-white text-sm">How It Works</Link>
          <Link href="/#features" onClick={() => setMobileOpen(false)} className="block text-[#999] hover:text-white text-sm">Features</Link>
          <Link href="/support" onClick={() => setMobileOpen(false)} className="block text-[#999] hover:text-white text-sm">Support</Link>
          <a href="https://apps.apple.com" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FF6B9D] text-[#050505] text-sm font-bold">Get the App</a>
        </div>
      </div>
    </nav>
  );
}
