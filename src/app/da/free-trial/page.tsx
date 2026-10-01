import { CheckList, PageHero } from "@/components/page-shell";
import { InquiryForm } from "@/components/inquiry-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "15-dages gratis prøveperiode",
};

export default function Trial() {
  return (
    <main>
      <PageHero
        eyebrow="15-dages gratis prøveperiode"
        title="Se, hvad bedre samtaler på hjemmesiden kan gøre."
        text="Den gratis prøveperiode er tilgængelig for alle BSC Live Chat-planer. Udfyld formularen, så hjælper vi med at oprette den rette konto til jeres virksomhed."
      />

      <section className="section">
        <div className="container form-wrap">
          <div>
            <span className="eyebrow">Hvad sker der bagefter?</span>
            <h2>En enkel og guidet start.</h2>

            <CheckList
              items={[
                "Vi gennemgår jeres virksomhed og foretrukne plan",
                "I modtager de oplysninger, der er nødvendige for at oprette jeres konto",
                "Vi hjælper med at forberede chatopsætningen og widgetten til hjemmesiden",
                "Jeres 15-dages prøveperiode begynder, når tjenesten aktiveres",
              ]}
            />

            <p className="muted">
              Der kræves ikke et kreditkort for at anmode om en
              prøveperiode.
            </p>
          </div>

          <InquiryForm kind="trial" lang="da" />
        </div>
      </section>
    </main>
  );
}