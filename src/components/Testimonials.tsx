const testimonials = [
  {
    quote: "My daughter actually asks me how much screen time she has left now. That never happened before.",
    name: "Sarah M.",
    detail: "Mom of 2",
    accent: "bg-[#FF6B9D]",
  },
  {
    quote: "The trading cards thing is genius. My son treats screen time limits like a game now.",
    name: "David R.",
    detail: "Father of 3",
    accent: "bg-[#4ADE80]",
  },
  {
    quote: "I tried 4 other apps. This is the only one my kids didn't fight me on.",
    name: "Michelle T.",
    detail: "Mom of 1",
    accent: "bg-[#FF8FAE]",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-28 overflow-hidden bg-[#040804]">
      <div className="watermelon-divider" />
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-[#4ADE80]/[0.02] rounded-full blur-[120px]" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 pt-20 sm:pt-24">
        <p className="reveal text-xs font-bold text-[#4ADE80] uppercase tracking-[0.2em] mb-3 font-[family-name:var(--font-heading)] text-center">What Parents Say</p>
        <h2 className="reveal delay-1 text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] tracking-tight leading-tight mb-16 text-center">
          Real families. <span className="gradient-text-warm">Real results.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 sm:gap-12">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`reveal delay-${i + 1}`}>
              <div className={`${t.accent} h-[2px] w-8 mb-6 opacity-50`} />
              <blockquote className="text-lg sm:text-xl text-[#DDD] leading-relaxed font-light italic mb-5">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <p className="text-sm font-semibold font-[family-name:var(--font-heading)] text-[#EEE]">{t.name}</p>
                <p className="text-xs text-[#888]">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
