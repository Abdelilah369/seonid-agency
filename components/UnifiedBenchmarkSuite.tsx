"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import Link from "next/link";

export default function UnifiedBenchmarkSuite({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const [sliderPos, setSliderPos] = useState(50);
  const [viewMode, setViewMode] = useState<"slider" | "table">("slider");

  const rows = [
    {
      feature: isAr ? "بنية الكود والأداء" : "Codebase & Architecture",
      legacy: isAr ? "قوالب WordPress/Shopify ثقيلة مع عشرات الإضافات" : "Heavy CMS templates, 30+ plugins, bloated DOM",
      seonid: isAr ? "Next.js 15 App Router مخصص + خوادم الحافة (Edge)" : "Bespoke Next.js 15 Turbopack + Global Edge SSR",
    },
    {
      feature: isAr ? "سرعة الاستجابة (TTFB)" : "Server Response (TTFB)",
      legacy: "1,500ms – 4,800ms (Fail)",
      seonid: "<75ms Global Edge",
    },
    {
      feature: isAr ? "مؤشرات الويب الأساسية (CWV)" : "Core Web Vitals Pass",
      legacy: isAr ? "35 - 60 / 100 (أحمر)" : "35 - 60 / 100 (Failed)",
      seonid: "100 / 100 (Guaranteed)",
    },
    {
      feature: isAr ? "الظهور في محركات الذكاء الاصطناعي (GEO)" : "AI Search Citations (GEO)",
      legacy: isAr ? "غير معرّف (0% استشهاد)" : "Ignored by LLMs (0% Citation Rate)",
      seonid: isAr ? "بيانات JSON-LD متداخلة موثقة" : "Full Nested JSON-LD Entity Graph",
    },
    {
      feature: isAr ? "نموذج التواصل والمسؤولية" : "Accountability Model",
      legacy: isAr ? "مدير حسابات مبتدئ وقوائم بريد بطيئة" : "Junior account manager proxy & outsourced dev",
      seonid: isAr ? "شريك هندسي رئيسي مباشر (Abdelilah Karroumi)" : "Direct Principal Solutions Architect (Abdelilah)",
    },
    {
      feature: isAr ? "أتمتة العمليات (Automation)" : "Workflow Automations",
      legacy: isAr ? "إدخال بيانات يدوي وإهدار ساعات أسبوعياً" : "Manual copy-pasting across spreadsheets & CRM",
      seonid: isAr ? "مسارات n8n مؤتمتة تعمل على مدار الساعة" : "Self-hosted n8n multi-agent pipelines (24/7)",
    },
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0a0d12] p-6 sm:p-10 shadow-2xl">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4973b]/30 bg-[#d4973b]/10 px-3.5 py-1 font-mono text-xs font-bold text-[#d4973b]">
            <span>FORENSIC BENCHMARK SUITE</span>
          </div>
          <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-white">
            {isAr ? "المقارنة الهندسية الشاملة: النموذج التقليدي مقابل SEONID" : "The Unified Performance Benchmark"}
          </h3>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            {isAr
              ? "تحليل دقيق بالأرقام والمعايير يوضح الفارق بين تكاليف الوكالات التقليدية وهندسة SEONID."
              : "Compare telemetry metrics and delivery accountability between legacy agency retainers and SEONID."}
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 p-1 font-mono text-xs">
          <button
            onClick={() => setViewMode("slider")}
            className={`rounded-full px-3.5 py-1.5 font-semibold transition ${
              viewMode === "slider" ? "bg-[#d4973b] text-[#080a0d]" : "text-slate-400 hover:text-white"
            }`}
          >
            {isAr ? "مقارنة تفاعلية" : "Interactive Teardown"}
          </button>
          <button
            onClick={() => setViewMode("table")}
            className={`rounded-full px-3.5 py-1.5 font-semibold transition ${
              viewMode === "table" ? "bg-[#d4973b] text-[#080a0d]" : "text-slate-400 hover:text-white"
            }`}
          >
            {isAr ? "جدول المعايير" : "Comparison Matrix"}
          </button>
        </div>
      </div>

      {viewMode === "slider" ? (
        /* Slider View */
        <div className="mt-8 space-y-6">
          <div className="flex items-center justify-between font-mono text-xs text-slate-400">
            <span className="font-bold text-red-400/90">◄ LEGACY CMS &amp; AGENCY BLOAT</span>
            <span className="font-bold text-[#d4973b]">SEONID HEADLESS EDGE ARCHITECTURE ►</span>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-white/10 accent-[#d4973b]"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/5 bg-[#0e1218] p-5">
              <p className="font-mono text-xs text-slate-500 uppercase">Response Latency (TTFB)</p>
              <div className="mt-3 flex items-baseline justify-between">
                <div>
                  <p className="font-mono text-xs text-red-400/80">Legacy: 3,400ms</p>
                  <p className="font-display text-xl font-bold text-white mt-1">SEONID: &lt;75ms</p>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] font-bold text-emerald-400">
                  45x Faster
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/5 bg-[#0e1218] p-5">
              <p className="font-mono text-xs text-slate-500 uppercase">Page Weight Payload</p>
              <div className="mt-3 flex items-baseline justify-between">
                <div>
                  <p className="font-mono text-xs text-red-400/80">Legacy: 4.8 MB</p>
                  <p className="font-display text-xl font-bold text-white mt-1">SEONID: 190 KB</p>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] font-bold text-emerald-400">
                  -96% Bloat
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/5 bg-[#0e1218] p-5">
              <p className="font-mono text-xs text-slate-500 uppercase">Core Web Vitals Score</p>
              <div className="mt-3 flex items-baseline justify-between">
                <div>
                  <p className="font-mono text-xs text-red-400/80">Legacy: 42/100 (Fail)</p>
                  <p className="font-display text-xl font-bold text-white mt-1">SEONID: 100/100</p>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] font-bold text-emerald-400">
                  100% Pass
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/5 bg-[#0e1218] p-5">
              <p className="font-mono text-xs text-slate-500 uppercase">LLM Citation Rate</p>
              <div className="mt-3 flex items-baseline justify-between">
                <div>
                  <p className="font-mono text-xs text-red-400/80">Legacy: 0% (Hidden)</p>
                  <p className="font-display text-xl font-bold text-white mt-1">SEONID: 100% Valid</p>
                </div>
                <span className="rounded-full bg-[#d4973b]/20 px-2 py-0.5 font-mono text-[11px] font-bold text-[#d4973b]">
                  Grounded
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Table View */
        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-start text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 font-mono text-[11px] uppercase text-slate-400">
                <th className="py-4 text-start font-bold text-white">Dimension</th>
                <th className="py-4 text-start font-bold text-red-400/90">Legacy Agency Model</th>
                <th className="py-4 text-start font-bold text-[#d4973b]">SEONID Architecture</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {rows.map((r, i) => (
                <tr key={i} className="hover:bg-white/[0.02]">
                  <td className="py-4 pe-4 font-semibold text-white">{r.feature}</td>
                  <td className="py-4 pe-4 text-slate-400">{r.legacy}</td>
                  <td className="py-4 font-medium text-emerald-400">{r.seonid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
        <span className="font-mono text-xs text-slate-500">
          Source: Real forensic audit data across 12 regional agency architectures.
        </span>
        <Link
          href={`/${locale}/audit`}
          className="font-mono text-xs font-bold text-[#d4973b] hover:underline"
        >
          {isAr ? "افحص أداء موقعك وابدأ مشروعك ←" : "Inspect your architecture & start a project →"}
        </Link>
      </div>
    </div>
  );
}
