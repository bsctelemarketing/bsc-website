import {Cta,PageHero} from "@/components/page-shell";import type {Metadata} from "next";export const metadata:Metadata={title:"How It Works"};
export default function How(){return <main><PageHero eyebrow="How it works" title="From setup to live conversations—simply." text="We make it easy to add professional chat support without disrupting your current website or workflow."/><section className="section"><div className="container timeline">{[["01","Choose your service model","Decide whether your staff, BSC agents, AI, or a combination will support visitors."],["02","Share your business information","Provide your services, frequently asked questions, hours and lead qualification needs."],["03","Install the website widget","Add a short installation snippet to your website. We provide clear guidance for your site."],["04","Go live and improve","Start receiving conversations, review activity and adjust your coverage as your needs change."]].map(([n,t,d])=><article key={n}><span>{n}</span><div><h2>{t}</h2><p>{d}</p></div></article>)}</div></section><section className="section section-soft">
  <div className="container">
    <div className="section-heading">
      <span className="eyebrow">Widget Installation Guide</span>
      <h2>Install BSC Live Chat on your website</h2>
      <p>Copy your unique BSC Live Chat widget code from your account and add it to your website. No advanced programming skills are required for most supported platforms.</p>
    </div>

    <div className="steps">
      <article>
        <span>1</span>
        <h3>Get your widget code</h3>
        <p>Sign in to your BSC Client Portal and copy your business's widget installation snippet.</p>
      </article>
      <article>
        <span>2</span>
        <h3>Open your website editor</h3>
        <p>Find your website's custom code, footer script, or HTML template settings.</p>
      </article>
      <article>
        <span>3</span>
        <h3>Paste and publish</h3>
        <p>Add the snippet to the appropriate location and publish your changes.</p>
      </article>
      <article>
        <span>4</span>
        <h3>Test your live chat</h3>
        <p>Visit your website, open the BSC chat widget, and send a test message.</p>
      </article>
    </div>

    <div className="section-heading" style={{marginTop:"48px"}}>
      <h2>Where to paste your installation code</h2>
      <p>Select the instructions for your website platform.</p>
    </div>

    <div className="control-panel">
      <h3>WordPress</h3>
      <p>Open your WordPress dashboard. Install a trusted header/footer code plugin such as WPCode. Paste your BSC widget snippet into its Footer scripts area, then save and activate it.</p>

      <h3>Shopify</h3>
      <p>Go to Online Store → Themes → Edit code. Open layout/theme.liquid and paste your BSC widget snippet immediately before the closing body tag. Save your changes.</p>

      <h3>Wix</h3>
      <p>Go to Settings → Custom Code → Add Custom Code. Paste the snippet, select all pages, choose Body – end, and apply your changes.</p>

      <h3>Squarespace</h3>
      <p>Open the Code Injection settings and paste your BSC widget snippet into the Footer field. Save your changes. Availability depends on your Squarespace plan.</p>

      <h3>Custom HTML Websites</h3>
      <p>Open your website's HTML template. Paste the BSC widget snippet immediately before the closing body tag, then save and publish your website.</p>
    </div>
  </div>
</section>

<section className="section">
  <div className="container">
    <div className="section-heading">
      <span className="eyebrow">Security and Data Protection</span>
      <h2>Simple installation with security in mind</h2>
      <p>Protecting business and customer information is important to BSC Live Chat.</p>
    </div>

    <div className="control-panel">
      <h3>No administrator password required</h3>
      <p>You can install the BSC Live Chat widget using your unique installation snippet. You do not need to share your website administrator password with BSC.</p>

      <h3>Reasonable security safeguards</h3>
      <p>We take reasonable technical and organizational measures intended to protect information against unauthorized access, alteration, disclosure, or loss.</p>

      <h3>Our security commitment</h3>
      <p>No internet-based system can guarantee absolute security. We aim to maintain appropriate safeguards and encourage customers to follow secure account and website management practices.</p>
    </div>
  </div>
</section>
<Cta/></main>}
