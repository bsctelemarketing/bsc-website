import type { Metadata } from "next";
import { PageHero } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of BSC Live Chat services provided by Business Solution Center.",
};

export default function TermsOfService() {
  return (
    <main>
      <PageHero
        eyebrow="Legal Information"
        title="Terms of Service"
        text="Important information about using BSC Live Chat services provided by Business Solution Center."
      />

      <section className="section">
        <div className="container">
          <article style={{ maxWidth: 850, lineHeight: 1.8 }}>
            <p><strong>Last updated:</strong> October 17, 2026</p>

            <h2>1. Introduction</h2>
            <p>
              These Terms of Service describe the conditions for using
              BSC Live Chat, a service operated by Business Solution
              Center ("BSC", "we", "us", or "our"), based in Ontario,
              Canada. By accessing or using the service, you agree
              to these Terms.
            </p>

            <h2>2. Our Services</h2>
            <p>
              BSC Live Chat provides website communication tools
              that may include human live chat, AI-assisted responses,
              automated AI replies, visitor tracking, monthly
              analytics, lead capture, chat surveys, and client
              and partner management portals.
            </p>
            <p>
              Available features depend on the selected service
              plan and account configuration.
            </p>

            <h2>3. Free Trial</h2>
            <p>
              Eligible new customers may receive a 15-day free trial.
              The trial allows customers to evaluate available
              features before deciding whether to subscribe.
              Trial eligibility and available features may vary.
            </p>
            <p>
              Continuing with a paid subscription after the trial
              requires acceptance of the applicable pricing and
              billing arrangements.
            </p>

            <h2>4. Subscription Pricing</h2>
            <p>
              Subscription fees depend on the selected service,
              number of chat-enabled users, and any agreed
              additional services. The applicable prices will
              be communicated through our website, account
              information, invoice, or written agreement.
            </p>
            <p>
              Promotional discounts, referral arrangements,
              and reseller pricing may be subject to separate
              written conditions.
            </p>

            <h2>5. Billing and Payments</h2>
            <p>
              Customers are responsible for paying applicable
              subscription fees according to the billing terms
              communicated when subscribing or otherwise agreed
              in writing. Applicable taxes may be added.
            </p>
            <p>
              Customers should contact BSC promptly if they
              believe an invoice contains an error.
            </p>

            <h2>6. Cancellation and Refunds</h2>
            <p>
              Customers may cancel their BSC Live Chat subscription
              by contacting Business Solution Center at
              info@bsctelemarketing.com.
            </p>
            <p>
              After cancellation, customers retain access to their
              subscribed services until the end of the current
              paid billing period. Their subscription will not
              renew for the following billing period.
            </p>
            <p>
              Subscription payments are non-refundable for unused
              days remaining in the paid billing period, except
              where a refund is required by applicable law.
            </p>
            <h2>7. Customer Responsibilities</h2>
            <p>
              Customers are responsible for ensuring that their
              use of BSC Live Chat complies with applicable laws,
              including privacy and consumer protection requirements.
              Customers must provide accurate account information
              and ensure their authorized users protect their
              login credentials.
            </p>
            <p>
              Customers are also responsible for providing
              appropriate notices to their website visitors
              regarding live chat, AI assistance, and visitor
              tracking where required.
            </p>

            <h2>8. Acceptable Use</h2>
            <p>
              Users must not use BSC Live Chat for unlawful
              activities, fraud, harassment, unauthorized
              access, spam, or the transmission of harmful
              software. Users must not attempt to disrupt
              the platform or access information without
              authorization.
            </p>

            <h2>9. Artificial Intelligence</h2>
            <p>
              AI-generated suggestions and automated responses
              are provided to assist communication. AI output
              may be inaccurate, incomplete, or inappropriate
              for a particular situation.
            </p>
            <p>
              Customers are responsible for reviewing AI-assisted
              communications when appropriate and should not
              rely on AI output as legal, medical, financial,
              or other professional advice.
            </p>

            <h2>10. Service Availability</h2>
            <p>
              We aim to provide reliable services, but we do
              not guarantee uninterrupted availability.
              Maintenance, technical issues, internet outages,
              and third-party service disruptions may affect
              access or performance.
            </p>

            <h2>11. Privacy and Data</h2>
            <p>
              Our handling of personal information is described
              in our <a href="/privacy-policy">Privacy Policy</a>.
              Customers remain responsible for their own
              privacy notices and lawful collection and use
              of visitor information.
            </p>

            <h2>12. Intellectual Property</h2>
            <p>
              BSC Live Chat software, branding, and related
              materials belong to Business Solution Center
              or their respective rights holders. Customers
              receive permission to use the service according
              to their applicable subscription arrangements.
            </p>

            <h2>13. Limitation of Liability</h2>
            <p>
              To the extent permitted by applicable law,
              Business Solution Center is not responsible
              for indirect or consequential losses arising
              from service interruptions, inaccurate AI
              output, or unauthorized use of customer accounts.
              Nothing in these Terms excludes liability
              that cannot lawfully be excluded.
            </p>

            <h2>14. Changes to These Terms</h2>
            <p>
              We may update these Terms as our services evolve.
              Updated terms will be published on this page.
              Where required by law or an applicable agreement,
              we will provide appropriate notice.
            </p>

            <h2>15. Governing Law</h2>
            <p>
              These Terms are governed by the applicable laws
              of Ontario and Canada, subject to any mandatory
              legal protections that apply.
            </p>

            <h2>16. Contact Information</h2>
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
