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
      <ol>
        <li>Sign in to your WordPress administration dashboard.</li>
        <li>Install and activate a trusted header and footer code plugin, such as WPCode.</li>
        <li>Open the plugin settings and locate the Footer Scripts section.</li>
        <li>Paste your BSC Live Chat installation code, save your changes, and visit your website to verify that the chat widget appears.</li>
      </ol>

      <h3>Shopify</h3>
      <ol>
        <li>Sign in to Shopify and navigate to Online Store → Themes.</li>
        <li>Open the theme menu and select Edit code.</li>
        <li>Open the layout/theme.liquid file.</li>
        <li>Paste your BSC Live Chat installation code immediately before the closing body tag.</li>
        <li>Save your changes and verify that the chat widget appears on your storefront.</li>
      </ol>

      <h3>Wix</h3>
      <ol>
        <li>Open your Wix dashboard and navigate to Settings → Custom Code.</li>
        <li>Select Add Custom Code and paste your BSC Live Chat installation code.</li>
        <li>Choose All Pages and set the placement to Body – end.</li>
        <li>Apply your changes and check your published website.</li>
      </ol>

      <h3>Squarespace</h3>
      <ol>
        <li>Sign in to Squarespace and open your website settings.</li>
        <li>Locate Code Injection and open the Footer section.</li>
        <li>Paste your BSC Live Chat installation code and save your changes.</li>
        <li>Visit your published website to verify the widget. Code Injection availability depends on your Squarespace plan.</li>
      </ol>

      <h3>Custom HTML Websites</h3>
      <ol>
        <li>Open the HTML template used by your website.</li>
        <li>Locate the closing body tag.</li>
        <li>Paste your BSC Live Chat installation code immediately before that tag.</li>
        <li>Save and publish your changes, then verify that the chat widget appears.</li>
      </ol>
    </div>
  </div>
</section>

<section className="section section-soft">
  <div className="container">
    <div className="section-heading">
      <span className="eyebrow">Mobile Access — Work From Anywhere</span>
      <h2>Manage customer conversations from your smartphone.</h2>
      <p>BSC Live Chat is accessible through a mobile web browser, allowing clients and chat agents to stay connected while away from their computers.</p>
    </div>

    <div className="split">
      <div>
        <h3>How to access BSC Live Chat on mobile</h3>
        <ol>
          <li>Open Chrome on Android or Safari on iPhone.</li>
          <li>Visit https://live.bsctelemarketing.com.</li>
          <li>Sign in using your BSC account credentials.</li>
          <li>Open your dashboard and navigate to Live Chats.</li>
          <li>View customer conversations and respond directly from your smartphone.</li>
        </ol>
      </div>

      <div className="control-panel">
        <h3>Add BSC Live Chat to your home screen</h3>
        <p><strong>Android:</strong> Open the website in Chrome, select the browser menu, and choose Add to Home screen or Install app if available.</p>
        <p><strong>iPhone:</strong> Open the website in Safari, tap Share, and select Add to Home Screen.</p>
        <p>BSC Live Chat is available as an installable Progressive Web App (PWA). Add it to your smartphone home screen for quick, app-like access without downloading it from an app store.</p>
      </div>
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
