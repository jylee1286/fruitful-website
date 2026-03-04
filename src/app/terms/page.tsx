export default function TermsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <h1 className="reveal text-4xl sm:text-5xl font-bold font-[family-name:var(--font-heading)] tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="reveal delay-100 text-[#A0A0A0] mb-12">
          Last updated: March 2026
        </p>

        <div className="reveal delay-200 prose-custom space-y-8">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using the Fruitful application (&quot;App&quot;), you agree
              to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these
              Terms, do not use the App.
            </p>
            <p>
              If you are a parent or guardian setting up Fruitful for a child, you agree to these
              Terms on behalf of yourself and your child.
            </p>
          </section>

          <section>
            <h2>2. Description of Service</h2>
            <p>
              Fruitful is a family screen time management application for iOS. The App allows
              parents to set and manage screen time limits for their children&apos;s devices, and
              includes gamification features (coin earning, character collection, trading) to
              encourage healthy digital habits.
            </p>
          </section>

          <section>
            <h2>3. Eligibility</h2>
            <p>
              Parent accounts must be created by individuals 18 years of age or older. Child
              accounts may be created by individuals of any age but must be associated with a
              parent account within a family. Parents are responsible for their children&apos;s use
              of the App.
            </p>
          </section>

          <section>
            <h2>4. Account Registration</h2>
            <p>
              You must create an account to use Fruitful. You are responsible for maintaining
              the confidentiality of your account credentials and for all activities under your
              account. You agree to provide accurate information and to update it as needed.
            </p>
            <p>
              Usernames must not contain offensive, misleading, or inappropriate content. We
              reserve the right to remove or change usernames that violate this policy.
            </p>
          </section>

          <section>
            <h2>5. Subscription and Payment</h2>
            <p>
              Fruitful offers a subscription-based service with a 7-day free trial. After the
              trial period, a monthly fee is charged through your Apple ID. The subscription
              is family-based — one subscription covers all members of a family.
            </p>
            <p>
              Subscriptions automatically renew unless cancelled at least 24 hours before the
              end of the current billing period. You can manage and cancel your subscription
              through your iOS device&apos;s subscription settings.
            </p>
            <p>
              Prices may change with reasonable notice. Price changes will not affect your
              current billing period.
            </p>
          </section>

          <section>
            <h2>6. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the App for any unlawful purpose</li>
              <li>Attempt to circumvent, disable, or interfere with security features</li>
              <li>Create multiple accounts to abuse the service</li>
              <li>Share your account credentials with others</li>
              <li>Use automated means to access the App</li>
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Use the trading system to harass or bully other users</li>
              <li>Impersonate another person or entity</li>
            </ul>
          </section>

          <section>
            <h2>7. Virtual Items</h2>
            <p>
              Coins, characters, crates, and other virtual items within Fruitful have no
              real-world monetary value. They cannot be exchanged for real currency, goods, or
              services outside the App. Virtual items are licensed to you, not sold. We reserve
              the right to modify, manage, or eliminate virtual items at any time.
            </p>
          </section>

          <section>
            <h2>8. Screen Time Management</h2>
            <p>
              Fruitful uses Apple&apos;s FamilyControls, DeviceActivity, and ManagedSettings
              frameworks to provide screen time management. While we strive for accuracy and
              reliability, we cannot guarantee that screen time tracking or app blocking will
              work perfectly in all circumstances. iOS updates, device settings, or other
              factors may affect functionality.
            </p>
            <p>
              Fruitful is a tool to assist with screen time management. It is not a substitute
              for parental supervision and engagement.
            </p>
          </section>

          <section>
            <h2>9. Privacy</h2>
            <p>
              Your use of Fruitful is also governed by our{" "}
              <a href="/privacy" className="text-[#FF6B9D] hover:underline">
                Privacy Policy
              </a>
              , which describes how we collect, use, and protect your data.
            </p>
          </section>

          <section>
            <h2>10. Intellectual Property</h2>
            <p>
              The App, including its design, characters, artwork, code, and content, is owned
              by Fruitful and protected by intellectual property laws. You may not copy,
              modify, distribute, or create derivative works from any part of the App without
              our written permission.
            </p>
          </section>

          <section>
            <h2>11. Termination</h2>
            <p>
              We may suspend or terminate your account if you violate these Terms. You may
              delete your account at any time through the App&apos;s Profile settings. Upon
              termination, your right to use the App ceases immediately, and your data will
              be handled as described in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2>12. Disclaimer of Warranties</h2>
            <p>
              The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
              either express or implied. We do not warrant that the App will be uninterrupted,
              error-free, or free of harmful components.
            </p>
          </section>

          <section>
            <h2>13. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Fruitful shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising from
              your use of the App. Our total liability shall not exceed the amount you paid
              for the App in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2>14. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Material changes will be
              communicated through the App. Your continued use after changes constitutes
              acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2>15. Contact</h2>
            <p>
              For questions about these Terms, contact us at:{" "}
              <a href="mailto:legal@getfruitful.app" className="text-[#FF6B9D] hover:underline">
                legal@getfruitful.app
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
