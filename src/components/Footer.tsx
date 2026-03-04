import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-[#050505]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="13" fill="#FF6B9D" />
                <path d="M14 4C12 4 8 6 8 14C8 22 12 24 14 24C16 24 20 22 20 14C20 6 16 4 14 4Z" fill="#4ADE80" />
                <circle cx="12" cy="12" r="1.5" fill="#050505" />
                <circle cx="16" cy="16" r="1" fill="#050505" />
                <circle cx="13" cy="18" r="1.2" fill="#050505" />
              </svg>
              <span className="text-sm font-bold font-[family-name:var(--font-heading)]">fruitful</span>
            </div>
            <p className="text-xs text-[#555] leading-relaxed max-w-[200px]">
              Screen time management that kids actually want to follow.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold text-[#555] uppercase tracking-[0.15em] mb-3 font-[family-name:var(--font-heading)]">Product</p>
            <ul className="space-y-2">
              <li><Link href="/#features" className="text-xs text-[#555] hover:text-[#999] transition-colors">Features</Link></li>
              <li><Link href="/#pricing" className="text-xs text-[#555] hover:text-[#999] transition-colors">Pricing</Link></li>
              <li><a href="https://apps.apple.com" className="text-xs text-[#555] hover:text-[#999] transition-colors">Download</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold text-[#555] uppercase tracking-[0.15em] mb-3 font-[family-name:var(--font-heading)]">Support</p>
            <ul className="space-y-2">
              <li><Link href="/support" className="text-xs text-[#555] hover:text-[#999] transition-colors">Help Center</Link></li>
              <li><a href="mailto:support@getfruitful.app" className="text-xs text-[#555] hover:text-[#999] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold text-[#555] uppercase tracking-[0.15em] mb-3 font-[family-name:var(--font-heading)]">Legal</p>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-xs text-[#555] hover:text-[#999] transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="text-xs text-[#555] hover:text-[#999] transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-[#333]">&copy; {new Date().getFullYear()} Fruitful. All rights reserved.</p>
          <p className="text-[10px] text-[#333]">Made with care for families.</p>
        </div>
      </div>
    </footer>
  );
}
