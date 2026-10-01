import { Cta, CheckList, PageHero } from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tjenester",
};

export default function Services() {
  return (
    <main>
      <PageHero
        eyebrow="Tjenester"
        title="Fleksibel livechat til den måde, I arbejder på."
        text="Kombinér menneskelig support med praktiske AI-værktøjer for at give alle besøgende på hjemmesiden hurtigere og mere hjælpsomme svar."
      />

      <section className="section">
        <div className="container content-grid">
          {[
            [
              "Selvbetjening med mennesker + AI",
              "Jeres egne medarbejdere besvarer chats fra sikre kundekonti, mens AI hjælper med automatiske svar og svarforslag.",
            ],
            [
              "BSC's menneskelige chatagenter",
              "Lad BSC's uddannede agenter håndtere samtaler med besøgende, indsamle oplysninger og levere kvalificerede forretningsmuligheder.",
            ],
            [
              "AI-assistent 24/7",
              "Fortsæt med at besvare henvendelser uden for åbningstiden med en AI-assistent, der bruger de virksomhedsoplysninger, I har godkendt.",
            ],
            [
              "Leadindsamling og rapportering",
              "Organisér samtaler og indsaml de kontaktoplysninger, jeres team har brug for til hurtig opfølgning.",
            ],
          ].map(([t, d]) => (
            <article className="info-card" key={t}>
              <h3>{t}</h3>
              <p>{d}</p>

              <CheckList
                items={
                  t === "Selvbetjening med mennesker + AI"
                    ? [
                        "Chatkonti til medarbejdere",
                        "Overblik over AI-brug",
                        "Samtalehistorik",
                      ]
                    : [
                        "Professionel support til besøgende",
                        "Klare arbejdsgange",
                        "Enkel onboarding",
                      ]
                }
              />
            </article>
          ))}
        </div>
      </section>

      <Cta />
    </main>
  );
}