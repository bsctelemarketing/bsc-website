import { Cta, PageHero } from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sådan fungerer det",
};

export default function How() {
  return (
    <main>
      <PageHero
        eyebrow="Sådan fungerer det"
        title="Fra opsætning til live samtaler – enkelt og effektivt."
        text="Vi gør det nemt at tilføje professionel chatsupport uden at forstyrre jeres nuværende hjemmeside eller arbejdsgange."
      />

      <section className="section">
        <div className="container timeline">
          {[
            [
              "01",
              "Vælg jeres servicemodel",
              "Vælg, om jeres egne medarbejdere, BSC-agenter, AI eller en kombination skal hjælpe de besøgende.",
            ],
            [
              "02",
              "Del jeres virksomhedsoplysninger",
              "Giv os oplysninger om jeres tjenester, ofte stillede spørgsmål, åbningstider og krav til kvalificering af leads.",
            ],
            [
              "03",
              "Installer chat-widgetten",
              "Tilføj et kort installationsscript til jeres hjemmeside. Vi giver klare instruktioner til installationen.",
            ],
            [
              "04",
              "Gå live og optimér",
              "Begynd at modtage samtaler, gennemgå aktiviteten og tilpas jeres dækning, når behovene ændrer sig.",
            ],
          ].map(([n, t, d]) => (
            <article key={n}>
              <span>{n}</span>
              <div>
                <h2>{t}</h2>
                <p>{d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Cta lang="da" />
    </main>
  );
}