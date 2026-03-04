"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const cards = [
  { rarity: "Common", image: "/images/card-common.png", color: "#C0C0C0", glowColor: "rgba(192,192,192,0.15)" },
  { rarity: "Rare", image: "/images/card-rare.png", color: "#3B82F6", glowColor: "rgba(59,130,246,0.2)" },
  { rarity: "Epic", image: "/images/card-epic.png", color: "#A855F7", glowColor: "rgba(168,85,247,0.2)" },
  { rarity: "Legendary", image: "/images/card-legendary.png", color: "#FFB800", glowColor: "rgba(255,184,0,0.25)" },
];

export function CharacterCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle tilt effect on hover
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    if (hoveredIndex !== index) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setTilt({ x, y });
  };

  return (
    <div ref={containerRef} className="reveal mt-20">
      <p className="text-center text-xs font-bold text-[#888] uppercase tracking-[0.2em] mb-3 font-[family-name:var(--font-heading)]">
        Apple Annie — One Family, Four Rarities
      </p>
      <p className="text-center text-[11px] text-[#666] mb-10 max-w-md mx-auto">
        Every character has 4 versions. Rarer cards come from better crates.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-5xl mx-auto">
        {cards.map((card, i) => (
          <div
            key={card.rarity}
            className={`reveal delay-${i + 1} group relative cursor-default`}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => { setHoveredIndex(null); setTilt({ x: 0, y: 0 }); }}
            onMouseMove={(e) => handleMouseMove(e, i)}
          >
            {/* Glow behind card */}
            <div
              className="absolute inset-0 rounded-2xl blur-[30px] transition-opacity duration-500"
              style={{
                background: card.glowColor,
                opacity: hoveredIndex === i ? 1 : 0.3,
                transform: "scale(0.9)",
              }}
            />

            {/* Card */}
            <div
              className="relative rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-[1.03]"
              style={{
                transform: hoveredIndex === i
                  ? `perspective(600px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale(1.03)`
                  : "perspective(600px) rotateY(0) rotateX(0) scale(1)",
                transition: "transform 0.15s ease-out",
              }}
            >
              <Image
                src={card.image}
                alt={`Apple Annie ${card.rarity} card`}
                width={800}
                height={533}
                className="w-full h-auto"
                quality={90}
              />
            </div>

            {/* Rarity label below */}
            <div className="mt-3 text-center">
              <span
                className="text-xs font-bold uppercase tracking-wider font-[family-name:var(--font-heading)]"
                style={{ color: card.color }}
              >
                {card.rarity}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
