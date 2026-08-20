import type { Metadata } from "next";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import WovenDivider from "@/components/WovenDivider";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/services">): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  return { title: dict.services.meta.title, description: dict.services.meta.description };
}

export default async function ServicesPage({
  params,
}: PageProps<"/[locale]/services">) {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  const t = dict.services;

  return (
    <>
      {/* Services Hero */}
      <section className="relative overflow-hidden mx-auto max-w-6xl px-6 pt-24 pb-16">
        <div className="pointer-events-none absolute -top-32 right-0 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-[100px]" />
        <p className="text-[13px] font-semibold uppercase tracking-[0.09em] text-accent-deep">
          {t.eyebrow}
        </p>
        <h1 className="mt-5 max-w-[22ch] text-balance font-display text-[38px] font-semibold leading-[1.1] tracking-tight sm:text-[48px] text-ink">
          {t.headline}
        </h1>
        <WovenDivider className="mt-6 max-w-[160px]" />
        <p className="mt-7 max-w-[58ch] text-[17px] leading-relaxed text-ink-muted">
          {t.intro}
        </p>
      </section>

      {/* Services Grid with Visual Graphics */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Service 01: Web Architecture */}
            <div className="overflow-hidden rounded-3xl border border-border bg-bg p-8 sm:p-10 shadow-sm transition-all hover:shadow-xl hover:border-accent/40">
              <div className="flex items-center justify-between border-b border-border/60 pb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent-deep">Capability 01</span>
                  <h2 className="mt-1 font-display text-[24px] font-bold text-ink">
                    {t.designTitle}
                  </h2>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/15 text-accent-deep font-bold text-lg">
                  ⚡
                </div>
              </div>

              {/* Visual Architecture Graphic */}
              <div className="mt-6 rounded-2xl border border-border/60 bg-surface/80 p-5">
                <div className="flex items-center justify-between text-xs text-ink-muted border-b border-border/40 pb-3">
                  <span className="font-mono font-semibold">Architecture Spec</span>
                  <span className="text-emerald-600 font-bold">100/100 Lighthouse</span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="rounded-lg bg-bg p-2.5 border border-border/40">
                    <p className="font-bold text-ink">&lt;0.8s</p>
                    <p className="text-[10.5px] text-ink-muted">LCP Target</p>
                  </div>
                  <div className="rounded-lg bg-bg p-2.5 border border-border/40">
                    <p className="font-bold text-ink">0 ms</p>
                    <p className="text-[10.5px] text-ink-muted">CLS Shift</p>
                  </div>
                  <div className="rounded-lg bg-bg p-2.5 border border-border/40">
                    <p className="font-bold text-ink">Next.js 16</p>
                    <p className="text-[10.5px] text-ink-muted">Turbopack</p>
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {t.design.map((item) => (
                  <li key={item} className="flex gap-3 text-[14.5px] leading-relaxed text-ink-muted">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 02: B2B Search Engineering */}
            <div className="overflow-hidden rounded-3xl border border-border bg-bg p-8 sm:p-10 shadow-sm transition-all hover:shadow-xl hover:border-accent/40">
              <div className="flex items-center justify-between border-b border-border/60 pb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent-deep">Capability 02</span>
                  <h2 className="mt-1 font-display text-[24px] font-bold text-ink">
                    {t.growthTitle}
                  </h2>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/15 text-accent-deep font-bold text-lg">
                  📈
                </div>
              </div>

              {/* Visual Search Ranking Graphic */}
              <div className="mt-6 rounded-2xl border border-border/60 bg-surface/80 p-5">
                <div className="flex items-center justify-between text-xs text-ink-muted border-b border-border/40 pb-3">
                  <span className="font-mono font-semibold">Entity Graph Engine</span>
                  <span className="text-emerald-600 font-bold">100% Valid JSON-LD</span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="rounded-lg bg-bg p-2.5 border border-border/40">
                    <p className="font-bold text-ink">Top 3</p>
                    <p className="text-[10.5px] text-ink-muted">High-Intent SERP</p>
                  </div>
                  <div className="rounded-lg bg-bg p-2.5 border border-border/40">
                    <p className="font-bold text-ink">+310%</p>
                    <p className="text-[10.5px] text-ink-muted">Organic Lift</p>
                  </div>
                  <div className="rounded-lg bg-bg p-2.5 border border-border/40">
                    <p className="font-bold text-ink">Zero Spam</p>
                    <p className="text-[10.5px] text-ink-muted">White Hat Only</p>
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {t.growth.map((item) => (
                  <li key={item} className="flex gap-3 text-[14.5px] leading-relaxed text-ink-muted">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Audit CTA Card */}
          <div className="mt-14 overflow-hidden rounded-3xl border border-accent/40 bg-gradient-to-br from-card via-surface to-bg p-8 sm:p-12 text-center shadow-lg">
            <h3 className="font-display text-[26px] font-bold text-ink sm:text-[32px]">
              Ready to verify your site against the 40-point benchmark?
            </h3>
            <p className="mx-auto mt-4 max-w-[50ch] text-[16px] text-ink-muted">
              Get our confidential 48-hour diagnostic deliverable covering your Core Web Vitals, JSON-LD Schema graph, and competitive Moroccan ranking opportunities.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href={`/${locale}/audit`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-[15px] font-bold text-[#1a1206] shadow-xl shadow-accent/20 transition-all hover:bg-accent-deep hover:scale-105"
              >
                Claim Your Free 48h Audit →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
