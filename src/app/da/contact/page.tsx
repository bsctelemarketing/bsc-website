import { PageHero } from "@/components/page-shell";
import { InquiryForm } from "@/components/inquiry-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
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
        eyebrow="Kontakt"
        title="Lad os tale om de besøgende på jeres hjemmeside."
        text="Fortæl os, hvilken type support I har brug for. Business Solution Center følger op med de oplysninger, der er nødvendige for at oprette jeres BSC Live Chat-konto."
      />

      <section className="section">
        <div className="container form-wrap">
          <aside className="contact-panel">
            <h2>Kontakt Business Solution Center</h2>

            <p>
              Har I spørgsmål om tjenester, priser, installation eller den
              15-dages gratis prøveperiode? Vi er klar til at hjælpe.
            </p>

            <div className="contact-item">
              <small>E-mail</small>
              <a href="mailto:info@bsctelemarketing.com">
                info@bsctelemarketing.com
              </a>
            </div>

            <div className="contact-item">
              <small>Placering og serviceområde</small>
              <b>Ontario, Canada</b>
              <p>
                Vi opererer fra Ontario i Canada og leverer livechat- og
                leadgenereringstjenester til virksomheder over hele verden.
              </p>
            </div>

            <div className="contact-item">
              <small>Tjeneste</small>
              <b>BSC Live Chat</b>
            </div>

            <div className="contact-item">
              <small>Virksomhed</small>
              <b>Business Solution Center</b>
            </div>
          </aside>

          <InquiryForm
            kind="contact"
            defaultPlan={defaultPlan}
            lang="da"
          />
        </div>
      </section>
    </main>
  );
}