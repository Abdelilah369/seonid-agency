"use client";

import type { Locale } from "@/lib/i18n";

export default function ComparisonMatrix({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";

  const rows = isAr
    ? [
        {
          feature: "نموذج التنفيذ",
          traditional: "إسناد لمبتدئين ومديري حسابات وسطاء",
          seonid: "مباشر مع مهندس وخبير استراتيجي (CAIO)",
        },
        {
          feature: "سرعة وأداء البنية (CWV)",
          traditional: "قوالب WordPress بطيئة (3-7 ثوانٍ تحميل)",
          seonid: "بنية Next.js 15 مهندسة بسرعة <0.8s و 100/100",
        },
        {
          feature: "الاستراتيجية لمحركات الذكاء الاصطناعي (GEO)",
          traditional: "حشو كلمات مفتاحية تقليدية من 2018",
          seonid: "تحسين دلالي معقد للحصول على استشهاد ChatGPT & Perplexity",
        },
        {
          feature: "أتمتة العمليات والـ CRM",
          traditional: "إدخال بيانات يدوي وإهدار ساعات العمل",
          seonid: "وكلاء ذكاء اصطناعي ومسارات عمل n8n ذاتية التشغيل",
        },
        {
          feature: "الضمان والشفافية",
          traditional: "عقود سنوية مقيدة دون التزام بالأرقام",
          seonid: "تدقيق تشخيصي 48 ساعة وسبرنتات نمو قائمة على النتائج",
        },
      ]
    : [
        {
          feature: "Execution Model",
          traditional: "Outsourced to junior devs & account managers",
          seonid: "Direct senior execution with Fractional CAIO",
        },
        {
          feature: "Performance & Core Web Vitals",
          traditional: "Bloated WordPress themes (3.5s - 7s TTFB)",
          seonid: "Custom Next.js 15 Turbopack (<0.8s TTFB, 100/100)",
        },
        {
          feature: "AI Search Readiness (GEO)",
          traditional: "Outdated 2018 keyword stuffing",
          seonid: "Deep semantic graph for Perplexity & ChatGPT citations",
        },
        {
          feature: "Internal Automations & CRM",
          traditional: "Manual copy-pasting & spreadsheet chaos",
          seonid: "Autonomous n8n agents & multi-tool event triggers",
        },
        {
          feature: "Risk & Accountability",
          traditional: "6-12 month lock-in retainers with vanity metrics",
          seonid: "48h forensic audit & sprint-based engineering deliverables",
        },
      ];

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#d4973b]/30 bg-[#d4973b]/10 px-3.5 py-1 font-mono text-xs font-bold text-[#d4973b]">
          <span>BENCHMARK MATRIX</span>
        </div>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
          {isAr ? "لماذا لا تنجح الوكالات التقليدية في عصر الذكاء الاصطناعي؟" : "The Architectural Shift: Legacy Agencies vs. SEONID"}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
          {isAr
            ? "مقارنة واضحة تكشف الفارق بين شراء موقع سطحي وبين بناء محرك نمو مؤتمت بالكامل."
            : "Why standard digital agencies fail to deliver ROI in the age of LLMs, and how our engineering partner model changes the game."}
        </p>
      </div>

      <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-[#0c0f14] shadow-2xl backdrop-blur-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02]">
                <th className="py-5 px-6 font-mono text-xs uppercase tracking-wider text-slate-400">
                  {isAr ? "المعيار الهندسي" : "Engineering Dimension"}
                </th>
                <th className="py-5 px-6 font-mono text-xs uppercase tracking-wider text-slate-500 bg-black/20">
                  {isAr ? "الوكالات التقليدية" : "Legacy Web / SEO Agencies"}
                </th>
                <th className="py-5 px-6 font-mono text-xs uppercase tracking-wider text-[#d4973b] bg-[#d4973b]/10 border-l border-[#d4973b]/30">
                  {isAr ? "SEONID (شريك نمو وهندسة)" : "SEONID (Engineering Partner)"}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-body">
              {rows.map((r, i) => (
                <tr key={i} className="hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-6 font-medium text-white text-xs sm:text-sm">
                    {r.feature}
                  </td>
                  <td className="py-4 px-6 text-xs sm:text-sm text-slate-400 bg-black/10">
                    <span className="inline-flex items-center gap-1.5 text-slate-500 mr-1.5">✕</span>
                    {r.traditional}
                  </td>
                  <td className="py-4 px-6 text-xs sm:text-sm text-[#f5f3ec] font-medium bg-[#d4973b]/5 border-l border-[#d4973b]/20">
                    <span className="inline-flex items-center gap-1.5 text-[#d4973b] mr-1.5">✓</span>
                    {r.seonid}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
