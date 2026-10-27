import Link from "next/link";
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
            [
              "AI-tidsbestilling",
              "Lad kunder bestille tid direkte på jeres hjemmeside gennem AI-assistenten eller en enkel bookingformular – døgnet rundt.",
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

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">AI-tidsbestilling</span>
            <h2>Gør hjemmesidebesøg til bookede aftaler.</h2>
            <p>Lad kunderne bestille tid direkte på jeres hjemmeside – døgnet rundt. BSC kombinerer AI-assisteret booking med en enkel bookingformular.</p>
          </div>

          <div className="split">
            <div>
              <h3>To nemme måder at bestille tid på</h3>
              <p>Kunderne kan bede AI-assistenten om hjælp til tidsbestilling under en chatsamtale eller klikke på Book Appointment for at bruge bookingformularen.</p>
              <CheckList items={[
                "Tidsbestilling gennem samtaler med AI",
                "Selvbetjent bookingformular",
                "Oversigt over ledige datoer og tidspunkter",
                "Kontrol af eksisterende bookinger",
                "Bookingforespørgsler døgnet rundt"
              ]}/>
            </div>

            <div className="control-panel">
              <h3>Enkel booking for kunderne</h3>
              <img
                src="/images/appointments/Appointment1.png"
                alt="BSC-bookingformular med ledige tider"
                style={{width:"100%",height:"auto",borderRadius:"12px"}}
              />
            </div>
          </div>

          <div className="control-panel" style={{marginTop:"32px",padding:"24px"}}>
            <h3>Administrer aftaler fra jeres kundeportal</h3>
            <p>Se bookingforespørgsler, godkend eller afvis aftaler efter behov, og få overblik over kommende aftaler på ét sted.</p>
            <img
              src="/images/appointments/Appointment2.png"
              alt="BSC-kundeportal med oversigt over aftaler"
              style={{width:"100%",height:"auto",borderRadius:"12px"}}
            />
          </div>

          <div style={{marginTop:"32px"}}>
            <h3>Ideelt til virksomheder med tidsbestilling</h3>
            <p>Velegnet til VVS- og ventilationsfirmaer, tandklinikker, skønhedssaloner, rengøringsfirmaer, ejendomsmæglere, autoværksteder og konsulenter.</p>
            <CheckList items={[
              "Modtag bookingforespørgsler uden for åbningstiden",
              "Brug mindre tid på manuel planlægning",
              "Giv kunderne fleksible bookingmuligheder",
              "Tilpas åbningstider og bookingindstillinger",
              "Saml alle bookingforespørgsler ét sted"
            ]}/>
            <div className="button-row">
              <Link className="button" href="/da/free-trial">Prøv gratis i 15 dage</Link>
              <Link className="text-link" href="/da/how-it-works">Se hvordan det fungerer →</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-soft">
  <div className="container">
    <div className="section-heading">
      <span className="eyebrow">Sådan fungerer AI-tidsbestilling</span>
      <h2>Fra en samtale på hjemmesiden til en booket aftale</h2>
      <p>Gør det nemt for dine kunder at bestille tid direkte gennem din AI-chatassistent – også uden for åbningstiden.</p>
    </div>

    <div className="steps">
      <article>
        <span>1</span>
        <h3>Kunden beder om en tid</h3>
        <p>En besøgende skriver til AI-assistenten for at bestille eksempelvis et servicebesøg, en konsultation eller en reparation.</p>
      </article>

      <article>
        <span>2</span>
        <h3>AI finder ledige tider</h3>
        <p>BSC kontrollerer virksomhedens åbningstider, aftalernes varighed og eksisterende bookinger for at finde ledige tider.</p>
      </article>

      <article>
        <span>3</span>
        <h3>AI indsamler bookingoplysninger</h3>
        <p>Assistenten hjælper kunden med at vælge en ledig tid og oplyse de nødvendige kontakt- og aftaleoplysninger.</p>
      </article>
    </div>

    <div className="control-panel" style={{marginTop:"32px"}}>
      <h3>4. Aftalen vises i kundeportalen</h3>
      <p>Afhængigt af dine indstillinger bliver aftalen automatisk bekræftet eller sendt til godkendelse. Du kan se og administrere bookinger direkte i BSC-kundeportalen.</p>
      <p><strong>Foretrækker kunden en bookingformular?</strong> Kunden kan også vælge en ledig tid via bookingformularen uden at starte en AI-samtale.</p>
    </div>
  </div>
</section>

<section className="section">
  <div className="container">
    <div className="section-heading">
      <span className="eyebrow">Indstillinger for tidsbestilling</span>
      <h2>Du bestemmer, hvornår kunderne kan booke</h2>
      <p>Administrer virksomhedens åbningstider og bookingindstillinger direkte fra BSC-kundeportalen.</p>
    </div>

    <div className="split">
      <div>
        <h3>Fuld kontrol over din kalender</h3>
        <CheckList items={[
          "Indstil åbningstider for hver ugedag",
          "Vælg, hvilke dage der kan bookes",
          "Angiv varigheden af aftaler",
          "Vælg virksomhedens tidszone",
          "Slå tidsbestilling til eller fra",
          "Vælg automatisk bekræftelse eller manuel godkendelse",
          "Kontrollér ledige tider i forhold til eksisterende aftaler"
        ]}/>
      </div>
      <div>
        <h3>Tilpasset din virksomheds arbejdstider</h3>
        <p>Uanset om du driver en VVS-virksomhed, en klinik eller en servicevirksomhed, kan du styre, hvornår kunderne kan bestille tid.</p>
      </div>
    </div>

    <div className="control-panel appointment-image-panel">
      <h3>Administrer dine åbningstider og ledige tider</h3>
      <p>Indstil åbningstider, aftalevarighed, tidszone og godkendelse af bookinger ét sted.</p>
      <img
        className="appointment-screenshot"
        src="/images/appointments/Appointment3.png"
        alt="BSC-indstillinger for tidsbestilling med åbningstider og bookingmuligheder"
      />
    </div>

    <div className="button-row" style={{marginTop:"32px"}}>
      <Link className="button" href="/da/free-trial">
        Prøv gratis i 15 dage
      </Link>
    </div>
  </div>
</section>
      <Cta />
    </main>
  );
}