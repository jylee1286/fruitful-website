import Image from "next/image";
import { SeedParticles } from "@/components/SeedParticles";
import { FeatureIcon } from "@/components/FeatureIcon";
import { StepCard } from "@/components/StepCard";

export default function Home() {
  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Ambient watermelon glow — green on left, pink on right */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#4ADE80]/[0.04] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#FF6B9D]/[0.05] rounded-full blur-[150px]" />
        
        <SeedParticles />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-28 sm:pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-[1fr,auto] gap-16 lg:gap-24 items-center">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#4ADE80]/20 bg-[#4ADE80]/[0.05] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
                <span className="text-xs text-[#4ADE80] font-medium font-[family-name:var(--font-heading)] tracking-wide uppercase">
                  Available on iOS
                </span>
              </div>

              {/* Headline — asymmetric sizing */}
              <h1 className="reveal delay-1 font-[family-name:var(--font-heading)] tracking-tight leading-[1.05]">
                <span className="block text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#F5F5F5]">
                  Your kids will
                </span>
                <span className="block text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold gradient-text-warm mt-1">
                  want screen limits.
                </span>
              </h1>

              <p className="reveal delay-2 text-base sm:text-lg text-[#999] leading-relaxed mt-6 max-w-lg">
                Fruitful turns screen time management into a collecting game.
                Kids earn coins for staying under limits, open crates, and collect
                48 characters. Parents stay in control. Everyone wins.
              </p>

              {/* CTA row */}
              <div className="reveal delay-3 flex flex-wrap items-center gap-4 mt-10">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-[#FF6B9D] text-[#050505] font-bold text-base hover:bg-[#FF8FAE] transition-all duration-300 hover:scale-[1.03] font-[family-name:var(--font-heading)]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download Free
                </a>
                <span className="text-xs text-[#555] font-[family-name:var(--font-heading)]">
                  7-day free trial &middot; No credit card
                </span>
              </div>
            </div>

            {/* Right — Mascot with decorative elements */}
            <div className="relative hidden lg:flex items-center justify-center">
              {/* Rotating ring */}
              <div className="absolute w-[380px] h-[380px] rounded-full border border-dashed border-[#FF6B9D]/10 animate-spin-slow" />
              <div className="absolute w-[320px] h-[320px] rounded-full border border-[#4ADE80]/8" />
              
              {/* Mascot */}
              <div className="relative animate-float-gentle">
                <div className="absolute inset-0 bg-[#FF6B9D]/10 rounded-full blur-[60px] scale-75" />
                <Image
                  src="/images/watermelon-character.png"
                  alt="Fruitful mascot"
                  width={280}
                  height={280}
                  className="relative drop-shadow-[0_0_40px_rgba(255,107,157,0.2)]"
                  priority
                />
              </div>

              {/* Floating crate */}
              <div className="absolute -bottom-4 -left-8 animate-float-offset">
                <Image
                  src="/images/crate-gold-clean.png"
                  alt="Golden crate"
                  width={100}
                  height={100}
                  className="drop-shadow-[0_0_20px_rgba(255,200,50,0.3)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom edge — watermelon rind line */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#4ADE80]/30 to-transparent" />
        </div>
      </section>

      {/* ═══════════════════ SOCIAL PROOF MARQUEE ═══════════════════ */}
      <div className="py-6 border-y border-white/[0.03] overflow-hidden bg-[#080808]">
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="text-sm text-[#555] font-[family-name:var(--font-heading)] tracking-wide">SYSTEM-LEVEL BLOCKING</span>
              <span className="text-[#FF6B9D]">🍉</span>
              <span className="text-sm text-[#555] font-[family-name:var(--font-heading)] tracking-wide">48 COLLECTIBLE CHARACTERS</span>
              <span className="text-[#4ADE80]">●</span>
              <span className="text-sm text-[#555] font-[family-name:var(--font-heading)] tracking-wide">TRADE WITH FRIENDS</span>
              <span className="text-[#FF6B9D]">🍉</span>
              <span className="text-sm text-[#555] font-[family-name:var(--font-heading)] tracking-wide">REAL-TIME TRACKING</span>
              <span className="text-[#4ADE80]">●</span>
              <span className="text-sm text-[#555] font-[family-name:var(--font-heading)] tracking-wide">FAMILY NETWORK</span>
              <span className="text-[#FF6B9D]">🍉</span>
              <span className="text-sm text-[#555] font-[family-name:var(--font-heading)] tracking-wide">COIN REWARDS</span>
              <span className="text-[#4ADE80]">●</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════ HOW IT WORKS ═══════════════════ */}
      <section id="how-it-works" className="relative py-28 sm:py-36 texture-dots">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-xl mb-16">
            <p className="reveal text-xs font-bold text-[#4ADE80] uppercase tracking-[0.2em] mb-3 font-[family-name:var(--font-heading)]">
              How It Works
            </p>
            <h2 className="reveal delay-1 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold font-[family-name:var(--font-heading)] tracking-tight leading-tight">
              Three steps to <span className="gradient-text-pink">healthier habits.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <StepCard
              number="01"
              title="Set the rules"
              description="Parents set daily screen time limits per app. Customize by day, block apps at bedtime, group apps together. Takes 2 minutes."
              color="pink"
              delay={1}
            />
            <StepCard
              number="02"
              title="Kids earn coins"
              description="Every day your child stays under their limits, they earn coins. More discipline means more coins to spend."
              color="green"
              delay={2}
            />
            <StepCard
              number="03"
              title="Collect & trade"
              description="Coins open fruit crates that reveal character cards. 48 to collect, 4 rarity tiers each. Trade with friends."
              color="warm"
              delay={3}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════ PARENT SECTION ═══════════════════ */}
      <section className="relative py-28 sm:py-36 overflow-hidden">
        <div className="watermelon-divider mb-28" />
        
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Phone mockup */}
            <div className="reveal-left relative flex justify-center">
              <div className="relative">
                {/* Placeholder phone frame */}
                <div className="relative w-[280px] sm:w-[300px] mx-auto">
                  <div className="relative rounded-[2.5rem] border-[6px] border-[#222] bg-[#0E0E0E] overflow-hidden shadow-2xl shadow-black/50">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#222] rounded-b-2xl z-10" />
                    
                    {/* Screen content — mock dashboard */}
                    <div className="pt-10 pb-6 px-4 min-h-[520px]">
                      <p className="text-[10px] text-[#555] uppercase tracking-wider font-[family-name:var(--font-heading)]">Today&apos;s Screen Time</p>
                      <div className="flex items-end justify-between mt-2 mb-5">
                        <p className="text-3xl font-bold font-[family-name:var(--font-heading)]">2h 14m</p>
                        <div className="w-14 h-14 rounded-full border-[3px] border-[#4ADE80] flex items-center justify-center">
                          <span className="text-xs font-bold text-[#4ADE80]">67%</span>
                        </div>
                      </div>
                      
                      {[
                        { name: "YouTube", time: "52m", limit: "1h", pct: 87, color: "bg-red-500" },
                        { name: "TikTok", time: "38m", limit: "45m", pct: 84, color: "bg-[#FF6B9D]" },
                        { name: "Roblox", time: "24m", limit: "1h", pct: 40, color: "bg-[#4ADE80]" },
                        { name: "Messages", time: "20m", limit: "30m", pct: 67, color: "bg-blue-400" },
                      ].map((app) => (
                        <div key={app.name} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#141414] mb-2">
                          <div className={`w-7 h-7 rounded-lg ${app.color} opacity-80 shrink-0`} />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[11px] font-medium">{app.name}</span>
                              <span className="text-[10px] text-[#555]">{app.time}/{app.limit}</span>
                            </div>
                            <div className="h-1 rounded-full bg-[#1A1A1A] overflow-hidden">
                              <div className={`h-full rounded-full ${app.color}`} style={{ width: `${app.pct}%` }} />
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {/* Add app button */}
                      <button className="w-full mt-3 py-2.5 rounded-xl border border-dashed border-[#333] text-[11px] text-[#555] font-[family-name:var(--font-heading)]">
                        + Add App
                      </button>
                    </div>
                  </div>
                  {/* Phone bottom bar */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-[#333]" />
                </div>

                {/* Decorative floating element */}
                <div className="absolute -top-6 -right-10 sm:-right-16 animate-float-offset">
                  <Image src="/images/watermelon-magnify.png" alt="" width={90} height={90} className="drop-shadow-[0_0_20px_rgba(255,107,157,0.15)] opacity-60" />
                </div>
              </div>
            </div>

            {/* Copy */}
            <div>
              <p className="reveal text-xs font-bold text-[#FF6B9D] uppercase tracking-[0.2em] mb-3 font-[family-name:var(--font-heading)]">
                For Parents
              </p>
              <h2 className="reveal delay-1 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold font-[family-name:var(--font-heading)] tracking-tight leading-tight mb-6">
                You set the limits.<br />
                <span className="gradient-text-warm">We enforce them.</span>
              </h2>
              <p className="reveal delay-2 text-[#999] text-base leading-relaxed mb-8 max-w-md">
                Fruitful uses Apple&apos;s FamilyControls to block apps at the system
                level — even when the app isn&apos;t open. No workarounds, no tricks.
                Manage everything from your own phone.
              </p>
              <ul className="space-y-3">
                {[
                  "Real-time usage tracking across every app",
                  "Remote control from your own device",
                  "System-level blocking — can't be bypassed",
                  "Different schedules for weekdays vs. weekends",
                  "Set goals and watch their progress",
                ].map((item, i) => (
                  <li key={item} className={`reveal delay-${Math.min(i + 3, 6)} flex items-start gap-3`}>
                    <svg className="w-4 h-4 mt-1 text-[#4ADE80] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[#999]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ KIDS / GAME SECTION ═══════════════════ */}
      <section className="relative py-28 sm:py-36 overflow-hidden texture-grid">
        <div className="watermelon-divider mb-28" />
        
        {/* Ambient glows */}
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#FF6B9D]/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-[#4ADE80]/[0.03] rounded-full blur-[100px]" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <p className="reveal text-xs font-bold text-[#4ADE80] uppercase tracking-[0.2em] mb-3 font-[family-name:var(--font-heading)]">
              For Kids
            </p>
            <h2 className="reveal delay-1 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold font-[family-name:var(--font-heading)] tracking-tight leading-tight mb-4">
              It&apos;s not a limit. <span className="gradient-text-warm">It&apos;s a game.</span>
            </h2>
            <p className="reveal delay-2 text-[#999] text-base max-w-xl mx-auto">
              Earn coins for good screen habits. Open crates. Collect all 48 characters
              across 12 families and 4 rarity tiers. Trade with friends. This is the part
              where kids forget they&apos;re being managed.
            </p>
          </div>

          {/* Crate showcase */}
          <div className="reveal-scale flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 mb-20">
            <div className="text-center group">
              <div className="relative">
                <Image src="/images/crate-bronze-clean.png" alt="Bronze Crate" width={160} height={160} className="drop-shadow-[0_0_30px_rgba(180,130,70,0.3)] group-hover:scale-110 transition-transform duration-500" />
              </div>
              <p className="mt-3 text-sm font-semibold font-[family-name:var(--font-heading)] text-[#B48246]">Bronze</p>
              <p className="text-xs text-[#555]">50 coins</p>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-[#FFD700]/10 rounded-full blur-[40px] scale-110 group-hover:bg-[#FFD700]/20 transition-all duration-500" />
                <Image src="/images/crate-gold-clean.png" alt="Gold Crate" width={200} height={200} className="relative drop-shadow-[0_0_40px_rgba(255,200,50,0.3)] group-hover:scale-110 transition-transform duration-500" />
              </div>
              <p className="mt-3 text-sm font-semibold font-[family-name:var(--font-heading)] text-[#FFD700]">Gold</p>
              <p className="text-xs text-[#555]">200 coins</p>
            </div>
          </div>

          {/* Character families */}
          <div className="reveal">
            <p className="text-center text-xs font-bold text-[#555] uppercase tracking-[0.2em] mb-6 font-[family-name:var(--font-heading)]">
              12 Character Families &middot; 48 Total Cards
            </p>
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2">
              {["Annie","Bobby","Charlie","Gary","Sally","Lenny","Wade","Penny","Bella","Marty","Kenny","Daisy"].map((name, i) => {
                const colors = [
                  "from-pink-400 to-rose-600",
                  "from-blue-400 to-indigo-600",
                  "from-amber-400 to-orange-600",
                  "from-green-400 to-emerald-600",
                  "from-purple-400 to-violet-600",
                  "from-red-400 to-orange-600",
                  "from-cyan-400 to-teal-600",
                  "from-fuchsia-400 to-pink-600",
                  "from-rose-400 to-red-600",
                  "from-lime-400 to-green-600",
                  "from-sky-400 to-blue-600",
                  "from-yellow-400 to-amber-600",
                ];
                return (
                  <div key={name} className={`reveal delay-${Math.min(i % 6 + 1, 6)} group`}>
                    <div className={`aspect-[3/4] rounded-lg bg-gradient-to-br ${colors[i]} p-[1px] hover:scale-105 transition-transform duration-300 cursor-pointer`}>
                      <div className="w-full h-full rounded-lg bg-[#141414] flex flex-col items-center justify-center">
                        <span className="text-lg mb-0.5">🍉</span>
                        <span className="text-[9px] font-bold font-[family-name:var(--font-heading)] text-[#999] group-hover:text-white transition-colors">{name}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-center gap-4 mt-6">
              {["Common","Rare","Epic","Legendary"].map((tier, i) => {
                const tierColors = ["text-[#999] border-[#333]","text-blue-400 border-blue-500/30","text-purple-400 border-purple-500/30","text-amber-400 border-amber-500/30"];
                return (
                  <span key={tier} className={`text-[10px] font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider px-2.5 py-1 rounded-full border ${tierColors[i]}`}>
                    {tier}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FEATURES ═══════════════════ */}
      <section id="features" className="relative py-28 sm:py-36">
        <div className="watermelon-divider mb-28" />
        
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-xl mb-16">
            <p className="reveal text-xs font-bold text-[#FF6B9D] uppercase tracking-[0.2em] mb-3 font-[family-name:var(--font-heading)]">
              Features
            </p>
            <h2 className="reveal delay-1 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold font-[family-name:var(--font-heading)] tracking-tight leading-tight">
              Built on Apple&apos;s <span className="gradient-text-pink">FamilyControls.</span>
            </h2>
          </div>

          {/* Bento grid — asymmetric */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "clock", title: "Per-App Tracking", desc: "See exactly which apps are getting the most attention, down to the minute.", span: "" },
              { icon: "shield", title: "System-Level Blocking", desc: "Apps are blocked even when Fruitful isn't open. Built on Apple's ManagedSettings. No workarounds.", span: "lg:col-span-2" },
              { icon: "moon", title: "Bedtime Blocks", desc: "Block social media at night, games during homework. You set the schedule.", span: "" },
              { icon: "sliders", title: "Smart Limits", desc: "Set limits from 5 minutes to 3 hours. Different rules for weekdays and weekends.", span: "" },
              { icon: "users", title: "Family Network", desc: "6-digit invite code, instant sync, remote control. Manage limits from your phone.", span: "" },
              { icon: "target", title: "Goals", desc: "Create streak, reduction, or app-free goals. The app tracks progress automatically.", span: "" },
              { icon: "layers", title: "App Groups", desc: "Group TikTok, Instagram, Snapchat into \"Social Apps\" with one shared limit.", span: "" },
              { icon: "credit-card", title: "One Family Plan", desc: "Parent subscribes, the whole family gets access. 7-day free trial.", span: "sm:col-span-2 lg:col-span-1" },
            ].map((f, i) => (
              <div key={f.title} className={`reveal delay-${Math.min(i % 4 + 1, 4)} ${f.span}`}>
                <div className="glass-card glass-card-hover rounded-2xl p-6 h-full transition-all duration-500">
                  <FeatureIcon name={f.icon} />
                  <h3 className="text-sm font-bold font-[family-name:var(--font-heading)] mt-4 mb-2">{f.title}</h3>
                  <p className="text-sm text-[#999] leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ PRICING ═══════════════════ */}
      <section id="pricing" className="relative py-28 sm:py-36">
        <div className="watermelon-divider mb-28" />

        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="reveal text-xs font-bold text-[#4ADE80] uppercase tracking-[0.2em] mb-3 font-[family-name:var(--font-heading)]">
                Pricing
              </p>
              <h2 className="reveal delay-1 text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] tracking-tight">
                One plan. Whole family.
              </h2>
            </div>

            <div className="reveal-scale">
              <div className="relative rounded-3xl overflow-hidden">
                {/* Top gradient bar */}
                <div className="h-1 bg-gradient-to-r from-[#FF6B9D] via-[#FF8FAE] to-[#4ADE80]" />
                
                <div className="glass-card rounded-t-none rounded-b-3xl p-8 sm:p-12 text-center">
                  <div className="flex items-end justify-center gap-1 mb-1">
                    <span className="text-5xl sm:text-6xl font-extrabold font-[family-name:var(--font-heading)]">$4.99</span>
                    <span className="text-[#555] mb-2 text-sm">/month</span>
                  </div>
                  <p className="text-xs text-[#555] mb-8 font-[family-name:var(--font-heading)]">after 7-day free trial</p>

                  <div className="grid sm:grid-cols-2 gap-3 text-left mb-8 max-w-sm mx-auto">
                    {[
                      "Unlimited family members",
                      "All screen time controls",
                      "Character collection & trading",
                      "Goals & progress tracking",
                      "Real-time monitoring",
                      "Cancel anytime",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs text-[#999]">{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glow inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 rounded-2xl bg-[#FF6B9D] text-[#050505] font-bold text-base hover:bg-[#FF8FAE] transition-all duration-300 hover:scale-[1.02] font-[family-name:var(--font-heading)]"
                  >
                    Start Free Trial
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FINAL CTA ═══════════════════ */}
      <section className="relative py-28 sm:py-36 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#FF6B9D]/[0.04] rounded-full blur-[120px]" />

        <div className="relative max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <div className="reveal">
            <Image
              src="/images/watermelon-character.png"
              alt="Fruitful mascot"
              width={80}
              height={80}
              className="mx-auto mb-6 drop-shadow-[0_0_20px_rgba(255,107,157,0.2)]"
            />
          </div>
          <h2 className="reveal delay-1 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold font-[family-name:var(--font-heading)] tracking-tight leading-tight mb-4">
            Ready to end the<br />
            <span className="gradient-text-warm">screen time battle?</span>
          </h2>
          <p className="reveal delay-2 text-[#999] text-base mb-8">
            Free for 7 days. Cancel anytime. Your family deserves this.
          </p>
          <div className="reveal delay-3">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#FF6B9D] text-[#050505] font-bold text-lg hover:bg-[#FF8FAE] transition-all duration-300 hover:scale-[1.03] font-[family-name:var(--font-heading)]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Download Fruitful
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
