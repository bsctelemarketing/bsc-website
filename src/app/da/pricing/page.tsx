import Link from "next/link";
import { CheckList, PageHero } from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Priser",
};

const plans = [
  {
    name: "Gratis",
    price: "$0",
    unit: "pr. måned i 6 måneder",
    text: "Perfekt til små virksomheder, der vil i gang med livechat. Ansøgningen gennemgås og godkendes af BSC Admin før aktivering.",
    items: [
      "25 automatiske AI-svar pr. måned",
      "Ubegrænsede chats med medarbejdere – også når AI-grænsen er nået",
      "1 brugerplads",
      "Livechat-widget til hjemmesiden",
      "Beskeder fra besøgende i realtid",
      "Grundlæggende chathistorik",
      "Ingen bindingsperiode",
      "Ingen automatisk overgang til en betalingsplan efter 6 måneder",
    ],
  },
  {
    name: "Selvbetjening med mennesker + AI",
    price: "$20",
    unit: "pr. chataktiveret bruger / måned",
    text: "Til virksomheder, der ønsker, at deres egne medarbejdere besvarer chats med hjælp fra AI.",
    items: [
      "Kundeadministrator- eller agentkonto",
      "AI-assisterede chatfunktioner",
      "AI-drevet tidsbestilling døgnet rundt",
      "Tidsbestilling via virksomhedens egne chatmedarbejdere",
      "Administration af aftaler og tidsbestilling",
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
      "Intet månedligt abonnement",
      "Aftalte kvalifikationskriterier",
      "Menneskelig chatdækning",
      "15-dages gratis prøveperiode",
    ],
  },
  {
    name: "Betaling pr. bekræftet aftale",
    price: "Kontakt os",
    unit: "intet månedligt abonnement",
    text: "Gør besøgende på hjemmesiden til bookede aftaler med AI og BSC's chatmedarbejdere. Betal kun for kvalificerede, godkendte aftaler uden et månedligt abonnement.",
    items: [
      "AI-drevet tidsbestilling døgnet rundt",
      "BSC's chatmedarbejdere booker aftaler for besøgende",
      "Indsamling af kundeoplysninger og leads",
      "Overblik over aftaler og gennemsigtig fakturering",
      "Intet månedligt abonnement",
    ],
  },
  {
    name: "Betaling pr. chat",
    price: "Kontakt os",
    unit: "brugsbaseret pris",
    text: "Til virksomheder, der foretrækker en enkel pris baseret på håndterede livechat-samtaler.",
    items: [
      "Samtaler håndteret af mennesker",
      "Intet månedligt abonnement",
      "AI-drevet tidsbestilling",
      "Tidsbestilling via BSCs chatmedarbejdere",
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
        text="Vælg 6 måneders gratis livechat eller en af vores betalingsmodeller med 15-dages gratis prøveperiode."
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

              <Link className="button" href={i === 0 ? "/da/free-trial?plan=free" : "/da/free-trial"}>
                {i === 0 ? "Ansøg om gratis abonnement" : "Start gratis prøveperiode"}
              </Link>
            </article>
          ))}
        </div>

        <p className="pricing-note">
          Alle priser er angivet i USD, medmindre andet er aftalt.
          Gratis-planen omfatter 25 automatiske AI-svar pr. måned; derefter fortsætter chats med medarbejdere uden begrænsning. Gratis-planen kræver godkendelse fra BSC Admin. Grænser for AI-brug og servicedækning bekræftes under kontoopsætningen.
        </p>
      </section>
    </main>
  );
}