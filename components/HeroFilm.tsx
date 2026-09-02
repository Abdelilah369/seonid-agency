"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import WovenDivider from "./WovenDivider";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function HeroFilm({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [videoOpen, setVideoOpen] = useState(false);
  const [timeStr, setTimeStr] = useState("12:00 GMT+1");
  const t = dict.home;
  const isAr = locale === "ar";

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Casablanca",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      setTimeStr(`${d.toLocaleTimeString("en-GB", options)} GMT+1`);
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#080a0d] via-[#0c0f14] to-[#080a0d] py-16 sm:py-24 lg:py-28 text-white">
      <style>{`
        @keyframes floating-card {
          0% { transform: translateY(0px); box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5); }
          50% { transform: translateY(-6px); box-shadow: 0 30px 50px -12px rgba(212, 151, 59, 0.2); }
          100% { transform: translateY(0px); box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5); }
        }
      `}</style>

      {/* Luxury Ambient Mesh Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-blueprint-grid opacity-20" />
        <div className="absolute -top-32 -left-32 h-[550px] w-[550px] rounded-full bg-[#d4973b]/10 blur-[150px]" />
        <div className="absolute top-1/2 -right-32 h-[600px] w-[600px] rounded-full bg-[#d4973b]/5 blur-[180px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Honest Status Strip — no fake scarcity, verifiable claims only */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4 font-mono text-[11.5px] text-ink-faint">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-ink font-semibold">CASABLANCA · WORKING WORLDWIDE</span>
            <span className="text-ink-faint/40">|</span>
            <span>LOCAL: {timeStr}</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-accent font-bold">3 LANGUAGES · EN / FR / AR</span>
            <span className="text-ink-faint/40">|</span>
            <span className="rounded-full bg-surface-hover border border-border px-2.5 py-0.5 text-ink-muted">
              1 ENGINEER · 0 HAND-OFFS
            </span>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          {/* Left: Master Headline & Action */}
          <div>
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4973b]/30 bg-[#d4973b]/10 px-4 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#d4973b]" />
              <p className="text-[12px] font-mono font-bold uppercase tracking-[0.14em] text-[#d4973b]">
                {t.heroEyebrow}
              </p>
            </div>

            {/* Master Headline */}
            <h1 className="mt-6 text-balance font-display text-[32px] sm:text-[46px] lg:text-[54px] font-bold leading-[1.12] tracking-tight text-[#f5f3ec]">
              {t.heroHeadline}
            </h1>

            <WovenDivider className="mt-6 max-w-[160px]" />

            {/* Subheading */}
            <p className="mt-6 max-w-[48ch] text-[16px] leading-relaxed text-slate-300 sm:text-[17.5px]">
              {t.heroSubhead}
            </p>

            {/* Action CTAs: Clean Luxury, No Arrows/Flashes */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href={`/${locale}/audit`}
                className="group relative inline-flex items-center justify-center rounded-full bg-[#d4973b] px-8 py-3.5 text-[14.5px] font-bold text-[#080a0d] shadow-xl shadow-[#d4973b]/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[#e5ad58] active:scale-95"
              >
                {t.heroCtaPrimary}
              </Link>
              <Link
                href={`/${locale}/services`}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-[14.5px] font-semibold text-white backdrop-blur-md transition hover:bg-white/10 hover:border-white/40"
              >
                {t.heroCtaSecondary}
              </Link>
            </div>

            {/* Honest Proof Strip — process/method numbers only, no fabricated client metrics */}
            <div className="mt-12 flex flex-wrap items-center gap-5 border-t border-border pt-6 text-[12.5px] text-ink-muted">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-bold text-accent">3</span>
                <span>Languages · EN/FR/AR</span>
              </div>
              <span className="text-ink-faint/40">·</span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-bold text-accent">14-pt</span>
                <span>Technical audit</span>
              </div>
              <span className="text-ink-faint/40">·</span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-bold text-accent">48h</span>
                <span>Turnaround</span>
              </div>
            </div>
          </div>

          {/* Right: Prominent High-Resolution Studio & Benchmark Card */}
          <div className="relative" style={{ perspective: "1000px" }}>
            <div
              onClick={() => setVideoOpen(true)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#121720] via-[#0d1015] to-[#080a0d] p-3 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-[#d4973b]/60 hover:shadow-[#d4973b]/15"
              style={{ animation: "floating-card 8s ease-in-out infinite" }}
            >
              {/* Studio Visual Preview with Ambient Autoplay Video Loop */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
                {/* Poster as the LCP <img> — high priority, tiny, so LCP is fast */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero-luxury_web.jpg"
                  alt=""
                  aria-hidden="true"
                  fetchPriority="high"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="/images/hero-luxury_web.jpg"
                  className="relative h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
                  <source src="/videos/hero_architectural_loop_web.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-[#080a0d] via-transparent to-[#080a0d]/30 opacity-60" />

                {/* Method Label Pill — verifiable, not a fabricated score */}
                <div className="absolute top-3 right-3 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-black/85 px-3 py-1 font-mono text-xs font-bold text-accent backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  <span>INDEX-METHOD</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-ink">
                  <span className="font-mono font-bold text-accent">SEONID Architecture</span>
                  <span className="font-mono text-[11px] text-ink-muted bg-black/60 px-2 py-0.5 rounded-full border border-border">
                    Performance Budget
                  </span>
                </div>
              </div>

              {/* Technical Method Breakdown — process facts, not fabricated CWV scores */}
              <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="rounded-xl bg-surface-hover p-2.5 border border-border">
                  <p className="font-mono font-bold text-accent text-sm">&lt; 2s</p>
                  <p className="text-[10px] text-ink-muted uppercase tracking-wider mt-0.5">Load budget</p>
                </div>
                <div className="rounded-xl bg-surface-hover p-2.5 border border-border">
                  <p className="font-mono font-bold text-emerald-400 text-sm">3</p>
                  <p className="text-[10px] text-ink-muted uppercase tracking-wider mt-0.5">Languages</p>
                </div>
                <div className="rounded-xl bg-surface-hover p-2.5 border border-border">
                  <p className="font-mono font-bold text-ink text-sm">14-pt</p>
                  <p className="text-[10px] text-ink-muted uppercase tracking-wider mt-0.5">Audit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Cinematic Video Modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 backdrop-blur-2xl animate-in fade-in duration-300"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-[#d4973b]/40 bg-[#0a0d12] p-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/80 text-white transition-colors hover:bg-[#d4973b] hover:text-[#080a0d]"
              aria-label="Close Video"
            >
              ✕
            </button>

            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
              <video
                autoPlay
                controls
                playsInline
                preload="none"
                className="h-full w-full object-contain"
                poster="/images/hero-luxury_web.jpg"
              >
                <source src="/videos/hero_architectural_loop_web.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="flex items-center justify-between p-4 text-xs text-ink-muted">
              <span className="font-mono font-bold text-accent">SEONID Architecture Film · 720p · 10s loop</span>
              <Link
                href={`/${locale}/audit`}
                onClick={() => setVideoOpen(false)}
                className="rounded-full bg-accent px-5 py-2 font-bold text-bg transition hover:bg-brass"
              >
                {dict.nav.freeAudit}
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
