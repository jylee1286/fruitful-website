export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <h1 className="reveal text-4xl sm:text-5xl font-bold font-[family-name:var(--font-heading)] tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="reveal delay-1 text-[#999] mb-12">
          Last updated: March 2026
        </p>

        <div className="reveal delay-2 prose-dark space-y-8">
          <section>
            <h2>Overview</h2>
            <p>
              Fruitful (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy of our users,
              especially children. This Privacy Policy explains how we collect, use, and protect
              information when you use our iOS application.
            </p>
            <p>
              Fruitful is designed for families. We take extra care to ensure that children&apos;s data
              is handled responsibly and in compliance with applicable privacy laws, including the
              Children&apos;s Online Privacy Protection Act (COPPA).
            </p>
          </section>

          <section>
            <h2>Information We Collect</h2>

            <h3>Account Information</h3>
            <p>
              When you create an account, we collect your chosen username and authentication
              credentials. If you use Sign in with Apple or Google Sign-In, we receive the
              information you authorize those services to share (typically your name and email address).
            </p>

            <h3>Screen Time Data</h3>
            <p>
              <strong>Screen time data is processed on-device.</strong> Fruitful uses Apple&apos;s
              FamilyControls and DeviceActivity frameworks to monitor app usage. This data is
              processed locally on the device. Only aggregated usage summaries (e.g., total daily
              usage per app) are synced to our cloud service to enable family features like remote
              monitoring and goal tracking.
            </p>
            <p>
              We do not collect, store, or have access to the content of apps your child uses.
              We only track usage duration.
            </p>

            <h3>Family Network Data</h3>
            <p>
              When you create or join a family, we store family membership information (which
              accounts belong to which family, parent/child roles, and invite codes) to enable
              remote management and syncing between family members&apos; devices.
            </p>

            <h3>Game Data</h3>
            <p>
              We store game-related data including coin balances, character collections, trade
              history, and friend connections to enable the collection and trading features.
            </p>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <ul>
              <li>To provide and maintain the Fruitful app and its features</li>
              <li>To enable family screen time management between parent and child devices</li>
              <li>To facilitate the character collection and trading game</li>
              <li>To process subscriptions and manage your account</li>
              <li>To send push notifications related to app activity (trades, friend requests, limit changes)</li>
              <li>To improve our service and fix bugs</li>
            </ul>
          </section>

          <section>
            <h2>Data Storage and Security</h2>
            <p>
              We use Supabase as our backend service provider. Your data is stored securely with
              industry-standard encryption in transit and at rest. We implement appropriate
              technical and organizational measures to protect your personal data.
            </p>
          </section>

          <section>
            <h2>Children&apos;s Privacy</h2>
            <p>
              Fruitful is designed to be used by children under parental supervision. We comply
              with the Children&apos;s Online Privacy Protection Act (COPPA) and similar regulations:
            </p>
            <ul>
              <li>Children create accounts within a family managed by a parent</li>
              <li>Parents must approve a child&apos;s request to join a family</li>
              <li>Children&apos;s social features (friends, trading) are limited to other Fruitful users</li>
              <li>We do not serve advertising to any users, including children</li>
              <li>We do not sell any user data, including children&apos;s data</li>
              <li>Screen time data is processed on-device for maximum privacy</li>
            </ul>
          </section>

          <section>
            <h2>Data Sharing</h2>
            <p>
              <strong>We do not sell your personal data.</strong> We do not share your data with
              third parties for marketing purposes. We may share data only in the following circumstances:
            </p>
            <ul>
              <li><strong>Within your family:</strong> Parents can see their children&apos;s aggregated screen time data</li>
              <li><strong>With friends:</strong> Kids can see their friends&apos; character collections (not screen time data)</li>
              <li><strong>Service providers:</strong> We use Supabase for data storage and Apple for subscription processing</li>
              <li><strong>Legal requirements:</strong> We may disclose data if required by law or to protect safety</li>
            </ul>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your account and associated data</li>
              <li>Export your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>
              To exercise these rights, contact us at{" "}
              <a href="mailto:privacy@getfruitful.app" className="text-[#FF6B9D] hover:underline">
                privacy@getfruitful.app
              </a>.
            </p>
          </section>

          <section>
            <h2>Data Retention</h2>
            <p>
              We retain your data for as long as your account is active. When you delete your
              account, we permanently remove all associated data within 30 days. Aggregated,
              anonymized data may be retained for service improvement purposes.
            </p>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any
              material changes by posting the new policy in the app and updating the &quot;Last updated&quot;
              date. Your continued use of Fruitful after changes constitutes acceptance of the
              updated policy.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, contact us at:{" "}
              <a href="mailto:privacy@getfruitful.app" className="text-[#FF6B9D] hover:underline">
                privacy@getfruitful.app
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
