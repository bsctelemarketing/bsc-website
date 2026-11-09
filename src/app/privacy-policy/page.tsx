import type { Metadata } from "next";
import { PageHero } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Business Solution Center collects, uses, and protects information through BSC Live Chat.",
};

export default function PrivacyPolicy() {
  return (
    <main>
      <PageHero
        eyebrow="Legal Information"
        title="Privacy Policy"
        text="How Business Solution Center handles personal information through our website and BSC Live Chat services."
      />

      <section className="section">
        <div className="container">
          <article style={{ maxWidth: 850, lineHeight: 1.8 }}>
            <p><strong>Last updated:</strong> November 8, 2026</p>

            <h2>1. Introduction</h2>
            <p>
              Business Solution Center ("BSC", "we", "us", or "our")
              operates the BSC Live Chat service and the website
              bsctelemarketing.com. This Privacy Policy explains how
              we collect, use, disclose, and retain information when
              people visit our website, contact us, or use our services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>Depending on how you interact with BSC, we may collect:</p>
            <ul>
              <li>Names, company names, email addresses, and phone numbers.</li>
              <li>Website URLs, service preferences, and inquiry messages.</li>
              <li>Chat messages and contact details voluntarily provided during conversations.</li>
              <li>Website visit and monthly visitor activity information.</li>
              <li>Chat ratings, resolution feedback, and survey comments.</li>
              <li>Client, agent, and partner account information.</li>
              <li>Subscription and billing-related information.</li>
            </ul>

            <h2>3. How We Use Information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Respond to inquiries and free-trial requests.</li>
              <li>Provide live chat and customer support services.</li>
              <li>Help participating businesses respond to website visitors.</li>
              <li>Generate AI-assisted chat suggestions and responses.</li>
              <li>Provide visitor analytics and service performance reports.</li>
              <li>Manage accounts, subscriptions, and billing.</li>
              <li>Maintain, troubleshoot, and improve our services.</li>
              <li>Meet applicable legal obligations.</li>
            </ul>

            <h2>4. Website Contact Forms</h2>
            <p>
              Information submitted through our contact and free-trial forms
              is used to respond to inquiries, process trial requests, and
              communicate with prospective customers. We may use third-party
              service providers to securely process and deliver these submissions.
            </p>

            <h2>5. Live Chat and AI Assistance</h2>
            <p>
              BSC Live Chat supports conversations between website
              visitors and authorized human agents. Depending on the
              service configuration, AI may help generate suggested
              replies or respond to visitors automatically.
              Information from conversations may be processed by
              technology providers involved in delivering these features.
              AI-generated responses may contain errors and should
              not be relied upon as professional advice.
            </p>

            <h2>6. Visitor Tracking and Analytics</h2>
            <p>
              BSC Live Chat includes website visitor tracking and
              monthly activity analytics for participating businesses.
              These features help businesses understand website
              activity and visitor engagement. The information
              collected depends on the implementation and configuration
              of the service.
            </p>





            <h2>7. Security</h2>
            <p>
              We take reasonable steps intended to protect information
              against unauthorized access, alteration, or disclosure.
              However, no internet-based system can guarantee
              absolute security.
            </p>

            <h2>8. Privacy Requests</h2>
            <p>
              You may contact us to ask questions about personal
              information, request access or correction, or request
              deletion where applicable. We may need to verify your
              identity and consider applicable legal requirements
              before responding.
            </p>

            <h2>9. International Processing</h2>
            <p>
              Our technology providers may process or store
              information outside your province or country.
              Information processed in another jurisdiction may
              be subject to that jurisdiction's laws.
            </p>

            <h2>10. Consent and Withdrawal of Consent</h2>
            <p>
              We seek meaningful consent for the collection, use, and
              disclosure of personal information. Depending on the
              sensitivity of the information and applicable law,
              consent may be express or implied.
            </p>
            <p>
              Individuals may withdraw consent, subject to legal or
              contractual restrictions and reasonable notice.
              Withdrawal may affect the availability of certain services.
              Contact info@bsctelemarketing.com to make a request.
            </p>

            <h2>11. Data Retention and Secure Disposal</h2>
            <p>
              We aim to retain personal information only as long as
              reasonably necessary for identified purposes or applicable
              legal obligations. We are reviewing our retention and
              deletion procedures for chat histories, visitor analytics,
              appointment records, and account information.
            </p>
            <p>
              Where information is no longer required, it should be
              securely deleted or anonymized, subject to applicable
              legal and contractual requirements.
            </p>

            <h2>12. Third-Party Processing</h2>
            <p>
              We use service providers for application hosting, database
              services, artificial intelligence, communications, and
              email delivery. Depending on the services enabled,
              personal information may be processed outside Canada.
              Foreign authorities may be able to access information
              under applicable local laws.
            </p>

            <h2>13. Privacy Officer and Complaints</h2>
            <p>
              Privacy inquiries and complaints may be directed to
              Business Solution Center at
              info@bsctelemarketing.com. BSC will review privacy
              concerns and take appropriate corrective measures.
              Individuals may also contact the Office of the Privacy
              Commissioner of Canada at https://www.priv.gc.ca/.
            </p>

            <h2>14. Data Breach Response and Notification</h2>
            <p>
              BSC assesses suspected and confirmed breaches of
              security safeguards involving personal information.
              Where PIPEDA applies, breaches presenting a real risk
              of significant harm must be reported to the Office of
              the Privacy Commissioner of Canada and affected
              individuals notified as soon as feasible.
            </p>
            <p>
              BSC is required to maintain records of breaches of
              security safeguards in accordance with applicable law.
              Where an incident involves a business customer's
              information, BSC will coordinate with that customer
              as appropriate.
            </p>

            <h2>15. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy as our services
              and practices change. The latest version will be
              published on this page with its updated date.
            </p>

            <h2>16. Contact Us</h2>
            <p>
              Business Solution Center<br />
              Ontario, Canada<br />
              Email: <a href="mailto:info@bsctelemarketing.com">
                info@bsctelemarketing.com
              </a>
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

