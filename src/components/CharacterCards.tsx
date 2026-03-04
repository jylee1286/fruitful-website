"use client";

const characters = [
  { name: "Annie", family: "Apple", rarity: "legendary", color: "#FFB800", bg: "from-amber-500/20 to-amber-600/5", borderColor: "border-amber-400/40", dotColor: "bg-amber-400" },
  { name: "Wade", family: "Watermelon", rarity: "epic", color: "#A855F7", bg: "from-purple-500/20 to-purple-600/5", borderColor: "border-purple-400/40", dotColor: "bg-purple-400" },
  { name: "Bobby", family: "Banana", rarity: "rare", color: "#3B82F6", bg: "from-blue-500/20 to-blue-600/5", borderColor: "border-blue-400/40", dotColor: "bg-blue-400" },
  { name: "Sally", family: "Strawberry", rarity: "common", color: "#888", bg: "from-gray-500/10 to-gray-600/5", borderColor: "border-gray-500/30", dotColor: "bg-gray-400" },
  { name: "Charlie", family: "Cherry", rarity: "epic", color: "#A855F7", bg: "from-purple-500/20 to-purple-600/5", borderColor: "border-purple-400/40", dotColor: "bg-purple-400" },
  { name: "Penny", family: "Peach", rarity: "rare", color: "#3B82F6", bg: "from-blue-500/20 to-blue-600/5", borderColor: "border-blue-400/40", dotColor: "bg-blue-400" },
];

const fruitEmojis: Record<string, string> = {
  Apple: "🍎",
  Watermelon: "🍉",
  Banana: "🍌",
  Strawberry: "🍓",
  Cherry: "🍒",
  Peach: "🍑",
};

const rarityLabel: Record<string, string> = {
  common: "Common",
  rare: "Rare",
  epic: "Epic",
  legendary: "Legendary",
};

export function CharacterCards() {
  return (
    <div className="reveal mt-20">
      <p className="text-center text-[10px] font-bold text-[#666] uppercase tracking-[0.25em] mb-8 font-[family-name:var(--font-heading)]">
        12 Families &middot; 4 Rarities &middot; 48 Cards to Collect
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
        {characters.map((char, i) => (
          <div
            key={char.name}
            className={`reveal delay-${(i % 6) + 1} group relative rounded-2xl border ${char.borderColor} bg-gradient-to-b ${char.bg} p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default`}
            style={{ ["--glow-color" as string]: char.color }}
          >
            {/* Rarity shimmer for legendary */}
            {char.rarity === "legendary" && (
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 animate-shimmer opacity-30" />
              </div>
            )}

            {/* Character avatar placeholder */}
            <div className="relative mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1A1A1A] border-2 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
              style={{ borderColor: `${char.color}40` }}>
              <span className="text-2xl sm:text-3xl">{fruitEmojis[char.family]}</span>
            </div>

            {/* Name */}
            <p className="text-sm font-bold font-[family-name:var(--font-heading)] text-[#EEE] mb-0.5">{char.name}</p>
            <p className="text-[10px] text-[#888] font-[family-name:var(--font-heading)]">{char.family} Family</p>

            {/* Rarity badge */}
            <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full" style={{ backgroundColor: `${char.color}15` }}>
              <span className={`w-1.5 h-1.5 rounded-full ${char.dotColor}`} />
              <span className="text-[9px] font-bold uppercase tracking-wider font-[family-name:var(--font-heading)]" style={{ color: char.color }}>
                {rarityLabel[char.rarity]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
