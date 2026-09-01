"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeLabels, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { SeonidLogo } from "./Logo";

export default function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const restOfPath = pathname.split("/").slice(2).join("/");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function localeHref(code: Locale) {
    return restOfPath ? `/${code}/${restOfPath}` : `/${code}`;
  }

  const isAr = locale === "ar";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand Logo & Name */}
        <Link href={`/${locale}`} className="group flex items-center gap-3">
          <SeonidLogo className="h-8 w-8 text-accent transition-transform group-hover:scale-105" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-[21px] font-bold tracking-tight">
              <span className="text-ink">SEO</span>
              <span className="text-accent">nid</span>
            </span>
            <span className="mt-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
              AGENCY &amp; LABS
            </span>
          </div>
        </Link>

        {/* Desktop Nav with Dropdowns */}
        <nav className="hidden items-center gap-6 lg:flex">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("services")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center gap-1.5 text-[14.5px] font-medium text-ink-muted transition-colors hover:text-ink py-2"
            >
              <span>{dict.nav.services}</span>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`h-4 w-4 opacity-60 transition-transform ${
                  openDropdown === "services" ? "rotate-180" : ""
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            {/* Dropdown Menu Box */}
            {openDropdown === "services" && (
              <div className="absolute top-full left-0 z-[100] w-84 rounded-2xl border border-border bg-surface p-3 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                <Link
                  href={`/${locale}/services`}
                  className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-surface-hover"
                >
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent-soft border border-accent/30 text-accent font-mono font-bold text-xs">
                    01
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">Web Engineering</p>
                    <p className="text-xs text-ink-muted mt-0.5">High-performance Next.js architectures and sub-second loads.</p>
                  </div>
                </Link>

                <Link
                  href={`/${locale}/services`}
                  className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-surface-hover"
                >
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent-soft border border-accent/30 text-accent font-mono font-bold text-xs">
                    02
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">Technical & B2B SEO</p>
                    <p className="text-xs text-ink-muted mt-0.5">Crawl, index, schema, and the fixes that move rankings.</p>
                  </div>
                </Link>

                <Link
                  href={`/${locale}/geo`}
                  className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-surface-hover"
                >
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent-soft border border-accent/30 text-accent font-mono font-bold text-xs">
                    03
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">GEO / AI Search Visibility</p>
                    <p className="text-xs text-ink-muted mt-0.5">Get cited by ChatGPT and Perplexity, not just ranked.</p>
                  </div>
                </Link>

                <Link
                  href={`/${locale}/audit`}
                  className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-accent-soft border-t border-border mt-1"
                >
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent text-bg font-bold text-xs">
                    ★
                  </div>
                  <div>
                    <p className="text-sm font-bold text-accent">
                      {isAr ? "ابدأ مشروعك" : "Start a Project"}
                    </p>
                    <p className="text-xs text-ink-muted mt-0.5">
                      {isAr ? "شاركنا متطلباتك واحصل على خطة تقنية" : "Tell me what you need; get a technical roadmap."}
                    </p>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("resources")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-[14.5px] font-medium text-slate-300 transition-colors hover:text-white py-2"
            >
              <span>{isAr ? "الموارد والدراسات" : "Resources & Insights"}</span>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`h-4 w-4 opacity-60 transition-transform ${
                  openDropdown === "resources" ? "rotate-180" : ""
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {openDropdown === "resources" && (
              <div className="absolute top-full left-0 z-[100] w-84 rounded-2xl border border-border bg-surface p-3 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                <Link
                  href={`/${locale}/blog/12-agency-benchmark`}
                  className="block rounded-xl p-3 transition-colors hover:bg-surface-hover"
                >
                  <p className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-accent">Benchmark Report</p>
                  <p className="text-sm font-semibold text-ink mt-0.5">The 12 Moroccan Agency Audit</p>
                  <p className="text-xs text-ink-muted mt-1">Real data exposing why 83% fail Core Web Vitals.</p>
                </Link>

                <Link
                  href={`/${locale}/blog/moroccan-b2b-seo-gap`}
                  className="block rounded-xl p-3 transition-colors hover:bg-surface-hover"
                >
                  <p className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-accent">Market Study</p>
                  <p className="text-sm font-semibold text-ink mt-0.5">The Moroccan B2B SEO Gap</p>
                  <p className="text-xs text-ink-muted mt-1">Opportunity analysis for enterprise leaders.</p>
                </Link>
              </div>
            )}
          </div>

          <Link
            href={`/${locale}/process`}
            className="text-[14.5px] font-medium text-ink-muted transition-colors hover:text-ink"
          >
            {dict.nav.process}
          </Link>

          <Link
            href={`/${locale}/about`}
            className="text-[14.5px] font-medium text-ink-muted transition-colors hover:text-ink"
          >
            {dict.nav.about}
          </Link>

          <Link
            href={`/${locale}/contact`}
            className="text-[14.5px] font-medium text-ink-muted transition-colors hover:text-ink"
          >
            {dict.nav.contact}
          </Link>
        </nav>

        {/* Right CTA & Locale Switcher */}
        <div className="flex items-center gap-3.5">
          {/* Language Switcher */}
          <div className="flex items-center rounded-full border border-border bg-surface-hover p-1 font-mono text-[11.5px] font-bold text-ink-faint">
            {locales.map((code) => (
              <Link
                key={code}
                href={localeHref(code)}
                title={localeLabels[code]}
                aria-current={code === locale ? "true" : undefined}
                className={`rounded-full px-2.5 py-1 uppercase transition-all ${
                  code === locale
                    ? "bg-accent text-bg shadow font-bold"
                    : "hover:text-ink"
                }`}
              >
                {code}
              </Link>
            ))}
          </div>

          <Link
            href={`/${locale}/audit`}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[13px] font-bold text-bg shadow-lg shadow-accent/20 transition-all hover:bg-brass hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{dict.nav.freeAudit}</span>
            <span className="text-bg/60">→</span>
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="grid h-9 w-9 place-items-center rounded-xl border border-border/80 bg-surface text-ink lg:hidden"
            aria-label="Toggle Navigation"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-border/80 bg-card/95 p-6 backdrop-blur-xl lg:hidden">
          <div className="space-y-4">
            <Link
              href={`/${locale}/services`}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-ink"
            >
              {dict.nav.services}
            </Link>
            <Link
              href={`/${locale}/geo`}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-ink"
            >
              GEO / AI Search
            </Link>
            <Link
              href={`/${locale}/process`}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-ink"
            >
              {dict.nav.process}
            </Link>
            <Link
              href={`/${locale}/blog`}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-ink"
            >
              {dict.nav.blog}
            </Link>
            <Link
              href={`/${locale}/about`}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-ink"
            >
              {dict.nav.about}
            </Link>
            <Link
              href={`/${locale}/contact`}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-ink"
            >
              {dict.nav.contact}
            </Link>
            <div className="pt-4">
              <Link
                href={`/${locale}/audit`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center rounded-xl bg-accent p-3 text-sm font-bold text-bg"
              >
                {dict.nav.freeAudit}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
