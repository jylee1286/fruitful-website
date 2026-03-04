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

  const scale = 0.7 + progress * 0.3;
  const opacity = 0.3 + progress * 0.7;
  const glowOpacity = progress * 0.35;

  return (
    <div ref={sectionRef} className="flex flex-col items-center gap-10">
      {/* Single 3D crate render */}
      <div
        className="relative"
        style={{
          transform: `scale(${scale})`,
          opacity,
          transition: "transform 0.1s, opacity 0.1s",
        }}
      >
        <div
          className="absolute inset-0 rounded-full blur-[80px]"
          style={{
            background: `radial-gradient(circle, rgba(255,200,50,${glowOpacity}) 0%, rgba(255,107,157,${glowOpacity * 0.5}) 60%, transparent 100%)`,
            transform: "scale(1.5)",
          }}
        />
        <Image
          src="/images/crate-3d.png"
          alt="Fruitful fruit crate"
          width={692}
          height={875}
          className="relative w-[240px] sm:w-[280px] lg:w-[320px] h-auto drop-shadow-[0_0_40px_rgba(255,200,50,0.2)]"
          quality={90}
        />
      </div>

      {/* Three tiers */}
      <div className="flex items-center justify-center gap-6 sm:gap-10">
        {[
          { tier: "Bronze", price: "50 coins", color: "#B48246", glow: "rgba(180,130,70,0.15)" },
          { tier: "Silver", price: "100 coins", color: "#C0C0D2", glow: "rgba(192,192,210,0.15)" },
          { tier: "Gold", price: "200 coins", color: "#FFD700", glow: "rgba(255,215,0,0.2)" },
        ].map((t) => (
          <div key={t.tier} className="text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border"
              style={{ borderColor: `${t.color}30`, backgroundColor: t.glow }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: t.color }}
              />
              <span
                className="text-sm font-bold font-[family-name:var(--font-heading)]"
                style={{ color: t.color }}
              >
                {t.tier}
              </span>
            </div>
            <p className="text-[10px] text-[#888] mt-1.5">{t.price}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-[#888] max-w-sm">
        Same crate, different odds. Higher tiers mean better chances at Rare, Epic, and Legendary cards.
      </p>
    </div>
  );
}
