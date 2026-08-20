"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeLabels, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const restOfPath = pathname.split("/").slice(2).join("/");

  function localeHref(code: Locale) {
    return restOfPath ? `/${code}/${restOfPath}` : `/${code}`;
  }

  const nav = [
    { href: "/services", label: dict.nav.services },
    { href: "/process", label: dict.nav.process },
    { href: "/about", label: dict.nav.about },
    { href: "/blog", label: dict.nav.blog },
    { href: "/contact", label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={`/${locale}`} className="group flex flex-col leading-none">
          <span className="font-display text-[22px] font-semibold tracking-tight">
            <span className="text-ink">SEO</span>
            <span className="text-accent-deep">nid</span>
          </span>
          <span className="mt-1 block h-[2px] w-[46px] bg-accent transition-all group-hover:w-full" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="text-[14.5px] font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-1 text-[12px] font-medium text-ink-faint sm:flex">
            {locales.map((code) => (
              <Link
                key={code}
                href={localeHref(code)}
                title={localeLabels[code]}
                aria-current={code === locale ? "true" : undefined}
                className={`rounded-md px-2 py-1 uppercase transition-colors ${
                  code === locale ? "bg-surface-2 text-ink" : "hover:text-ink"
                }`}
              >
                {code}
              </Link>
            ))}
          </div>
          <Link
            href={`/${locale}/audit`}
            className="rounded-full bg-accent px-4 py-2 text-[13.5px] font-semibold text-[#1a1206] transition-colors hover:bg-accent-deep sm:px-5 sm:py-2.5"
          >
            {dict.nav.freeAudit}
          </Link>
        </div>
      </div>
    </header>
  );
}
