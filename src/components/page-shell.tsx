import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="page-hero">
      <div className="container narrow">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

export function Cta({
  title,
  text,
  lang = "en",
}: {
  title?: string;
  text?: string;
  lang?: "en" | "da";
}) {
  const isDanish = lang === "da";

  const finalTitle =
    title ??
    (isDanish
      ? "Klar til at gøre flere besøgende til kunder?"
      : "Ready to turn more visitors into customers?");

  const finalText =
    text ??
    (isDanish
      ? "Start din 15-dages gratis prøveperiode. Ingen langsigtet binding."
      : "Start your 15-day free trial. No long-term commitment required.");

  return (
    <section className="cta">
      <div className="container cta-inner">
        <div>
          <h2>{finalTitle}</h2>
          <p>{finalText}</p>
        </div>

        <Link
          href={isDanish ? "/da/free-trial" : "/free-trial"}
          className="button button-light"
        >
          {isDanish ? "Start gratis prøveperiode" : "Start Free Trial"}
        </Link>
      </div>
    </section>
  );
}

export function CheckList({
  items,
}: {
  items: string[];
}) {
  return (
    <ul className="check-list">
      {items.map((x) => (
        <li key={x}>
          <span>✓</span>
          {x}
        </li>
      ))}
    </ul>
  );
}