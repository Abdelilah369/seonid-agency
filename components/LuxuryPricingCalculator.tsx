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
    <div className="rounded-3xl border border-border bg-surface-2/40 p-8 sm:p-12 shadow-2xl">
      <div className="mx-auto max-w-2xl text-center mb-10">
        <h2 className="font-display text-[28px] font-bold text-ink sm:text-[32px]">
          {isAr ? "احسب استثمارك" : isFr ? "Estimez votre investissement" : "Calculate Your Investment"}
        </h2>
        <p className="mt-3 text-[15px] text-ink-muted">
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
            <label className="text-[13px] font-bold uppercase tracking-wider text-ink-faint">
              {isAr ? "مجال عملك" : isFr ? "Votre secteur" : "Your Industry"}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(["local", "ecommerce", "enterprise"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setIndustry(type)}
                  className={`rounded-xl border p-4 text-left transition-all ${
                    industry === type
                      ? "border-accent bg-accent/5 shadow-[0_0_15px_rgba(var(--accent-rgb),0.15)]"
                      : "border-border/60 bg-bg hover:border-accent/40"
                  }`}
                >
                  <div className="text-[14px] font-semibold text-ink capitalize">{type}</div>
                  <div className="mt-1 text-[11px] text-ink-muted">
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
              <label className="text-[13px] font-bold uppercase tracking-wider text-ink-faint">
                {isAr ? "الزيارات الشهرية الحالية" : isFr ? "Trafic mensuel actuel" : "Current Monthly Traffic"}
              </label>
              <span className="font-mono text-[14px] font-semibold text-accent-deep">
                {traffic.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="500000"
              step="1000"
              value={traffic}
              onChange={(e) => setTraffic(Number(e.target.value))}
              className="w-full accent-accent h-1.5 bg-border rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Timeline */}
          <div className="space-y-4">
            <label className="text-[13px] font-bold uppercase tracking-wider text-ink-faint">
              {isAr ? "سرعة التنفيذ" : isFr ? "Vitesse d'exécution" : "Execution Velocity"}
            </label>
            <div className="flex rounded-xl border border-border/60 bg-bg p-1">
              <button
                onClick={() => setTimeline("standard")}
                className={`flex-1 rounded-lg py-2.5 text-[13px] font-semibold transition-colors ${
                  timeline === "standard" ? "bg-surface shadow text-ink" : "text-ink-muted hover:text-ink"
                }`}
              >
                {isAr ? "قياسي (6 أشهر)" : isFr ? "Standard (6 mois)" : "Standard (6 Months)"}
              </button>
              <button
                onClick={() => setTimeline("accelerated")}
                className={`flex-1 rounded-lg py-2.5 text-[13px] font-semibold transition-colors ${
                  timeline === "accelerated" ? "bg-accent text-bg shadow-lg" : "text-ink-muted hover:text-ink"
                }`}
              >
                {isAr ? "مكثف (3 أشهر)" : isFr ? "Accéléré (3 mois)" : "Accelerated (3 Months)"}
              </button>
            </div>
          </div>
        </div>

        {/* Price Display Board */}
        <div className="rounded-2xl border border-border/80 bg-bg p-8 shadow-inner text-center sticky top-24">
          <p className="text-[12px] font-bold uppercase tracking-wider text-ink-faint mb-2">
            {isAr ? "التقدير الشهري" : isFr ? "Estimation mensuelle" : "Monthly Estimate"}
          </p>
          <div className="font-display text-[48px] font-black tracking-tight text-ink">
            ${estimatedRetainer.toLocaleString()}
          </div>
          <p className="mt-1 text-[13px] text-ink-muted mb-8">
            {isAr ? "بدون رسوم خفية." : isFr ? "Aucun frais caché." : "No hidden fees. Full transparency."}
          </p>

          <Link
            href={`/${locale}/audit`}
            className="block w-full rounded-xl bg-ink py-4 text-center text-[14.5px] font-bold text-bg transition-transform hover:scale-[1.02] active:scale-95 shadow-xl"
          >
            {isAr ? "حجز استشارة الاستراتيجية" : isFr ? "Réserver une consultation" : "Book Strategy Call"}
          </Link>
          <p className="mt-4 text-[11px] text-ink-faint leading-relaxed">
            {isAr
              ? "هذا مجرد تقدير مبدئي. السعر النهائي يعتمد على التدقيق التقني."
              : isFr
              ? "Ceci est une estimation. Le prix final dépend de l'audit technique."
              : "This is a preliminary estimate. Final pricing depends on the technical audit."}
          </p>
        </div>
      </div>
    </div>
  );
}
