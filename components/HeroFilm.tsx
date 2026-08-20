"use client";

import Link from "next/link";
import WovenDivider from "./WovenDivider";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function HeroFilm({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.home;
  const isAr = locale === "ar";

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0d1814] via-[#111e19] to-bg py-16 sm:py-24 lg:py-28 text-white">
      {/* Background Subtle Ambient Glow (Zero Lag) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#c08a2e]/15 blur-[120px]" />
        <div className="absolute top-1/2 -right-32 h-[550px] w-[550px] rounded-full bg-[#1b3d30]/35 blur-[140px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          {/* Left: Master Headline & Action */}
          <div>
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-accent">
                {t.heroEyebrow}
              </p>
            </div>

            {/* Master Headline */}
            <h1 className="mt-6 text-balance font-display text-[30px] sm:text-[46px] lg:text-[56px] font-bold leading-[1.12] tracking-tight text-white">
              {t.heroHeadline}
            </h1>

            <WovenDivider className="mt-6 max-w-[160px]" />

            {/* Subheading */}
            <p className="mt-6 max-w-[48ch] text-[16.5px] leading-relaxed text-white/85 sm:text-[18px]">
              {t.heroSubhead}
            </p>

            {/* Action CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href={`/${locale}/audit`}
                className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-3.5 text-[15px] font-bold text-[#1a1206] shadow-xl shadow-accent/20 transition-all hover:bg-accent-deep hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{t.heroCtaPrimary}</span>
                <span className={isAr ? "rotate-180" : ""}>→</span>
              </Link>
              <Link
                href={`/${locale}/process`}
                className="inline-flex items-center gap-2 text-[14.5px] font-semibold text-white/90 underline decoration-white/30 decoration-2 underline-offset-8 transition-colors hover:text-white hover:decoration-accent"
              >
                {t.heroCtaSecondary}
              </Link>
            </div>

            {/* Proof Badges Bar */}
            <div className="mt-12 flex flex-wrap items-center gap-5 border-t border-white/10 pt-6 text-[12.5px] text-white/70">
              <div className="flex items-center gap-2">
                <span className="font-display text-base font-bold text-accent">12</span>
                <span>Agencies Benchmarked</span>
              </div>
              <span className="text-white/20">·</span>
              <div className="flex items-center gap-2">
                <span className="font-display text-base font-bold text-accent">&lt;0.8s</span>
                <span>Core Web Vitals TTFB</span>
              </div>
              <span className="text-white/20">·</span>
              <div className="flex items-center gap-2">
                <span className="font-display text-base font-bold text-accent">48h</span>
                <span>Guaranteed SLA</span>
              </div>
            </div>
          </div>

          {/* Right: Prominent High-Resolution Studio & Benchmark Card */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-accent/40 bg-gradient-to-br from-card via-[#12231c] to-[#0d1814] p-3 shadow-2xl backdrop-blur-xl">
              {/* Studio Visual Preview */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="/images/hero-cinematic.jpg"
                  alt="SEONID Agency Moroccan Architectural Studio"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1814] via-transparent to-transparent opacity-80" />
                
                {/* Floating Performance Score Pill */}
                <div className="absolute top-3 right-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-black/60 px-3 py-1 text-xs font-bold text-emerald-400 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>99 / 100 Speed Score</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90">
                  <span className="font-mono font-bold text-accent">SEONID · Forensic Spec</span>
                  <span className="text-[11px] text-white/60">Casablanca & Rabat</span>
                </div>
              </div>

              {/* Technical Metrics Breakdown */}
              <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="rounded-xl bg-white/5 p-2.5 border border-white/10">
                  <p className="font-bold text-accent text-sm">0.64s</p>
                  <p className="text-[10px] text-white/60 uppercase tracking-wider mt-0.5">LCP Speed</p>
                </div>
                <div className="rounded-xl bg-white/5 p-2.5 border border-white/10">
                  <p className="font-bold text-emerald-400 text-sm">0.00</p>
                  <p className="text-[10px] text-white/60 uppercase tracking-wider mt-0.5">CLS Shift</p>
                </div>
                <div className="rounded-xl bg-white/5 p-2.5 border border-white/10">
                  <p className="font-bold text-white text-sm">Next 16</p>
                  <p className="text-[10px] text-white/60 uppercase tracking-wider mt-0.5">Turbopack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
