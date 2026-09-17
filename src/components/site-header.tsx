"use client";
import Link from "next/link";
import { useState } from "react";
const links = [["Services", "/services"], ["How It Works", "/how-it-works"], ["Pricing", "/pricing"], ["Industries", "/industries"], ["Partners", "/partners"], ["About Us", "/about"], ["Contact", "/contact"]];
export function SiteHeader() { const [open,setOpen]=useState(false); return <header className="site-header"><div className="nav-wrap"><Link href="/" className="brand" aria-label="BSC Live Chat home"><span className="brand-mark">B</span><span><b>BSC Live Chat</b><small>Business Solution Center</small></span></Link><button className="menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open?"Ã—":"â˜°"}</button><nav className={open?"nav-links open":"nav-links"} aria-label="Main navigation">{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="button button-small" href="/free-trial" onClick={()=>setOpen(false)}>Start Free Trial</Link></nav></div></header>; }

