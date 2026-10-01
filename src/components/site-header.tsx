"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const englishLinks = [
  ["Services", "/services"],
  ["How It Works", "/how-it-works"],
  ["Pricing", "/pricing"],
  ["Industries", "/industries"],
  ["Partners", "/partners"],
  ["About Us", "/about"],
  ["Contact", "/contact"],
];

const danishLinks = [
  ["Tjenester", "/da/services"],
  ["Sådan fungerer det", "/da/how-it-works"],
  ["Priser", "/da/pricing"],
  ["Brancher", "/da/industries"],
  ["Partnere", "/da/partners"],
  ["Om os", "/da/about"],
  ["Kontakt", "/da/contact"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isDanish =
    pathname === "/da" ||
    pathname.startsWith("/da/");

  const links = isDanish
    ? danishLinks
    : englishLinks;

  const homeHref = isDanish ? "/da" : "/";

  function getLanguageSwitchHref() {
    if (isDanish) {
      const englishPath = pathname.replace(/^\/da/, "");
      return englishPath || "/";
    }

    if (pathname === "/") {
      return "/da";
    }

    return `/da${pathname}`;
  }

  return (
    <header className="site-header">
      <div className="nav-wrap">

        <Link
          href={homeHref}
          className="brand"
          aria-label="BSC Live Chat home"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark">B</span>

          <span>
            <b>BSC Live Chat</b>
            <small>Business Solution Center</small>
          </span>
        </Link>

        <div className="mobile-nav-actions">
          <Link
            href={getLanguageSwitchHref()}
            className="mobile-language-switch"
            onClick={() => setOpen(false)}
            aria-label={
              isDanish
                ? "Switch to English"
                : "Skift til dansk"
            }
          >
            {isDanish ? "EN" : "DA"}
          </Link>

          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={
              isDanish
                ? "Åbn eller luk navigation"
                : "Toggle navigation"
            }
          >
            {open ? "\u00D7" : "\u2630"}
          </button>
        </div>

        <nav
          className={
            open
              ? "nav-links open"
              : "nav-links"
          }
          aria-label={
            isDanish
              ? "Hovednavigation"
              : "Main navigation"
          }
        >
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}

          <Link
            href={getLanguageSwitchHref()}
            className="desktop-language-switch"
            onClick={() => setOpen(false)}
            aria-label={
              isDanish
                ? "Switch to English"
                : "Skift til dansk"
            }
          >
            {isDanish ? "EN" : "DA"}
          </Link>

          <Link
            className="button button-small"
            href={
              isDanish
                ? "/da/free-trial"
                : "/free-trial"
            }
            onClick={() => setOpen(false)}
          >
            {isDanish
              ? "Start gratis prøveperiode"
              : "Start Free Trial"}
          </Link>
        </nav>

      </div>
    </header>
  );
}