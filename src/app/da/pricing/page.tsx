import Link from "next/link";
import { CheckList, PageHero } from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Priser",
};

const plans = [
  {
    name: "Selvbetjening med mennesker + AI",
    price: "$20",
    unit: "pr. chataktiveret bruger / måned",
    text: "Til virksomheder, der ønsker, at deres egne medarbejdere besvarer chats med hjælp fra AI.",
    items: [
      "Kundeadministrator- eller agentkonto",
      "AI-assisterede chatfunktioner",
      "Adgang til samtaler og leads",
      "15-dages gratis prøveperiode",
    ],
  },
  {
    name: "Betaling pr. kvalificeret lead",
    price: "Kontakt os",
    unit: "fleksibel pris pr. lead",
    text: "Til virksomheder, der ønsker, at BSC-agenter omdanner samtaler til kvalificerede forretningsmuligheder.",
    items: [
      "Betal kun for kvalificerede leads",
      "Aftalte kvalifikationskriterier",
      "Menneskelig chatdækning",
      "15-dages gratis prøveperiode",
    ],
  },
  {
    name: "Betaling pr. chat",
    price: "Kontakt os",
    unit: "brugsbaseret pris",
    text: "Til virksomheder, der foretrækker en enkel pris baseret på håndterede livechat-samtaler.",
    items: [
      "Samtaler håndteret af mennesker",
      "Fleksibel dækning",
      "Tydelig aktivitetsoversigt",
      "15-dages gratis prøveperiode",
    ],
  },
];

export default function Pricing() {
  return (
    <main>
      <PageHero
        eyebrow="Enkle priser"
        title="Start med den model, der passer til jeres virksomhed."
        text="Alle planer inkluderer en 15-dages gratis prøveperiode. Kontakt os, så hjælper vi jer med at vælge den rette løsning."
      />

      <section className="section">
        <div className="container price-grid">
          {plans.map((p, i) => (
            <article
              className={i === 0 ? "price-card featured" : "price-card"}
              key={p.name}
            >
              <h3>{p.name}</h3>
              <div className="price">{p.price}</div>
              <small>{p.unit}</small>
              <p>{p.text}</p>

              <CheckList items={p.items} />

              <Link className="button" href="/da/free-trial">
                Start gratis prøveperiode
              </Link>
            </article>
          ))}
        </div>

        <p className="pricing-note">
          Alle priser er angivet i USD, medmindre andet er aftalt.
          Grænser for AI-brug og servicedækning bekræftes under
          kontoopsætningen.
        </p>
      </section>
    </main>
  );
}