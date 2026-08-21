"use client";

import { useState } from "react";
import Link from "next/link";
import WovenDivider from "./WovenDivider";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function HeroFilm({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [videoOpen, setVideoOpen] = useState(false);
  const t = dict.home;
  const isAr = locale === "ar";

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0d1814] via-[#111e19] to-bg py-16 sm:py-24 lg:py-28 text-white">
      {/* Background Subtle Ambient Glow */}
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

            {/* Action CTAs & Watch Video Button */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href={`/${locale}/audit`}
                className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-3.5 text-[15px] font-bold text-[#1a1206] shadow-xl shadow-accent/20 transition-all hover:bg-accent-deep hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{t.heroCtaPrimary}</span>
                <span className={isAr ? "rotate-180" : ""}>→</span>
              </Link>

              {/* Watch Video Modal Trigger */}
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-card/60 px-6 py-3.5 text-[14.5px] font-bold text-accent transition-all hover:bg-accent/15 hover:border-accent hover:scale-[1.02] active:scale-[0.98] backdrop-blur-md"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-accent text-[#1a1206] text-xs">
                  ▶
                </span>
                <span>{isAr ? "شاهد الفيديو التعريفي (35ث)" : "Watch Agency Film (35s)"}</span>
              </button>
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
            <div
              onClick={() => setVideoOpen(true)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-accent/40 bg-gradient-to-br from-card via-[#12231c] to-[#0d1814] p-3 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-accent hover:shadow-accent/20"
            >
              {/* Studio Visual Preview */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="/images/hero-cinematic.jpg"
                  alt="SEONID Agency Moroccan Architectural Studio"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1814] via-transparent to-transparent opacity-80" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 grid place-items-center">
                  <div className="grid h-14 w-14 place-items-center rounded-full border border-white/30 bg-black/60 text-accent shadow-2xl backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-[#1a1206]">
                    <span className="text-lg">▶</span>
                  </div>
                </div>

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

      {/* Interactive Cinematic Video Modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-accent/40 bg-[#0d1814] p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/70 text-white transition-colors hover:bg-accent hover:text-[#1a1206]"
              aria-label="Close Video"
            >
              ✕
            </button>

            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
              <video
                autoPlay
                controls
                playsInline
                className="h-full w-full object-contain"
                poster="/images/hero-cinematic.jpg"
              >
                <source src="/promo/seonid_promo_cinematic.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="flex items-center justify-between p-4 text-xs text-white/80">
              <span className="font-mono font-bold text-accent">SEONID Agency · Commercial Film (1080p 60fps)</span>
              <Link
                href={`/${locale}/audit`}
                onClick={() => setVideoOpen(false)}
                className="rounded-lg bg-accent px-4 py-2 font-bold text-[#1a1206] transition hover:bg-accent-deep"
              >
                {dict.nav.freeAudit} →
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
