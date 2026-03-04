# Fruitful Website — Design Brief

## Project Overview
Build the official website for Fruitful, an iOS screen time management app for families. This serves as both a **marketing landing page** (drive App Store downloads) and a **support site** (FAQ/help center). Must feel premium, non-generic, and match the app's unique visual identity.

## Brand Identity
- **App aesthetic:** Brutalist minimal black — deep black backgrounds (#0A0A0A), white cards, sharp 2px corners
- **Accent:** Watermelon pink-to-purple gradient (primary actions)
- **Retro arcade elements:** Neon gradients (pink → purple → cyan), pixel corners for game features
- **Mascot:** Cute watermelon slice character (line art, white on black) — see `public/images/`
- **Typography in app:** Clean sans-serif, uppercase labels

## Target Audience (Dual)
- **Parents:** Need trust, control, professionalism. They're making a purchasing decision.
- **Kids:** Need fun, excitement, gamification. They need to see the game is cool.
- The website primarily targets PARENTS (they find/download the app) but should show enough of the kid experience to sell the "your kids will actually want this" angle.

## Tech Stack
- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Deploy target:** Vercel
- **No external CMS** — static content, markdown-based FAQ

## Design Direction: "Dark Arcade Meets Clean Trust"

### The Concept
The site should feel like you're entering the Fruitful world. Dark, sleek, slightly playful. NOT a generic SaaS landing page. NOT a typical "bright and happy" kids app site. It matches the app — brutalist black with pops of watermelon color.

### Color System
```
Background: #0A0A0A (primary), #111111 (elevated surfaces), #1A1A1A (cards)
Text: #FFFFFF (primary), #A0A0A0 (secondary), #666666 (muted)
Accent gradient: linear-gradient(135deg, #FF6B9D, #C44DFF) — watermelon pink to purple
Secondary accent: #00D4AA (teal/cyan for secondary actions)
Success: #22C55E
Warning: #F59E0B
```

### Typography
- **Headlines:** Bold, slightly condensed. Consider "Space Grotesk" or "Plus Jakarta Sans" — NOT Inter (too generic)
- **Body:** Clean, readable. "Plus Jakarta Sans" or "DM Sans"
- **Accent/Game text:** Could use a pixel/retro font for game feature callouts ("Press Start 2P" sparingly)
- **Size scale:** Large headlines (clamp 3rem-5rem), generous line height

### Signature Elements (What Makes This Non-Generic)
1. **Watermelon mascot** appears throughout — peeking from corners, reacting to scroll, used as visual anchors
2. **Seed pattern texture** — subtle watermelon seed dots as a background texture in some sections
3. **Card reveal animations** — when showing the character collection, cards flip/reveal like the in-app crate opening
4. **Gradient glow effects** — watermelon pink glow behind key elements (not overused)
5. **Grid lines / scan lines** — subtle retro arcade grid pattern on the game features section
6. **Custom scroll indicators** — not just plain vertical scroll

## Pages & Sections

### Page 1: Landing Page (`/`)

**Section 1: Hero**
- Full viewport height
- Large headline: "Screen time battles are exhausting. Fruitful ends them." (or similar — can iterate)
- Watermelon mascot character visible, maybe with a subtle floating animation
- App Store download button (prominent, with the Apple badge)
- Subtle scroll indicator at bottom
- Background: dark with faint gradient glow

**Section 2: How It Works (3 Steps)**
- Visual step-by-step with scroll-triggered reveals
- Step 1: "Set Limits" — parent sets daily screen time limits per app
- Step 2: "Kids Earn" — kids earn coins by staying under limits
- Step 3: "Collect & Trade" — spend coins on crates, collect 48 characters, trade with friends
- Each step has an icon/illustration and brief text
- Steps animate in as user scrolls

**Section 3: For Parents**
- Trust-building section
- Dashboard preview (mockup showing the parent view)
- Key features: Real-time tracking, Remote control, System-level blocking, Custom schedules
- Clean, professional tone
- Maybe a subtle shift to slightly lighter dark background

**Section 4: For Kids — The Game**
- This section shifts to retro arcade energy
- Show the character collection (grid of character cards)
- Crate opening concept visualization
- "48 Characters to Collect" — show a few character families
- Trading with friends feature
- More playful animations, pixel decorations, neon gradient accents

**Section 5: Features Grid**
- Bento-style grid showing all features:
  - Per-app usage tracking
  - Daily limits (5 min to 3 hours)
  - Weekday vs weekend schedules
  - Time-of-day blocks
  - App categories/groups
  - Family network with invite codes
  - Goals (Streak, Reduction, App-Free)
  - Subscription (family-based)

**Section 6: Pricing**
- Simple pricing card
- Free 7-day trial → monthly subscription
- Family plan (one subscription covers everyone)
- Clean, no confusion

**Section 7: Final CTA**
- Large App Store button
- Tagline reinforcement
- Watermelon mascot again (bookend the page)

### Page 2: Support (`/support`)
- Search bar at top
- FAQ categories as expandable accordion sections:
  - Getting Started
  - Screen Time & Limits
  - Family Network
  - Goals
  - Game & Collection
  - Account & Billing
  - Troubleshooting
- Contact section at bottom (support email)
- Same dark aesthetic, clean and easy to scan

### Page 3: Privacy Policy (`/privacy`)
- Clean, readable legal text
- Standard privacy policy content for a screen time app
- Emphasize: on-device processing, only aggregated data syncs, no selling data

### Page 4: Terms of Service (`/terms`)
- Standard terms
- Same clean dark layout

## Navigation
- **Sticky top nav:** Logo (left), Links (center: Features, Support, Privacy), CTA button (right: Download)
- Nav should be transparent on hero, then solidify on scroll
- Mobile: hamburger menu
- Footer: Logo, links, social links placeholders, copyright

## Animations & Interactions
1. **Scroll-triggered reveals** — sections fade/slide in as they enter viewport (IntersectionObserver, NOT heavy libraries)
2. **Watermelon mascot parallax** — mascot moves slightly on scroll for depth
3. **Card flip animations** — character cards in the game section flip to reveal
4. **Gradient glow pulse** — CTA buttons have a subtle pulsing glow
5. **Smooth scroll** — anchor links scroll smoothly
6. **Hover states on all interactive elements** — lift, glow, or color shift
7. **FAQ accordions** — smooth expand/collapse with rotation arrow

## Responsive Design
- Mobile-first approach
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Hero stacks vertically on mobile
- Bento grid collapses to single column on mobile
- Navigation becomes hamburger on mobile

## Assets Available
- `public/images/watermelon-character.jpg` — Main watermelon character (white line art on black)
- `public/images/watermelon-magnify.jpg` — Watermelon with magnifying glass (white line art on black)
- These are JPEG with black backgrounds — will need to be used on dark backgrounds or have backgrounds removed

## Performance Requirements
- Lighthouse score 90+ on all metrics
- No heavy JS libraries (no GSAP, no Framer Motion — use CSS animations + IntersectionObserver)
- Lazy load images below fold
- Preload critical fonts

## What to Build
1. Initialize Next.js 14 project with App Router + Tailwind
2. Build all 4 pages with full content
3. Implement all animations with CSS + vanilla JS (IntersectionObserver)
4. Make fully responsive
5. Test locally and ensure everything works
6. Do NOT deploy — Jeremy will review first

## Quality Bar
This should look like it was designed by a top agency. Not a template. Not generic. The watermelon mascot, the dark brutalist aesthetic, the arcade touches on the game section — these should make it instantly recognizable as Fruitful's brand. Someone should be able to screenshot this and think "that's a beautifully designed site."
