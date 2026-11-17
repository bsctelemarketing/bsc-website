import { CheckList, PageHero } from "@/components/page-shell";
import { InquiryForm } from "@/components/inquiry-form";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Free Trial & Free Plan Application" };
export default async function Trial({ searchParams }: { searchParams: Promise<{ plan?: string }> }) {
  const isFree = (await searchParams).plan === "free";
  return <main>
    <PageHero eyebrow={isFree ? "6-Month Free Plan" : "15-day free trial"} title={isFree ? "Apply for 6 months of free live chat." : "See what better website conversations can do."} text={isFree ? "Get 25 automatic AI responses per month, unlimited human chats and one agent seat. Every application is reviewed by BSC Admin before activation." : "The free trial is available for all BSC Live Chat paid plans. Complete the form and we’ll help create the right account for your business."}/>
    <section className="section"><div className="container form-wrap"><div><span className="eyebrow">What happens next</span><h2>A simple, guided start.</h2><CheckList items={isFree ? ["Submit your Free Plan application", "BSC Admin reviews your business and approves or declines the request", "If approved, we help set up your account and website widget", "Your 6-month Free Plan starts when your service is activated; no automatic paid conversion"] : ["We review your business and preferred plan", "You receive the information needed to create your account", "We help prepare your chat setup and website widget", "Your 15-day trial begins when your service is activated"]}/><p className="muted">No credit card is required to apply.</p></div><InquiryForm kind={isFree ? "free" : "trial"}/></div></section>
  </main>;
}
