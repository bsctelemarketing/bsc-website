import Link from "next/link";

const faqs = [
  {
    question: "Hvad er BSC Live Chat?",
    answer: "BSC Live Chat er en chatløsning til hjemmesider, der kombinerer menneskelig kundeservice med AI-svar, leadgenerering og tidsbestilling."
  },
  {
    question: "Hvordan fungerer AI-chatten?",
    answer: "AI kan automatisk besvare almindelige kundespørgsmål ud fra virksomhedens oplysninger, når automatiske svar er aktiveret."
  },
  {
    question: "Kan kunder booke aftaler via livechat?",
    answer: "Ja. Virksomheder med aktiveret tidsbestilling kan lade kunder anmode om og booke ledige tider via chatten."
  },
  {
    question: "Tilbyder I en gratis prøveperiode?",
    answer: "Ja. BSC Live Chat tilbyder en gratis prøveperiode på 15 dage."
  },
  {
    question: "Hvad indeholder den gratis 6-måneders plan?",
    answer: "Planen indeholder 25 automatiske AI-svar om måneden, ubegrænsede menneskelige chats, én agentplads og en chat-widget til hjemmesiden. Aktivering kræver godkendelse fra BSC."
  },
  {
    question: "Hvad sker der, når de 25 gratis AI-svar er brugt?",
    answer: "Automatiske AI-svar stopper, indtil den månedlige kvote nulstilles. Menneskelig livechat kan fortsat bruges uden en månedlig chatgrænse."
  },
  {
    question: "Kan jeg købe ekstra AI-svarkreditter?",
    answer: "Ja. Kontakt BSC Live Chat for at anmode om ekstra AI-kreditter. Priser og tilgængelighed bekræftes inden køb."
  },
  {
    question: "Kan jeg tilpasse chat-widgetten?",
    answer: "Ja. Chat-widgetten kan vise virksomhedens navn, og understøttede indstillinger for udseende og velkomstbesked kan tilpasses."
  },
  {
    question: "Kan mine medarbejdere besvare kundechats?",
    answer: "Ja. Menneskelig chatadgang er tilgængelig på abonnementer, der omfatter chatrettigheder for agenter."
  },
  {
    question: "Understøtter BSC Live Chat flere sprog?",
    answer: "Ja. BSC Live Chat understøtter flersproget kundekommunikation."
  },
  {
    question: "Er der en bindingsperiode?",
    answer: "Nej. BSC Live Chat kræver ingen fast bindingsperiode."
  },
  {
    question: "Hvordan kommer jeg i gang?",
    answer: "Besøg siden med gratis prøveperiode for at anmode om en prøveperiode eller ansøge om den gratis 6-måneders plan."
  }
];

export default function DanishFAQPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-4 text-4xl font-bold">Ofte stillede spørgsmål</h1>
      <p className="mb-10 text-lg">
        Find svar på almindelige spørgsmål om BSC Live Chat.
      </p>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-xl border p-5">
            <summary className="cursor-pointer font-semibold">
              {faq.question}
            </summary>
            <p className="mt-3 leading-7">{faq.answer}</p>
          </details>
        ))}
      </div>
      <p className="mt-10">
        Har du flere spørgsmål? <Link href="/da/contact" className="underline">Kontakt os</Link>.
      </p>
    </main>
  );
}
