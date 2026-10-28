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

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Installationsvejledning</span>
            <h2>Installer BSC Live Chat på jeres hjemmeside</h2>
            <p>Kopiér den unikke widgetkode fra jeres BSC-konto, og tilføj den til hjemmesiden. På de fleste understøttede platforme kræver det ikke avancerede programmeringsfærdigheder.</p>
          </div>

          <div className="steps">
            <article>
              <span>1</span>
              <h3>Hent widgetkoden</h3>
              <p>Log ind på BSC-kundeportalen, og kopiér virksomhedens installationskode.</p>
            </article>
            <article>
              <span>2</span>
              <h3>Åbn hjemmesidens editor</h3>
              <p>Find indstillingerne for brugerdefineret kode, scripts i sidefoden eller HTML-skabeloner.</p>
            </article>
            <article>
              <span>3</span>
              <h3>Indsæt koden og udgiv</h3>
              <p>Indsæt widgetkoden det relevante sted, og udgiv ændringerne.</p>
            </article>
            <article>
              <span>4</span>
              <h3>Test livechatten</h3>
              <p>Besøg hjemmesiden, åbn BSC-chatwidgetten, og send en testbesked.</p>
            </article>
          </div>

          <div className="section-heading" style={{marginTop:"48px"}}>
            <h2>Hvor skal installationskoden indsættes?</h2>
            <p>Følg vejledningen til den platform, jeres hjemmeside bruger.</p>
          </div>

          <div className="control-panel">
            <h3>WordPress</h3>
            <p>Åbn WordPress-kontrolpanelet. Installer et pålideligt plugin til scripts i sidehoved og sidefod, eksempelvis WPCode. Indsæt BSC-widgetkoden i feltet Footer Scripts, og gem ændringerne.</p>

            <h3>Shopify</h3>
            <p>Gå til Online Store → Themes → Edit code. Åbn filen layout/theme.liquid, og indsæt BSC-widgetkoden lige før det afsluttende body-tag. Gem ændringerne.</p>

            <h3>Wix</h3>
            <p>Gå til Settings → Custom Code → Add Custom Code. Indsæt widgetkoden, vælg alle sider og placeringen Body – end. Gem og anvend ændringerne.</p>

            <h3>Squarespace</h3>
            <p>Åbn indstillingerne for Code Injection, og indsæt BSC-widgetkoden i feltet Footer. Gem ændringerne. Funktionen afhænger af jeres Squarespace-abonnement.</p>

            <h3>Hjemmesider med HTML</h3>
            <p>Åbn hjemmesidens HTML-skabelon. Indsæt BSC-widgetkoden lige før det afsluttende body-tag, og gem og udgiv hjemmesiden.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Sikkerhed og databeskyttelse</span>
            <h2>Nem installation med fokus på sikkerhed</h2>
            <p>Beskyttelse af virksomheders og kunders oplysninger er vigtig for BSC Live Chat.</p>
          </div>

          <div className="control-panel">
            <h3>Ingen administratoradgang nødvendig</h3>
            <p>I kan installere BSC Live Chat ved hjælp af jeres unikke widgetkode. I behøver ikke dele hjemmesidens administratoradgangskode med BSC.</p>

            <h3>Rimelige sikkerhedsforanstaltninger</h3>
            <p>Vi træffer rimelige tekniske og organisatoriske foranstaltninger med henblik på at beskytte oplysninger mod uautoriseret adgang, ændring, videregivelse eller tab.</p>

            <h3>Vores tilgang til sikkerhed</h3>
            <p>Ingen internetbaseret løsning kan garantere fuldstændig sikkerhed. Vi bestræber os på at opretholde passende sikkerhedsforanstaltninger og opfordrer kunderne til at følge god praksis for sikker konto- og hjemmesideadministration.</p>
          </div>
        </div>
      </section>

      <Cta lang="da" />
    </main>
  );
}