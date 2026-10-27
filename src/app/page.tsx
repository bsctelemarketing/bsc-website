import Link from "next/link";import {Cta,CheckList} from "@/components/page-shell";
const services=[["01","Human live chat","Give website visitors helpful, real-time support from your team or trained BSC chat agents."],["02","AI assistance","Answer common questions around the clock and help agents respond faster with AI-supported replies."],["03","Qualified leads","Capture names, contact details and genuine service interest—so your team can follow up with confidence."]];
export default function Home(){return <main><section className="hero"><div className="hero-glow"/><div className="container hero-grid"><div className="hero-copy"><span className="eyebrow light">Human service. AI speed. One platform.</span><h1>Turn website conversations into <em>real opportunities.</em></h1><p>BSC Live Chat helps your business answer visitors, capture qualified leads and stay available 24/7—with your own team, our trained agents, or AI assistance.</p><div className="button-row"><Link className="button" href="/free-trial">Start 15-Day Free Trial</Link><Link className="button button-ghost" href="/how-it-works">See How It Works</Link></div><div className="trust-row"><span>✓ No credit card required</span><span>✓ Easy website installation</span><span>✓ Flexible support options</span></div></div><div className="chat-stage"><div className="chat-window"><div className="chat-top"><div><i/><b>BSC Live Chat</b></div><span>•••</span></div><div className="chat-body"><div className="visitor"><small>Website visitor</small><p>Hi! Do you offer emergency HVAC service in Brooklyn?</p></div><div className="agent"><small>BSC AI Assistant</small><p>Yes, we can help. May I get your name and phone number so a technician can contact you?</p></div><div className="lead-card"><span className="lead-icon">✓</span><div><small>Qualified lead captured</small><b>Service request ready</b></div></div></div><div className="chat-input">Type a message… <span>➜</span></div></div><div className="float-card"><span>↗</span><div><b>Never miss an inquiry</b><small>Available 24/7</small></div></div></div></div></section><section className="logo-strip"><div className="container"><span>Built for growing service businesses</span><div><b>REAL ESTATE</b><b>DENTAL</b><b>HVAC</b><b>E-COMMERCE</b><b>HOME SERVICES</b></div></div></section><section className="section"><div className="container"><div className="section-heading"><span className="eyebrow">A smarter way to support customers</span><h2>Every conversation handled with care.</h2><p>Choose the service model that fits your team today, then scale as your business grows.</p></div><div className="cards three">{services.map(([n,t,d])=><article className="service-card" key={t}><span className="card-number">{n}</span><h3>{t}</h3><p>{d}</p><Link href="/services">Learn more →</Link></article>)}</div></div></section><section className="section"><div className="container split"><div><span className="eyebrow">Get more from your website traffic</span><h2>Don&apos;t let your marketing budget go to waste.</h2><p>Many businesses invest in Google Ads, Facebook Ads, SEO, and other marketing campaigns to drive traffic to their websites—but getting visitors to your website is only the first step.</p><p>Without real-time engagement, potential customers can leave before asking a question, requesting information, or taking the next step.</p><p><strong>BSC Live Chat helps you capture, engage, and convert more of the visitors you&apos;ve already worked hard to attract.</strong> With Human + AI live chat, multilingual support, and real-time conversations, your business can connect with potential customers when their interest is highest and get more value from your marketing investment.</p></div><div className="control-panel"><h3>Make your traffic work harder</h3><CheckList items={["Engage visitors while they are actively browsing","Answer questions before potential customers leave","Capture contact details and genuine service interest","Support multilingual website conversations","Get more value from your existing marketing campaigns"]}/><Link className="text-link" href="/free-trial">Start your 15-day free trial →</Link></div></div></section><section className="section">
  <div className="container">
    <div className="section-heading">
      <span className="eyebrow">AI Appointment Booking</span>
      <h2>Turn website visitors into booked appointments.</h2>
      <p>Let customers request appointments directly from your website, 24/7. They can book through an AI conversation or use a simple appointment booking form.</p>
    </div>

    <div className="split">
      <div>
        <h3>Let customers book at their convenience</h3>
        <p>BSC checks available appointment times based on your business hours and existing bookings. Customers choose a suitable time and submit their contact details.</p>
        <CheckList items={[
          "AI-assisted and self-service appointment booking",
          "Available appointment dates and time slots",
          "Appointment requests 24 hours a day",
          "Fewer scheduling calls and emails",
          "Automatic confirmation or business approval options"
        ]}/>
        <Link className="text-link" href="/services">Explore appointment booking →</Link>
      </div>

      <div className="control-panel">
        <h3>Simple booking for your customers</h3>
        <img
          src="/images/appointments/Appointment1.png"
          alt="BSC appointment booking form displaying available dates and appointment times"
          style={{width:"100%",height:"auto",borderRadius:"12px"}}
        />
      </div>
    </div>

    <div className="control-panel" style={{marginTop:"32px",padding:"24px"}}>
      <h3>Manage appointments from your Client Portal</h3>
      <p>Review appointment requests, approve or reject bookings when required, and keep track of upcoming appointments in one place.</p>
      <img
        src="/images/appointments/Appointment2.png"
        alt="BSC Client Portal appointment management dashboard"
        style={{width:"100%",height:"auto",borderRadius:"12px"}}
      />
    </div>

    <div style={{marginTop:"32px"}}>
      <h3>Ideal for appointment-based businesses</h3>
      <p>HVAC and plumbing companies, dental clinics, beauty salons, cleaning services, real estate agencies, automotive services, and professional consultants can make it easier for customers to request appointments.</p>
      <div className="button-row">
        <Link className="button" href="/free-trial">Start 15-Day Free Trial</Link>
        <Link className="text-link" href="/services">Learn More →</Link>
      </div>
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
</section><section className="section section-soft"><div className="container split"><div><span className="eyebrow">Designed around your business</span><h2>Use your staff, our agents, or both.</h2><p>Keep full control of customer conversations without forcing your business into a one-size-fits-all service.</p><CheckList items={["Your staff can answer chats from a dedicated account","AI can provide automatic replies and agent suggestions","BSC agents can cover chats when you need human support","Conversation and lead activity stays organized in one place"]}/><Link className="text-link" href="/pricing">Explore flexible pricing →</Link></div><div className="control-panel"><div className="panel-head"><span>Coverage settings</span><b>Live</b></div><div className="setting"><span><i className="dot blue"/>Client team</span><strong>Online</strong></div><div className="setting"><span><i className="dot purple"/>AI assistant</span><strong>24/7</strong></div><div className="setting"><span><i className="dot green"/>BSC agents</span><strong>Optional</strong></div><div className="panel-stat"><small>Response readiness</small><b>Always available</b><div><i/></div></div></div></div></section><section className="section"><div className="container"><div className="section-heading"><span className="eyebrow">Simple from day one</span><h2>Go live in three easy steps.</h2></div><div className="steps"><article><span>1</span><h3>Tell us about your business</h3><p>We learn your services, hours and the information you want to collect.</p></article><article><span>2</span><h3>Add BSC Live Chat</h3><p>Install a lightweight chat widget on your website with simple instructions.</p></article><article><span>3</span><h3>Start conversations</h3><p>Your chosen team begins supporting visitors and capturing opportunities.</p></article></div></div></section><section className="section section-soft">
  <div className="container">
    <div className="section-heading">
      <span className="eyebrow">Appointment Availability Settings</span>
      <h2>Your business hours. Your appointment schedule.</h2>
      <p>Stay in control of when customers can book appointments. Manage your availability and booking preferences directly from the BSC Client Portal.</p>
    </div>

    <div className="split">
      <div>
        <h3>Flexible scheduling for your business</h3>
        <p>Choose when your business accepts appointments and how booking requests are handled.</p>
        <CheckList items={[
          "Set opening and closing hours for each day",
          "Choose which days are available for booking",
          "Configure appointment duration",
          "Select your business time zone",
          "Enable or disable appointment booking",
          "Choose automatic confirmation or manual approval",
          "Check availability against existing appointments"
        ]}/>
      </div>
      <div>
        <h3>Built around your working hours</h3>
        <p>Whether you operate an HVAC company, dental clinic, beauty salon, or consulting business, BSC helps customers find suitable appointment times while keeping you in control of your schedule.</p>
        <Link className="text-link" href="/services">
          Explore Appointment Booking →
        </Link>
      </div>
    </div>

    <div className="control-panel appointment-image-panel">
      <h3>Manage your appointment availability</h3>
      <p>Configure business hours, booking approval, appointment duration, and time zone from one convenient dashboard.</p>
      <img
        className="appointment-screenshot"
        src="/images/appointments/Appointment3.png"
        alt="BSC Appointment Settings showing business hours and booking availability controls"
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
    <div className="section-heading">
      <span className="eyebrow">How AI Appointment Booking Works</span>
      <h2>From a website conversation to a booked appointment.</h2>
      <p>Let customers schedule appointments directly through your AI chat assistant, even outside your business hours.</p>
    </div>

    <div className="steps">
      <article>
        <span>1</span>
        <h3>Customer requests an appointment</h3>
        <p>A website visitor asks the AI assistant to schedule a service, repair, or consultation.</p>
      </article>

      <article>
        <span>2</span>
        <h3>AI checks available times</h3>
        <p>BSC checks your configured business hours, appointment duration, and existing bookings to identify available time slots.</p>
      </article>

      <article>
        <span>3</span>
        <h3>AI collects booking details</h3>
        <p>The assistant helps the customer choose an available time and provide the necessary contact and appointment information.</p>
      </article>
    </div>

    <div className="control-panel" style={{marginTop:"32px"}}>
      <h3>4. The appointment appears in your Client Portal</h3>
      <p>Depending on your settings, the appointment is automatically confirmed or submitted for approval. You can review and manage appointments directly in your BSC Client Portal.</p>
      <p><strong>Prefer a booking form?</strong> Customers can also select an available appointment time without starting an AI conversation.</p>
    </div>

    <div className="button-row" style={{marginTop:"32px"}}>
      <Link className="button" href="/free-trial">
        Start 15-Day Free Trial
      </Link>
    </div>
  </div>
</section>
<Cta/></main>}