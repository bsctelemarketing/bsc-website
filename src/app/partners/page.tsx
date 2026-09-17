import Link from "next/link";
import type { Metadata } from "next";
import { CheckList, PageHero } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Partner & Reseller Program",
  description:
    "Join the BSC Live Chat Partner & Reseller Program. Offer Human + AI live chat to your clients, manage multiple client companies, and create new service opportunities.",
};

export default function PartnersPage() {
  return (
    <main>
      <PageHero
        eyebrow="BSC Partner & Reseller Program"
        title="Add Human + AI Live Chat to the Services You Offer Your Clients."
        text="The BSC Partner & Reseller Program gives agencies, technology providers, consultants and service companies a practical way to introduce live chat to their clients, manage assigned businesses and create new service opportunities."
      />

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Who can become a partner?</span>
            <h2>Built for businesses that already serve other businesses.</h2>
            <p>
              If your company builds websites, manages marketing, provides
              technology services or supports business customers, BSC Live Chat
              can become an additional service you offer your clients.
            </p>
            <p>
              Instead of developing and maintaining your own live chat
              platform, you can use BSC&apos;s Human + AI technology and
              dedicated Partner Portal.
            </p>
          </div>

          <div className="control-panel">
            <h3>Ideal BSC Partners</h3>
            <CheckList
              items={[
                "Web design and development agencies",
                "Digital marketing and SEO agencies",
                "IT service and technology companies",
                "CRM and automation consultants",
                "Business consultants",
                "Call centers and customer-support providers",
                "Lead-generation agencies",
                "Managed service providers",
                "Independent web developers",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <span className="eyebrow">Partner Portal</span>
          <h2>Manage multiple client companies from one place.</h2>
          <p>
            BSC Partners receive access to a dedicated Partner Portal designed
            to help manage live chat operations across assigned client
            businesses.
          </p>

          <div className="card-grid">
            <div className="service-card">
              <h3>Assigned Companies</h3>
              <p>
                View the client businesses assigned to your Partner account
                from one centralized portal.
              </p>
            </div>

            <div className="service-card">
              <h3>Live Chats</h3>
              <p>
                Authorized Partner team members can manage visitor
                conversations for their assigned client companies.
              </p>
            </div>

            <div className="service-card">
              <h3>Team Management</h3>
              <p>
                Partner Administrators can manage Partner Chat Agents and
                control which client companies they are authorized to support.
              </p>
            </div>

            <div className="service-card">
              <h3>AI Assistance</h3>
              <p>
                Agents can use AI-generated response suggestions to help answer
                visitors faster while maintaining human oversight.
              </p>
            </div>

            <div className="service-card">
              <h3>Chat Transfers</h3>
              <p>
                Transfer active conversations to eligible Partner team members
                when another agent needs to continue the conversation.
              </p>
            </div>

            <div className="service-card">
              <h3>File Attachments</h3>
              <p>
                Partner Chat Agents can send supported files during
                conversations when additional information needs to be shared.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">More Than Referrals</span>
            <h2>Offer managed live chat services to your clients.</h2>
            <p>
              BSC Partners can do more than introduce the platform. Depending
              on the partnership and client arrangement, your own team can
              provide live chat support for assigned client businesses.
            </p>
            <p>
              This gives web agencies, marketing companies, IT providers and
              customer-service organizations an opportunity to expand their
              existing services without building a live chat system from
              scratch.
            </p>
          </div>

          <div className="control-panel">
            <h3>Partner Chat Agents Can</h3>
            <CheckList
              items={[
                "Access authorized client companies",
                "Answer website visitor conversations",
                "Use AI-generated reply suggestions",
                "Send supported file attachments",
                "Transfer eligible conversations",
                "Work across assigned clients from the Partner Portal",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <span className="eyebrow">Partner Benefits</span>
          <h2>Create more value from the clients you already serve.</h2>

          <div className="card-grid">
            <div className="service-card">
              <h3>New Revenue Opportunities</h3>
              <p>
                Create additional revenue opportunities by introducing BSC Live
                Chat or adding managed chat services to your existing business
                offerings.
              </p>
            </div>

            <div className="service-card">
              <h3>Expand Your Services</h3>
              <p>
                Add Human + AI live chat to your service portfolio without
                developing your own live chat software.
              </p>
            </div>

            <div className="service-card">
              <h3>Centralized Management</h3>
              <p>
                Manage assigned client companies and supported conversations
                through a dedicated Partner Portal.
              </p>
            </div>

            <div className="service-card">
              <h3>Role-Based Access</h3>
              <p>
                Partner Administrators manage the operation while Partner Chat
                Agents receive access appropriate to their assigned clients and
                responsibilities.
              </p>
            </div>

            <div className="service-card">
              <h3>Human + AI</h3>
              <p>
                Combine human customer service with AI assistance to help teams
                respond efficiently while keeping people in control of
                conversations.
              </p>
            </div>

            <div className="service-card">
              <h3>BSC Technology</h3>
              <p>
                Focus on your customers and services while BSC provides the
                underlying live chat platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">How It Works</span>
          <h2>A simple path to becoming a BSC Partner.</h2>

          <div className="card-grid">
            <div className="service-card">
              <h3>1. Join the Program</h3>
              <p>
                Contact BSC to discuss your business, clients and the type of
                partnership you are interested in.
              </p>
            </div>

            <div className="service-card">
              <h3>2. Get Partner Access</h3>
              <p>
                Approved partners receive access to the BSC Partner Portal and
                the tools available for their partnership.
              </p>
            </div>

            <div className="service-card">
              <h3>3. Introduce Your Clients</h3>
              <p>
                Identify businesses in your client portfolio that could benefit
                from Human + AI website live chat.
              </p>
            </div>

            <div className="service-card">
              <h3>4. Connect the Website</h3>
              <p>
                BSC Live Chat can be added to an approved client website using
                a lightweight widget installation.
              </p>
            </div>

            <div className="service-card">
              <h3>5. Manage the Service</h3>
              <p>
                Use the Partner Portal to manage assigned companies, authorized
                team members and supported conversations.
              </p>
            </div>

            <div className="service-card">
              <h3>6. Grow the Partnership</h3>
              <p>
                Add additional eligible clients as your relationship with BSC
                grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <div>
            <h2>Interested in becoming a BSC Partner?</h2>
            <p>
              Tell us about your business and the clients you serve. We&apos;ll
              discuss the Partner or Reseller arrangement that fits your
              organization.
            </p>
          </div>

          <Link href="/contact" className="button button-light">
            Become a BSC Partner
          </Link>
        </div>
      </section>
    </main>
  );
}