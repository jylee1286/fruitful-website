"use client";

export function SeedParticles() {
  // Generate fixed seed positions (CSS-only, no heavy JS)
  const seeds = Array.from({ length: 12 }, (_, i) => ({
    left: `${8 + (i * 7.5) % 85}%`,
    delay: `${i * 1.2}s`,
    duration: `${12 + (i % 5) * 3}s`,
    size: i % 3 === 0 ? 4 : 3,
    opacity: 0.15 + (i % 4) * 0.05,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {seeds.map((seed, i) => (
        <div
          key={i}
          className="absolute bottom-0"
          style={{
            left: seed.left,
            width: seed.size,
            height: seed.size * 1.6,
            borderRadius: "50%",
            background: i % 2 === 0 ? "#FF6B9D" : "#4ADE80",
            opacity: seed.opacity,
            animation: `seed-drift ${seed.duration} ${seed.delay} linear infinite`,
          }}
        />
      ))}
    </div>
  );
}
