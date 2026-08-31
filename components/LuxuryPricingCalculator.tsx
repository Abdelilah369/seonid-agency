"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export default function LuxuryPricingCalculator({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const isFr = locale === "fr";

  const [traffic, setTraffic] = useState(10000);
  const [industry, setIndustry] = useState<"local" | "ecommerce" | "enterprise">("local");
  const [timeline, setTimeline] = useState<"standard" | "accelerated">("standard");

  const basePrice = industry === "local" ? 1500 : industry === "ecommerce" ? 3500 : 5000;
  const trafficMultiplier = Math.max(1, traffic / 50000);
  const timelineMultiplier = timeline === "accelerated" ? 1.5 : 1;
  
  const estimatedRetainer = Math.round(basePrice * trafficMultiplier * timelineMultiplier);

  return (
    <div className="rounded-3xl border border-white/10 bg-[#0c0f14] p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
      <div className="mx-auto max-w-2xl text-center mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#d4973b]/30 bg-[#d4973b]/10 px-3.5 py-1 text-xs font-mono font-bold text-[#d4973b] mb-3">
          <span>DYNAMIC RETAINER ESTIMATOR</span>
        </div>
        <h2 className="font-display text-[28px] font-bold text-white sm:text-[32px]">
          {isAr ? "احسب استثمارك" : isFr ? "Estimez votre investissement" : "Calculate Your Investment"}
        </h2>
        <p className="mt-3 text-[15px] text-slate-400">
          {isAr
            ? "نحن لا نبيع باقات جاهزة. استخدم هذه الأداة لتقدير ميزانية شراكة النمو الخاصة بك."
            : isFr
            ? "Nous ne vendons pas de forfaits génériques. Utilisez cet outil pour estimer le budget de votre partenariat de croissance."
            : "We don't sell off-the-shelf packages. Use this tool to estimate your growth partnership retainer."}
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1fr_320px] items-start">
        <div className="space-y-8">
          {/* Industry Selection */}
          <div className="space-y-4">
            <label className="text-[12px] font-mono font-bold uppercase tracking-wider text-slate-400">
              {isAr ? "مجال عملك" : isFr ? "Votre secteur" : "Your Industry"}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(["local", "ecommerce", "enterprise"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setIndustry(type)}
                  className={`rounded-2xl border p-4 text-left transition-all ${
                    industry === type
                      ? "border-[#d4973b] bg-[#d4973b]/10 shadow-lg shadow-[#d4973b]/10 ring-1 ring-[#d4973b]/40"
                      : "border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="text-[14px] font-semibold text-white capitalize">{type}</div>
                  <div className="mt-1 text-[11px] text-slate-400">
                    {type === "local" && (isAr ? "خدمات محلية / عيادات" : isFr ? "Services locaux / Cliniques" : "Local Services / Clinics")}
                    {type === "ecommerce" && (isAr ? "متاجر إلكترونية" : isFr ? "E-commerce" : "E-commerce Stores")}
                    {type === "enterprise" && (isAr ? "شركات B2B / مؤسسات" : isFr ? "B2B / Entreprises" : "B2B / Enterprise")}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Traffic Slider */}
          <div className="space-y-4">
            <div className="flex justify-between">
              <label className="text-[12px] font-mono font-bold uppercase tracking-wider text-slate-400">
                {isAr ? "الزيارات الشهرية الحالية" : isFr ? "Trafic mensuel actuel" : "Current Monthly Traffic"}
              </label>
              <span className="font-mono text-[14px] font-semibold text-[#d4973b]">
                {traffic.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="200000"
              step="5000"
              value={traffic}
              onChange={(e) => setTraffic(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/10 accent-[#d4973b]"
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-500">
              <span>1k</span>
              <span>50k</span>
              <span>100k</span>
              <span>200k+</span>
            </div>
          </div>

          {/* Timeline Speed */}
          <div className="space-y-4">
            <label className="text-[12px] font-mono font-bold uppercase tracking-wider text-slate-400">
              {isAr ? "سرعة التنفيذ" : isFr ? "Vitesse de déploiement" : "Execution Speed"}
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setTimeline("standard")}
                className={`rounded-2xl border p-4 text-left transition-all ${
                  timeline === "standard"
                    ? "border-[#d4973b] bg-[#d4973b]/10 text-white"
                    : "border-white/5 bg-white/[0.02] text-slate-400"
                }`}
              >
                <div className="text-[13px] font-semibold">Standard Sprint</div>
                <div className="text-[11px] opacity-70">4 Weeks Duration</div>
              </button>
              <button
                onClick={() => setTimeline("accelerated")}
                className={`rounded-2xl border p-4 text-left transition-all ${
                  timeline === "accelerated"
                    ? "border-[#d4973b] bg-[#d4973b]/10 text-white"
                    : "border-white/5 bg-white/[0.02] text-slate-400"
                }`}
              >
                <div className="text-[13px] font-semibold">Accelerated Sprint</div>
                <div className="text-[11px] opacity-70">2 Weeks Priority Execution</div>
              </button>
            </div>
          </div>
        </div>

        {/* Estimated Price Card */}
        <div className="rounded-2xl border border-[#d4973b]/30 bg-[#12161f] p-6 text-center shadow-xl">
          <p className="text-[11px] font-mono uppercase tracking-widest text-[#d4973b]">
            Estimated Monthly Retainer
          </p>
          <div className="mt-4 flex items-baseline justify-center gap-1">
            <span className="text-[20px] font-bold text-slate-400">$</span>
            <span className="font-display text-[44px] font-extrabold text-white">
              {estimatedRetainer.toLocaleString()}
            </span>
            <span className="text-[13px] font-mono text-slate-400">/mo</span>
          </div>

          <div className="mt-6 space-y-2 border-t border-white/10 pt-4 text-left text-xs text-slate-300">
            <p className="flex items-center gap-2">
              <span className="text-[#d4973b]">✓</span> Core Web Vitals SLA (Sub-800ms)
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#d4973b]">✓</span> Full GEO Knowledge Graph
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#d4973b]">✓</span> Direct Founder Engineering Channel
            </p>
          </div>

          <Link
            href={`/${locale}/audit`}
            className="mt-6 block w-full rounded-full bg-[#d4973b] py-3 text-center text-[13px] font-bold text-[#080a0d] shadow-lg shadow-[#d4973b]/20 transition hover:bg-[#e5ad58]"
          >
            {isAr ? "ابدأ مشروعك الآن" : isFr ? "Démarrer un projet" : "Start a project"} →
          </Link>
          <p className="mt-4 text-[11px] text-slate-500 leading-relaxed">
            {isAr
              ? "هذا مجرد تقدير مبدئي. السعر النهائي يعتمد على نطاق العمل المحدد."
              : isFr
              ? "Ceci est une estimation. Le devis final dépend du périmètre technique validé."
              : "Preliminary estimate. Final scope and milestones are confirmed during project intake."}
          </p>
        </div>
      </div>
    </div>
  );
}
