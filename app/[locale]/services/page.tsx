import type { Metadata } from "next";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import WovenDivider from "@/components/WovenDivider";
import LuxuryPricingCalculator from "@/components/LuxuryPricingCalculator";
import { getDictionary } from "@/lib/dictionaries";
import { makeAlternates } from "@/lib/metadata";
import type { Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/services">): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  return {
    title: dict.services.meta.title,
    description: dict.services.meta.description,
    alternates: makeAlternates(locale, "/services"),
  };
}

export default async function ServicesPage({
  params,
}: PageProps<"/[locale]/services">) {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  const t = dict.services;

  return (
    <div className="bg-[#080a0d] text-[#f5f3ec]">
      {/* Services Hero */}
      <section className="relative overflow-hidden mx-auto max-w-6xl px-6 pt-24 pb-16">
        <div className="pointer-events-none absolute -top-32 right-0 -z-10 h-96 w-96 rounded-full bg-[#d4973b]/10 blur-[140px]" />
        <div className="inline-flex items-center gap-2 rounded-full border border-[#d4973b]/30 bg-[#d4973b]/10 px-3.5 py-1 font-mono text-xs font-bold text-[#d4973b]">
          <span>{t.eyebrow}</span>
        </div>
        <h1 className="mt-5 max-w-[22ch] text-balance font-display text-[38px] font-bold leading-[1.1] tracking-tight sm:text-[52px] text-white">
          {t.headline}
        </h1>
        <WovenDivider className="mt-6 max-w-[160px]" />
        <p className="mt-7 max-w-[58ch] text-[17px] leading-relaxed text-slate-300">
          {t.intro}
        </p>
      </section>

      {/* Services Grid with Visual Graphics */}
      <section className="border-t border-white/5 bg-[#0a0d12] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Service 01: Web Architecture */}
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0e1218] p-8 sm:p-10 shadow-2xl transition-all hover:border-[#d4973b]/40 hover:bg-[#121720]">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#d4973b]">CAPABILITY 01</span>
                  <h2 className="mt-1 font-display text-[22px] font-bold text-white">
                    {t.designTitle}
                  </h2>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#d4973b]/10 border border-[#d4973b]/30 text-[#d4973b] font-bold text-lg">
                  ⚡
                </div>
              </div>

              {/* Visual Architecture Graphic */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-5">
                <div className="flex items-center justify-between text-xs text-slate-400 border-b border-white/10 pb-3">
                  <span className="font-mono font-semibold">Architecture Spec</span>
                  <span className="text-emerald-400 font-bold">100/100 Lighthouse</span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="rounded-xl bg-white/[0.03] p-2.5 border border-white/5">
                    <p className="font-mono font-bold text-[#d4973b]">&lt;0.75s</p>
                    <p className="text-[10.5px] text-slate-400">LCP Target</p>
                  </div>
                  <div className="rounded-xl bg-white/[0.03] p-2.5 border border-white/5">
                    <p className="font-mono font-bold text-emerald-400">0.00</p>
                    <p className="text-[10.5px] text-slate-400">CLS Shift</p>
                  </div>
                  <div className="rounded-xl bg-white/[0.03] p-2.5 border border-white/5">
                    <p className="font-mono font-bold text-white">Next 15</p>
                    <p className="text-[10.5px] text-slate-400">Edge SSR</p>
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-3.5">
                {t.design.map((item) => (
                  <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#d4973b]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 02: Technical SEO & GEO */}
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0e1218] p-8 sm:p-10 shadow-2xl transition-all hover:border-[#d4973b]/40 hover:bg-[#121720]">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#d4973b]">CAPABILITY 02</span>
                  <h2 className="mt-1 font-display text-[22px] font-bold text-white">
                    {t.growthTitle}
                  </h2>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#d4973b]/10 border border-[#d4973b]/30 text-[#d4973b] font-bold text-lg">
                  🌐
                </div>
              </div>

              {/* Visual Entity Graph Graphic */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-5">
                <div className="flex items-center justify-between text-xs text-slate-400 border-b border-white/10 pb-3">
                  <span className="font-mono font-semibold">GEO Entity Index</span>
                  <span className="text-[#d4973b] font-mono font-bold">100% LLM Crawl</span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="rounded-xl bg-white/[0.03] p-2.5 border border-white/5">
                    <p className="font-mono font-bold text-white">JSON-LD</p>
                    <p className="text-[10.5px] text-slate-400">Schema Graph</p>
                  </div>
                  <div className="rounded-xl bg-white/[0.03] p-2.5 border border-white/5">
                    <p className="font-mono font-bold text-[#d4973b]">AI Citation</p>
                    <p className="text-[10.5px] text-slate-400">ChatGPT/Perp</p>
                  </div>
                  <div className="rounded-xl bg-white/[0.03] p-2.5 border border-white/5">
                    <p className="font-mono font-bold text-emerald-400">Top 3</p>
                    <p className="text-[10.5px] text-slate-400">Google SERP</p>
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-3.5">
                {t.growth.map((item) => (
                  <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#d4973b]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 03: Automation & Custom AI Systems */}
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0e1218] p-8 sm:p-10 shadow-2xl transition-all hover:border-[#d4973b]/40 hover:bg-[#121720]">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#d4973b]">CAPABILITY 03</span>
                  <h2 className="mt-1 font-display text-[22px] font-bold text-white">
                    {t.automationTitle}
                  </h2>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#d4973b]/10 border border-[#d4973b]/30 text-[#d4973b] font-bold text-lg">
                  ⚙️
                </div>
              </div>

              {/* Visual Automation Graphic */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-5">
                <div className="flex items-center justify-between text-xs text-slate-400 border-b border-white/10 pb-3">
                  <span className="font-mono font-semibold">Autonomous Workflows</span>
                  <span className="text-emerald-400 font-mono font-bold">24/7 Active</span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="rounded-xl bg-white/[0.03] p-2.5 border border-white/5">
                    <p className="font-mono font-bold text-white">n8n</p>
                    <p className="text-[10.5px] text-slate-400">Core Engine</p>
                  </div>
                  <div className="rounded-xl bg-white/[0.03] p-2.5 border border-white/5">
                    <p className="font-mono font-bold text-[#d4973b]">Instant</p>
                    <p className="text-[10.5px] text-slate-400">CRM Webhook</p>
                  </div>
                  <div className="rounded-xl bg-white/[0.03] p-2.5 border border-white/5">
                    <p className="font-mono font-bold text-emerald-400">Zero</p>
                    <p className="text-[10.5px] text-slate-400">Human Lag</p>
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-3.5">
                {t.automation.map((item) => (
                  <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#d4973b]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Investment Calculator */}
          <div className="mt-16">
            <LuxuryPricingCalculator locale={locale} />
          </div>

          {/* Audit CTA Card */}
          <div className="mt-16 overflow-hidden rounded-3xl border border-[#d4973b]/30 bg-gradient-to-br from-[#12161f] via-[#0c0f14] to-[#080a0d] p-8 sm:p-12 text-center shadow-2xl">
            <h3 className="font-display text-[26px] font-bold text-white sm:text-[34px]">
              Ready to verify your site against the 40-point benchmark?
            </h3>
            <p className="mx-auto mt-4 max-w-[50ch] text-[15.5px] text-slate-300">
              Get our confidential 48-hour diagnostic deliverable covering your Core Web Vitals, JSON-LD Schema graph, and competitive AI search ranking opportunities.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <CtaButton href={`/${locale}/audit`}>
                Claim Your Free 48h Audit →
              </CtaButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
