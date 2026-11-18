import Link from "next/link";

const faqs = [
  {
    question: "What is BSC Live Chat?",
    answer: "BSC Live Chat is a website chat service that combines human support with AI-powered responses to help businesses communicate with visitors, capture leads, and book appointments."
  },
  {
    question: "How does the AI chat work?",
    answer: "AI can automatically answer common customer questions using your business information when automatic responses are enabled."
  },
  {
    question: "Can customers book appointments through live chat?",
    answer: "Yes. Businesses with appointment booking enabled can let customers request and book available appointments through the chat."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes. BSC Live Chat offers a 15-day free trial so businesses can explore the service."
  },
  {
    question: "What is included in the 6-Month Free Plan?",
    answer: "The Free Plan includes 25 automatic AI responses per month, unlimited human chats, one agent seat, and a website chat widget. Activation requires BSC approval."
  },
  {
    question: "What happens after I use my 25 free AI responses?",
    answer: "Automatic AI responses stop until the monthly allowance resets. Human live chats remain available without a monthly chat limit."
  },
  {
    question: "Can I purchase additional AI response credits?",
    answer: "Yes. Contact BSC Live Chat to request additional AI credits. Pricing and availability will be confirmed before purchase."
  },
  {
    question: "Can I customize the chat widget?",
    answer: "Yes. Your website chat widget can display your company's name, and supported appearance and welcome-message settings can be customized."
  },
  {
    question: "Can my employees answer customer chats?",
    answer: "Yes. Human chat access is available on plans that include agent chat permissions."
  },
  {
    question: "Does BSC Live Chat support multiple languages?",
    answer: "Yes. BSC Live Chat supports multilingual customer communication."
  },
  {
    question: "Is there a fixed contract?",
    answer: "No. BSC Live Chat plans do not require a fixed-term contract."
  },
  {
    question: "How does the Pay Per Qualified Lead plan work?",
    answer: "With this plan, your business pays for qualified customer leads generated through BSC Live Chat. Lead qualification criteria and pricing are agreed upon before the service begins."
  },
  {
    question: "How does the Pay Per Confirmed Appointment plan work?",
    answer: "With this plan, your business pays for confirmed appointments booked through BSC Live Chat. Applicable booking charges and pricing are agreed upon before activation."
  },
  {
    question: "How does the Pay Per Chat plan work?",
    answer: "With this plan, your business pays for eligible customer chats handled through BSC Live Chat. Chat eligibility and pricing are agreed upon before activation."
  },
  {
    question: "How can I get pricing for these plans?",
    answer: "Contact BSC Live Chat to request pricing for Pay Per Qualified Lead, Pay Per Confirmed Appointment, or Pay Per Chat. These plans have no fixed-term contract."
  },
  {
    question: "How can I get started?",
    answer: "Visit our Free Trial page to request a trial or apply for the 6-Month Free Plan."
  }
];

export default function FAQPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-4 text-4xl font-bold">Frequently Asked Questions</h1>
      <p className="mb-10 text-lg">
        Find answers to common questions about BSC Live Chat.
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
        Still have questions? <Link href="/contact" className="underline">Contact us</Link>.
      </p>
    </main>
  );
}

