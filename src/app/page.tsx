import Image from "next/image";
import { CharacterCards } from "@/components/CharacterCards";

const CHARACTERS = [
  { name: "Annie", color: "from-pink-400 to-rose-500" },
  { name: "Bobby", color: "from-blue-400 to-indigo-500" },
  { name: "Charlie", color: "from-yellow-400 to-amber-500" },
  { name: "Gary", color: "from-green-400 to-emerald-500" },
  { name: "Sally", color: "from-purple-400 to-violet-500" },
  { name: "Lenny", color: "from-orange-400 to-red-500" },
  { name: "Wade", color: "from-cyan-400 to-teal-500" },
  { name: "Penny", color: "from-fuchsia-400 to-pink-500" },
  { name: "Bella", color: "from-rose-400 to-pink-500" },
  { name: "Marty", color: "from-lime-400 to-green-500" },
  { name: "Kenny", color: "from-sky-400 to-blue-500" },
  { name: "Daisy", color: "from-amber-400 to-yellow-500" },
];

const FEATURES = [
  {
    title: "Per-App Tracking",
    description: "See exactly which apps are getting the most attention, down to the minute.",
    icon: "📊",
  },
  {
    title: "Smart Limits",
    description: "Set limits from 5 minutes to 3 hours per app. Different rules for different days.",
    icon: "⏱️",
  },
  {
    title: "Time-of-Day Blocks",
    description: "Block social media at bedtime, games during homework. You set the schedule.",
    icon: "🌙",
  },
  {
    title: "App Groups",
    description: "Group apps into categories with shared limits. \"Social Apps\" gets 1 hour total.",
    icon: "📁",
  },
  {
    title: "Family Network",
    description: "Invite kids with a simple 6-digit code. Manage everything from your phone.",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    title: "System-Level Blocking",
    description: "Apps are blocked even when Fruitful isn't open. No workarounds.",
    icon: "🛡️",
  },
  {
    title: "Smart Goals",
    description: "Create streak, reduction, or app-free goals. Progress tracked automatically.",
    icon: "🎯",
  },
  {
    title: "One Subscription",
    description: "Family plan — one parent subscribes, the whole family gets access.",
    icon: "💳",
  },
];

