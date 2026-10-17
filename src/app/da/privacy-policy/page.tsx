import type { Metadata } from "next";
import { PageHero } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Privatlivspolitik",
  description: "Læs, hvordan Business Solution Center indsamler, anvender og beskytter oplysninger gennem BSC Live Chat.",
};

export default function DanishPrivacyPolicy() {
  return (
    <main>
      <PageHero
        eyebrow="Juridiske oplysninger"
        title="Privatlivspolitik"
        text="Sådan behandler Business Solution Center personoplysninger via vores hjemmeside og BSC Live Chat-tjenester."
      />

      <section className="section">
        <div className="container">
          <article style={{ maxWidth: 850, lineHeight: 1.8 }}>
            <p><strong>Senest opdateret:</strong> 17. oktober 2026</p>

            <h2>1. Introduktion</h2>
            <p>
              Business Solution Center ("BSC", "vi", "os" eller "vores")
              driver BSC Live Chat-tjenesten og hjemmesiden bsctelemarketing.com.
              Denne privatlivspolitik forklarer, hvordan vi indsamler,
              anvender, videregiver og opbevarer oplysninger, når personer
              besøger vores hjemmeside, kontakter os eller bruger vores tjenester.
            </p>

            <h2>2. Oplysninger, vi indsamler</h2>
            <p>Afhængigt af din interaktion med BSC kan vi indsamle:</p>
            <ul>
              <li>Navne, virksomhedsnavne, e-mailadresser og telefonnumre.</li>
              <li>Hjemmesideadresser, tjenestepræferencer og beskeder i forbindelse med forespørgsler.</li>
              <li>Chatbeskeder og kontaktoplysninger, der frivilligt gives under samtaler.</li>
              <li>Oplysninger om hjemmesidebesøg og månedlig besøgsaktivitet.</li>
              <li>Chatbedømmelser, feedback om problemløsning og kommentarer fra spørgeskemaer.</li>
              <li>Kontooplysninger for kunder, agenter og partnere.</li>
              <li>Oplysninger om abonnementer og fakturering.</li>
            </ul>

            <h2>3. Sådan anvender vi oplysninger</h2>
            <p>Vi anvender indsamlede oplysninger til at:</p>
            <ul>
              <li>Besvare henvendelser og anmodninger om gratis prøveperioder.</li>
              <li>Levere livechat og kundesupport.</li>
              <li>Hjælpe virksomheder med at besvare henvendelser fra deres hjemmesidebesøgende.</li>
              <li>Generere AI-assisterede chatforslag og svar.</li>
              <li>Levere besøgsanalyser og rapporter om tjenestens resultater.</li>
              <li>Administrere konti, abonnementer og fakturering.</li>
              <li>Vedligeholde, fejlfinde og forbedre vores tjenester.</li>
              <li>Overholde gældende juridiske forpligtelser.</li>
            </ul>

            <h2>4. Kontaktformularer på hjemmesiden</h2>
            <p>
              Oplysninger, der indsendes via vores kontaktformularer og
              formularer til gratis prøveperioder, bruges til at besvare
              henvendelser, behandle anmodninger om prøveperioder og
              kommunikere med potentielle kunder. Vi kan benytte
              tredjepartsleverandører til sikker behandling og
              levering af disse henvendelser.
            </p>

            <h2>5. Livechat og AI-assistance</h2>
            <p>
              BSC Live Chat understøtter samtaler mellem hjemmesidebesøgende
              og autoriserede menneskelige medarbejdere. Afhængigt af
              tjenestens konfiguration kan AI hjælpe med at generere
              svarforslag eller automatisk besvare besøgendes spørgsmål.
              Oplysninger fra samtaler kan blive behandlet af
              teknologileverandører, der bidrager til disse funktioner.
              AI-genererede svar kan indeholde fejl og bør ikke betragtes
              som professionel rådgivning.
            </p>

            <h2>6. Besøgssporing og analyser</h2>
            <p>
              BSC Live Chat omfatter sporing af hjemmesidebesøgende og
              månedlige aktivitetsanalyser for deltagende virksomheder.
              Disse funktioner hjælper virksomheder med at forstå
              aktiviteten på deres hjemmesider og de besøgendes engagement.
              De indsamlede oplysninger afhænger af tjenestens
              implementering og konfiguration.
            </p>

            <h2>7. Videregivelse af oplysninger</h2>
            <p>
              Vi kan dele oplysninger med autoriseret personale,
              virksomheder, der benytter vores tjenester, og
              teknologileverandører, når det er nødvendigt for at
              drive BSC Live Chat. Disse leverandører kan understøtte
              hosting, databaser, formularindsendelser, AI-behandling
              og relaterede aktiviteter. Vi kan også videregive
              oplysninger, når lovgivningen kræver det.
            </p>

            <h2>8. Opbevaring af data</h2>
            <p>
              BSC Live Chat opbevarer besøgendes chatbeskeder og
              registreringer af besøgsaktivitet, indtil en autoriseret
              administrator sletter dem. Andre oplysninger kan
              opbevares, når det er nødvendigt af hensyn til
              driften, forretningsdokumentation, lovkrav eller
              legitime forretningsmæssige formål.
            </p>

            <h2>9. Sikkerhed</h2>
            <p>
              Vi træffer rimelige foranstaltninger med henblik på at
              beskytte oplysninger mod uautoriseret adgang, ændring
              eller videregivelse. Intet internetbaseret system
              kan dog garantere fuldstændig sikkerhed.
            </p>

            <h2>10. Anmodninger vedrørende personoplysninger</h2>
            <p>
              Du kan kontakte os med spørgsmål om personoplysninger,
              anmode om indsigt eller berigtigelse eller anmode om
              sletning, hvor det er relevant. Vi kan have behov
              for at bekræfte din identitet og tage hensyn til
              gældende lovkrav, før vi svarer.
            </p>

            <h2>11. International behandling af oplysninger</h2>
            <p>
              Vores teknologileverandører kan behandle eller opbevare
              oplysninger uden for din provins eller dit land.
              Oplysninger, der behandles i en anden jurisdiktion,
              kan være underlagt lovgivningen dér.
            </p>

            <h2>12. Ændringer af denne politik</h2>
            <p>
              Vi kan opdatere denne privatlivspolitik, når vores
              tjenester og praksis ændrer sig. Den seneste version
              offentliggøres på denne side med datoen for opdateringen.
            </p>

            <h2>13. Kontakt os</h2>
            <p>
              Business Solution Center<br />
              Ontario, Canada<br />
              E-mail: <a href="mailto:info@bsctelemarketing.com">
                info@bsctelemarketing.com
              </a>
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
