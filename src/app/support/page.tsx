"use client";

import { useState } from "react";

const FAQ_CATEGORIES = [
  {
    title: "Getting Started",
    items: [
      {
        q: "How do I download Fruitful?",
        a: "Fruitful is available on the App Store for iPhone and iPad. Search for \"Fruitful\" or use the download link on our homepage. The app requires iOS 16 or later.",
      },
      {
        q: "How do I create an account?",
        a: "Open Fruitful and tap \"Sign Up.\" You can create an account with a username and password, Sign in with Apple, or Google Sign-In. You'll then choose whether you're a Parent or Kid.",
      },
      {
        q: "How do I set up my family?",
        a: "After signing up as a Parent, you'll be prompted to create a family. This generates a 6-digit invite code. Share this code with your kids so they can join your family. You'll need to approve each kid's join request.",
      },
      {
        q: "How does my child join the family?",
        a: "Your child downloads Fruitful, signs up, selects \"Kid\" as their role, then enters the 6-digit invite code you share with them. Once they submit the request, you'll get a notification to approve them.",
      },
      {
        q: "Why does Fruitful need Screen Time permission?",
        a: "Fruitful uses Apple's FamilyControls framework to monitor and manage app usage. This requires the Screen Time permission to work. Without it, Fruitful can't track usage or enforce limits. All data is processed on-device for privacy.",
      },
    ],
  },
  {
    title: "Screen Time & Limits",
    items: [
      {
        q: "How do I set a screen time limit?",
        a: "Go to your Dashboard, tap \"+ Add App,\" select the app you want to limit, and set a daily time limit (from 5 minutes to 3 hours). You can also set different limits for different days of the week.",
      },
      {
        q: "What happens when a limit is reached?",
        a: "When your child reaches their time limit for an app, a system-level shield blocks the app. This works even when Fruitful isn't open — there's no way to bypass it without the parent adjusting the limit.",
      },
      {
        q: "Can I set different limits for weekdays and weekends?",
        a: "Yes. When setting a limit for any app, you can configure separate limits for each day of the week. For example, 30 minutes of YouTube on school days and 1 hour on weekends.",
      },
      {
        q: "What are time-of-day blocks?",
        a: "Time-of-day blocks let you completely block certain apps during specific hours. For example, you can block social media from 9 PM to 6 AM, or block games during school hours.",
      },
      {
        q: "What are app groups?",
        a: "App groups let you combine multiple apps under one shared limit. For example, you can create a \"Social Apps\" group with TikTok, Instagram, and Snapchat, and give them a combined limit of 1 hour per day.",
      },
      {
        q: "Can my child change their own limits?",
        a: "No. Kids see a read-only view of their limits with a lock icon. Only parents can set or adjust limits. Kids can see their usage, but they cannot modify any restrictions.",
      },
    ],
  },
  {
    title: "Family Network",
    items: [
      {
        q: "How do I manage my child's limits remotely?",
        a: "As a parent, you can see and manage all your children's screen time limits from your own device. Any changes you make push instantly to your child's device via notifications.",
      },
      {
        q: "Can I have multiple kids in one family?",
        a: "Yes. Share your 6-digit invite code with as many kids as you'd like. Each child gets their own profile with individual limits, goals, and game progress.",
      },
      {
        q: "What if I lose my invite code?",
        a: "Your invite code is always visible in the Social tab of the app. You can share it anytime. The same code works for all family members.",
      },
    ],
  },
  {
    title: "Goals",
    items: [
      {
        q: "What types of goals can I create?",
        a: "There are three goal types: Streak (maintain consistent low usage over time), Reduction (decrease usage by a percentage), and App-Free (zero usage of a specific app for a set period).",
      },
      {
        q: "How are goals evaluated?",
        a: "Goals auto-evaluate based on your child's actual screen time data. The app tracks progress daily and marks goals as completed or failed based on the criteria you set.",
      },
      {
        q: "What happens when a goal completes?",
        a: "When a goal is completed (or fails), the original screen time limits are restored. You can then set new goals as needed.",
      },
    ],
  },
  {
    title: "Game & Collection",
    items: [
      {
        q: "How do kids earn coins?",
        a: "Kids earn coins each day they stay under their screen time limits. The more consistently they stay under their limits, the more coins they accumulate.",
      },
      {
        q: "What are crates?",
        a: "Crates are virtual containers that kids open with their earned coins. There are three tiers: Bronze, Silver, and Gold. Higher-tier crates have better chances of containing rare characters.",
      },
      {
        q: "How many characters are there?",
        a: "There are 48 total characters: 12 character families (Annie, Bobby, Charlie, Gary, Sally, Lenny, Wade, Penny, Bella, Marty, Kenny, and Daisy), each with 4 rarity tiers (Common, Rare, Epic, Legendary).",
      },
      {
        q: "Can kids trade characters?",
        a: "Yes! Kids can add friends by username, view each other's collections, and propose trades. Trades can be characters for characters, characters for coins, or any combination. Both sides must agree for a trade to go through.",
      },
      {
        q: "When does the game unlock?",
        a: "The game features unlock after a kid has at least 3 apps with limits set. This ensures the gamification is tied to actual screen time management.",
      },
    ],
  },
  {
    title: "Account & Billing",
    items: [
      {
        q: "How does the subscription work?",
        a: "Fruitful uses a family-based subscription. The family owner (parent) subscribes, and all family members get full access. The subscription is managed through your standard iOS subscription settings.",
      },
      {
        q: "Is there a free trial?",
        a: "Yes. Fruitful offers a 7-day free trial. You get full access to all features during the trial. Cancel anytime before the trial ends and you won't be charged.",
      },
      {
        q: "How do I cancel my subscription?",
        a: "Go to Settings > Apple ID > Subscriptions on your iPhone, find Fruitful, and tap Cancel. You'll continue to have access until the end of your current billing period.",
      },
      {
        q: "Can I change my username?",
        a: "Yes, you can change your username in the Profile tab. There's a 7-day cooldown between username changes.",
      },
      {
        q: "How do I delete my account?",
        a: "Go to Profile > Delete Account. This will permanently remove your account and all associated data. If you're the family owner, the family will be dissolved. This action cannot be undone.",
      },
    ],
  },
  {
    title: "Troubleshooting",
    items: [
      {
        q: "Screen time tracking isn't working",
        a: "Make sure you've granted Fruitful the Screen Time permission (Settings > Screen Time > Fruitful). If you previously denied the permission, you may need to go to Settings > Privacy & Security > Screen Time to re-enable it. Try restarting your device after granting permission.",
      },
      {
        q: "Limits aren't being enforced",
        a: "Verify that FamilyControls is properly authorized. Go to the app and check the permission screen. If the permission shows as granted but limits aren't working, try removing and re-adding the app limit. Make sure the app is running iOS 16 or later.",
      },
      {
        q: "I'm not receiving notifications",
        a: "Check that notifications are enabled for Fruitful in Settings > Notifications > Fruitful. Make sure both alerts and banners are turned on. Also check that your device isn't in Do Not Disturb or Focus mode.",
      },
      {
        q: "My child's device isn't syncing",
        a: "Ensure both devices have an internet connection. Try opening Fruitful on both devices to trigger a sync. If the issue persists, have the child sign out and sign back in.",
      },
    ],
  },
];

