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
      <ol>
        <li>Log ind på dit WordPress-kontrolpanel.</li>
        <li>Installer og aktivér et pålideligt plugin til kode i sidehoved og sidefod, eksempelvis WPCode.</li>
        <li>Åbn pluginets indstillinger, og find feltet Footer Scripts.</li>
        <li>Indsæt installationskoden til BSC Live Chat, gem ændringerne, og kontrollér, at chatwidgetten vises på hjemmesiden.</li>
      </ol>

      <h3>Shopify</h3>
      <ol>
        <li>Log ind på Shopify, og gå til Online Store → Themes.</li>
        <li>Åbn menuen for dit tema, og vælg Edit code.</li>
        <li>Åbn filen layout/theme.liquid.</li>
        <li>Indsæt installationskoden til BSC Live Chat umiddelbart før det afsluttende body-tag.</li>
        <li>Gem ændringerne, og kontrollér, at chatwidgetten vises i webshoppen.</li>
      </ol>

      <h3>Wix</h3>
      <ol>
        <li>Åbn dit Wix-kontrolpanel, og gå til Settings → Custom Code.</li>
        <li>Vælg Add Custom Code, og indsæt installationskoden til BSC Live Chat.</li>
        <li>Vælg All Pages, og angiv placeringen Body – end.</li>
        <li>Gem ændringerne, og kontrollér den offentliggjorte hjemmeside.</li>
      </ol>

      <h3>Squarespace</h3>
      <ol>
        <li>Log ind på Squarespace, og åbn indstillingerne for din hjemmeside.</li>
        <li>Find Code Injection, og åbn feltet Footer.</li>
        <li>Indsæt installationskoden til BSC Live Chat, og gem ændringerne.</li>
        <li>Kontrollér, at chatwidgetten vises på hjemmesiden. Adgang til Code Injection afhænger af dit Squarespace-abonnement.</li>
      </ol>

      <h3>Hjemmesider med HTML</h3>
      <ol>
        <li>Åbn HTML-skabelonen til din hjemmeside.</li>
        <li>Find det afsluttende body-tag.</li>
        <li>Indsæt installationskoden til BSC Live Chat umiddelbart før dette tag.</li>
        <li>Gem og offentliggør ændringerne, og kontrollér, at chatwidgetten vises korrekt.</li>
      </ol>
    </div>
        </div>
      </section>

      <section className="section section-soft">
  <div className="container">
    <div className="section-heading">
      <span className="eyebrow">Mobiladgang – BSC Live Chat PWA</span>
      <h2>Installer BSC Live Chat på din smartphone</h2>
      <p>BSC Live Chat er tilgængelig som en Progressive Web App (PWA), så kunder og chatagenter kan åbne platformen direkte fra telefonens startskærm.</p>
    </div>

    <div className="split">
      <div>
        <h3>Sådan får du adgang fra din mobil</h3>
        <ol>
          <li>Åbn Chrome på Android eller Safari på iPhone.</li>
          <li>Gå til https://live.bsctelemarketing.com.</li>
          <li>Log ind med dine BSC-kontooplysninger.</li>
          <li>Åbn dit kontrolpanel, og gå til Live Chats.</li>
          <li>Læs og besvar kundernes beskeder direkte fra din smartphone.</li>
        </ol>
      </div>

      <div className="control-panel">
        <h3>Sådan installerer du BSC Live Chat</h3>
        <p><strong>Android:</strong> Åbn hjemmesiden i Chrome, tryk på browsermenuen, og vælg Installer app eller Føj til startskærm.</p>
        <p><strong>iPhone:</strong> Åbn hjemmesiden i Safari, tryk på Del, og vælg Føj til hjemmeskærm.</p>
        <p>BSC Live Chat kan derefter åbnes fra telefonens startskærm med en app-lignende oplevelse uden installation fra en appbutik.</p>
      </div>
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