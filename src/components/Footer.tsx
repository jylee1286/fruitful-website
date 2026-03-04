import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B9D] to-[#C44DFF] flex items-center justify-center text-sm font-bold font-[family-name:var(--font-heading)]">
                F
              </div>
              <span className="text-lg font-bold font-[family-name:var(--font-heading)] tracking-tight">
                Fruitful
              </span>
            </div>
            <p className="text-sm text-[#666666] leading-relaxed max-w-xs">
              Turning screen time battles into a game kids actually want to play.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A0A0A0] mb-4 font-[family-name:var(--font-heading)]">
              Product
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#features" className="text-sm text-[#666666] hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-sm text-[#666666] hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#666666] hover:text-white transition-colors">
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A0A0A0] mb-4 font-[family-name:var(--font-heading)]">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/support" className="text-sm text-[#666666] hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <a href="mailto:support@getfruitful.app" className="text-sm text-[#666666] hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A0A0A0] mb-4 font-[family-name:var(--font-heading)]">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-[#666666] hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-[#666666] hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#666666]">
            &copy; {new Date().getFullYear()} Fruitful. All rights reserved.
          </p>
          <p className="text-xs text-[#666666]">
            Made with care for families everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
