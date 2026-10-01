import { Cta, PageHero } from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brancher",
};

const industries = [
  [
    "Tandlæger og sundhedsydelser",
    "Hjælp potentielle patienter med generelle spørgsmål om tjenester og anmodninger om tider.",
  ],
  [
    "HVAC og hjemmeservice",
    "Indsaml oplysninger om servicebehov, placering, hastende behov og kontaktoplysninger.",
  ],
  [
    "Ejendom",
    "Besvar spørgsmål om ejendomme og forbind interesserede købere, lejere og sælgere.",
  ],
  [
    "E-handel",
    "Hjælp med produktspørgsmål og supportér kunder før og efter køb.",
  ],
  [
    "Realkredit og finansielle tjenester",
    "Indsaml oplysninger om henvendelser gennem klare og godkendte arbejdsgange.",
  ],
  [
    "Rejser og turisme",
    "Besvar almindelige spørgsmål om destinationer, overnatning og tjenester, og indsaml bookingforespørgsler.",
  ],
  [
    "Hoteller og hospitality",
    "Hjælp gæster med spørgsmål om tilgængelighed, faciliteter, politikker og reservationer.",
  ],
  [
    "Bilservice",
    "Indsaml oplysninger om køretøj og service til reparationer, vedligeholdelse og forhandlerhenvendelser.",
  ],
  [
    "Juridiske tjenester",
    "Hjælp potentielle klienter med at sende anmodninger om konsultation og grundlæggende kontaktoplysninger.",
  ],
  [
    "Uddannelse og kurser",
    "Besvar spørgsmål om programmer og indsaml henvendelser fra potentielle studerende.",
  ],
  [
    "Flytning og opbevaring",
    "Indsaml flyttedatoer, adresser, servicebehov og tilbudsforespørgsler.",
  ],
  [
    "Rengøring og skadedyrsbekæmpelse",
    "Indsaml oplysninger om ejendommen, servicebehov og foretrukne tidspunkter.",
  ],
  [
    "Teknologi og IT",
    "Kvalificér support-, konsultations- og managed-service-henvendelser fra besøgende.",
  ],
  [
    "Professionelle tjenester",
    "Gør hjemmesidebesøg til organiserede konsultations- og servicehenvendelser.",
  ],
];

export default function Industries() {
  return (
    <main>
      <PageHero
        eyebrow="Brancher"
        title="Skabt til virksomheder, hvor hver henvendelse tæller."
        text="BSC Live Chat tilpasses jeres tjenester, kundernes spørgsmål og jeres foretrukne kvalificeringsproces."
      />

      <section className="section">
        <div className="container content-grid">
          {industries.map(([title, description], index) => (
            <article className="info-card industry" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <div className="container industries-note">
          <h2>Kan du ikke se din branche?</h2>
          <p>
            BSC Live Chat kan konfigureres til mange andre
            servicevirksomheder. Kontakt Business Solution Center for at
            drøfte jeres hjemmeside, kunder og krav til leads.
          </p>
        </div>
      </section>

      <Cta
        lang="da"
        title="Lad os skabe den rette chatoplevelse til jeres branche."
        text="Start jeres 15-dages gratis prøveperiode, og fortæl os, hvad jeres virksomhed har brug for."
      />
    </main>
  );
}