export default function Home() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-br from-[#FF6B9D]/8 to-[#C44DFF]/5 blur-[120px]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B9D]/20 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Copy */}
            <div className="max-w-xl">
              <div className="reveal">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-[#A0A0A0] mb-6 font-[family-name:var(--font-heading)] uppercase tracking-wider">
                  iOS App for Families
                </span>
              </div>

              <h1 className="reveal delay-100 text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] leading-[1.1] tracking-tight mb-6">
                Screen time battles are exhausting.{" "}
                <span className="gradient-text">Fruitful ends them.</span>
              </h1>

              <p className="reveal delay-200 text-lg sm:text-xl text-[#A0A0A0] leading-relaxed mb-10 max-w-md">
                Kids earn coins for staying under their limits. They open crates,
                collect characters, and trade with friends. Suddenly, screen time
                limits are something they actually want to follow.
              </p>

              <div className="reveal delay-300 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FF6B9D] to-[#C44DFF] text-white font-semibold text-lg hover:opacity-90 transition-all duration-300 hover:scale-[1.02] animate-pulse-glow"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Download for iOS
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-white/10 text-white font-medium hover:bg-white/5 transition-all duration-300"
                >
                  See How It Works
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Mascot */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative animate-float">
                {/* Glow behind mascot */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B9D]/20 to-[#C44DFF]/15 rounded-3xl blur-[60px] scale-110" />
                <Image
                  src="/images/watermelon-character.jpg"
                  alt="Fruitful watermelon character"
                  width={420}
                  height={420}
                  className="relative rounded-3xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#666666]">
          <span className="text-xs uppercase tracking-widest font-[family-name:var(--font-heading)]">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-[#666666]/50 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-[#666666] animate-bounce" />
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section id="how-it-works" className="relative py-24 sm:py-32 seed-pattern">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] tracking-tight mb-4">
              How It Works
            </h2>
            <p className="reveal delay-100 text-[#A0A0A0] text-lg max-w-lg mx-auto">
              Three steps. No drama. Just healthier screen habits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="reveal delay-100 group text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#FF6B9D]/10 to-[#FF6B9D]/5 border border-[#FF6B9D]/20 flex items-center justify-center group-hover:scale-110 group-hover:border-[#FF6B9D]/40 transition-all duration-500">
                <span className="text-3xl font-bold font-[family-name:var(--font-heading)] gradient-text">1</span>
              </div>
              <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)] mb-3">Set Limits</h3>
              <p className="text-[#A0A0A0] leading-relaxed">
                Parents set daily screen time limits per app. Customize by day of the week. Block apps during bedtime. Takes 2 minutes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="reveal delay-200 group text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#C44DFF]/10 to-[#C44DFF]/5 border border-[#C44DFF]/20 flex items-center justify-center group-hover:scale-110 group-hover:border-[#C44DFF]/40 transition-all duration-500">
                <span className="text-3xl font-bold font-[family-name:var(--font-heading)] gradient-text">2</span>
              </div>
              <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)] mb-3">Kids Earn</h3>
              <p className="text-[#A0A0A0] leading-relaxed">
                When kids stay under their limits, they earn coins. Every day under budget means more coins to spend. Good habits, rewarded.
              </p>
            </div>

            {/* Step 3 */}
            <div className="reveal delay-300 group text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#00D4AA]/10 to-[#00D4AA]/5 border border-[#00D4AA]/20 flex items-center justify-center group-hover:scale-110 group-hover:border-[#00D4AA]/40 transition-all duration-500">
                <span className="text-3xl font-bold font-[family-name:var(--font-heading)] text-[#00D4AA]">3</span>
              </div>
              <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)] mb-3">Collect &amp; Trade</h3>
              <p className="text-[#A0A0A0] leading-relaxed">
                Coins open fruit crates that reveal character cards. 48 to collect across 12 families. Trade with friends. Gotta catch &apos;em all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOR PARENTS ===================== */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Subtle bg shift */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0D0D0D] to-[#0A0A0A]" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Dashboard mockup */}
            <div className="reveal-left order-2 lg:order-1">
              <div className="relative rounded-2xl border border-white/10 bg-[#111111] p-6 sm:p-8 glow-pink">
                {/* Mock dashboard header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-[#666666] uppercase tracking-wider font-[family-name:var(--font-heading)]">Today&apos;s Screen Time</p>
                    <p className="text-3xl font-bold font-[family-name:var(--font-heading)] mt-1">2h 14m</p>
                  </div>
                  <div className="w-16 h-16 rounded-full border-4 border-[#22C55E] flex items-center justify-center">
                    <span className="text-sm font-bold text-[#22C55E]">67%</span>
                  </div>
                </div>
                {/* Mock app list */}
                <div className="space-y-3">
                  {[
                    { name: "YouTube", time: "52m", limit: "1h", pct: 87, color: "bg-red-500" },
                    { name: "TikTok", time: "38m", limit: "45m", pct: 84, color: "bg-[#FF6B9D]" },
                    { name: "Roblox", time: "24m", limit: "1h", pct: 40, color: "bg-[#00D4AA]" },
                    { name: "Messages", time: "20m", limit: "30m", pct: 67, color: "bg-blue-500" },
                  ].map((app) => (
                    <div key={app.name} className="flex items-center gap-3 p-3 rounded-xl bg-[#1A1A1A]">
                      <div className={`w-8 h-8 rounded-lg ${app.color} opacity-80`} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">{app.name}</span>
                          <span className="text-xs text-[#A0A0A0]">{app.time} / {app.limit}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-[#222222] overflow-hidden">
                          <div
                            className={`h-full rounded-full ${app.color} transition-all duration-1000`}
                            style={{ width: `${app.pct}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Copy */}
            <div className="order-1 lg:order-2">
              <span className="reveal inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-[#A0A0A0] mb-6 font-[family-name:var(--font-heading)] uppercase tracking-wider">
                For Parents
              </span>
              <h2 className="reveal delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] tracking-tight mb-6">
                You stay <span className="gradient-text">in control.</span>
              </h2>
              <p className="reveal delay-200 text-[#A0A0A0] text-lg leading-relaxed mb-8">
                Set limits, monitor usage, and manage your kid&apos;s screen time
                from your own device. No more arguments. No more sneaking extra time. Apps are blocked at the system level — even when Fruitful isn&apos;t open.
              </p>
              <ul className="reveal delay-300 space-y-4">
                {[
                  "Real-time usage tracking across all apps",
                  "Remote control from your own device",
                  "System-level blocking — no workarounds",
                  "Custom schedules for weekdays vs weekends",
                  "Set goals and track your child's progress",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#A0A0A0]">
                    <svg className="w-5 h-5 mt-0.5 text-[#22C55E] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOR KIDS — THE GAME ===================== */}
      <section className="relative py-24 sm:py-32 overflow-hidden arcade-grid">
        {/* Neon glow top edge */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C44DFF]/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <span className="reveal inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#C44DFF]/10 border border-[#C44DFF]/20 text-[#C44DFF] mb-6 font-[family-name:var(--font-heading)] uppercase tracking-wider">
              For Kids
            </span>
            <h2 className="reveal delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] tracking-tight mb-4">
              It&apos;s not just limits.{" "}
              <span className="gradient-text">It&apos;s a game.</span>
            </h2>
            <p className="reveal delay-200 text-[#A0A0A0] text-lg max-w-2xl mx-auto">
              Earn coins. Open crates. Collect characters. Trade with friends. 48 unique
              characters across 12 families — and 4 rarity tiers for each. Your kids
              won&apos;t want to go over their screen time limits ever again.
            </p>
          </div>

          {/* Mascot + Crate concept */}
          <div className="reveal-scale mb-16 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B9D]/15 to-[#C44DFF]/10 rounded-3xl blur-[80px] scale-125" />
              <Image
                src="/images/watermelon-magnify.jpg"
                alt="Fruitful character exploring"
                width={360}
                height={360}
                className="relative rounded-3xl"
              />
            </div>
          </div>

          {/* Character grid */}
          <CharacterCards characters={CHARACTERS} />

          {/* Rarity tiers */}
          <div className="reveal mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { tier: "Common", color: "border-gray-500 text-gray-400", bg: "bg-gray-500/10" },
              { tier: "Rare", color: "border-blue-500 text-blue-400", bg: "bg-blue-500/10" },
              { tier: "Epic", color: "border-purple-500 text-purple-400", bg: "bg-purple-500/10" },
              { tier: "Legendary", color: "border-amber-500 text-amber-400", bg: "bg-amber-500/10" },
            ].map((r) => (
              <div key={r.tier} className={`text-center p-4 rounded-xl border ${r.color} ${r.bg}`}>
                <p className="text-sm font-semibold font-[family-name:var(--font-heading)]">{r.tier}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FEATURES GRID ===================== */}
      <section id="features" className="relative py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] tracking-tight mb-4">
              Everything you need
            </h2>
            <p className="reveal delay-100 text-[#A0A0A0] text-lg max-w-lg mx-auto">
              Built on Apple&apos;s FamilyControls framework. Powerful, private, and reliable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                className={`reveal ${i < 4 ? `delay-${(i + 1) * 100}` : ""} group p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#FF6B9D]/20 transition-all duration-500 hover:-translate-y-1`}
              >
                <span className="text-2xl mb-4 block">{feature.icon}</span>
                <h3 className="text-base font-semibold font-[family-name:var(--font-heading)] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#A0A0A0] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PRICING ===================== */}
      <section id="pricing" className="relative py-24 sm:py-32 seed-pattern">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] tracking-tight mb-4">
              Simple pricing
            </h2>
            <p className="reveal delay-100 text-[#A0A0A0] text-lg max-w-lg mx-auto">
              One subscription covers your whole family. Start free — no credit card required.
            </p>
          </div>

          <div className="reveal-scale max-w-md mx-auto">
            <div className="relative rounded-3xl border border-white/10 bg-[#111111] p-8 sm:p-10 glow-pink overflow-hidden">
              {/* Gradient accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B9D] to-[#C44DFF]" />

              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#A0A0A0] mb-2 font-[family-name:var(--font-heading)]">
                  Family Plan
                </p>
                <div className="flex items-end justify-center gap-1 mb-2">
                  <span className="text-5xl font-bold font-[family-name:var(--font-heading)]">$4.99</span>
                  <span className="text-[#A0A0A0] mb-1">/month</span>
                </div>
                <p className="text-sm text-[#666666] mb-8">after 7-day free trial</p>

                <ul className="text-left space-y-3 mb-8">
                  {[
                    "Unlimited family members",
                    "Full screen time controls",
                    "Character collection & trading",
                    "Goals & progress tracking",
                    "Real-time usage monitoring",
                    "Cancel anytime",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-[#A0A0A0]">
                      <svg className="w-4 h-4 text-[#22C55E] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 rounded-2xl bg-gradient-to-r from-[#FF6B9D] to-[#C44DFF] text-white font-semibold text-lg hover:opacity-90 transition-all duration-300 hover:scale-[1.02]"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-gradient-to-br from-[#FF6B9D]/10 to-[#C44DFF]/8 blur-[100px]" />
        </div>

        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] tracking-tight mb-6">
            Ready to end the <span className="gradient-text">screen time battle?</span>
          </h2>
          <p className="reveal delay-100 text-[#A0A0A0] text-lg mb-10 max-w-lg mx-auto">
            Download Fruitful and give your family a fresh start. Free for 7 days.
          </p>
          <div className="reveal delay-200">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#FF6B9D] to-[#C44DFF] text-white font-semibold text-xl hover:opacity-90 transition-all duration-300 hover:scale-[1.02] animate-pulse-glow"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download for iOS
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
