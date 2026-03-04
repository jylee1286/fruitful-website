import Image from "next/image";
import { SeedParticles } from "@/components/SeedParticles";
import { FeatureIcon } from "@/components/FeatureIcon";
import { CrateReveal } from "@/components/CrateReveal";
import { CharacterCards } from "@/components/CharacterCards";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#4ADE80]/[0.04] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#FF6B9D]/[0.05] rounded-full blur-[150px]" />
        <SeedParticles />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-28 sm:pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-[1fr,auto] gap-16 lg:gap-20 items-center">
            <div className="max-w-2xl">
              <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#4ADE80]/20 bg-[#4ADE80]/[0.05] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
                <span className="text-xs text-[#4ADE80] font-medium font-[family-name:var(--font-heading)] tracking-wide uppercase">Available on iOS</span>
              </div>

              <h1 className="reveal delay-1 font-[family-name:var(--font-heading)] tracking-tight leading-[1.05]">
                <span className="block text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#F5F5F5]">Your kids will</span>
                <span className="block text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold gradient-text-warm mt-1">want screen limits.</span>
              </h1>

              <p className="reveal delay-2 text-base sm:text-lg text-[#AAA] leading-relaxed mt-6 max-w-lg">
                Fruitful turns screen time management into a collecting game.
                Kids earn coins for staying under limits, open crates, and collect
                48 characters. Parents stay in control. Everyone wins.
              </p>

              <div className="reveal delay-3 flex flex-wrap items-center gap-4 mt-10">
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
                  className="btn-glow inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-[#FF6B9D] text-[#050505] font-bold text-base hover:bg-[#FF8FAE] transition-all duration-300 hover:scale-[1.03] font-[family-name:var(--font-heading)]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download Free
                </a>
                <span className="text-xs text-[#888] font-[family-name:var(--font-heading)]">7-day free trial &middot; No credit card</span>
              </div>

              {/* Parent vs Kid split callout */}
              <div className="reveal delay-4 flex flex-wrap gap-3 mt-8">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#FF6B9D]/15 bg-[#FF6B9D]/[0.04]">
                  <span className="text-[10px] text-[#FF6B9D] font-bold uppercase tracking-wider font-[family-name:var(--font-heading)]">Parents see</span>
                  <span className="text-[10px] text-[#AAA]">Dashboard &amp; Controls</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#4ADE80]/15 bg-[#4ADE80]/[0.04]">
                  <span className="text-[10px] text-[#4ADE80] font-bold uppercase tracking-wider font-[family-name:var(--font-heading)]">Kids see</span>
                  <span className="text-[10px] text-[#AAA]">Coins, Crates &amp; Characters</span>
                </div>
              </div>
            </div>

            {/* Mascot — colorful, prominent */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-[#FF6B9D]/10 animate-spin-slow" />
              <div className="relative animate-float-gentle">
                <div className="absolute inset-0 bg-[#FF6B9D]/15 rounded-full blur-[80px] scale-90" />
                <Image src="/images/watermelon-character.png" alt="Fruitful watermelon mascot" width={300} height={300} className="relative drop-shadow-[0_0_60px_rgba(255,107,157,0.25)]" priority />
              </div>
              <div className="absolute -bottom-6 -left-10 animate-float-offset">
                <Image src="/images/crate-gold-clean.png" alt="Golden crate" width={90} height={90} className="drop-shadow-[0_0_20px_rgba(255,200,50,0.3)]" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4ADE80]/30 to-transparent" />
      </section>

      {/* ═══════════════════ MARQUEE ═══════════════════ */}
      <div className="py-5 border-y border-white/[0.03] overflow-hidden bg-[#080808]">
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="text-xs text-[#555] font-[family-name:var(--font-heading)] tracking-widest uppercase">System-Level Blocking</span>
              <span className="text-[#FF6B9D] text-xs">●</span>
              <span className="text-xs text-[#555] font-[family-name:var(--font-heading)] tracking-widest uppercase">48 Collectible Characters</span>
              <span className="text-[#4ADE80] text-xs">●</span>
              <span className="text-xs text-[#555] font-[family-name:var(--font-heading)] tracking-widest uppercase">Trade With Friends</span>
              <span className="text-[#FF6B9D] text-xs">●</span>
              <span className="text-xs text-[#555] font-[family-name:var(--font-heading)] tracking-widest uppercase">Real-Time Tracking</span>
              <span className="text-[#4ADE80] text-xs">●</span>
              <span className="text-xs text-[#555] font-[family-name:var(--font-heading)] tracking-widest uppercase">Family Network</span>
              <span className="text-[#FF6B9D] text-xs">●</span>
              <span className="text-xs text-[#555] font-[family-name:var(--font-heading)] tracking-widest uppercase">Coin Rewards</span>
              <span className="text-[#4ADE80] text-xs">●</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════ HOW IT WORKS ═══════════════════ */}
      <section id="how-it-works" className="relative py-24 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="reveal text-xs font-bold text-[#4ADE80] uppercase tracking-[0.2em] mb-3 font-[family-name:var(--font-heading)]">How It Works</p>
          <h2 className="reveal delay-1 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold font-[family-name:var(--font-heading)] tracking-tight leading-tight mb-16">
            Three steps to <span className="gradient-text-pink">healthier habits.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-x-12 gap-y-12">
            {[
              { num: "01", title: "Set the rules", desc: "Parents set daily screen time limits per app. Customize by day, block apps at bedtime, group apps together. Takes two minutes.", color: "text-[#FF6B9D]", line: "bg-[#FF6B9D]", icon: "⚙️" },
              { num: "02", title: "Kids earn coins", desc: "Every day your child stays under their limits, they earn coins. More discipline means more coins to spend in the crate shop.", color: "text-[#4ADE80]", line: "bg-[#4ADE80]", icon: "🪙" },
              { num: "03", title: "Collect & trade", desc: "Coins open fruit crates that reveal character cards. 48 to collect across 12 families. Four rarity tiers each. Trade with friends.", color: "text-[#FF8FAE]", line: "bg-gradient-to-r from-[#FF6B9D] to-[#4ADE80]", icon: "🎴" },
            ].map((step, i) => (
              <div key={step.num} className={`reveal delay-${i + 1}`}>
                <div className={`${step.line} h-[2px] w-12 mb-6 opacity-40`} />
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-sm font-bold ${step.color} opacity-50 font-[family-name:var(--font-heading)]`}>{step.num}</span>
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-3">{step.title}</h3>
                <p className="text-sm text-[#999] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FOR PARENTS — bigger phone mockup ═══════════════════ */}
      <section className="relative py-24 sm:py-28 overflow-hidden">
        <div className="watermelon-divider" />

        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-20 sm:pt-24">
          <div className="grid lg:grid-cols-[1fr,1.1fr] gap-16 lg:gap-20 items-start">
            {/* Phone mockup — BIGGER */}
            <div className="reveal-left relative flex justify-center lg:sticky lg:top-28">
              <div className="relative w-[300px] sm:w-[340px]">
                <div className="rounded-[2.5rem] border-[6px] border-[#1A1A1A] bg-[#0A0A0A] overflow-hidden shadow-2xl shadow-black/60">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#1A1A1A] rounded-b-2xl z-10" />
                  <div className="pt-10 pb-6 px-5 min-h-[540px]">
                    <p className="text-[11px] text-[#888] uppercase tracking-wider font-[family-name:var(--font-heading)]">Today&apos;s Screen Time</p>
                    <div className="flex items-end justify-between mt-2 mb-5">
                      <p className="text-3xl font-bold font-[family-name:var(--font-heading)]">2h 14m</p>
                      <div className="w-14 h-14 rounded-full border-[3px] border-[#4ADE80] flex items-center justify-center">
                        <span className="text-[11px] font-bold text-[#4ADE80]">67%</span>
                      </div>
                    </div>
                    {[
                      { name: "YouTube", time: "52m", limit: "1h", pct: 87, color: "bg-red-500" },
                      { name: "TikTok", time: "38m", limit: "45m", pct: 84, color: "bg-[#FF6B9D]" },
                      { name: "Roblox", time: "24m", limit: "1h", pct: 40, color: "bg-[#4ADE80]" },
                      { name: "Messages", time: "20m", limit: "30m", pct: 67, color: "bg-blue-400" },
                      { name: "Safari", time: "12m", limit: "45m", pct: 27, color: "bg-cyan-400" },
                    ].map((app) => (
                      <div key={app.name} className="flex items-center gap-3 py-3 border-b border-white/[0.04] last:border-0">
                        <div className={`w-7 h-7 rounded-lg ${app.color} opacity-80 shrink-0`} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[11px] font-medium text-[#DDD]">{app.name}</span>
                            <span className="text-[10px] text-[#888]">{app.time}/{app.limit}</span>
                          </div>
                          <div className="h-[3px] rounded-full bg-[#1A1A1A] overflow-hidden">
                            <div className={`h-full rounded-full ${app.color}`} style={{ width: `${app.pct}%` }} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-[#222]" />

                {/* Floating mascot peeking from behind phone */}
                <div className="absolute -top-8 -right-14 animate-float-offset">
                  <Image src="/images/mascot-explore.png" alt="" width={90} height={90} className="drop-shadow-[0_0_20px_rgba(255,107,157,0.2)]" />
                </div>
              </div>
            </div>

            {/* Copy */}
            <div>
              <p className="reveal text-xs font-bold text-[#FF6B9D] uppercase tracking-[0.2em] mb-3 font-[family-name:var(--font-heading)]">For Parents</p>
              <h2 className="reveal delay-1 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold font-[family-name:var(--font-heading)] tracking-tight leading-tight mb-6">
                You set the limits.<br /><span className="gradient-text-warm">We enforce them.</span>
              </h2>
              <p className="reveal delay-2 text-[#AAA] text-base leading-relaxed mb-10 max-w-md">
                Fruitful uses Apple&apos;s FamilyControls to block apps at the system level — even when the app isn&apos;t open. No workarounds. Manage everything from your own phone.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Real-time tracking", desc: "See every app, every minute. Know exactly where the time goes." },
                  { title: "Remote control", desc: "Change limits from your phone. Changes push to your child's device instantly." },
                  { title: "System-level blocking", desc: "Apps get blocked by iOS itself. Can't be bypassed even when Fruitful is closed." },
                  { title: "Custom schedules", desc: "Different rules for weekdays and weekends. Block social media after 9pm." },
                  { title: "Smart goals", desc: "Set streak, reduction, or app-free goals. Progress is tracked automatically." },
                ].map((item, i) => (
                  <div key={item.title} className={`reveal delay-${Math.min(i + 2, 6)}`}>
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 mt-1 text-[#4ADE80] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold font-[family-name:var(--font-heading)] mb-0.5 text-[#EEE]">{item.title}</p>
                        <p className="text-sm text-[#999] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FOR KIDS — crates + character cards ═══════════════════ */}
      <section className="relative py-24 sm:py-28 overflow-hidden bg-[#040804]">
        <div className="watermelon-divider" />

        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-[#4ADE80]/[0.02] via-transparent to-transparent" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#FF6B9D]/[0.03] rounded-full blur-[120px]" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-20 sm:pt-24">
          <div className="text-center mb-16">
            <p className="reveal text-xs font-bold text-[#4ADE80] uppercase tracking-[0.2em] mb-3 font-[family-name:var(--font-heading)]">For Kids</p>
            <h2 className="reveal delay-1 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold font-[family-name:var(--font-heading)] tracking-tight leading-tight mb-4">
              It&apos;s not a limit. <span className="gradient-text-warm">It&apos;s a game.</span>
            </h2>
            <p className="reveal delay-2 text-[#AAA] text-base max-w-xl mx-auto leading-relaxed">
              Earn coins for good screen habits. Open crates. Collect all 48 characters. Trade with friends. This is the part where kids forget they&apos;re being managed.
            </p>
          </div>

          {/* Crate showcase */}
          <CrateReveal />

          {/* Character Cards — visual grid */}
          <CharacterCards />


        </div>
      </section>

      {/* ═══════════════════ FEATURES ═══════════════════ */}
      <section id="features" className="relative py-24 sm:py-28">
        <div className="watermelon-divider" />

        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-20 sm:pt-24">
          <p className="reveal text-xs font-bold text-[#FF6B9D] uppercase tracking-[0.2em] mb-3 font-[family-name:var(--font-heading)]">Features</p>
          <h2 className="reveal delay-1 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold font-[family-name:var(--font-heading)] tracking-tight leading-tight mb-16">
            Built on Apple&apos;s <span className="gradient-text-pink">FamilyControls.</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
            {[
              { icon: "clock", title: "Per-App Tracking", desc: "Minute-level precision on every app. See exactly where the time goes." },
              { icon: "shield", title: "System Blocking", desc: "iOS blocks apps at the OS level. Works even when Fruitful isn't running." },
              { icon: "moon", title: "Bedtime Blocks", desc: "Block categories during specific hours. No social media after 9pm." },
              { icon: "sliders", title: "Smart Limits", desc: "5 minutes to 3 hours. Different rules for different days of the week." },
              { icon: "users", title: "Family Network", desc: "6-digit code to join. Parents approve. Changes sync instantly." },
              { icon: "target", title: "Goals", desc: "Streak, reduction, or app-free challenges. Auto-evaluated daily." },
              { icon: "layers", title: "App Groups", desc: "Combine apps under shared limits. One hour of social media total." },
              { icon: "credit-card", title: "Family Plan", desc: "One parent subscribes. Everyone gets access. Cancel anytime." },
            ].map((f, i) => (
              <div key={f.title} className={`reveal delay-${(i % 4) + 1}`}>
                <FeatureIcon name={f.icon} />
                <h3 className="text-sm font-bold font-[family-name:var(--font-heading)] mt-3 mb-1.5 text-[#EEE]">{f.title}</h3>
                <p className="text-xs text-[#999] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
      <Testimonials />

      {/* ═══════════════════ PRICING ═══════════════════ */}
      <section id="pricing" className="relative py-24 sm:py-28">
        <div className="watermelon-divider" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#FF6B9D]/[0.04] rounded-full blur-[150px]" />

        <div className="relative max-w-lg mx-auto px-5 sm:px-8 text-center pt-20 sm:pt-24">
          <p className="reveal text-xs font-bold text-[#4ADE80] uppercase tracking-[0.2em] mb-3 font-[family-name:var(--font-heading)]">Pricing</p>
          <h2 className="reveal delay-1 text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] tracking-tight mb-10">
            One plan. Whole family.
          </h2>

          <div className="reveal-scale">
            <div className="h-[2px] bg-gradient-to-r from-[#FF6B9D] via-[#FF8FAE] to-[#4ADE80] rounded-full mb-10" />

            <div className="flex items-end justify-center gap-1 mb-1">
              <span className="text-6xl sm:text-7xl font-extrabold font-[family-name:var(--font-heading)]">$4.99</span>
              <span className="text-[#888] mb-3 text-sm">/month</span>
            </div>
            <p className="text-xs text-[#888] mb-10 font-[family-name:var(--font-heading)]">after 7-day free trial</p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-left mb-10 max-w-xs mx-auto">
              {["Unlimited family members","All screen time controls","Character collection","Goals & tracking","Real-time monitoring","Cancel anytime"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg className="w-3 h-3 text-[#4ADE80] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs text-[#AAA]">{item}</span>
                </div>
              ))}
            </div>

            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
              className="btn-glow inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl bg-[#FF6B9D] text-[#050505] font-bold text-base hover:bg-[#FF8FAE] transition-all duration-300 hover:scale-[1.02] font-[family-name:var(--font-heading)]">
              Start Free Trial
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FINAL CTA ═══════════════════ */}
      <section className="relative py-24 sm:py-28 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[#FF6B9D]/[0.04] rounded-full blur-[120px]" />

        <div className="relative max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <div className="reveal mb-6">
            <Image src="/images/watermelon-character.png" alt="Fruitful mascot" width={72} height={72} className="mx-auto drop-shadow-[0_0_20px_rgba(255,107,157,0.2)]" />
          </div>
          <h2 className="reveal delay-1 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold font-[family-name:var(--font-heading)] tracking-tight leading-tight mb-4">
            Ready to end the<br /><span className="gradient-text-warm">screen time battle?</span>
          </h2>
          <p className="reveal delay-2 text-[#AAA] text-base mb-8">Free for 7 days. Cancel anytime. Your family deserves this.</p>
          <div className="reveal delay-3">
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
              className="btn-glow inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#FF6B9D] text-[#050505] font-bold text-lg hover:bg-[#FF8FAE] transition-all duration-300 hover:scale-[1.03] font-[family-name:var(--font-heading)]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Download Fruitful
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
