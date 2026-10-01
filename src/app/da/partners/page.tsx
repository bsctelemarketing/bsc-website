import Link from "next/link";
import type { Metadata } from "next";
import { CheckList, PageHero } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Partner- og forhandlerprogram",
  description:
    "Bliv en del af BSC Live Chat Partner- og Forhandlerprogrammet. Tilbyd Human + AI-livechat til dine kunder, administrer flere kundevirksomheder og skab nye servicemuligheder.",
};

export default function PartnersPage() {
  return (
    <main>
      <PageHero
        eyebrow="BSC Partner- og Forhandlerprogram"
        title="Tilføj Human + AI-livechat til de tjenester, du tilbyder dine kunder."
        text="BSC Partner- og Forhandlerprogrammet giver bureauer, teknologileverandører, konsulenter og servicevirksomheder en praktisk måde at introducere livechat til deres kunder, administrere tildelte virksomheder og skabe nye servicemuligheder."
      />

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">
              Hvem kan blive partner?
            </span>

            <h2>
              Skabt til virksomheder, der allerede hjælper andre virksomheder.
            </h2>

            <p>
              Hvis din virksomhed bygger hjemmesider, administrerer
              markedsføring, leverer teknologitjenester eller hjælper
              erhvervskunder, kan BSC Live Chat blive en ekstra service,
              du tilbyder dine kunder.
            </p>

            <p>
              I stedet for at udvikle og vedligeholde jeres egen
              livechat-platform kan I bruge BSC&apos;s Human + AI-teknologi
              og dedikerede Partnerportal.
            </p>
          </div>

          <div className="control-panel">
            <h3>Ideelle BSC-partnere</h3>

            <CheckList
              items={[
                "Webdesign- og udviklingsbureauer",
                "Digitale marketing- og SEO-bureauer",
                "IT-service- og teknologivirksomheder",
                "CRM- og automatiseringskonsulenter",
                "Virksomhedskonsulenter",
                "Callcentre og kundeserviceudbydere",
                "Leadgenereringsbureauer",
                "Managed Service Providers",
                "Uafhængige webudviklere",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <span className="eyebrow">
            Sådan passer BSC ind i jeres virksomhed
          </span>

          <h2>
            Sådan fungerer BSC Live for forskellige typer partnere.
          </h2>

          <p>
            BSC Live kan tilbydes på forskellige måder afhængigt af de
            tjenester, jeres virksomhed allerede leverer. Jeres kunder
            kan selv besvare deres hjemmesidechats, eller jeres team kan
            levere administreret livechat-support til tildelte
            kundevirksomheder.
          </p>

          <div className="card-grid">
            <div className="service-card">
              <h3>Webdesign- og udviklingsbureauer</h3>
              <p>
                Tilføj BSC Live Chat til de hjemmesider, I bygger eller
                administrerer. Jeres kunder kan selv besvare chats via
                deres BSC-konti, eller I kan tilbyde livechat som en
                ekstra administreret service.
              </p>
            </div>

            <div className="service-card">
              <h3>Digitale marketing- og SEO-bureauer</h3>
              <p>
                Giv jeres kunder endnu en måde at engagere den trafik,
                I hjælper med at skabe. Tilføj Human + AI-livechat til
                marketingpakker, så besøgende kan stille spørgsmål og
                starte samtaler direkte fra hjemmesiden.
              </p>
            </div>

            <div className="service-card">
              <h3>IT-service- og teknologivirksomheder</h3>
              <p>
                Tilføj BSC Live Chat til jeres teknologitjenester uden
                selv at udvikle og vedligeholde en chatplatform. Hjælp
                kunder med at forbinde deres hjemmesider, administrere
                adgang og levere løbende support.
              </p>
            </div>

            <div className="service-card">
              <h3>CRM- og automatiseringskonsulenter</h3>
              <p>
                Tilføj hjemmesidesamtaler til kunderejsen. BSC Live kan
                hjælpe kunder med at indsamle henvendelser via livechat,
                mens I understøtter deres øvrige salgs-, kundeservice-
                og automatiseringsprocesser.
              </p>
            </div>

            <div className="service-card">
              <h3>Virksomhedskonsulenter</h3>
              <p>
                Introducer Human + AI-livechat til kunder, der ønsker at
                forbedre kommunikationen på deres hjemmeside og skabe
                bedre kundeengagement. BSC Live kan tilbydes som en del
                af en bredere virksomhedsløsning.
              </p>
            </div>

            <div className="service-card">
              <h3>Callcentre og kundeserviceudbydere</h3>
              <p>
                Udvid jeres service ud over telefonsupport ved at tilbyde
                livechat på hjemmesider. Jeres Partner Chat Agents kan
                besvare samtaler for tildelte virksomheder og dermed
                skabe en ekstra administreret kundeservice.
              </p>
            </div>

            <div className="service-card">
              <h3>Leadgenereringsbureauer</h3>
              <p>
                Giv besøgende en direkte måde at starte en samtale på i
                stedet for kun at være afhængige af formularer eller
                telefonopkald. Livechat kan supplere de trafik- og
                leadgenereringstjenester, I allerede tilbyder.
              </p>
            </div>

            <div className="service-card">
              <h3>Managed Service Providers</h3>
              <p>
                Tilføj BSC Live Chat til jeres portefølje af administrerede
                virksomhedstjenester. Administrer tildelte kunder og
                tilbyd livechat som endnu en tilbagevendende service
                sammen med jeres eksisterende teknologi- og
                supportløsninger.
              </p>
            </div>

            <div className="service-card">
              <h3>Uafhængige webudviklere</h3>
              <p>
                Tilbyd Human + AI-livechat, når I bygger eller
                vedligeholder kunders hjemmesider. Installer BSC-widgetten
                uden selv at udvikle livechat-software, og giv kunderne
                adgang til en professionel chatplatform.
              </p>
            </div>
          </div>

          <div className="split" style={{ marginTop: "2rem" }}>
            <div className="control-panel">
              <h3>Kundeadministreret chat</h3>
              <p>
                Kunden bruger sine egne BSC Client Administrator- og
                Client Chat Agent-konti til at kommunikere direkte med
                besøgende på hjemmesiden. Det fungerer godt for partnere,
                der ønsker at levere teknologien, mens kunden selv
                administrerer samtalerne.
              </p>
            </div>

            <div className="control-panel">
              <h3>Partneradministreret chat</h3>
              <p>
                Autoriserede Partner Chat Agents besvarer samtaler for
                tildelte kundevirksomheder gennem BSC Partnerportalen.
                Det er ideelt for callcentre, supportudbydere og bureauer,
                der ønsker at tilbyde administrerede livechat-tjenester.
              </p>
            </div>
          </div>

          <p style={{ marginTop: "1.5rem", fontWeight: 600 }}>
            BSC leverer livechat-platformen. I bestemmer selv, hvordan
            tjenesten pakkes og leveres til jeres kunder.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Partnerportal</span>

          <h2>
            Administrer flere kundevirksomheder fra ét sted.
          </h2>

          <p>
            BSC-partnere får adgang til en dedikeret Partnerportal,
            der er udviklet til at hjælpe med at administrere
            livechat på tværs af tildelte kundevirksomheder.
          </p>

          <div className="card-grid">
            <div className="service-card">
              <h3>Tildelte virksomheder</h3>
              <p>
                Se de kundevirksomheder, der er tildelt jeres
                Partnerkonto, fra én central portal.
              </p>
            </div>

            <div className="service-card">
              <h3>Livechats</h3>
              <p>
                Autoriserede medlemmer af partnerteamet kan administrere
                samtaler med besøgende for deres tildelte
                kundevirksomheder.
              </p>
            </div>

            <div className="service-card">
              <h3>Teamadministration</h3>
              <p>
                Partneradministratorer kan administrere Partner Chat
                Agents og kontrollere, hvilke kundevirksomheder de har
                tilladelse til at supportere.
              </p>
            </div>

            <div className="service-card">
              <h3>AI-assistance</h3>
              <p>
                Agenter kan bruge AI-genererede svarforslag til at
                besvare besøgende hurtigere, samtidig med at mennesker
                bevarer kontrollen.
              </p>
            </div>

            <div className="service-card">
              <h3>Overførsel af chats</h3>
              <p>
                Overfør aktive samtaler til kvalificerede medlemmer af
                partnerteamet, når en anden agent skal fortsætte
                samtalen.
              </p>
            </div>

            <div className="service-card">
              <h3>Vedhæftede filer</h3>
              <p>
                Partner Chat Agents kan sende understøttede filer under
                samtaler, når der skal deles yderligere oplysninger.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">
              Mere end henvisninger
            </span>

            <h2>
              Tilbyd administreret livechat til jeres kunder.
            </h2>

            <p>
              BSC-partnere kan gøre mere end blot at introducere
              platformen. Afhængigt af partnerskabet og kundeaftalen kan
              jeres eget team levere livechat-support til tildelte
              kundevirksomheder.
            </p>

            <p>
              Det giver webbureauer, marketingvirksomheder,
              IT-leverandører og kundeserviceorganisationer mulighed for
              at udvide deres eksisterende tjenester uden selv at bygge
              et livechat-system fra bunden.
            </p>
          </div>

          <div className="control-panel">
            <h3>Partner Chat Agents kan</h3>

            <CheckList
              items={[
                "Få adgang til autoriserede kundevirksomheder",
                "Besvare samtaler med besøgende på hjemmesider",
                "Bruge AI-genererede svarforslag",
                "Sende understøttede vedhæftede filer",
                "Overføre kvalificerede samtaler",
                "Arbejde på tværs af tildelte kunder fra Partnerportalen",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <span className="eyebrow">Partnerfordele</span>

          <h2>
            Skab mere værdi fra de kunder, I allerede betjener.
          </h2>

          <div className="card-grid">
            <div className="service-card">
              <h3>Nye indtægtsmuligheder</h3>
              <p>
                Skab yderligere indtægtsmuligheder ved at introducere
                BSC Live Chat eller tilføje administrerede
                chat-tjenester til jeres eksisterende tilbud.
              </p>
            </div>

            <div className="service-card">
              <h3>Udvid jeres tjenester</h3>
              <p>
                Tilføj Human + AI-livechat til jeres serviceportefølje
                uden at udvikle jeres egen livechat-software.
              </p>
            </div>

            <div className="service-card">
              <h3>Centraliseret administration</h3>
              <p>
                Administrer tildelte kundevirksomheder og understøttede
                samtaler gennem en dedikeret Partnerportal.
              </p>
            </div>

            <div className="service-card">
              <h3>Rollebaseret adgang</h3>
              <p>
                Partneradministratorer styrer driften, mens Partner Chat
                Agents får adgang, der passer til deres tildelte kunder
                og ansvarsområder.
              </p>
            </div>

            <div className="service-card">
              <h3>Human + AI</h3>
              <p>
                Kombiner menneskelig kundeservice med AI-assistance for
                at hjælpe teams med at svare effektivt, samtidig med at
                mennesker bevarer kontrollen over samtalerne.
              </p>
            </div>

            <div className="service-card">
              <h3>BSC-teknologi</h3>
              <p>
                Fokusér på jeres kunder og tjenester, mens BSC leverer
                den underliggende livechat-platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Sådan fungerer det</span>

          <h2>
            En enkel vej til at blive BSC-partner.
          </h2>

          <div className="card-grid">
            <div className="service-card">
              <h3>1. Bliv en del af programmet</h3>
              <p>
                Kontakt BSC for at drøfte jeres virksomhed, kunder og
                den type partnerskab, I er interesserede i.
              </p>
            </div>

            <div className="service-card">
              <h3>2. Få partneradgang</h3>
              <p>
                Godkendte partnere får adgang til BSC Partnerportalen og
                de værktøjer, der er tilgængelige for deres partnerskab.
              </p>
            </div>

            <div className="service-card">
              <h3>3. Introducer jeres kunder</h3>
              <p>
                Identificér virksomheder i jeres kundeportefølje, der
                kan få gavn af Human + AI-livechat på hjemmesiden.
              </p>
            </div>

            <div className="service-card">
              <h3>4. Forbind hjemmesiden</h3>
              <p>
                BSC Live Chat kan tilføjes til en godkendt kundes
                hjemmeside med en let widget-installation.
              </p>
            </div>

            <div className="service-card">
              <h3>5. Administrer tjenesten</h3>
              <p>
                Brug Partnerportalen til at administrere tildelte
                virksomheder, autoriserede teammedlemmer og understøttede
                samtaler.
              </p>
            </div>

            <div className="service-card">
              <h3>6. Udvid partnerskabet</h3>
              <p>
                Tilføj flere kvalificerede kunder, efterhånden som jeres
                samarbejde med BSC vokser.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <div>
            <h2>
              Interesseret i at blive BSC-partner?
            </h2>

            <p>
              Fortæl os om jeres virksomhed og de kunder, I betjener.
              Vi drøfter den partner- eller forhandlerløsning, der passer
              til jeres organisation.
            </p>
          </div>

          <Link
            href="/da/contact?interest=partner"
            className="button button-light"
          >
            Bliv BSC-partner
          </Link>
        </div>
      </section>
    </main>
  );
}