export default function SupportPage() {
  const [search, setSearch] = useState("");
  const [openItem, setOpenItem] = useState<string | null>(null);

  const filtered = FAQ_CATEGORIES.map((cat) => ({
    ...cat,
    items: cat.items.filter(
      (item) =>
        !search ||
        item.q.toLowerCase().includes(search.toLowerCase()) ||
        item.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.items.length > 0);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="reveal text-4xl sm:text-5xl font-bold font-[family-name:var(--font-heading)] tracking-tight mb-4">
            Help Center
          </h1>
          <p className="reveal delay-1 text-[#999] text-base">
            Find answers to common questions about Fruitful.
          </p>
        </div>

        {/* Search */}
        <div className="reveal delay-2 mb-12">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#555]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for help..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#0E0E0E] border border-white/[0.06] text-white placeholder-[#555] focus:outline-none focus:border-[#FF6B9D]/20 transition-colors"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filtered.map((category) => (
            <div key={category.title} className="reveal">
              <h2 className="text-lg font-semibold font-[family-name:var(--font-heading)] mb-4 gradient-text-pink">
                {category.title}
              </h2>
              <div className="space-y-2">
                {category.items.map((item) => {
                  const key = `${category.title}-${item.q}`;
                  const isOpen = openItem === key;
                  return (
                    <div
                      key={key}
                      className="rounded-xl border border-white/[0.04] bg-[#0E0E0E] overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenItem(isOpen ? null : key)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-white/[0.01] transition-colors"
                      >
                        <span className="text-sm sm:text-base font-medium pr-4">{item.q}</span>
                        <svg
                          className={`w-5 h-5 text-[#555] shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          isOpen ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                          <p className="text-sm text-[#999] leading-relaxed">{item.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="reveal mt-16 text-center p-8 rounded-2xl glass-card">
          <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)] mb-2">
            Still need help?
          </h3>
          <p className="text-[#999] mb-6 text-sm">
            We&apos;re here for you. Reach out and we&apos;ll get back to you as soon as possible.
          </p>
          <a
            href="mailto:support@getfruitful.app"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF6B9D] text-[#050505] font-bold text-sm hover:bg-[#FF8FAE] transition-all duration-200 font-[family-name:var(--font-heading)]"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
