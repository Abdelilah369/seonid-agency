import React from "react";
import type { Locale } from "@/lib/i18n";

export default function AuditDeliverableMockup({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const isFr = locale === "fr";

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-2/60 p-1 shadow-2xl backdrop-blur-xl">
      {/* Window Titlebar */}
      <div className="flex items-center justify-between border-b border-border/80 bg-surface px-5 py-3.5">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="rounded-full bg-bg px-4 py-1 text-[11.5px] font-mono text-ink-muted">
          seonid-audit_sample_48h.pdf
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          {isAr ? "تقرير تفصيلي 48 س" : isFr ? "Livrable 48h" : "48h Deliverable"}
        </div>
      </div>

      {/* Main Body */}
      <div className="bg-surface p-6 sm:p-7">
        {/* Scorecard Hero Banner */}
        <div className="grid gap-4 rounded-2xl border border-border/90 bg-bg p-5 sm:grid-cols-3 sm:items-center">
          <div className="flex items-center gap-3.5">
            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
              <span className="font-display text-2xl font-black text-emerald-600 dark:text-emerald-400">98</span>
              <span className="text-[10px] text-emerald-600/70 dark:text-emerald-400/70 absolute bottom-1 right-2">%</span>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-ink-faint">
                {isAr ? "مؤشر الصحة التقنية" : isFr ? "Santé Technique" : "Technical Health"}
              </p>
              <p className="text-[14px] font-bold text-ink">
                {isAr ? "أداء ممتاز" : isFr ? "Performance Élite" : "Elite Benchmark"}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-1 border-t sm:border-t-0 sm:border-l border-border pt-3 sm:pt-0 sm:pl-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-ink-faint">
              Core Web Vitals
            </span>
            <div className="flex items-center gap-2 font-mono text-[12px] font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="rounded bg-emerald-500/10 px-1.5 py-0.5">LCP 0.8s</span>
              <span className="rounded bg-emerald-500/10 px-1.5 py-0.5">CLS 0.00</span>
            </div>
          </div>

          <div className="flex flex-col gap-1 border-t sm:border-t-0 sm:border-l border-border pt-3 sm:pt-0 sm:pl-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-ink-faint">
              {isAr ? "فجوة الكلمات المفتاحية" : isFr ? "Mots-clés cibles" : "Search Intent Gap"}
            </span>
            <span className="text-[12px] font-semibold text-accent-deep">
              {isAr ? "5 فرص نمو ذات عائد مرتفع" : isFr ? "5 opportunités B2B" : "5 High-Intent Opportunities"}
            </span>
          </div>
        </div>

        {/* 3 Deliverable Pillars */}
        <div className="mt-5 grid gap-3 text-start">
          <div className="flex items-start gap-3 rounded-xl border border-border/60 bg-surface-2/40 p-3.5 transition-colors hover:border-accent/40">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-[12px] font-bold text-accent-deep">
              01
            </span>
            <div>
              <p className="text-[13.5px] font-semibold text-ink">
                {isAr ? "فحص البنية التقنية ومخططات Schema" : isFr ? "Audit d'Architecture & Balisage Schema" : "Technical Architecture & JSON-LD Schema"}
              </p>
              <p className="mt-0.5 text-[12.5px] leading-relaxed text-ink-muted">
                {isAr
                  ? "تحديد مشاكل سرعة الاستجابة، الفهرسة، وهيكلة الروابط الداخلية المفقودة."
                  : isFr
                    ? "Détection des fuites d'indexation, latence TTFB et micro-données pour Google."
                    : "Detection of crawling leaks, TTFB latency, and rich snippet schemas."}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-border/60 bg-surface-2/40 p-3.5 transition-colors hover:border-accent/40">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-[12px] font-bold text-accent-deep">
              02
            </span>
            <div>
              <p className="text-[13.5px] font-semibold text-ink">
                {isAr ? "تحليل نية البحث والمنافسة الإقليمية" : isFr ? "Analyse d'Intention & Benchmark Concurrents" : "Search Intent & Regional Competitor Gap"}
              </p>
              <p className="mt-0.5 text-[12.5px] leading-relaxed text-ink-muted">
                {isAr
                  ? "مقارنة مباشرة مع أفضل 3 مواقع في مجالك بالمغرب والمنطقة."
                  : isFr
                    ? "Comparatif direct face aux 3 meilleurs acteurs de votre secteur."
                    : "Direct head-to-head analysis against the top 3 players in your niche."}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-border/60 bg-surface-2/40 p-3.5 transition-colors hover:border-accent/40">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-[12px] font-bold text-accent-deep">
              03
            </span>
            <div>
              <p className="text-[13.5px] font-semibold text-ink">
                {isAr ? "خطة العمل: 3 أولويات فورية ذات عائد سريع" : isFr ? "Plan d'Action : 3 Victoires Rapides" : "Action Plan: 3 Prioritized Quick Wins"}
              </p>
              <p className="mt-0.5 text-[12.5px] leading-relaxed text-ink-muted">
                {isAr
                  ? "تعديلات برمجية وتسويقية ملموسة يمكنك تطبيقها خلال هذا الأسبوع."
                  : isFr
                    ? "Modifications précises et chiffrées à déployer dès cette semaine."
                    : "Concrete engineering and copy adjustments you can deploy this week."}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Guarantee */}
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-[12px] text-ink-faint">
          <span>{isAr ? "تقرير مكتوب مخصص بدون قوالب جاهزة" : isFr ? "Rapport sur-mesure sans modèle automatisé" : "Custom written deliverable · No generic templates"}</span>
          <span className="font-semibold text-accent-deep">{isAr ? "مجاني 100%" : isFr ? "100% Gratuit" : "100% Free"}</span>
        </div>
      </div>
    </div>
  );
}
