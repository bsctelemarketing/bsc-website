import { CheckList, PageHero } from "@/components/page-shell";
import { InquiryForm } from "@/components/inquiry-form";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Gratis prøveperiode og gratis abonnement" };
export default async function Trial({ searchParams }: { searchParams: Promise<{ plan?: string }> }) {
  const isFree = (await searchParams).plan === "free";
  return <main>
    <PageHero eyebrow={isFree ? "6 måneders gratis abonnement" : "15-dages gratis prøveperiode"} title={isFree ? "Ansøg om 6 måneders gratis livechat." : "Se, hvad bedre samtaler på hjemmesiden kan gøre."} text={isFree ? "Få 25 automatiske AI-svar pr. måned, ubegrænsede chats med medarbejdere og 1 brugerplads. BSC Admin gennemgår alle ansøgninger før aktivering." : "Den gratis prøveperiode er tilgængelig for alle BSC Live Chat-betalingsplaner. Udfyld formularen, så hjælper vi med at oprette den rette konto til jeres virksomhed."}/>
    <section className="section"><div className="container form-wrap"><div><span className="eyebrow">Hvad sker der bagefter?</span><h2>En enkel og guidet start.</h2><CheckList items={isFree ? ["Send ansøgningen om gratis abonnement", "BSC Admin gennemgår virksomheden og godkender eller afviser ansøgningen", "Ved godkendelse hjælper vi med konto og widget", "De 12 gratis måneder begynder ved aktivering; ingen automatisk overgang til betaling"] : ["Vi gennemgår jeres virksomhed og foretrukne plan", "I modtager de oplysninger, der er nødvendige for at oprette jeres konto", "Vi hjælper med at forberede chatopsætningen og widgetten til hjemmesiden", "Jeres 15-dages prøveperiode begynder, når tjenesten aktiveres"]}/><p className="muted">Der kræves ikke et kreditkort for at ansøge.</p></div><InquiryForm kind={isFree ? "free" : "trial"} lang="da"/></div></section>
  </main>;
}
