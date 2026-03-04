"use client";

import { useState } from "react";

interface Character {
  name: string;
  color: string;
}

export function CharacterCards({ characters }: { characters: Character[] }) {
  const [flipped, setFlipped] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
      {characters.map((char, i) => (
        <div
          key={char.name}
          className={`reveal delay-${Math.min((i % 6) * 100, 500)}`}
        >
          <button
            onClick={() => setFlipped(flipped === char.name ? null : char.name)}
            className="w-full aspect-[3/4] perspective-1000"
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                flipped === char.name ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              {/* Front */}
              <div className={`absolute inset-0 backface-hidden rounded-xl bg-gradient-to-br ${char.color} p-3 flex flex-col items-center justify-end border-2 border-white/10 hover:border-white/30 transition-colors cursor-pointer`}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/20 mb-2 flex items-center justify-center text-2xl">
                  🍉
                </div>
                <p className="text-xs sm:text-sm font-bold font-[family-name:var(--font-heading)] text-white drop-shadow-lg">
                  {char.name}
                </p>
              </div>
              {/* Back */}
              <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] rounded-xl bg-[#1A1A1A] border-2 border-[#C44DFF]/30 p-3 flex flex-col items-center justify-center cursor-pointer">
                <p className="text-xs text-[#C44DFF] font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider mb-1">
                  4 Variants
                </p>
                <p className="text-[10px] text-[#A0A0A0] text-center leading-tight">
                  Common &middot; Rare &middot; Epic &middot; Legendary
                </p>
              </div>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}
