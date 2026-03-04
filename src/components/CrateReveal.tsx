"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function CrateReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Calculate how far into the viewport the element is
            const rect = entry.boundingClientRect;
            const viewH = window.innerHeight;
            const p = Math.min(1, Math.max(0, (viewH - rect.top) / (viewH * 0.6)));
            setProgress(p);
          }
        });
      },
      { threshold: Array.from({ length: 20 }, (_, i) => i / 20) }
    );

    observer.observe(el);

    // Also listen to scroll for smooth updates
    const handleScroll = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      const p = Math.min(1, Math.max(0, (viewH - rect.top) / (viewH * 0.7)));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scale = 0.6 + progress * 0.4; // 0.6 → 1.0
  const opacity = 0.3 + progress * 0.7; // 0.3 → 1.0
  const glowOpacity = progress * 0.4;

  return (
    <div ref={sectionRef} className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20">
      {/* Bronze crate */}
      <div className="text-center" style={{ transform: `scale(${Math.max(0.7, scale - 0.05)})`, opacity: Math.max(0.2, opacity - 0.1), transition: "transform 0.1s, opacity 0.1s" }}>
        <div className="relative">
          <Image src="/images/crate-bronze-clean.png" alt="Bronze Crate" width={150} height={150} className="drop-shadow-[0_0_30px_rgba(180,130,70,0.3)]" />
        </div>
        <p className="mt-3 text-sm font-semibold font-[family-name:var(--font-heading)] text-[#B48246]">Bronze</p>
        <p className="text-[10px] text-[#555]">50 coins</p>
      </div>

      {/* Gold crate — bigger, appears slightly after */}
      <div className="text-center" style={{ transform: `scale(${scale})`, opacity, transition: "transform 0.1s, opacity 0.1s" }}>
        <div className="relative">
          <div className="absolute inset-0 rounded-full blur-[50px]" style={{ background: `rgba(255, 200, 50, ${glowOpacity})`, transform: "scale(1.3)" }} />
          <Image src="/images/crate-gold-clean.png" alt="Gold Crate" width={200} height={200} className="relative drop-shadow-[0_0_40px_rgba(255,200,50,0.3)]" />
        </div>
        <p className="mt-3 text-sm font-semibold font-[family-name:var(--font-heading)] text-[#FFD700]">Gold</p>
        <p className="text-[10px] text-[#555]">200 coins</p>
      </div>
    </div>
  );
}
