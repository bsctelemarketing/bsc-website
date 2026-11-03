import Link from "next/link";
import {Cta,CheckList,PageHero} from "@/components/page-shell";import type {Metadata} from "next";export const metadata:Metadata={title:"Services"};
export default function Services(){return <main><PageHero eyebrow="Services" title="Flexible live chat for the way you work." text="Combine human support and practical AI tools to give every website visitor a faster, more helpful response."/><section className="section"><div className="container content-grid">{[["Self-Service Human + AI","Your own staff answer chats from secure client accounts while AI helps with automatic responses and reply suggestions."],["BSC Human Chat Agents","Let trained BSC agents handle visitor conversations, collect information and deliver qualified opportunities."],["24/7 AI Assistant","Keep responding outside business hours with an AI assistant informed by your approved business information."],["Lead Capture & Reporting","Organize conversations and capture the contact details your team needs for timely follow-up."],["AI Appointment Booking","Let visitors book appointments through AI conversations or a self-service booking form, 24/7."]].map(([t,d])=><article className="info-card" key={t}><h3>{t}</h3><p>{d}</p><CheckList items={t==="Self-Service Human + AI"?["Chat-enabled staff accounts","AI usage visibility","Conversation history"]:["Professional visitor support","Clear business workflows","Simple onboarding"]}/></article>)}</div></section><section className="section section-soft">
  <div className="container">
    <div className="section-heading">
      <span className="eyebrow">AI Appointment Booking</span>
      <h2>Turn conversations into appointments.</h2>
      <p>Make it easy for customers to request appointments directly from your website, day or night.</p>
    </div>

    <div className="split">
      <div>
        <h3>Two convenient ways to book</h3>
        <p>Visitors can ask the AI assistant to help schedule an appointment during a conversation or select Book Appointment to use the booking form.</p>
        <CheckList items={[
          "AI conversational appointment booking",
          "Self-service booking form",
          "Available dates and time slots",
          "Availability checks against existing bookings",
          "Booking requests available 24/7"
        ]}/>
      </div>
    </div>

    <div className="control-panel appointment-image-panel">
      <h3>Customer booking experience</h3>
      <p>Customers can select an available date and time directly from your website.</p>
      <img
        className="appointment-screenshot"
        src="/images/appointments/Appointment1.png"
        alt="BSC customer appointment booking form"
      />
    </div>
<section className="section section-soft">
  <div className="container">
    <div className="section-heading">
      <span className="eyebrow">How AI Appointment Booking Works</span>
      <h2>From a website conversation to a booked appointment.</h2>
      <p>Your customers can schedule appointments directly through your AI chat assistant, without waiting for someone to answer the phone.</p>
    </div>

    <div className="steps">
      <article>
        <span>1</span>
        <h3>Customer requests an appointment</h3>
        <p>A visitor asks the AI assistant to schedule a service, such as an HVAC repair, consultation, or salon appointment.</p>
      </article>

      <article>
        <span>2</span>
        <h3>AI checks available times</h3>
        <p>BSC checks your configured business hours, appointment duration, and existing bookings to find available appointment slots.</p>
      </article>

      <article>
        <span>3</span>
        <h3>AI collects booking details</h3>
        <p>The assistant helps the customer choose an available time and provide the contact and appointment information needed.</p>
      </article>
    </div>

    <div className="control-panel" style={{marginTop:"32px"}}>
      <h3>4. The appointment appears in your Client Portal</h3>
      <p>Depending on your booking settings, the appointment is automatically confirmed or submitted for your approval. You can review and manage appointments directly from your Client Portal.</p>
      <p><strong>Prefer a booking form?</strong> Customers can also click Book Appointment and select an available time without starting an AI conversation.</p>
    </div>

    <div className="button-row" style={{marginTop:"32px"}}>
      <Link className="button" href="/free-trial">
        Start 15-Day Free Trial
      </Link>
    </div>
  </div>
</section>

    <div className="control-panel" style={{marginTop:"32px",padding:"24px"}}>
      <h3>Manage every appointment in your Client Portal</h3>
      <p>View appointment requests, approve or reject bookings when required, and manage upcoming appointments from your business dashboard.</p>
      <img
        src="/images/appointments/Appointment2.png"
        alt="BSC Client Portal appointment management dashboard"
        style={{width:"100%",height:"auto",borderRadius:"12px"}}
      />
    </div>

    <div style={{marginTop:"32px"}}>
      <h3>Built for appointment-based businesses</h3>
      <p>Ideal for HVAC and plumbing companies, dental clinics, salons, cleaning services, real estate agencies, automotive services, and consultants.</p>
      <CheckList items={[
        "Capture appointment requests outside business hours",
        "Reduce manual scheduling work",
        "Offer customers convenient booking options",
        "Configure business hours and booking preferences",
        "Keep appointment requests organized"
      ]}/>
      <div className="button-row">
        <Link className="button" href="/free-trial">Start 15-Day Free Trial</Link>
        <Link className="text-link" href="/how-it-works">See How It Works →</Link>
      </div>
    </div>
  </div>
</section>
<section className="section">
  <div className="container">
    <div className="section-heading">
      <span className="eyebrow">Appointment Availability Settings</span>
      <h2>Take control of your appointment availability.</h2>
      <p>Manage your booking schedule directly from the BSC Client Portal. Decide when customers can book and how appointment requests are handled.</p>
    </div>

    <div className="split">
      <div>
        <h3>Your business hours. Your booking rules.</h3>
        <p>Configure your business hours and appointment preferences so customers can request times that work for your business.</p>
        <CheckList items={[
          "Set opening and closing hours for each day",
          "Choose which days accept appointments",
          "Enable or disable appointment booking",
          "Configure appointment duration",
          "Select your business time zone",
          "Choose automatic confirmation or manual approval",
          "Check available slots against existing appointments"
        ]}/>
        <p>Whether you operate a dental clinic, HVAC company, beauty salon, or consulting business, BSC helps you organize appointment requests while keeping control of your schedule.</p>
      </div>

    </div>

    <div className="control-panel appointment-image-panel">
      <h3>Manage your booking settings</h3>
      <p>Update your business hours, available days, appointment duration, time zone, and approval preferences directly from your Client Portal.</p>
      <img
        className="appointment-screenshot"
        src="/images/appointments/Appointment3.png"
        alt="BSC Appointment Settings showing business hours, appointment duration, approval mode, and time zone"
      />
    </div>

    <div className="button-row" style={{marginTop:"32px"}}>
      <Link className="button" href="/free-trial">
        Start 15-Day Free Trial
      </Link>
    </div>
  </div>
</section>

<section className="section section-soft">
<div className="container">
<span className="eyebrow">Monthly Visitor Tracking &amp; Customer Satisfaction</span>
<h2>Understand your website traffic. Improve every customer conversation.</h2>
<p>BSC Live Chat helps you understand your website visitors, monitor customer engagement, and measure customer satisfaction through one convenient analytics dashboard.</p>
<div className="split">
<div>
<h3>Track visitors, even when they do not start a chat</h3>
<p>BSC Live Chat records website visitor activity even when visitors browse your website without initiating a live chat conversation. This gives your business valuable insights into website traffic beyond the number of people who contact your team.</p>
<CheckList items={["Track monthly visitor activity without requiring a chat","Review website traffic for selected months","Monitor live chat conversations and captured leads","Understand visitor engagement and identify trends","Access performance insights from your client dashboard"]}/>
<h3>Post-Chat Customer Satisfaction Surveys</h3>
<p>After an agent completes a live chat conversation, visitors can rate their experience from 1 to 5 stars, indicate whether their issue was resolved, and leave a written comment.</p>
<CheckList items={["Collect customer feedback after completed chats","Monitor average satisfaction ratings","Review resolution rates and five-star surveys","Read visitor comments and identify the handling agent","Improve customer service using real feedback"]}/>
<Link className="text-link" href="/free-trial">Start your 15-day free trial →</Link>
</div>
</div>
<div className="control-panel" style={{marginTop:"32px",padding:"24px"}}>
<h3>Explore your Client Analytics Dashboard</h3>
<img src="/images/bsc-client-analytics.png" alt="BSC Live Chat Client Analytics dashboard showing monthly visitors, agent performance, and customer satisfaction surveys" style={{width:"100%",height:"auto",borderRadius:"12px"}}/>
<p>Monitor website traffic, live chat performance, leads, and customer satisfaction in one place.</p>
</div>
</div>
</section>
<Cta/></main>}
