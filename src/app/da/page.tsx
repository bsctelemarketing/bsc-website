import Link from "next/link";
import { Cta, CheckList } from "@/components/page-shell";

const services = [
  [
    "01",
    "Livechat med mennesker",
    "Giv besøgende på din hjemmeside hjælpsom support i realtid fra dit eget team eller BSC's uddannede chatagenter.",
  ],
  [
    "02",
    "AI-assistance",
    "Besvar almindelige spørgsmål døgnet rundt, og hjælp medarbejderne med at svare hurtigere med AI-understøttede svar.",
  ],
  [
    "03",
    "Kvalificerede leads",
    "Indsaml navne, kontaktoplysninger og reel interesse for jeres tjenester, så jeres team trygt kan følge op.",
  ],
];

export default function DanishHome() {
  return (
    <main>
      <section className="hero">
        <div className="hero-glow" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow light">
              Menneskelig service. AI-hastighed. Én platform.
            </span>

            <h1>
              Gør samtaler på hjemmesiden til{" "}
              <em>reelle muligheder.</em>
            </h1>

            <p>
              BSC Live Chat hjælper din virksomhed med at besvare
              besøgendes spørgsmål, indsamle kvalificerede leads og
              være tilgængelig døgnet rundt – med jeres eget team,
              vores uddannede agenter eller AI-assistance.
            </p>

            <div className="button-row">
              <Link className="button" href="/da/free-trial">
                Start 15 dages gratis prøveperiode
              </Link>

              <Link
                className="button button-ghost"
                href="/da/how-it-works"
              >
                Se, hvordan det fungerer
              </Link>
            </div>

            <div className="trust-row">
              <span>✓ Intet kreditkort påkrævet</span>
              <span>✓ Nem installation på hjemmesiden</span>
              <span>✓ Fleksible supportmuligheder</span>
            </div>
          </div>

          <div className="chat-stage">
            <div className="chat-window">
              <div className="chat-top">
                <div>
                  <i />
                  <b>BSC Live Chat</b>
                </div>
                <span>•••</span>
              </div>

              <div className="chat-body">
                <div className="visitor">
                  <small>Besøgende på hjemmesiden</small>
                  <p>
                    Hej! Tilbyder I akut HVAC-service i Brooklyn?
                  </p>
                </div>

                <div className="agent">
                  <small>BSC AI-assistent</small>
                  <p>
                    Ja, vi kan hjælpe. Må jeg få dit navn og
                    telefonnummer, så en tekniker kan kontakte dig?
                  </p>
                </div>

                <div className="lead-card">
                  <span className="lead-icon">✓</span>
                  <div>
                    <small>Kvalificeret lead indsamlet</small>
                    <b>Serviceforespørgsel klar</b>
                  </div>
                </div>
              </div>

              <div className="chat-input">
                Skriv en besked… <span>➜</span>
              </div>
            </div>

            <div className="float-card">
              <span>↗</span>
              <div>
                <b>Gå aldrig glip af en forespørgsel</b>
                <small>Tilgængelig 24/7</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="logo-strip">
        <div className="container">
          <span>Skabt til servicevirksomheder i vækst</span>
          <div>
            <b>FAST EJENDOM</b>
            <b>TANDLÆGER</b>
            <b>HVAC</b>
            <b>E-HANDEL</b>
            <b>HJEMMESERVICE</b>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">
              En smartere måde at hjælpe kunder på
            </span>
            <h2>Hver samtale håndteres med omhu.</h2>
            <p>
              Vælg den servicemodel, der passer til jeres team i
              dag, og skalér i takt med virksomhedens vækst.
            </p>
          </div>

          <div className="cards three">
            {services.map(([n, t, d]) => (
              <article className="service-card" key={t}>
                <span className="card-number">{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
                <Link href="/da/services">Læs mere →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">
              Få mere ud af trafikken på din hjemmeside
            </span>

            <h2>
              Lad ikke dit marketingbudget gå til spilde.
            </h2>

            <p>
              Mange virksomheder investerer i Google Ads,
              Facebook Ads, SEO og andre marketingkampagner for
              at få besøgende ind på deres hjemmeside – men
              trafikken er kun det første skridt.
            </p>

            <p>
              Uden dialog i realtid kan potentielle kunder
              forlade hjemmesiden, før de stiller et spørgsmål
              eller sender en forespørgsel.
            </p>

            <p>
              <strong>
                BSC Live Chat hjælper jer med at engagere og
                konvertere flere af de besøgende, I allerede har
                arbejdet hårdt på at tiltrække.
              </strong>
            </p>
          </div>

          <div className="control-panel">
            <h3>Få mere ud af jeres trafik</h3>

            <CheckList
              items={[
                "Engagér besøgende, mens de aktivt ser jeres hjemmeside",
                "Besvar spørgsmål, før potentielle kunder forlader siden",
                "Indsaml kontaktoplysninger og reel interesse",
                "Understøt flersprogede samtaler",
                "Få mere ud af jeres eksisterende marketingkampagner",
              ]}
            />

            <Link className="text-link" href="/da/free-trial">
              Start jeres 15 dages gratis prøveperiode →
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container split">
          <div>
            <span className="eyebrow">
              Tilpasset jeres virksomhed
            </span>

            <h2>
              Brug jeres medarbejdere, vores agenter eller begge
              dele.
            </h2>

            <p>
              Bevar fuld kontrol over kundesamtalerne uden at
              blive låst til én bestemt servicemodel.
            </p>

            <CheckList
              items={[
                "Jeres medarbejdere kan besvare chats fra deres egen konto",
                "AI kan levere automatiske svar og svarforslag",
                "BSC-agenter kan hjælpe, når I har brug for menneskelig support",
                "Samtaler og leads holdes samlet ét sted",
              ]}
            />

            <Link className="text-link" href="/da/pricing">
              Se fleksible priser →
            </Link>
          </div>

          <div className="control-panel">
            <div className="panel-head">
              <span>Dækningsindstillinger</span>
              <b>Live</b>
            </div>

            <div className="setting">
              <span>
                <i className="dot blue" />
                Kundens team
              </span>
              <strong>Online</strong>
            </div>

            <div className="setting">
              <span>
                <i className="dot purple" />
                AI-assistent
              </span>
              <strong>24/7</strong>
            </div>

            <div className="setting">
              <span>
                <i className="dot green" />
                BSC-agenter
              </span>
              <strong>Valgfrit</strong>
            </div>

            <div className="panel-stat">
              <small>Klar til at svare</small>
              <b>Altid tilgængelig</b>
              <div>
                <i />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">
              Enkelt fra første dag
            </span>
            <h2>Kom i gang i tre enkle trin.</h2>
          </div>

          <div className="steps">
            <article>
              <span>1</span>
              <h3>Fortæl os om jeres virksomhed</h3>
              <p>
                Vi lærer jeres tjenester, åbningstider og de
                oplysninger, I ønsker at indsamle.
              </p>
            </article>

            <article>
              <span>2</span>
              <h3>Tilføj BSC Live Chat</h3>
              <p>
                Installer den lette chatwidget på jeres
                hjemmeside med enkle instruktioner.
              </p>
            </article>

            <article>
              <span>3</span>
              <h3>Start samtaler</h3>
              <p>
                Det valgte team begynder at hjælpe besøgende og
                indsamle nye forretningsmuligheder.
              </p>
            </article>
          </div>
        </div>
      </section>

      <Cta />
    </main>
  );
}