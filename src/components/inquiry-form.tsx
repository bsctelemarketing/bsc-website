"use client";

import { FormEvent, useState } from "react";

type InquiryFormProps = {
  kind?: "trial" | "contact";
  defaultPlan?: string;
  lang?: "en" | "da";
};

export function InquiryForm({
  kind = "trial",
  defaultPlan = "Self-Service Human + AI",
  lang = "en",
}: InquiryFormProps) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const isDanish = lang === "da";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);

    data.set(
      "request_type",
      kind === "trial"
        ? "15-Day Free Trial"
        : "Contact Request"
    );

    data.set(
      "_subject",
      kind === "trial"
        ? "New BSC Live Chat Free Trial Request"
        : "New BSC Live Chat Contact Request"
    );

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error();
      }

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

        <h2>
          {isDanish
            ? "Tak, fordi du kontaktede os."
            : "Thank you for contacting us."}
        </h2>

        <p>
          {isDanish
            ? kind === "trial"
              ? "Dine oplysninger er blevet sendt til Business Solution Center. Vi kontakter dig om din gratis prøveperiode med BSC Live Chat."
              : "Dine oplysninger er blevet sendt til Business Solution Center. Vi kontakter dig vedrørende din henvendelse."
            : (
              <>
                Your information has been sent to Business Solution Center.
                We&apos;ll contact you about your BSC Live Chat{" "}
                {kind === "trial" ? "free trial" : "inquiry"}.
              </>
            )}
        </p>
      </div>
    );
  }

  return (
    <form
      className="form-card control-panel"
      action="https://formspree.io/f/myeyjqyr"
      method="POST"
      onSubmit={submit}
    >
      <div className="field">
        <label htmlFor={`${kind}-name`}>
          {isDanish ? "Fulde navn" : "Full name"}
        </label>
        <input
          id={`${kind}-name`}
          name="name"
          required
          maxLength={100}
        />
      </div>

      <div className="field">
        <label htmlFor={`${kind}-company`}>
          {isDanish ? "Virksomhedsnavn" : "Company name"}
        </label>
        <input
          id={`${kind}-company`}
          name="company"
          required
          maxLength={120}
        />
      </div>

      <div className="field">
        <label htmlFor={`${kind}-email`}>
          {isDanish ? "Virksomhedens e-mail" : "Business email"}
        </label>
        <input
          id={`${kind}-email`}
          name="email"
          type="email"
          required
          maxLength={160}
        />
      </div>

      <div className="field">
        <label htmlFor={`${kind}-phone`}>
          {isDanish ? "Telefonnummer" : "Phone number"}
        </label>
        <input
          id={`${kind}-phone`}
          name="phone"
          type="tel"
          maxLength={50}
        />
      </div>

      <div className="field full">
        <label htmlFor={`${kind}-website`}>
          {isDanish ? "Hjemmesideadresse" : "Website URL"}
        </label>
        <input
          id={`${kind}-website`}
          name="website"
          type="url"
          placeholder="https://"
          maxLength={300}
        />
      </div>

      <div className="field full">
        <label htmlFor={`${kind}-plan`}>
          {isDanish
            ? kind === "trial"
              ? "Foretrukken løsning"
              : "Jeg er interesseret i"
            : kind === "trial"
              ? "Preferred plan"
              : "I'm interested in"}
        </label>

        <select
          id={`${kind}-plan`}
          name="plan"
          defaultValue={defaultPlan}
        >
          <option value="Self-Service Human + AI">
            {isDanish
              ? "Selvbetjening med mennesker + AI"
              : "Self-Service Human + AI"}
          </option>

          <option value="BSC Human Chat Agents">
            {isDanish
              ? "BSC's menneskelige chatagenter"
              : "BSC Human Chat Agents"}
          </option>

          <option value="Pay Per Qualified Lead">
            {isDanish
              ? "Betaling pr. kvalificeret lead"
              : "Pay Per Qualified Lead"}
          </option>

          <option value="Pay Per Chat">
            {isDanish
              ? "Betaling pr. chat"
              : "Pay Per Chat"}
          </option>

          <option value="BSC Referral Partner Program">
            {isDanish
              ? "BSC-henvisningspartnerprogram"
              : "BSC Referral Partner Program"}
          </option>

          <option value="BSC Reseller / Service Partner Program">
            {isDanish
              ? "BSC-forhandler-/servicepartnerprogram"
              : "BSC Reseller / Service Partner Program"}
          </option>

          <option value="Help me choose">
            {isDanish
              ? "Hjælp mig med at vælge"
              : "Help me choose"}
          </option>
        </select>
      </div>

      <div className="field full">
        <label htmlFor={`${kind}-message`}>
          {isDanish
            ? kind === "trial"
              ? "Hvad skal BSC Live Chat hjælpe med?"
              : "Hvordan kan vi hjælpe?"
            : kind === "trial"
              ? "What would you like BSC Live Chat to handle?"
              : "How can we help?"}
        </label>

        <textarea
          id={`${kind}-message`}
          name="message"
          required={kind === "contact"}
          maxLength={3000}
        />
      </div>

      <input
        className="website-check"
        name="website_check"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <button
        className="button"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending"
          ? isDanish
            ? "Sender…"
            : "Sending…"
          : kind === "trial"
            ? isDanish
              ? "Anmod om gratis prøveperiode"
              : "Request My Free Trial"
            : isDanish
              ? "Send besked"
              : "Send Message"}
      </button>

      {status === "error" && (
        <p className="form-error" role="alert">
          {isDanish
            ? "Vi kunne ikke sende dine oplysninger. Prøv igen, eller send en e-mail til info@bsctelemarketing.com."
            : "We couldn't send your information. Please try again or email info@bsctelemarketing.com."}
        </p>
      )}
    </form>
  );
}