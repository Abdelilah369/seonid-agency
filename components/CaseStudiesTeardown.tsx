"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import Link from "next/link";

interface SystemBlueprint {
  id: string;
  tag: string;
  name: string;
  scope: string;
  headline: string;
  specs: { label: string; standard: string; impact: string }[];
  deliverables: string[];
  takeaway: string;
}

export default function CaseStudiesTeardown({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const [activeTab, setActiveTab] = useState<number>(0);

  const blueprints: SystemBlueprint[] = [
    {
      id: "web-speed",
      tag: isAr ? "نموذج هندسي 01 · بنية الويب" : "BLUEPRINT 01 · HIGH-CONVERTING WEB PLATFORM",
      name: isAr ? "منصة ويب فائقة السرعة للشركات" : "High-Performance B2B Web Platform",
      scope: isAr ? "بناء الواجهات وتجربة المستخدم" : "Web Design & Edge Architecture",
      headline: isAr
        ? "بنية رقمية حديثة على خوادم الحافة تحقق تحميلاً دون الثانية وتزيد من ثقة الزائر ومعدل التحويل."
        : "Edge-hosted web architecture designed for sub-second page loads, higher buyer trust, and friction-free lead capture.",
      specs: [
        { label: isAr ? "زمن الاستجابة (TTFB)" : "Server TTFB", standard: "< 80ms", impact: isAr ? "تحميل فوري عبر Edge" : "Instant global response" },
        { label: isAr ? "مؤشر السرعة (LCP)" : "LCP Speed Index", standard: "< 0.8s", impact: isAr ? "تجربة تصفح بدون انتظار" : "Zero visitor drop-off" },
        { label: isAr ? "مؤشر الاستقرار (CLS)" : "Layout Shift (CLS)", standard: "0.00", impact: isAr ? "استقرار بصري تام" : "Rock-solid visual stability" },
        { label: isAr ? "التوافق مع الشاشات" : "Mobile Viewport", standard: "100% Fluid", impact: isAr ? "تجاوب كامل على الهاتف" : "Flawless mobile UI" },
      ],
      deliverables: isAr ? [
        "بنية Next.js حديثة مستضافة على خوادم Vercel العالمية",
        "تصميم واجهات احترافية وواضحة تركز على بناء المصداقية وإبراز القيمة",
        "تكامل مباشر مع نماذج التقاط العملاء المؤهلين بدون تأخير",
      ] : [
        "Modern Next.js edge architecture with zero bloated CMS plugin overhead",
        "Clean, typography-driven UI designed specifically to build buyer credibility",
        "Direct integration with form handlers and instant lead routing webhooks",
      ],
      takeaway: isAr
        ? "موقعك ليس مجرد واجهة تعريفية؛ بل هو أول نقطة لبناء الثقة مع العملاء والشركاء."
        : "Your website is your primary credibility asset. A fast, well-structured platform directly separates serious businesses from digital brochures.",
    },
    {
      id: "geo-search",
      tag: isAr ? "نموذج هندسي 02 · محركات الذكاء الاصطناعي" : "BLUEPRINT 02 · AI SEARCH & GEO",
      name: isAr ? "هيكلة البيانات لمحركات الذكاء الاصطناعي" : "GEO & Search Entity Graph",
      scope: isAr ? "الظهور في Google و ChatGPT و Perplexity" : "Generative Engine Optimization (GEO)",
      headline: isAr
        ? "هيكلة متقدمة للبيانات الوصفية تتيح لمحركات البحث ونماذج الذكاء الاصطناعي فهم خدماتك والتوصية بنشاطك."
        : "Structured entity schemas that ensure AI search engines and traditional search crawlers accurately understand and recommend your brand.",
      specs: [
        { label: isAr ? "بيانات Schema.org" : "Schema Validation", standard: "100% Valid", impact: isAr ? "متوافقة مع معايير Google" : "Google Rich Result ready" },
        { label: isAr ? "قابلية الفهرسة بالذكاء الاصطناعي" : "AI Crawl Hygiene", standard: "Optimized", impact: isAr ? "جاهزية لـ ChatGPT و Perplexity" : "Parsed by LLM crawlers" },
        { label: isAr ? "وضوح الكيانات" : "Entity Disambiguation", standard: "Verified", impact: isAr ? "تعريف دقيق لنشاط الشركة" : "Clear organization context" },
        { label: isAr ? "دعم اللغات" : "Multilingual Tags", standard: "EN / FR / AR", impact: isAr ? "فهرسة صحيحة بكل لغة" : "Accurate hreflang mapping" },
      ],
      deliverables: isAr ? [
        "ترميزات Schema JSON-LD متقدمة لتعريف المؤسسة والخدمات والأسئلة الشائعة",
        "صياغة المحتوى وفق أسئلة وإجابات مباشرة تقتبسها نماذج الذكاء الاصطناعي",
        "تنسيق تقني يضمن سرعة أرشفة الصفحات الجديدة",
      ] : [
        "Advanced JSON-LD Organization, Service, and FAQ Schema graph markup",
        "Direct question-and-answer content formatting optimized for LLM citation retrieval",
        "Sitemap hygiene and clean URL taxonomy for rapid crawler discovery",
      ],
      takeaway: isAr
        ? "الظهور في محركات الذكاء الاصطناعي يبدأ ببيانات منظمة وواضحة يستطيع النموذج قراءتها وفهمها بدقة."
        : "AI search visibility is not magic—it is the direct result of clean structured data, accurate definitions, and clear factual answers.",
    },
    {
      id: "automation-workflow",
      tag: isAr ? "نموذج هندسي 03 · أتمتة العمليات" : "BLUEPRINT 03 · WORKFLOW AUTOMATION",
      name: isAr ? "نظام أتمتة استقبال ومعالجة طلبات العملاء" : "Autonomous Inbound Operations System",
      scope: isAr ? "أتمتة العمليات عبر n8n" : "n8n Pipelines & CRM Integration",
      headline: isAr
        ? "ربط موقعك بأنظمتك الداخلية لمعالجة طلبات العملاء وإرسال التنبيهات الفورية دون أي تدخل يدوي."
        : "Autonomous workflows connecting web inquiries to CRMs, team alerts, and document generation, eliminating hours of repetitive admin work.",
      specs: [
        { label: isAr ? "سرعة الاستجابة للطلب" : "Lead Triage Speed", standard: "< 60s", impact: isAr ? "تنبيه فوري للفريق" : "Instant team notification" },
        { label: isAr ? "دقة نقل البيانات" : "Data Accuracy", standard: "100%", impact: isAr ? "تزامن تلقائي مع CRM" : "Zero manual entry errors" },
        { label: isAr ? "توليد الوثائق" : "Doc Automation", standard: "Instant", impact: isAr ? "إنشاء عروض الأسعار آلياً" : "Automated quote delivery" },
        { label: isAr ? "معالجة الأخطاء" : "Error Fallback", standard: "Active", impact: isAr ? "إشعار عند حدوث أي خلل" : "Human-in-the-loop alerts" },
      ],
      deliverables: isAr ? [
        "مسارات عمل n8n مخصصة تربط الموقع بالبريد و CRM وتطبيقات المراسلة",
        "تنبيهات فورية عند وصول عميل مهتم مع تفاصيل الطلب كاملة",
        "إنشاء العقود وعروض الأسعار تلقائيًا بمجرد إرسال النموذج",
      ] : [
        "Self-hosted or cloud n8n workflows linking forms to CRM, email, and messaging",
        "Instant prioritized deal notifications dispatched to email or team channels",
        "Automated document and estimate generation triggered on validated form submissions",
      ],
      takeaway: isAr
        ? "الأتمتة توفر ساعات عمل أسبوعية وتضمن عدم ضياع أي طلب عميل محتمل."
        : "Replacing manual busywork with dependable digital workflows gives founders valuable hours back every week while accelerating lead response times.",
    },
  ];

  const current = blueprints[activeTab];

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0a0d12] p-6 sm:p-10 shadow-2xl">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4973b]/30 bg-[#d4973b]/10 px-3.5 py-1 font-mono text-xs font-bold text-[#d4973b]">
            <span>SYSTEM ARCHITECTURES</span>
          </div>
          <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-white">
            {isAr ? "أنظمة وحلول هندسية ملموسة" : "Engineered Solutions & System Blueprints"}
          </h3>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            {isAr
              ? "المعايير والحلول التقنية التي نطبقها في كل مشروع لضمان أداء فائق ونتائج مستقرة."
              : "The exact architectural standards and automation pipelines we build into every client system."}
          </p>
        </div>

        {/* Blueprint Switcher Tabs */}
        <div className="flex flex-wrap gap-2">
          {blueprints.map((b, i) => (
            <button
              key={b.id}
              onClick={() => setActiveTab(i)}
              className={`rounded-full px-4 py-2 font-mono text-xs font-semibold transition-all ${
                activeTab === i
                  ? "bg-[#d4973b] text-[#080a0d] shadow-md shadow-[#d4973b]/20 font-bold"
                  : "border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
              }`}
            >
              0{i + 1} · {b.id.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Active Blueprint Details */}
      <div className="mt-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="font-mono text-xs font-bold text-[#d4973b]">{current.tag}</span>
          <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 font-mono text-[11px] text-slate-400">
            {current.scope}
          </span>
        </div>

        <h4 className="mt-4 font-display text-xl sm:text-2xl font-bold text-white leading-snug">
          {current.headline}
        </h4>

        {/* Specs Grid */}
        <div className="mt-8 grid gap-4 grid-cols-2 lg:grid-cols-4">
          {current.specs.map((s, idx) => (
            <div key={idx} className="rounded-2xl border border-white/5 bg-[#0e1218] p-4 sm:p-5">
              <p className="font-mono text-[11px] text-slate-400 uppercase">{s.label}</p>
              <div className="mt-3">
                <p className="font-display text-lg sm:text-xl font-bold text-[#d4973b]">{s.standard}</p>
                <p className="font-mono text-[11px] text-emerald-400 mt-1">{s.impact}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Deliverables & Key Principle */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/5 bg-black/40 p-6">
            <p className="font-mono text-xs font-bold text-[#d4973b] uppercase mb-3">
              // Included Deliverables
            </p>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {current.deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-[#d4973b] font-bold">✓</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-white/5 bg-gradient-to-br from-[#12161f] to-[#0a0d12] p-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-[#d4973b] font-bold">Core Engineering Takeaway</p>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">{current.takeaway}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-slate-400">{current.name}</span>
              <Link
                href={`/${locale}/audit`}
                className="font-mono text-xs font-bold text-[#d4973b] hover:underline"
              >
                {isAr ? "ابدأ مشروعك بهذا النظام ←" : "Deploy this architecture →"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
