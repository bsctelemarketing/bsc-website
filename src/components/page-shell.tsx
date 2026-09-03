import Link from "next/link";
export function PageHero({eyebrow,title,text}:{eyebrow:string;title:string;text:string}){return <section className="page-hero"><div className="container narrow"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section>}
export function Cta({title="Ready to turn more visitors into customers?",text="Start your 15-day free trial. No long-term commitment required."}){return <section className="cta"><div className="container cta-inner"><div><h2>{title}</h2><p>{text}</p></div><Link href="/free-trial" className="button button-light">Start Free Trial</Link></div></section>}
export function CheckList({items}:{items:string[]}){return <ul className="check-list">{items.map(x=><li key={x}><span>✓</span>{x}</li>)}</ul>}
