"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeLabels, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { SeonidLogo } from "./Logo";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
      className={`h-4 w-4 opacity-60 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const restOfPath = pathname.split("/").slice(2).join("/");
  const isAr = locale === "ar";

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const n = dict.nav;

  function localeHref(code: Locale) {
    return restOfPath ? `/${code}/${restOfPath}` : `/${code}`;
  }

  // Close mobile drawer on route change + Escape
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    document.addEventListener("keydown", onKey);
    // Lock body scroll while drawer is open
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  // Close dropdowns on outside click
  useEffect(() => {
    if (!openDropdown) return;
    const onDoc = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, [openDropdown]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const isActive = (path: string) =>
    pathname === `/${locale}${path}` || pathname.startsWith(`/${locale}${path}`);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-2xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        {/* Brand */}
        <Link href={`/${locale}`} className="group flex shrink-0 items-center gap-2.5" aria-label="SEONID home">
          <SeonidLogo className="h-8 w-8 text-accent transition-transform group-hover:scale-105" />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-[20px] font-bold tracking-tight">
              <span className="text-ink">SEO</span>
              <span className="text-accent">nid</span>
            </span>
            <span className="mt-0.5 font-mono text-[8.5px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
              AGENCY &amp; LABS
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("services")}
            onMouseLeave={() => setOpenDropdown((d) => (d === "services" ? null : d))}
          >
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
              aria-expanded={openDropdown === "services"}
              aria-controls="dd-services"
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors ${
                isActive("/services") || isActive("/geo")
                  ? "text-ink"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {n.services}
              <Chevron open={openDropdown === "services"} />
            </button>

            {openDropdown === "services" && (
              <div
                id="dd-services"
                className="absolute top-full right-0 z-[100] mt-2 w-[340px] rounded-2xl border border-border bg-surface p-2.5 shadow-2xl shadow-black/40 backdrop-blur-2xl animate-dd"
              >
                <DropdownItem href={`/${locale}/services`} num="01" title={n.srvWebTitle} desc={n.srvWebDesc} accent={false} />
                <DropdownItem href={`/${locale}/services`} num="02" title={n.srvSeoTitle} desc={n.srvSeoDesc} accent={false} />
                <DropdownItem href={`/${locale}/geo`} num="03" title={n.srvGeoTitle} desc={n.srvGeoDesc} accent={false} />
                <div className="mt-1 border-t border-border pt-1.5">
                  <DropdownItem
                    href={`/${locale}/audit`}
                    num="★"
                    title={n.auditLink}
                    desc={n.auditDesc}
                    accent
                  />
                </div>
              </div>
            )}
          </div>

          {/* Insights dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("insights")}
            onMouseLeave={() => setOpenDropdown((d) => (d === "insights" ? null : d))}
          >
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === "insights" ? null : "insights")}
              aria-expanded={openDropdown === "insights"}
              aria-controls="dd-insights"
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors ${
                isActive("/blog") ? "text-ink" : "text-ink-muted hover:text-ink"
              }`}
            >
              {n.insights}
              <Chevron open={openDropdown === "insights"} />
            </button>

            {openDropdown === "insights" && (
              <div
                id="dd-insights"
                className="absolute top-full right-0 z-[100] mt-2 w-[340px] rounded-2xl border border-border bg-surface p-2.5 shadow-2xl shadow-black/40 backdrop-blur-2xl animate-dd"
              >
                <DropdownItem
                  href={`/${locale}/blog/12-agency-benchmark`}
                  num="01"
                  title={n.insBenchTitle}
                  desc={n.insBenchDesc}
                  accent={false}
                />
                <DropdownItem
                  href={`/${locale}/blog/moroccan-b2b-seo-gap`}
                  num="02"
                  title={n.insGapTitle}
                  desc={n.insGapDesc}
                  accent={false}
                />
                <div className="mt-1 border-t border-border pt-1.5">
                  <DropdownItem href={`/${locale}/blog`} num="→" title={n.insAllTitle} desc={n.insAllDesc} accent />
                </div>
              </div>
            )}
          </div>

          <NavLink href={`/${locale}/process`} active={isActive("/process")}>
            {n.process}
          </NavLink>
          <NavLink href={`/${locale}/about`} active={isActive("/about")}>
            {n.about}
          </NavLink>
          <NavLink href={`/${locale}/contact`} active={isActive("/contact")}>
            {n.contact}
          </NavLink>
        </nav>

        {/* Right: locale switcher + CTA + hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <LocaleSwitcher locale={locale} localeHref={localeHref} label={n.language} />

          <Link
            href={`/${locale}/audit`}
            className="hidden items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-[13px] font-bold text-bg shadow-lg shadow-accent/20 transition-all hover:bg-brass hover:scale-[1.02] active:scale-[0.98] sm:inline-flex"
          >
            {n.freeAudit}
            <span aria-hidden className="text-bg/60">→</span>
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-xl border border-border/80 bg-surface text-ink lg:hidden"
            aria-label={mobileOpen ? n.close : n.menu}
            aria-expanded={mobileOpen}
            aria-controls="mobile-drawer"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          id="mobile-drawer"
          className="fixed inset-0 top-16 z-[90] overflow-y-auto border-t border-border bg-bg/98 backdrop-blur-2xl lg:hidden animate-dd"
        >
          <div className={`mx-auto max-w-6xl px-5 py-6 ${isAr ? "text-right" : ""}`}>
            {/* Group: menu */}
            <MobileGroup label={n.menu}>
              <MobileLink href={`/${locale}/services`} onClose={closeMobile}>
                {n.services}
              </MobileLink>
              <MobileLink href={`/${locale}/process`} onClose={closeMobile}>
                {n.process}
              </MobileLink>
              <MobileLink href={`/${locale}/about`} onClose={closeMobile}>
                {n.about}
              </MobileLink>
              <MobileLink href={`/${locale}/contact`} onClose={closeMobile}>
                {n.contact}
              </MobileLink>
            </MobileGroup>

            {/* Group: services */}
            <MobileGroup label={n.services}>
              <MobileLink href={`/${locale}/services`} onClose={closeMobile} sub>
                {n.srvWebTitle}
              </MobileLink>
              <MobileLink href={`/${locale}/services`} onClose={closeMobile} sub>
                {n.srvSeoTitle}
              </MobileLink>
              <MobileLink href={`/${locale}/geo`} onClose={closeMobile} sub>
                {n.srvGeoTitle}
              </MobileLink>
            </MobileGroup>

            {/* Group: insights */}
            <MobileGroup label={n.insights}>
              <MobileLink href={`/${locale}/blog/12-agency-benchmark`} onClose={closeMobile} sub>
                {n.insBenchTitle}
              </MobileLink>
              <MobileLink href={`/${locale}/blog/moroccan-b2b-seo-gap`} onClose={closeMobile} sub>
                {n.insGapTitle}
              </MobileLink>
              <MobileLink href={`/${locale}/blog`} onClose={closeMobile} sub>
                {n.insAllTitle}
              </MobileLink>
            </MobileGroup>

            {/* Group: language */}
            <MobileGroup label={n.language}>
              <div className="flex flex-wrap gap-2">
                {locales.map((code) => (
                  <Link
                    key={code}
                    href={localeHref(code)}
                    onClick={closeMobile}
                    className={`rounded-full border px-4 py-2 text-sm font-bold uppercase transition-colors ${
                      code === locale
                        ? "border-accent bg-accent text-bg"
                        : "border-border bg-surface text-ink-muted hover:text-ink"
                    }`}
                  >
                    {localeLabels[code]}
                  </Link>
                ))}
              </div>
            </MobileGroup>

            {/* CTA */}
            <Link
              href={`/${locale}/audit`}
              onClick={closeMobile}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-accent p-3.5 text-[15px] font-bold text-bg shadow-lg shadow-accent/20"
            >
              {n.freeAudit}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- sub-components ---------- */

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors ${
        active ? "text-ink" : "text-ink-muted hover:text-ink"
      }`}
    >
      {children}
    </Link>
  );
}

function DropdownItem({
  href,
  num,
  title,
  desc,
  accent,
}: {
  href: string;
  num: string;
  title: string;
  desc: string;
  accent?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-start gap-3 rounded-xl p-2.5 transition-colors ${
        accent ? "hover:bg-accent-soft" : "hover:bg-surface-hover"
      }`}
    >
      <span
        className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg font-mono text-xs font-bold ${
          accent
            ? "bg-accent text-bg"
            : "border border-accent/30 bg-accent-soft text-accent"
        }`}
      >
        {num}
      </span>
      <span>
        <span className={`block text-sm font-semibold ${accent ? "text-accent" : "text-ink"}`}>
          {title}
        </span>
        <span className="mt-0.5 block text-xs leading-relaxed text-ink-muted">{desc}</span>
      </span>
    </Link>
  );
}

function LocaleSwitcher({
  locale,
  localeHref,
  label,
}: {
  locale: Locale;
  localeHref: (code: Locale) => string;
  label: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center rounded-full border border-border bg-surface-hover p-0.5 font-mono text-[11px] font-bold"
    >
      {locales.map((code) => (
        <Link
          key={code}
          href={localeHref(code)}
          title={localeLabels[code]}
          aria-current={code === locale ? "true" : undefined}
          className={`rounded-full px-2.5 py-1.5 uppercase transition-all ${
            code === locale ? "bg-accent text-bg shadow" : "text-ink-faint hover:text-ink"
          }`}
        >
          {code}
        </Link>
      ))}
    </div>
  );
}

function MobileGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-border/70 py-5 last:border-0">
      <p className="font-mono text-[10.5px] font-bold uppercase tracking-widest text-accent">
        {label}
      </p>
      <div className="mt-3 space-y-1">{children}</div>
    </div>
  );
}

function MobileLink({
  href,
  onClose,
  children,
  sub,
}: {
  href: string;
  onClose: () => void;
  children: React.ReactNode;
  sub?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className={`block rounded-lg py-2.5 text-[15px] font-semibold text-ink transition-colors hover:text-accent ${
        sub ? "pl-3 !font-medium text-ink-muted" : ""
      }`}
    >
      {children}
    </Link>
  );
}