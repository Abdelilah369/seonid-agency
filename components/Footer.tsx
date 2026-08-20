import Link from "next/link";
import WovenDivider from "./WovenDivider";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 pt-12 pb-10">
        <WovenDivider className="mb-10 max-w-[200px] opacity-70" />
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <span className="font-display text-[19px] font-semibold">
              <span className="text-ink">SEO</span>
              <span className="text-accent-deep">nid</span>
            </span>
            <p className="mt-3 max-w-[26ch] text-[13.5px] leading-relaxed text-ink-muted">
              {dict.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-faint">
              {dict.footer.agency}
            </h3>
            <ul className="mt-4 space-y-2.5 text-[14px] text-ink-muted">
              <li><Link href={`/${locale}/services`} className="hover:text-ink">{dict.nav.services}</Link></li>
              <li><Link href={`/${locale}/process`} className="hover:text-ink">{dict.nav.process}</Link></li>
              <li><Link href={`/${locale}/about`} className="hover:text-ink">{dict.nav.about}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-faint">
              {dict.footer.resources}
            </h3>
            <ul className="mt-4 space-y-2.5 text-[14px] text-ink-muted">
              <li><Link href={`/${locale}/blog`} className="hover:text-ink">{dict.footer.blog}</Link></li>
              <li><Link href={`/${locale}/audit`} className="hover:text-ink">{dict.footer.freeAudit}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-faint">
              {dict.footer.getInTouch}
            </h3>
            <ul className="mt-4 space-y-2.5 text-[14px] text-ink-muted">
              <li><Link href={`/${locale}/contact`} className="hover:text-ink">{dict.footer.contact}</Link></li>
              <li><a href="mailto:hello@seonid.agency" dir="ltr" className="hover:text-ink">hello@seonid.agency</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-[12.5px] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} SEONID AGENCY. {dict.footer.rights}</span>
          <span>{dict.footer.location}</span>
        </div>
      </div>
    </footer>
  );
}
