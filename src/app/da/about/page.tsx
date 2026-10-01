import { Cta, CheckList, PageHero } from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om os",
};

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="Om Business Solution Center"
        title="Bedre kundesamtaler med mennesker i centrum."
        text="BSC Live Chat er en tjeneste fra Business Solution Center, en canadisk registreret virksomhed med fokus på praktiske løsninger til kundekommunikation."
      />

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Vores tilgang</span>
            <h2>Teknologi skal gøre service mere menneskelig.</h2>

            <p>
              Vi skabte BSC Live Chat for at hjælpe virksomheder med at
              være tilgængelige uden at miste den personlige service, der
              skaber tillid. Platformen samler menneskelige agenter,
              kundernes egne teams og AI-assistance i én fleksibel løsning.
            </p>

            <p>
              Uanset om I har brug for support uden for åbningstiden, en
              bedre måde for jeres egne medarbejdere at håndtere chats på
              eller en resultatbaseret leadservice, arbejder vi for at gøre
              hver samtale værdifuld.
            </p>
          </div>

          <div className="control-panel">
            <h3>Det styrer vores arbejde</h3>

            <CheckList
              items={[
                "Klar og respektfuld kundekommunikation",
                "Fleksible servicemuligheder til forskellige teams",
                "Praktisk AI med menneskelig kontrol",
                "Gennemsigtige priser og forventninger",
              ]}
            />
          </div>
        </div>
      </section>

      <Cta lang="da" />
    </main>
  );
}