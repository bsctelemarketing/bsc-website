"use client";

import { FormEvent, useState } from "react";

type InquiryFormProps = {
  kind?: "trial" | "contact" | "free";
  defaultPlan?: string;
  lang?: "en" | "da";
};

export function InquiryForm({
  kind = "trial",
  defaultPlan = "Self-Service Human + AI",
  lang = "en",
}: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const isDanish = lang === "da";
  const isFree = kind === "free";
  const isTrial = kind === "trial";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("request_type", isFree ? "6-Month Free Plan Application - Pending BSC Admin Approval" : isTrial ? "15-Day Free Trial" : "Contact Request");
    data.set("_subject", isFree ? "New BSC Live Chat 6-Month Free Plan Application" : isTrial ? "New BSC Live Chat Free Trial Request" : "New BSC Live Chat Contact Request");
    if (isFree) {
      data.set("plan", "6-Month Free Plan");
      data.set("free_plan_features", "US$0/month for 6 months; 25 automatic AI responses/month; unlimited human chats; 1 agent seat; BSC Admin approval required");
      data.set("approval_status", "Pending BSC Admin Review");
    }
    try {
      const response = await fetch(form.action, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <span>✓</span>
        <h2>{isDanish ? "Tak, fordi du kontaktede os." : "Thank you for contacting us."}</h2>
        <p>{isFree
          ? isDanish
            ? "Din ansøgning om 6 måneders gratis abonnement er sendt til Business Solution Center. BSC Admin gennemgår ansøgningen og kontakter dig. Din konto er ikke aktiveret endnu."
            : "Your 6-Month Free Plan application has been sent to Business Solution Center. BSC Admin will review it and contact you. Your account has not been activated yet."
          : isDanish
            ? isTrial
              ? "Dine oplysninger er blevet sendt til Business Solution Center. Vi kontakter dig om din gratis prøveperiode med BSC Live Chat."
              : "Dine oplysninger er blevet sendt til Business Solution Center. Vi kontakter dig vedrørende din henvendelse."
            : <>Your information has been sent to Business Solution Center. We&apos;ll contact you about your BSC Live Chat {isTrial ? "free trial" : "inquiry"}.</>}
        </p>
      </div>
    );
  }

  return (
    <form className="form-card control-panel" action="https://formspree.io/f/myeyjqyr" method="POST" onSubmit={submit}>
      {isFree && <div className="field full"><strong>{isDanish ? "Gratis – 0 USD/måned i 6 måneder" : "Free – US$0/month for 6 months"}</strong><p>{isDanish ? "25 automatiske AI-svar pr. måned, ubegrænsede chats med medarbejdere og 1 brugerplads. Kræver godkendelse fra BSC Admin. Ingen automatisk overgang til en betalingsplan." : "25 automatic AI responses per month, unlimited human chats, and 1 agent seat. Subject to BSC Admin approval. No automatic conversion to a paid plan."}</p></div>}
      <div className="field"><label htmlFor={`${kind}-name`}>{isDanish ? "Fulde navn" : "Full name"}</label><input id={`${kind}-name`} name="name" required maxLength={100}/></div>
      <div className="field"><label htmlFor={`${kind}-company`}>{isDanish ? "Virksomhedsnavn" : "Company name"}</label><input id={`${kind}-company`} name="company" required maxLength={120}/></div>
      <div className="field"><label htmlFor={`${kind}-email`}>{isDanish ? "Virksomhedens e-mail" : "Business email"}</label><input id={`${kind}-email`} name="email" type="email" required maxLength={160}/></div>
      <div className="field"><label htmlFor={`${kind}-phone`}>{isDanish ? "Telefonnummer" : "Phone number"}</label><input id={`${kind}-phone`} name="phone" type="tel" maxLength={50}/></div>
      <div className="field full"><label htmlFor={`${kind}-website`}>{isDanish ? "Hjemmesideadresse" : "Website URL"}</label><input id={`${kind}-website`} name="website" type="url" placeholder="https://" maxLength={300}/></div>
      <div className="field full">
        <label htmlFor={`${kind}-plan`}>{isDanish ? isTrial || isFree ? "Foretrukken løsning" : "Jeg er interesseret i" : isTrial || isFree ? "Preferred plan" : "I'm interested in"}</label>
        {isFree ? <><input id={`${kind}-plan`} value={isDanish ? "Gratis abonnement – 6 måneder" : "6-Month Free Plan"} readOnly /><input type="hidden" name="plan" value="6-Month Free Plan" /></> :
        <select id={`${kind}-plan`} name="plan" defaultValue={defaultPlan}>
          <option value="Self-Service Human + AI">{isDanish ? "Selvbetjening med mennesker + AI" : "Self-Service Human + AI"}</option>
          <option value="BSC Human Chat Agents">{isDanish ? "BSC's menneskelige chatagenter" : "BSC Human Chat Agents"}</option>
          <option value="Pay Per Qualified Lead">{isDanish ? "Betaling pr. kvalificeret lead" : "Pay Per Qualified Lead"}</option>
          <option value="Pay Per Confirmed Appointment">{isDanish ? "Betaling pr. bekræftet aftale" : "Pay Per Confirmed Appointment"}</option>
          <option value="Pay Per Chat">{isDanish ? "Betaling pr. chat" : "Pay Per Chat"}</option>
          <option value="BSC Referral Partner Program">{isDanish ? "BSC-henvisningspartnerprogram" : "BSC Referral Partner Program"}</option>
          <option value="BSC Reseller / Service Partner Program">{isDanish ? "BSC-forhandler-/servicepartnerprogram" : "BSC Reseller / Service Partner Program"}</option>
          <option value="Help me choose">{isDanish ? "Hjælp mig med at vælge" : "Help me choose"}</option>
        </select>}
      </div>
      <div className="field full"><label htmlFor={`${kind}-message`}>{isDanish ? isTrial || isFree ? "Hvad skal BSC Live Chat hjælpe med?" : "Hvordan kan vi hjælpe?" : isTrial || isFree ? "What would you like BSC Live Chat to handle?" : "How can we help?"}</label><textarea id={`${kind}-message`} name="message" required={kind === "contact"} maxLength={3000}/></div>
      <input className="website-check" name="website_check" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="button" type="submit" disabled={status === "sending"}>{status === "sending" ? isDanish ? "Sender…" : "Sending…" : isFree ? isDanish ? "Ansøg om gratis abonnement" : "Apply for Free Plan" : isTrial ? isDanish ? "Anmod om gratis prøveperiode" : "Request My Free Trial" : isDanish ? "Send besked" : "Send Message"}</button>
      {status === "error" && <p className="form-error" role="alert">{isDanish ? "Vi kunne ikke sende dine oplysninger. Prøv igen, eller send en e-mail til info@bsctelemarketing.com." : "We couldn't send your information. Please try again or email info@bsctelemarketing.com."}</p>}
    </form>
  );
}
