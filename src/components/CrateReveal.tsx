"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function CrateReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const handleScroll = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      const p = Math.min(1, Math.max(0, (viewH - rect.top) / (viewH * 0.7)));
      setProgress(p);
    };

    const observer = new IntersectionObserver(
      () => handleScroll(),
      { threshold: Array.from({ length: 20 }, (_, i) => i / 20) }
    );

    observer.observe(el);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scale = 0.6 + progress * 0.4;
  const opacity = 0.3 + progress * 0.7;
  const glowOpacity = progress * 0.4;

  return (
    <div ref={sectionRef} className="flex flex-col sm:flex-row items-end justify-center gap-8 sm:gap-14">
      {/* Bronze crate */}
      <div className="text-center" style={{ transform: `scale(${Math.max(0.7, scale - 0.08)})`, opacity: Math.max(0.2, opacity - 0.15), transition: "transform 0.1s, opacity 0.1s" }}>
        <div className="relative">
          <Image src="/images/crate-bronze-clean.png" alt="Bronze Crate" width={160} height={160} className="drop-shadow-[0_0_30px_rgba(180,130,70,0.3)]" />
        </div>
        <p className="mt-3 text-sm font-semibold font-[family-name:var(--font-heading)] text-[#B48246]">Bronze</p>
        <p className="text-[10px] text-[#888]">50 coins</p>
      </div>

      {/* Silver crate */}
      <div className="text-center" style={{ transform: `scale(${Math.max(0.7, scale - 0.03)})`, opacity: Math.max(0.2, opacity - 0.05), transition: "transform 0.1s, opacity 0.1s" }}>
        <div className="relative">
          <div className="absolute inset-0 rounded-full blur-[40px]" style={{ background: `rgba(192, 192, 210, ${glowOpacity * 0.5})`, transform: "scale(1.2)" }} />
          <Image src="/images/crate-bronze-clean.png" alt="Silver Crate" width={190} height={190} className="relative drop-shadow-[0_0_35px_rgba(192,192,210,0.25)] brightness-125 hue-rotate-[200deg] saturate-50" />
        </div>
        <p className="mt-3 text-sm font-semibold font-[family-name:var(--font-heading)] text-[#C0C0D2]">Silver</p>
        <p className="text-[10px] text-[#888]">100 coins</p>
      </div>

      {/* Gold crate — biggest, most prominent */}
      <div className="text-center" style={{ transform: `scale(${scale})`, opacity, transition: "transform 0.1s, opacity 0.1s" }}>
        <div className="relative">
          <div className="absolute inset-0 rounded-full blur-[60px]" style={{ background: `rgba(255, 200, 50, ${glowOpacity})`, transform: "scale(1.4)" }} />
          <Image src="/images/crate-gold-clean.png" alt="Gold Crate" width={240} height={240} className="relative drop-shadow-[0_0_50px_rgba(255,200,50,0.35)] animate-shimmer-subtle" />
        </div>
        <p className="mt-3 text-base font-bold font-[family-name:var(--font-heading)] text-[#FFD700]">Gold</p>
        <p className="text-[10px] text-[#888]">200 coins</p>
      </div>
    </div>
  );
}
