import {Cta,PageHero} from "@/components/page-shell";
import type {Metadata} from "next";

export const metadata:Metadata={title:"Industries"};

const industries=[
  ["Dental & healthcare services","Help prospective patients ask general service questions and request appointments."],
  ["HVAC & home services","Capture service needs, location, urgency and contact information."],
  ["Real estate","Respond to property questions and connect interested buyers, renters and sellers."],
  ["E-commerce","Support product questions and help customers before and after purchase."],
  ["Mortgage & financial services","Collect inquiry details while keeping approved workflows clear and consistent."],
  ["Travel & tourism","Answer common questions about destinations, accommodations and services while capturing booking inquiries."],
  ["Hotels & hospitality","Assist guests with availability questions, amenities, policies and reservation inquiries."],
  ["Automotive services","Collect vehicle and service details for repair, maintenance and dealership inquiries."],
  ["Legal services","Help potential clients submit consultation requests and basic contact information."],
  ["Education & training","Answer program questions and capture inquiries from prospective students."],
  ["Moving & storage","Collect move dates, locations, service needs and quote requests."],
  ["Cleaning & pest control","Capture property details, service requirements and preferred appointment times."],
  ["Technology & IT services","Qualify support, consultation and managed-service inquiries from website visitors."],
  ["Professional services","Turn website visits into organized consultation and service inquiries."],
];

export default function Industries(){return <main><PageHero eyebrow="Industries" title="Built for businesses where every inquiry matters." text="BSC Live Chat adapts to your services, customer questions and preferred qualification process."/><section className="section"><div className="container content-grid">{industries.map(([title,description],index)=><article className="info-card industry" key={title}><span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{description}</p></article>)}</div><div className="container industries-note"><h2>Don’t see your industry?</h2><p>BSC Live Chat can be configured for many other service-based businesses. Contact Business Solution Center to discuss your website, customers and lead requirements.</p></div></section><Cta title="Let’s build the right chat experience for your industry." text="Start your 15-day free trial and tell us what your business needs."/></main>}
