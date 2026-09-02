import Link from "next/link";
import WovenDivider from "./WovenDivider";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="border-t border-white/10 bg-[#06080b]">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <span className="font-display text-[21px] font-bold">
              <span className="text-white">SEO</span>
              <span className="text-[#d4973b]">nid</span>
            </span>
            <p className="mt-3 max-w-[28ch] text-xs leading-relaxed text-slate-400">
              {dict.footer.tagline}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#d4973b]/30 bg-[#d4973b]/10 px-3 py-1 text-[11px] font-mono text-[#d4973b]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d4973b] animate-pulse" />
              <span>Edge Performance &amp; GEO</span>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-mono font-bold uppercase tracking-[0.12em] text-slate-500">
              {dict.footer.agency}
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
              <li><Link href={`/${locale}/services`} className="hover:text-[#d4973b] transition">{dict.nav.services}</Link></li>
              <li><Link href={`/${locale}/process`} className="hover:text-[#d4973b] transition">{dict.nav.process}</Link></li>
              <li><Link href={`/${locale}/about`} className="hover:text-[#d4973b] transition">{dict.nav.about}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-mono font-bold uppercase tracking-[0.12em] text-slate-500">
              {dict.footer.resources}
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
              <li><Link href={`/${locale}/blog`} className="hover:text-[#d4973b] transition">{dict.footer.blog}</Link></li>
              <li><Link href={`/${locale}/geo`} className="hover:text-[#d4973b] transition">GEO Masterclass</Link></li>
              <li><Link href={`/${locale}/audit`} className="hover:text-[#d4973b] transition">{dict.footer.freeAudit}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-mono font-bold uppercase tracking-[0.12em] text-slate-500">
              {dict.footer.getInTouch}
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
              <li><Link href={`/${locale}/contact`} className="hover:text-[#d4973b] transition">{dict.footer.contact}</Link></li>
              <li><a href="mailto:hello@seonid.agency" dir="ltr" className="hover:text-[#d4973b] transition">hello@seonid.agency</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/5 pt-6 text-[11.5px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} SEONID AGENCY. {dict.footer.rights}</span>
            <span className="text-white/20">·</span>
            <Link href={`/${locale}/privacy`} className="hover:text-[#d4973b] transition">Privacy Policy</Link>
            <span className="text-white/20">·</span>
            <Link href={`/${locale}/terms`} className="hover:text-[#d4973b] transition">Terms of Service</Link>
          </div>
          <span className="font-mono text-[11px]">Next.js 16 · Turbopack · Global Edge</span>
        </div>
      </div>
    </footer>
  );
}
