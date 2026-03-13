export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <h1 className="reveal text-4xl sm:text-5xl font-bold font-[family-name:var(--font-heading)] tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="reveal delay-1 text-[#999] mb-12">
          Last updated: March 13, 2026
        </p>

        <div className="reveal delay-2 prose-dark space-y-8">
          <section>
            <h2>Overview</h2>
            <p>
              Fruitful (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy of our
              users, especially children. This Privacy Policy explains how we collect, use,
              disclose, and protect information when you use the Fruitful iOS application
              (&quot;the App&quot;).
            </p>
            <p>
              Fruitful is designed for families. Parents use the App to manage their children&apos;s
              screen time; children use it to earn rewards and build collections. We take extra
              care to ensure that all user data — and children&apos;s data in particular — is handled
              responsibly and in compliance with applicable privacy laws, including the Children&apos;s
              Online Privacy Protection Act (COPPA).
            </p>
          </section>

          <section>
            <h2>Information We Collect</h2>

            <h3>Account Information</h3>
            <p>
              When you create an account we collect your email address and the role you select
              (parent or child). If you sign in with Apple, we receive only the information you
              authorize Apple to share — typically your name and email address. We do not support
              any other third-party sign-in providers.
            </p>

            <h3>Screen Time &amp; App Usage Data</h3>
            <p>
              <strong>Screen time data is processed on-device.</strong> Fruitful uses Apple&apos;s
              FamilyControls and DeviceActivity frameworks to monitor app usage. Processing happens
              locally on the device. Only aggregated usage summaries (e.g., total daily minutes
              per app category, whether a daily goal was met) are synced to our cloud service to
              enable family features such as remote monitoring and goal tracking.
            </p>
            <p>
              We do not collect, store, or access the content of any app your child uses. We
              track usage duration and, where a child shares an achievement post, the name of the
              app associated with that achievement.
            </p>

            <h3>Family Network Data</h3>
            <p>
              When you create or join a family we store family membership information — which
              accounts belong to which family, parent/child roles, and invite codes — to enable
              remote management and syncing between family members&apos; devices.
            </p>

            <h3>Activity &amp; Social Posts</h3>
            <p>
              Children can share milestone posts within their family (e.g., completing a screen
              time goal or reaching a streak). These posts may include an optional photo, a
              caption, the name and duration of an app associated with the achievement, and
              reaction emoji from family members. Posts are visible only to members of the same
              family.
            </p>

            <h3>Game &amp; Rewards Data</h3>
            <p>
              We store game-related data including coin balances, fruit crate history, character
              card collections, and trade activity to enable the rewards and collection features.
            </p>

            <h3>Subscription &amp; Purchase Data</h3>
            <p>
              We process subscriptions through Apple In-App Purchases. We store subscription
              status, product identifier, and expiration date in our backend. We never receive
              or store your payment card information — Apple handles all payment processing.
            </p>

            <h3>Device &amp; Technical Data</h3>
            <p>
              We collect push notification device tokens to deliver alerts about screen time
              limits, goal completions, trade requests, and other in-app events. We also collect
              standard technical information (app version, OS version, crash reports) to maintain
              and improve the App.
            </p>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <ul>
              <li>To provide and maintain the Fruitful app and its features</li>
              <li>To enable family screen time management between parent and child devices</li>
              <li>To facilitate goal tracking, the rewards system, and character collection features</li>
              <li>To display family activity posts and reactions within your family group</li>
              <li>To process subscriptions and manage your account</li>
              <li>To send push notifications related to app activity (limit changes, goal completions, trade requests)</li>
              <li>To diagnose bugs, improve performance, and enhance our service</li>
            </ul>
            <p>We do not use your data for advertising or sell it to any third party.</p>
          </section>

          <section>
            <h2>Data Storage and Security</h2>
            <p>
              We use Supabase (supabase.com) as our backend service provider. Your data is
              stored in the United States with encryption in transit (TLS) and at rest. We
              enforce row-level security policies so that users can only access data belonging
              to their own family. We implement appropriate technical and organizational
              safeguards appropriate to the sensitivity of the data we hold.
            </p>
          </section>

          <section>
            <h2>Children&apos;s Privacy (COPPA)</h2>
            <p>
              Fruitful is intended to be used by children under direct parental supervision.
              We comply with the Children&apos;s Online Privacy Protection Act (COPPA) and similar
              regulations:
            </p>
            <ul>
              <li>Child accounts are created within a family that a parent controls</li>
              <li>A parent must approve any child joining a family before that child&apos;s data is processed</li>
              <li>Children&apos;s social features (posts, reactions, trading) are limited to members of their own family</li>
              <li>We do not serve advertising to any users, including children</li>
              <li>We do not sell children&apos;s personal data</li>
              <li>Screen time monitoring is processed on-device; only aggregated summaries leave the device</li>
              <li>Parents may review, correct, or request deletion of their child&apos;s data at any time by contacting us or using the account deletion feature in the App</li>
            </ul>
            <p>
              If we become aware that we have inadvertently collected personal information from
              a child without verifiable parental consent, we will delete that information promptly.
            </p>
          </section>

          <section>
            <h2>Data Sharing</h2>
            <p>
              <strong>We do not sell your personal data.</strong> We do not share your data with
              third parties for marketing purposes. Data is shared only in these circumstances:
            </p>
            <ul>
              <li>
                <strong>Within your family:</strong> Parents can view their children&apos;s aggregated
                screen time summaries and goal progress. Family members can see each other&apos;s
                activity posts.
              </li>
              <li>
                <strong>Service providers:</strong> We use Supabase for data storage and Apple for
                subscription processing and push notification delivery. These providers process data
                only as necessary to deliver our service.
              </li>
              <li>
                <strong>Legal requirements:</strong> We may disclose data if required by applicable
                law, court order, or governmental authority, or to protect the safety of our users
                or the public.
              </li>
            </ul>
          </section>

          <section>
            <h2>Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you or your child</li>
              <li>Correct inaccurate data</li>
              <li>Delete your account and all associated data</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>
              <strong>Account deletion is available directly within the App</strong> (Settings →
              Account → Delete Account). Deletion is permanent and removes all associated data
              within 30 days.
            </p>
            <p>
              To exercise any of these rights or for questions about your data, contact us at{" "}
              <a href="mailto:fruitfulapp1@gmail.com" className="text-[#FF6B9D] hover:underline">
                fruitfulapp1@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2>Data Retention</h2>
            <p>
              We retain your data for as long as your account is active. When you delete your
              account, all personal data is permanently removed within 30 days. Aggregate,
              anonymized statistics (containing no personal identifiers) may be retained for
              service improvement.
            </p>
          </section>

          <section>
            <h2>Third-Party Frameworks</h2>
            <p>
              The App uses Apple&apos;s first-party frameworks — FamilyControls, DeviceActivity,
              ManagedSettings, and Screen Time — to implement parental controls. These frameworks
              are governed by Apple&apos;s own privacy policy (apple.com/privacy). We do not integrate
              any third-party advertising SDKs or analytics platforms that collect personal data.
            </p>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material
              changes by posting the updated policy in the App and on this page, and by updating
              the &quot;Last updated&quot; date above. Your continued use of Fruitful after changes
              constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, contact us at:{" "}
              <a href="mailto:fruitfulapp1@gmail.com" className="text-[#FF6B9D] hover:underline">
                fruitfulapp1@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
