"use client";

import Link from "next/link";
import WovenDivider from "./WovenDivider";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function HeroFilm({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.home;
  const isAr = locale === "ar";

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0d1814] via-[#111e19] to-bg py-24 sm:py-32 lg:py-40 text-white">
      {/* Cinematic Ambient Atmosphere with High-Resolution Studio Photography */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        {/* Editorial Moroccan Agency Architectural Photography Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-luminosity scale-105 transition-transform duration-1000"
          style={{ backgroundImage: "url('/images/hero-cinematic.jpg')" }}
        />
        
        {/* Dark Emerald & Vignette Overlays for Maximum Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1814]/95 via-[#111e19]/90 to-[#0d1814]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-[#0d1814]/80" />

        {/* Soft Golden & Emerald Organic Aura */}
        <div className="absolute -top-40 -left-40 h-[550px] w-[550px] rounded-full bg-[#c08a2e]/20 blur-[120px] animate-pulse" />
        <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-[#1b3d30]/40 blur-[140px]" />
        <div className="absolute -bottom-20 left-1/3 h-[450px] w-[450px] rounded-full bg-[#c08a2e]/15 blur-[100px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
            <p className="text-[12.5px] font-bold uppercase tracking-[0.1em] text-accent">
              {t.heroEyebrow}
            </p>
          </div>

          {/* Master Headline */}
          <h1 className="mt-7 text-balance font-display text-[42px] font-bold leading-[1.06] tracking-tight text-white sm:text-[60px] lg:text-[68px]">
            {t.heroHeadline}
          </h1>

          <WovenDivider className="mt-8 max-w-[180px]" />

          {/* Subheading */}
          <p className="mt-8 max-w-[54ch] text-[17.5px] leading-relaxed text-white/80 sm:text-[19px]">
            {t.heroSubhead}
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              href={`/${locale}/audit`}
              className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-[15.5px] font-bold text-[#1a1206] shadow-xl shadow-accent/20 transition-all hover:bg-accent-deep hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{t.heroCtaPrimary}</span>
              <span className={isAr ? "rotate-180" : ""}>→</span>
            </Link>
            <Link
              href={`/${locale}/process`}
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-white/90 underline decoration-white/30 decoration-2 underline-offset-8 transition-colors hover:text-white hover:decoration-accent"
            >
              {t.heroCtaSecondary}
            </Link>
          </div>

          {/* Proof Badges Bar */}
          <div className="mt-14 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8 text-[13px] text-white/70">
            <div className="flex items-center gap-2">
              <span className="font-display text-lg font-bold text-accent">12</span>
              <span>Agencies Benchmarked</span>
            </div>
            <span className="text-white/20">·</span>
            <div className="flex items-center gap-2">
              <span className="font-display text-lg font-bold text-accent">&lt;0.8s</span>
              <span>Core Web Vitals TTFB</span>
            </div>
            <span className="text-white/20">·</span>
            <div className="flex items-center gap-2">
              <span className="font-display text-lg font-bold text-accent">48h</span>
              <span>Guaranteed SLA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
