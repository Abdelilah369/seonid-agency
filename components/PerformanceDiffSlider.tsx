"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

export default function PerformanceDiffSlider({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0a0d12] p-6 sm:p-10 shadow-2xl">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#d4973b]/30 bg-[#d4973b]/10 px-3.5 py-1 font-mono text-xs font-bold text-[#d4973b] mb-3">
          <span>FORENSIC ARCHITECTURE COMPARISON</span>
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
          {isAr ? "قارن بالأرقام: قوالب الوكالات مقابل هندسة SEONID" : "Interactive Architecture Teardown: Legacy vs. SEONID"}
        </h3>
        <p className="mt-2 text-sm text-slate-400">
          {isAr
            ? "اسحب شريط المقارنة أدناه لرؤية الفارق الحقيقي في زمن الاستجابة، وزن الصفحة، وجاهزية محركات الذكاء الاصطناعي."
            : "Drag the slider to inspect the exact engineering contrast between bloated legacy sites and our sub-second edge builds."}
        </p>
      </div>

      {/* Comparison Container */}
      <div className="relative rounded-2xl border border-white/10 bg-[#06080b] p-6 sm:p-8 overflow-hidden">
        {/* Slider Input */}
        <div className="mb-6 flex items-center justify-between font-mono text-xs text-slate-400">
          <span className="text-red-400/90 font-bold">◄ LEGACY WORDPRESS / CMS</span>
          <span className="text-[#d4973b] font-bold">SEONID EDGE NEXT.JS 15 ►</span>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-white/10 accent-[#d4973b]"
        />

        {/* Dynamic Metric Teardown Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1. TTFB */}
          <div className="rounded-2xl border border-white/5 bg-[#0e1218] p-5">
            <p className="font-mono text-xs text-slate-500 uppercase">Time to First Byte (TTFB)</p>
            <div className="mt-3 flex items-baseline justify-between">
              <div>
                <p className="font-mono text-xs text-red-400/80">Legacy: 3,400ms</p>
                <p className="font-display text-xl font-bold text-white mt-1">SEONID: &lt;80ms</p>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] font-bold text-emerald-400">
                42x Faster
              </span>
            </div>
          </div>

          {/* 2. Page Weight */}
          <div className="rounded-2xl border border-white/5 bg-[#0e1218] p-5">
            <p className="font-mono text-xs text-slate-500 uppercase">Total Payload Weight</p>
            <div className="mt-3 flex items-baseline justify-between">
              <div>
                <p className="font-mono text-xs text-red-400/80">Legacy: 4.8 MB</p>
                <p className="font-display text-xl font-bold text-white mt-1">SEONID: 210 KB</p>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] font-bold text-emerald-400">
                -95% Bloat
              </span>
            </div>
          </div>

          {/* 3. Lighthouse Score */}
          <div className="rounded-2xl border border-white/5 bg-[#0e1218] p-5">
            <p className="font-mono text-xs text-slate-500 uppercase">Core Web Vitals Pass Rate</p>
            <div className="mt-3 flex items-baseline justify-between">
              <div>
                <p className="font-mono text-xs text-red-400/80">Legacy: 38/100 (Fail)</p>
                <p className="font-display text-xl font-bold text-white mt-1">SEONID: 100/100</p>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] font-bold text-emerald-400">
                Guaranteed
              </span>
            </div>
          </div>

          {/* 4. GEO Indexation */}
          <div className="rounded-2xl border border-white/5 bg-[#0e1218] p-5">
            <p className="font-mono text-xs text-slate-500 uppercase">LLM Knowledge Citation</p>
            <div className="mt-3 flex items-baseline justify-between">
              <div>
                <p className="font-mono text-xs text-red-400/80">Legacy: 0% (Ignored)</p>
                <p className="font-display text-xl font-bold text-white mt-1">SEONID: 100% Valid</p>
              </div>
              <span className="rounded-full bg-[#d4973b]/20 px-2 py-0.5 font-mono text-[11px] font-bold text-[#d4973b]">
                Full Vector
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
