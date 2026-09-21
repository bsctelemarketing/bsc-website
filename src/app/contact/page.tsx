import { PageHero } from "@/components/page-shell";
import { InquiryForm } from "@/components/inquiry-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

type ContactPageProps = {
  searchParams: Promise<{
    interest?: string | string[];
  }>;
};

export default async function Contact({
  searchParams,
}: ContactPageProps) {
  const params = await searchParams;

  const interest = Array.isArray(params.interest)
    ? params.interest[0]
    : params.interest;

  const defaultPlan =
    interest === "partner"
      ? "BSC Reseller / Service Partner Program"
      : "Self-Service Human + AI";

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about your website visitors."
        text="Tell us what kind of support you need. Business Solution Center will follow up with the information required to create your BSC Live Chat account."
      />

      <section className="section">
        <div className="container form-wrap">
          <aside className="contact-panel">
            <h2>Contact Business Solution Center</h2>

            <p>
              Questions about services, pricing, installation or the
              15-day free trial? We&apos;re ready to help.
            </p>

            <div className="contact-item">
              <small>Email</small>
              <a href="mailto:info@bsctelemarketing.com">
                info@bsctelemarketing.com
              </a>
            </div>

            <div className="contact-item">
              <small>Location and service area</small>
              <b>Ontario, Canada</b>
              <p>
                We operate from Ontario, Canada and provide live chat
                lead generation services to businesses worldwide.
              </p>
            </div>

            <div className="contact-item">
              <small>Service</small>
              <b>BSC Live Chat</b>
            </div>

            <div className="contact-item">
              <small>Business</small>
              <b>Business Solution Center</b>
            </div>
          </aside>

          <InquiryForm
            kind="contact"
            defaultPlan={defaultPlan}
          />
        </div>
      </section>
    </main>
  );
}